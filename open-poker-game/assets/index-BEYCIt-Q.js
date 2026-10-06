(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ri(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Gh(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var vn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ls={duration:.5,overwrite:!1,delay:0},$l,Ut,ct,Pn=1e8,st=1/Pn,ol=Math.PI*2,lp=ol/4,cp=0,Hh=Math.sqrt,up=Math.cos,hp=Math.sin,kt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},hi=function(e){return typeof e=="number"},jl=function(e){return typeof e>"u"},Kn=function(e){return typeof e=="object"},Qt=function(e){return e!==!1},ql=function(){return typeof window<"u"},ea=function(e){return _t(e)||kt(e)},Wh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Wt=Array.isArray,dp=/random\([^)]+\)/g,fp=/,\s*/g,Oc=/(?:-?\.?\d|\.)+/gi,Xh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Nr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ho=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$h=/[+-]=-?[.\d]+/,pp=/[^,'"\[\]\s]+/gi,mp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,dt,Hn,ll,Yl,Mn={},Ua={},jh,qh=function(e){return(Ua=qr(e,Mn))&&rn},Kl=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Ds=function(e,n){return!n&&console.warn(e)},Yh=function(e,n){return e&&(Mn[e]=n)&&Ua&&(Ua[e]=n)||Mn},Is=function(){return 0},gp={suppressEvents:!0,isStart:!0,kill:!1},wa={suppressEvents:!0,kill:!1},_p={suppressEvents:!0},Zl={},Li=[],cl={},Kh,hn={},fo={},Fc=30,Aa=[],Jl="",Ql=function(e){var n=e[0],i,r;if(Kn(n)||_t(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=Aa.length;r--&&!Aa[r].targetTest(n););i=Aa[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new vd(e[r],i)))||e.splice(r,1);return e},ir=function(e){return e._gsap||Ql(Ln(e))[0]._gsap},Zh=function(e,n,i){return(i=e[n])&&_t(i)?e[n]():jl(i)&&e.getAttribute&&e.getAttribute(n)||i},en=function(e,n){return(e=e.split(",")).forEach(n)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},ht=function(e){return Math.round(e*1e7)/1e7||0},Br=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},vp=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},Oa=function(){var e=Li.length,n=Li.slice(0),i,r;for(cl={},Li.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ec=function(e){return!!(e._initted||e._startAt||e.add)},Jh=function(e,n,i,r){Li.length&&!Ut&&Oa(),e.render(n,i,r||!!(Ut&&n<0&&ec(e))),Li.length&&!Ut&&Oa()},Qh=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(pp).length<2?n:kt(e)?e.trim():e},ed=function(e){return e},Sn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},yp=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},qr=function(e,n){for(var i in n)e[i]=n[i];return e},Bc=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Kn(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Fa=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},As=function(e){var n=e.parent||dt,i=e.keyframes?yp(Wt(e.keyframes)):Sn;if(Qt(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},Mp=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},td=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},to=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Ui=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},rr=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Sp=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},ul=function(e,n,i,r){return e._startAt&&(Ut?e._startAt.revert(wa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},xp=function t(e){return!e||e._ts&&t(e.parent)},zc=function(e){return e._repeat?Yr(e._tTime,e=e.duration()+e._rDelay)*e:0},Yr=function(e,n){var i=Math.floor(e=ht(e/n));return e&&i===e?i-1:i},Ba=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},no=function(e){return e._end=ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},io=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ht(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),no(e),i._dirty||rr(i,e)),e},nd=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Ba(e.rawTime(),n),(!n._dur||$s(0,n.totalDuration(),i)-n._tTime>st)&&n.render(i,!0)),rr(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},jn=function(e,n,i,r){return n.parent&&Ui(n),n._start=ht((hi(i)?i:i||e!==dt?wn(e,i,n):e._time)+n._delay),n._end=ht(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),td(e,n,"_first","_last",e._sort?"_start":0),hl(n)||(e._recent=n),r||nd(e,n),e._ts<0&&io(e,e._tTime),e},id=function(e,n){return(Mn.ScrollTrigger||Kl("scrollTrigger",n))&&Mn.ScrollTrigger.create(n,e)},rd=function(e,n,i,r,s){if(nc(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Kh!==fn.frame)return Li.push(e),e._lazy=[s,r],1},bp=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},hl=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},Tp=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&bp(e)&&!(!e._initted&&hl(e))||(e._ts<0||e._dp._ts<0)&&!hl(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=$s(0,e._tDur,n),u=Yr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Yr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||r||e._zTime===st||!n&&e._zTime){if(!e._initted&&rd(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?st:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&ul(e,n,i,!0),e._onUpdate&&!i&&pn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&pn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&Ui(e,1),!i&&!Ut&&(pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},Ep=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},Kr=function(e,n,i,r){var s=e._repeat,a=ht(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ht(a*(s+1)+e._rDelay*s):a,o>0&&!r&&io(e,e._tTime=e._tDur*o),e.parent&&no(e),i||rr(e.parent,e),e},Vc=function(e){return e instanceof Jt?rr(e):Kr(e,e._dur)},Cp={_start:0,endTime:Is,totalDuration:Is},wn=function t(e,n,i){var r=e.labels,s=e._recent||Cp,a=e.duration()>=Pn?s.endTime(!1):e._dur,o,l,c;return kt(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(Wt(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},Rs=function(e,n,i){var r=hi(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Qt(l.vars.inherit)&&l.parent;a.immediateRender=Qt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Et(n[0],a,n[s+1])},Vi=function(e,n){return e||e===0?n(e):n},$s=function(e,n,i){return i<e?e:i>n?n:i},Gt=function(e,n){return!kt(e)||!(n=mp.exec(e))?"":n[1]},wp=function(e,n,i){return Vi(i,function(r){return $s(e,n,r)})},dl=[].slice,sd=function(e,n){return e&&Kn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&Kn(e[0]))&&!e.nodeType&&e!==Hn},Ap=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return kt(r)&&!n||sd(r,1)?(s=i).push.apply(s,Ln(r)):i.push(r)})||i},Ln=function(e,n,i){return ct&&!n&&ct.selector?ct.selector(e):kt(e)&&!i&&(ll||!Zr())?dl.call((n||Yl).querySelectorAll(e),0):Wt(e)?Ap(e,i):sd(e)?dl.call(e,0):e?[e]:[]},fl=function(e){return e=Ln(e)[0]||Ds("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return Ln(n,i.querySelectorAll?i:i===e?Ds("Invalid scope")||Yl.createElement("div"):e)}},ad=function(e){return e.sort(function(){return .5-Math.random()})},od=function(e){if(_t(e))return e;var n=Kn(e)?e:{each:e},i=sr(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,d=r;return kt(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,m,_){var p=(_||n).length,g=a[p],f,y,T,b,E,A,R,v,S;if(!g){if(S=n.grid==="auto"?0:(n.grid||[1,Pn])[1],!S){for(R=-Pn;R<(R=_[S++].getBoundingClientRect().left)&&S<p;);S<p&&S--}for(g=a[p]=[],f=l?Math.min(S,p)*u-.5:r%S,y=S===Pn?0:l?p*d/S-.5:r/S|0,R=0,v=Pn,A=0;A<p;A++)T=A%S-f,b=y-(A/S|0),g[A]=E=c?Math.abs(c==="y"?b:T):Hh(T*T+b*b),E>R&&(R=E),E<v&&(v=E);r==="random"&&ad(g),g.max=R-v,g.min=v,g.v=p=(parseFloat(n.amount)||parseFloat(n.each)*(S>p?p-1:c?c==="y"?p/S:S:Math.max(S,p/S))||0)*(r==="edges"?-1:1),g.b=p<0?s-p:s,g.u=Gt(n.amount||n.each)||0,i=i&&p<0?Vp(i):i}return p=(g[h]-g.min)/g.max||0,ht(g.b+(i?i(p):p)*g.v)+g.u}},pl=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ht(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(hi(i)?0:Gt(i))}},ld=function(e,n){var i=Wt(e),r,s;return!i&&Kn(e)&&(r=i=e.radius||Pn,e.values?(e=Ln(e.values),(s=!hi(e[0]))&&(r*=r)):e=pl(e.increment)),Vi(n,i?_t(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Pn,u=0,d=e.length,h,m;d--;)s?(h=e[d].x-o,m=e[d].y-l,h=h*h+m*m):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||hi(a)?u:u+Gt(a)}:pl(e))},cd=function(e,n,i,r){return Vi(Wt(e)?!n:i===!0?!!(i=0):!r,function(){return Wt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},Rp=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},Pp=function(e,n){return function(i){return e(parseFloat(i))+(n||Gt(i))}},Lp=function(e,n,i){return hd(e,n,0,1,i)},ud=function(e,n,i){return Vi(i,function(r){return e[~~n(r)]})},Dp=function t(e,n,i){var r=n-e;return Wt(e)?ud(e,t(0,e.length),n):Vi(i,function(s){return(r+(s-e)%r)%r+e})},Ip=function t(e,n,i){var r=n-e,s=r*2;return Wt(e)?ud(e,t(0,e.length-1),n):Vi(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},ks=function(e){return e.replace(dp,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(fp);return cd(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},hd=function(e,n,i,r,s){var a=n-e,o=r-i;return Vi(s,function(l){return i+((l-e)/a*o||0)})},kp=function t(e,n,i,r){var s=isNaN(e+n)?0:function(m){return(1-m)*e+m*n};if(!s){var a=kt(e),o={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(Wt(e)&&!Wt(n)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(_){_*=d;var p=Math.min(h,~~_);return u[p](_-p)},i=n}else r||(e=qr(Wt(e)?[]:{},e));if(!u){for(l in n)tc.call(o,e,l,"get",n[l]);s=function(_){return sc(_,o)||(a?e.p:e)}}}return Vi(i,s)},Gc=function(e,n,i){var r=e.labels,s=Pn,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},pn=function(e,n,i){var r=e.vars,s=r[n],a=ct,o=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&Li.length&&Oa(),o&&(ct=o),u=l?s.apply(c,l):s.call(c),ct=a,u},xs=function(e){return Ui(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&pn(e,"onInterrupt"),e},Ur,dd=[],fd=function(e){if(e)if(e=!e.name&&e.default||e,ql()||e.headless){var n=e.name,i=_t(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:Is,render:sc,add:tc,kill:Zp,modifier:Kp,rawVars:0},a={targetTest:0,get:0,getSetter:rc,aliases:{},register:0};if(Zr(),e!==r){if(hn[n])return;Sn(r,Sn(Fa(e,s),a)),qr(r.prototype,qr(s,Fa(e,a))),hn[r.prop=n]=r,e.targetTest&&(Aa.push(r),Zl[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}Yh(n,r),e.register&&e.register(rn,r,tn)}else dd.push(e)},rt=255,bs={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},po=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*rt+.5|0},pd=function(e,n,i){var r=e?hi(e)?[e>>16,e>>8&rt,e&rt]:0:bs.black,s,a,o,l,c,u,d,h,m,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bs[e])r=bs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Oc),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=po(l+1/3,s,a),r[1]=po(l,s,a),r[2]=po(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(Xh),i&&r.length<4&&(r[3]=1),r}else r=e.match(Oc)||bs.transparent;r=r.map(Number)}return n&&!_&&(s=r[0]/rt,a=r[1]/rt,o=r[2]/rt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(m=d-h,c=u>.5?m/(2-d-h):m/(d+h),l=d===s?(a-o)/m+(a<o?6:0):d===a?(o-s)/m+2:(s-a)/m+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},md=function(e){var n=[],i=[],r=-1;return e.split(Di).forEach(function(s){var a=s.match(Nr)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},Hc=function(e,n,i){var r="",s=(e+r).match(Di),a=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=pd(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=md(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Di,"1").split(Nr),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Di),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Di=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bs)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),Np=/hsl[a]?\(/,gd=function(e){var n=e.join(" "),i;if(Di.lastIndex=0,Di.test(n))return i=Np.test(n),e[1]=Hc(e[1],i),e[0]=Hc(e[0],i,md(e[1])),!0},Ns,fn=(function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,u,d,h,m,_=function p(g){var f=t()-r,y=g===!0,T,b,E,A;if((f>e||f<0)&&(i+=f-n),r+=f,E=r-i,T=E-a,(T>0||y)&&(A=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,a+=T+(T>=s?4:s-T),b=1),y||(l=c(p)),b)for(m=0;m<o.length;m++)o[m](E,h,A,g)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){jh&&(!ll&&ql()&&(Hn=ll=window,Yl=Hn.document||{},Mn.gsap=rn,(Hn.gsapVersions||(Hn.gsapVersions=[])).push(rn.version),qh(Ua||Hn.GreenSockGlobals||!Hn.gsap&&Hn||{}),dd.forEach(fd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(g){return setTimeout(g,a-d.time*1e3+1|0)},Ns=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ns=0,c=Is},lagSmoothing:function(g,f){e=g||1/0,n=Math.min(f||33,e)},fps:function(g){s=1e3/(g||240),a=d.time*1e3+s},add:function(g,f,y){var T=f?function(b,E,A,R){g(b,E,A,R),d.remove(T)}:g;return d.remove(g),o[y?"unshift":"push"](T),Zr(),T},remove:function(g,f){~(f=o.indexOf(g))&&o.splice(f,1)&&m>=f&&m--},_listeners:o},d})(),Zr=function(){return!Ns&&fn.wake()},Ke={},Up=/^[\d.\-M][\d.\-,\s]/,Op=/["']/g,Fp=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(Op,"").trim():+c,r=l.substr(o+1).trim();return n},Bp=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},zp=function(e){var n=(e+"").split("("),i=Ke[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Fp(n[1])]:Bp(e).split(",").map(Qh)):Ke._CE&&Up.test(e)?Ke._CE("",e):i},Vp=function(e){return function(n){return 1-e(1-n)}},sr=function(e,n){return e&&(_t(e)?e:Ke[e]||zp(e))||n},ur=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return en(e,function(o){Ke[o]=Mn[o]=s,Ke[a=o.toLowerCase()]=i;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},_d=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},mo=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/ol*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*hp((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:_d(o);return s=ol/s,l.config=function(c,u){return t(e,c,u)},l},go=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:_d(i);return r.config=function(s){return t(e,s)},r};en("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;ur(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;ur("Elastic",mo("in"),mo("out"),mo());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};ur("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ur("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});ur("Circ",function(t){return-(Hh(1-t*t)-1)});ur("Sine",function(t){return t===1?1:-up(t*lp)+1});ur("Back",go("in"),go("out"),go());Ke.SteppedEase=Ke.steps=Mn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-st;return function(o){return((r*$s(0,a,o)|0)+s)*i}}};Ls.ease=Ke["quad.out"];en("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Jl+=t+","+t+"Params,"});var vd=function(e,n){this.id=cp++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:Zh,this.set=n?n.getSetter:rc},Us=(function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Kr(this,+n.duration,1,1),this.data=n.data,ct&&(this._ctx=ct,ct.data.push(this)),Ns||fn.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Kr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Zr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(io(this,i),!s._dp||s.parent||nd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&jn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Jh(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+zc(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+zc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Yr(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ba(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime($s(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),no(this),Sp(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ht(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&jn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Qt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ba(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=_p);var r=Ut;return Ut=i,ec(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ut=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Vc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Vc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(wn(this,i),Qt(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Qt(r)),this._dur||(this._zTime=-st),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=_t(i)?i:ed,l=function(){var u=r.then;r.then=null,s&&s(),_t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){xs(this)},t})();Sn(Us.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var Jt=(function(t){Gh(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Qt(i.sortChildren),dt&&jn(i.parent||dt,ri(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&id(ri(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return Rs(0,arguments,this),this},n.from=function(r,s,a){return Rs(1,arguments,this),this},n.fromTo=function(r,s,a,o){return Rs(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,As(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,wn(this,a),1),this},n.call=function(r,s,a){return jn(this,Et.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(r,a,wn(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,As(a).immediateRender=Qt(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},n.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,As(o).immediateRender=Qt(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ht(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,m,_,p,g,f,y,T,b,E,A,R;if(this!==dt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,b=this._start,T=this._ts,f=!T,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,g=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,a);if(h=ht(u%g),u===l?(p=this._repeat,h=c):(E=ht(u/g),p=~~E,p&&p===E&&(h=c,p--),h>c&&(h=c)),E=Yr(this._tTime,g),!o&&this._tTime&&E!==p&&this._tTime-E*g-this._dur<=0&&(E=p),A&&p&1&&(h=c-h,R=1),p!==E&&!this._lock){var v=A&&E&1,S=v===(A&&p&1);if(p<E&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(R?0:ht(p*g)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&pn(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1,E=p),o&&o!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Ep(this,ht(o),ht(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!E&&(pn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(m=this._first;m;){if(_=m._next,(m._act||h>=m._start)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(h-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(h-m._start)*m._ts,s,a),h!==this._time||!this._ts&&!f){y=0,_&&(u+=this._zTime=-st);break}}m=_}else{m=this._last;for(var I=r<0?r:h;m;){if(_=m._prev,(m._act||I<=m._end)&&m._ts&&y!==m){if(m.parent!==this)return this.render(r,s,a);if(m.render(m._ts>0?(I-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(I-m._start)*m._ts,s,a||Ut&&ec(m)),h!==this._time||!this._ts&&!f){y=0,_&&(u+=this._zTime=I?-st:st);break}}m=_}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=b,no(this),this.render(r,s,a);this._onUpdate&&!s&&pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ui(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(pn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(hi(s)||(s=wn(this,s,r)),!(r instanceof Us)){if(Wt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(kt(r))return this.addLabel(r,s);if(_t(r))r=Et.delayedCall(0,r);else return this}return this!==r?jn(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Pn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return kt(r)?this.removeLabel(r):_t(r)?this.killTweensOf(r):(r.parent===this&&to(this,r),r===this._recent&&(this._recent=this._last),rr(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ht(fn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=wn(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Et.delayedCall(0,s||Is,a);return o.data="isPause",this._hasPause=1,jn(this,o,wn(this,r))},n.removePause=function(r){var s=this._first;for(r=wn(this,r);s;)s._start===r&&s.data==="isPause"&&Ui(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Ci!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=Ln(r),l=this._first,c=hi(s),u;l;)l instanceof Et?vp(l._targets,o)&&(c?(!Ci||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=wn(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,m,_=Et.to(a,Sn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!m){var g=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==g&&Kr(_,g,0,1).render(_._time,!0,!0),m=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,Sn({startAt:{time:wn(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Gc(this,wn(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Gc(this,wn(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=ht(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return rr(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),rr(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=Pn,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,jn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ht(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Kr(a,a===dt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(dt._ts&&(Jh(dt,Ba(r,dt)),Kh=fn.frame),fn.frame>=Fc){Fc+=vn.autoSleep||120;var s=dt._first;if((!s||!s._ts)&&vn.autoSleep&&fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||fn.sleep()}}},e})(Us);Sn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gp=function(e,n,i,r,s,a,o){var l=new tn(this._pt,e,n,0,1,Td,null,s),c=0,u=0,d,h,m,_,p,g,f,y;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=ks(r)),a&&(y=[i,r],a(y,e,n),i=y[0],r=y[1]),h=i.match(ho)||[];d=ho.exec(r);)_=d[0],p=r.substring(c,d.index),m?m=(m+1)%5:p.substr(-5)==="rgba("&&(m=1),_!==h[u++]&&(g=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:p||u===1?p:",",s:g,c:_.charAt(1)==="="?Br(g,_)-g:parseFloat(_)-g,m:m&&m<4?Math.round:0},c=ho.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,($h.test(r)||f)&&(l.e=0),this._pt=l,l},tc=function(e,n,i,r,s,a,o,l,c,u){_t(r)&&(r=r(s||0,e,a));var d=e[n],h=i!=="get"?i:_t(d)?c?e[n.indexOf("set")||!_t(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,m=_t(d)?c?jp:xd:ic,_;if(kt(r)&&(~r.indexOf("random(")&&(r=ks(r)),r.charAt(1)==="="&&(_=Br(h,r)+(Gt(h)||0),(_||_===0)&&(r=_))),!u||h!==r||ml)return!isNaN(h*r)&&r!==""?(_=new tn(this._pt,e,n,+h||0,r-(h||0),typeof d=="boolean"?Yp:bd,0,m),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!d&&!(n in e)&&Kl(n,r),Gp.call(this,e,n,h,r,m,l||vn.stringFilter,c))},Hp=function(e,n,i,r,s){if(_t(e)&&(e=Ps(e,s,n,i,r)),!Kn(e)||e.style&&e.nodeType||Wt(e)||Wh(e))return kt(e)?Ps(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=Ps(e[o],s,n,i,r);return a},yd=function(e,n,i,r,s,a){var o,l,c,u;if(hn[e]&&(o=new hn[e]).init(s,o.rawVars?n[e]:Hp(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new tn(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ur))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ci,ml,nc=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,m=r.autoRevert,_=e._dur,p=e._startAt,g=e._targets,f=e.parent,y=f&&f.data==="nested"?f.vars.targets:g,T=e._overwrite==="auto"&&!$l,b=e.timeline,E=r.easeReverse||d,A,R,v,S,I,w,L,F,D,z,V,O,K;if(b&&(!h||!s)&&(s="none"),e._ease=sr(s,Ls.ease),e._rEase=E&&(sr(E)||e._ease),e._from=!b&&!!r.runBackwards,e._from&&(e.ratio=1),!b||h&&!r.stagger){if(F=g[0]?ir(g[0]).harness:0,O=F&&r[F.prop],A=Fa(r,Zl),p&&(p._zTime<0&&p.progress(1),n<0&&u&&o&&!m?p.render(-1,!0):p.revert(u&&_?wa:gp),p._lazy=0),a){if(Ui(e._startAt=Et.set(g,Sn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!p&&Qt(l),startAt:null,delay:0,onUpdate:c&&function(){return pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ut||!o&&!m)&&e._startAt.revert(wa),o&&_&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&_&&!p){if(n&&(o=!1),v=Sn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Qt(l),immediateRender:o,stagger:0,parent:f},A),O&&(v[F.prop]=O),Ui(e._startAt=Et.set(g,v)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ut?e._startAt.revert(wa):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,st,st);else if(!n)return}for(e._pt=e._ptCache=0,l=_&&Qt(l)||l&&!_,R=0;R<g.length;R++){if(I=g[R],L=I._gsap||Ql(g)[R]._gsap,e._ptLookup[R]=z={},cl[L.id]&&Li.length&&Oa(),V=y===g?R:y.indexOf(I),F&&(D=new F).init(I,O||A,e,V,y)!==!1&&(e._pt=S=new tn(e._pt,I,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(ee){z[ee]=S}),D.priority&&(w=1)),!F||O)for(v in A)hn[v]&&(D=yd(v,A,e,V,I,y))?D.priority&&(w=1):z[v]=S=tc.call(e,I,v,"get",A[v],V,y,0,r.stringFilter);e._op&&e._op[R]&&e.kill(I,e._op[R]),T&&e._pt&&(Ci=e,dt.killTweensOf(I,z,e.globalTime(n)),K=!e.parent,Ci=0),e._pt&&l&&(cl[L.id]=1)}w&&Ed(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,h&&n<=0&&b.render(Pn,!0,!0)},Wp=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,h,m;if(!c)for(c=e._ptCache[n]=[],h=e._ptLookup,m=e._targets.length;m--;){if(u=h[m][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return ml=1,e.vars[n]="+=0",nc(e,o),ml=0,l?Ds(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(m=c.length;m--;)d=c[m],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=Mt(i)+Gt(d.e)),d.b&&(d.b=u.s+Gt(d.b))},Xp=function(e,n){var i=e[0]?ir(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=qr({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},$p=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(Wt(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},Ps=function(e,n,i,r,s){return _t(e)?e.call(n,i,r,s):kt(e)&&~e.indexOf("random(")?ks(e):e},Md=Jl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Sd={};en(Md+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Sd[t]=1});var Et=(function(t){Gh(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:As(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,m=l.overwrite,_=l.keyframes,p=l.defaults,g=l.scrollTrigger,f=r.parent||dt,y=(Wt(i)||Wh(i)?hi(i[0]):"length"in r)?[i]:Ln(i),T,b,E,A,R,v,S,I;if(o._targets=y.length?Ql(y):Ds("GSAP target "+i+" not found. https://gsap.com",!vn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=m,_||h||ea(c)||ea(u)){r=o.vars;var w=r.easeReverse||r.yoyoEase;if(T=o.timeline=new Jt({data:"nested",defaults:p||{},targets:f&&f.data==="nested"?f.vars.targets:y}),T.kill(),T.parent=T._dp=ri(o),T._start=0,h||ea(c)||ea(u)){if(A=y.length,S=h&&od(h),Kn(h))for(R in h)~Md.indexOf(R)&&(I||(I={}),I[R]=h[R]);for(b=0;b<A;b++)E=Fa(r,Sd),E.stagger=0,w&&(E.easeReverse=w),I&&qr(E,I),v=y[b],E.duration=+Ps(c,ri(o),b,v,y),E.delay=(+Ps(u,ri(o),b,v,y)||0)-o._delay,!h&&A===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),T.to(v,E,S?S(b,v,y):0),T._ease=Ke.none;T.duration()?c=u=0:o.timeline=0}else if(_){As(Sn(T.vars.defaults,{ease:"none"})),T._ease=sr(_.ease||r.ease||"none");var L=0,F,D,z;if(Wt(_))_.forEach(function(V){return T.to(y,V,">")}),T.duration();else{E={};for(R in _)R==="ease"||R==="easeEach"||$p(R,_[R],E,_.easeEach);for(R in E)for(F=E[R].sort(function(V,O){return V.t-O.t}),L=0,b=0;b<F.length;b++)D=F[b],z={ease:D.e,duration:(D.t-(b?F[b-1].t:0))/100*c},z[R]=D.v,T.to(y,z,L),L+=z.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return m===!0&&!$l&&(Ci=ri(o),dt.killTweensOf(y),Ci=0),jn(f,ri(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!_&&o._start===ht(f._time)&&Qt(d)&&xp(ri(o))&&f.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),g&&id(ri(o),g),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-st&&!u?l:r<st?0:r,h,m,_,p,g,f,y,T;if(!c)Tp(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(p*100+r,s,a);if(h=ht(d%p),d===l?(_=this._repeat,h=c):(g=ht(d/p),_=~~g,_&&_===g?(h=c,_--):h>c&&(h=c)),f=this._yoyo&&_&1,f&&(h=c-h),g=Yr(this._tTime,p),h===o&&!a&&this._initted&&_===g)return this._tTime=d,this;_!==g&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==p&&this._initted&&(this._lock=a=1,this.render(ht(p*_),!0).invalidate()._lock=0)}if(!this._initted){if(rd(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var b=h<o;if(b!==this._inv){var E=b?o:c-o;this._inv=b,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(b?-1:1)/E:0,this._invScale=b?-this.ratio:1-this.ratio,this._invEase=b?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(h/c);if(this._from&&(this.ratio=y=1-y),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!g&&(pn(this,"onStart"),this._tTime!==d))return this;for(m=this._pt;m;)m.r(y,m.d),m=m._next;T&&T.render(r<0?r:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ul(this,r,s,a),pn(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&pn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&ul(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Ui(this,1),!s&&!(u&&!o)&&(d||o||f)&&(pn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){Ns||fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nc(this,c),u=this._ease(c/this._dur),Wp(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(io(this,0),this.parent||td(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xs(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ci&&Ci.vars.overwrite!==!0)._first||xs(this),this.parent&&a!==this.timeline.totalDuration()&&Kr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Ln(r):o,c=this._ptLookup,u=this._pt,d,h,m,_,p,g,f;if((!s||s==="all")&&Mp(o,l))return s==="all"&&(this._pt=0),xs(this);for(d=this._op=this._op||[],s!=="all"&&(kt(s)&&(p={},en(s,function(y){return p[y]=1}),s=p),s=Xp(o,s)),f=o.length;f--;)if(~l.indexOf(o[f])){h=c[f],s==="all"?(d[f]=s,_=h,m={}):(m=d[f]=d[f]||{},_=s);for(p in _)g=h&&h[p],g&&((!("kill"in g.d)||g.d.kill(p)===!0)&&to(this,g,"_pt"),delete h[p]),m!=="all"&&(m[p]=1)}return this._initted&&!this._pt&&u&&xs(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Rs(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Rs(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return dt.killTweensOf(r,s,a)},e})(Us);Sn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});en("staggerTo,staggerFrom,staggerFromTo",function(t){Et[t]=function(){var e=new Jt,n=dl.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var ic=function(e,n,i){return e[n]=i},xd=function(e,n,i){return e[n](i)},jp=function(e,n,i,r){return e[n](r.fp,i)},qp=function(e,n,i){return e.setAttribute(n,i)},rc=function(e,n){return _t(e[n])?xd:jl(e[n])&&e.setAttribute?qp:ic},bd=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},Yp=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Td=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},sc=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},Kp=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},Zp=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?to(this,n,"_pt"):n.dep||(i=1),n=r;return!i},Jp=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},Ed=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},tn=(function(){function t(n,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||bd,this.d=l||this,this.set=c||ic,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=Jp,this.m=i,this.mt=s,this.tween=r},t})();en(Jl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return Zl[t]=1});Mn.TweenMax=Mn.TweenLite=Et;Mn.TimelineLite=Mn.TimelineMax=Jt;dt=new Jt({sortChildren:!1,defaults:Ls,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});vn.stringFilter=gd;var ar=[],Ra={},Qp=[],Wc=0,em=0,_o=function(e){return(Ra[e]||Qp).map(function(n){return n()})},gl=function(){var e=Date.now(),n=[];e-Wc>2&&(_o("matchMediaInit"),ar.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=Hn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),_o("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Wc=e,_o("matchMedia"))},Cd=(function(){function t(n,i){this.selector=i&&fl(i),this.data=[],this._r=[],this.isReverted=!1,this.id=em++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){_t(i)&&(s=r,r=i,i=_t);var a=this,o=function(){var c=ct,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=fl(s)),ct=a,d=r.apply(a,arguments),_t(d)&&a._r.push(d),ct=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===_t?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=ct;ct=null,i(this),ct=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=ar.length;a--;)ar[a].id===this.id&&ar.splice(a,1)},e.revert=function(i){this.kill(i||{})},t})(),tm=(function(){function t(n){this.contexts=[],this.scope=n,ct&&ct.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){Kn(i)||(i={matches:i});var a=new Cd(0,s||this.scope),o=a.conditions={},l,c,u;ct&&!a.selector&&(a.selector=ct.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=Hn.matchMedia(i[c]),l&&(ar.indexOf(a)<0&&ar.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(gl):l.addEventListener("change",gl)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t})(),za={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return fd(r)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,n){return dt.getTweensOf(e,n)},getProperty:function(e,n,i,r){kt(e)&&(e=Ln(e)[0]);var s=ir(e||{}).get,a=i?ed:Qh;return i==="native"&&(i=""),e&&(n?a((hn[n]&&hn[n].get||s)(e,n,i,r)):function(o,l,c){return a((hn[o]&&hn[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=Ln(e),e.length>1){var r=e.map(function(u){return rn.quickSetter(u,n,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=hn[n],o=ir(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var d=new a;Ur._pt=0,d.init(e,i?u+i:u,Ur,0,[e]),d.render(1,d),Ur._pt&&sc(1,Ur)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var r,s=rn.to(e,Sn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(n,l,c,u)};return a.tween=s,a},isTweening:function(e){return dt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=sr(e.ease,Ls.ease)),Bc(Ls,e||{})},config:function(e){return Bc(vn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!hn[o]&&!Mn[o]&&Ds(n+" effect requires "+o+" plugin.")}),fo[n]=function(o,l,c){return i(Ln(o),Sn(l||{},s),c)},a&&(Jt.prototype[n]=function(o,l,c){return this.add(fo[n](o,Kn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Ke[e]=sr(n)},parseEase:function(e,n){return arguments.length?sr(e,n):Ke},getById:function(e){return dt.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new Jt(e),r,s;for(i.smoothChildTiming=Qt(e.smoothChildTiming),dt.remove(i),i._dp=0,i._time=i._tTime=dt._time,r=dt._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&jn(i,r,r._start-r._delay),r=s;return jn(dt,i,0),i},context:function(e,n){return e?new Cd(e,n):ct},matchMedia:function(e){return new tm(e)},matchMediaRefresh:function(){return ar.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||gl()},addEventListener:function(e,n){var i=Ra[e]||(Ra[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=Ra[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:Dp,wrapYoyo:Ip,distribute:od,random:cd,snap:ld,normalize:Lp,getUnit:Gt,clamp:wp,splitColor:pd,toArray:Ln,selector:fl,mapRange:hd,pipe:Rp,unitize:Pp,interpolate:kp,shuffle:ad},install:qh,effects:fo,ticker:fn,updateRoot:Jt.updateRoot,plugins:hn,globalTimeline:dt,core:{PropTween:tn,globals:Yh,Tween:Et,Timeline:Jt,Animation:Us,getCache:ir,_removeLinkedListItem:to,reverting:function(){return Ut},context:function(e){return e&&ct&&(ct.data.push(e),e._ctx=ct),ct},suppressOverwrites:function(e){return $l=e}}};en("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return za[t]=Et[t]});fn.add(Jt.updateRoot);Ur=za.to({},{duration:0});var nm=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},im=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=nm(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},vo=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(kt(s)&&(l={},en(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}im(o,s)}}}},rn=za.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)Ut?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},vo("roundProps",pl),vo("modifiers"),vo("snap",ld))||za;Et.version=Jt.version=rn.version="3.15.0";jh=1;ql()&&Zr();var WS=Ke.Power0,XS=Ke.Power1,$S=Ke.Power2,jS=Ke.Power3,qS=Ke.Power4,YS=Ke.Linear,KS=Ke.Quad,ZS=Ke.Cubic,JS=Ke.Quart,QS=Ke.Quint,ex=Ke.Strong,tx=Ke.Elastic,nx=Ke.Back,ix=Ke.SteppedEase,rx=Ke.Bounce,sx=Ke.Sine,ax=Ke.Expo,ox=Ke.Circ,Xc,wi,zr,ac,Qi,$c,oc,rm=function(){return typeof window<"u"},di={},Zi=180/Math.PI,Vr=Math.PI/180,gr=Math.atan2,jc=1e8,lc=/([A-Z])/g,sm=/(left|right|width|margin|padding|x)/i,am=/[\s,\(]\S/,qn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_l=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},om=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},lm=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},cm=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},um=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},wd=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},Ad=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},hm=function(e,n,i){return e.style[n]=i},dm=function(e,n,i){return e.style.setProperty(n,i)},fm=function(e,n,i){return e._gsap[n]=i},pm=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},mm=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},gm=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},ft="transform",nn=ft+"Origin",_m=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in di&&s){if(this.tfm=this.tfm||{},e!=="transform")e=qn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=si(r,o)}):this.tfm[e]=a.x?a[e]:si(r,e),e===nn&&(this.tfm.zOrigin=a.zOrigin);else return qn.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(ft)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(nn,n,"")),e=ft}(s||n)&&this.props.push(e,n,s[e])},Rd=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},vm=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=oc(),(!s||!s.isStart)&&!i[ft]&&(Rd(i),r.zOrigin&&i[nn]&&(i[nn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Pd=function(e,n){var i={target:e,props:[],revert:vm,save:_m};return e._gsap||rn.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},Ld,vl=function(e,n){var i=wi.createElementNS?wi.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):wi.createElement(e);return i&&i.style?i:wi.createElement(e)},mn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(lc,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,Jr(n)||n,1)||""},qc="O,Moz,ms,Ms,Webkit".split(","),Jr=function(e,n,i){var r=(n||Qi).style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(qc[s]+e in r););return s<0?null:(s===3?"ms":s>=0?qc[s]:"")+e},yl=function(){rm()&&window.document&&(Xc=window,wi=Xc.document,zr=wi.documentElement,Qi=vl("div")||{style:{}},vl("div"),ft=Jr(ft),nn=ft+"Origin",Qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ld=!!Jr("perspective"),oc=rn.core.reverting,ac=1)},Yc=function(e){var n=e.ownerSVGElement,i=vl("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),zr.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),zr.removeChild(i),s},Kc=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Dd=function(e){var n,i;try{n=e.getBBox()}catch{n=Yc(e),i=1}return n&&(n.width||n.height)||i||(n=Yc(e)),n&&!n.width&&!n.x&&!n.y?{x:+Kc(e,["x","cx","x1"])||0,y:+Kc(e,["y","cy","y1"])||0,width:0,height:0}:n},Id=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dd(e))},Oi=function(e,n){if(n){var i=e.style,r;n in di&&n!==nn&&(n=ft),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(lc,"-$1").toLowerCase())):i.removeAttribute(n)}},Ai=function(e,n,i,r,s,a){var o=new tn(e._pt,n,i,0,1,a?Ad:wd);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Zc={deg:1,rad:1,turn:1},ym={grid:1,flex:1},Fi=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=Qi.style,l=sm.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",m=r==="%",_,p,g,f;if(r===a||!s||Zc[r]||Zc[a])return s;if(a!=="px"&&!h&&(s=t(e,n,i,"px")),f=e.getCTM&&Id(e),(m||a==="%")&&(di[n]||~n.indexOf("adius")))return _=f?e.getBBox()[l?"width":"height"]:e[u],Mt(m?s/_*d:s/100*_);if(o[l?"width":"height"]=d+(h?a:r),p=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,f&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===wi||!p.appendChild)&&(p=wi.body),g=p._gsap,g&&m&&g.width&&l&&g.time===fn.time&&!g.uncache)return Mt(s/g.width*d);if(m&&(n==="height"||n==="width")){var y=e.style[n];e.style[n]=d+r,_=e[u],y?e.style[n]=y:Oi(e,n)}else(m||a==="%")&&!ym[mn(p,"display")]&&(o.position=mn(e,"position")),p===e&&(o.position="static"),p.appendChild(Qi),_=Qi[u],p.removeChild(Qi),o.position="absolute";return l&&m&&(g=ir(p),g.time=fn.time,g.width=p[u]),Mt(h?_*s/d:_&&s?d/_*s:0)},si=function(e,n,i,r){var s;return ac||yl(),n in qn&&n!=="transform"&&(n=qn[n],~n.indexOf(",")&&(n=n.split(",")[0])),di[n]&&n!=="transform"?(s=Fs(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:Ga(mn(e,nn))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Va[n]&&Va[n](e,n,i)||mn(e,n)||Zh(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Fi(e,n,s,i)+i:s},Mm=function(e,n,i,r){if(!i||i==="none"){var s=Jr(n,e,1),a=s&&mn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=mn(e,"borderTopColor"))}var o=new tn(this._pt,e.style,n,0,1,Td),l=0,c=0,u,d,h,m,_,p,g,f,y,T,b,E;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=mn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=e.style[n],e.style[n]=r,r=mn(e,n)||r,p?e.style[n]=p:Oi(e,n)),u=[i,r],gd(u),i=u[0],r=u[1],h=i.match(Nr)||[],E=r.match(Nr)||[],E.length){for(;d=Nr.exec(r);)g=d[0],y=r.substring(l,d.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),g!==(p=h[c++]||"")&&(m=parseFloat(p)||0,b=p.substr((m+"").length),g.charAt(1)==="="&&(g=Br(m,g)+b),f=parseFloat(g),T=g.substr((f+"").length),l=Nr.lastIndex-T.length,T||(T=T||vn.units[n]||b,l===r.length&&(r+=T,o.e+=T)),b!==T&&(m=Fi(e,n,p,T)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:m,c:f-m,m:_&&_<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?Ad:wd;return $h.test(r)&&(o.e=0),this._pt=o,o},Jc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Sm=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Jc[i]||i,n[1]=Jc[r]||r,n.join(" ")},xm=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],di[o]&&(l=1,o=o==="transformOrigin"?nn:ft),Oi(i,o);l&&(Oi(i,ft),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Fs(i,1),a.uncache=1,Rd(r)))}},Va={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new tn(e._pt,n,i,0,0,xm);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Os=[1,0,0,1,0,0],kd={},Nd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Qc=function(e){var n=mn(e,ft);return Nd(n)?Os:n.substr(7).match(Xh).map(Mt)},cc=function(e,n){var i=e._gsap||ir(e),r=e.style,s=Qc(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Os:s):(s===Os&&!e.offsetParent&&e!==zr&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,zr.appendChild(e)),s=Qc(e),l?r.display=l:Oi(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):zr.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Ml=function(e,n,i,r,s,a){var o=e._gsap,l=s||cc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,m=l[0],_=l[1],p=l[2],g=l[3],f=l[4],y=l[5],T=n.split(" "),b=parseFloat(T[0])||0,E=parseFloat(T[1])||0,A,R,v,S;i?l!==Os&&(R=m*g-_*p)&&(v=b*(g/R)+E*(-p/R)+(p*y-g*f)/R,S=b*(-_/R)+E*(m/R)-(m*y-_*f)/R,b=v,E=S):(A=Dd(e),b=A.x+(~T[0].indexOf("%")?b/100*A.width:b),E=A.y+(~(T[1]||T[0]).indexOf("%")?E/100*A.height:E)),r||r!==!1&&o.smooth?(f=b-c,y=E-u,o.xOffset=d+(f*m+y*p)-f,o.yOffset=h+(f*_+y*g)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=E,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[nn]="0px 0px",a&&(Ai(a,o,"xOrigin",c,b),Ai(a,o,"yOrigin",u,E),Ai(a,o,"xOffset",d,o.xOffset),Ai(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+E)},Fs=function(e,n){var i=e._gsap||new vd(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mn(e,nn)||"0",u=d=h=p=g=f=y=T=b=0,d,h,m=_=1,_,p,g,f,y,T,b,E,A,R,v,S,I,w,L,F,D,z,V,O,K,ee,ie,ge,Me,Ze,Ne,j;return i.svg=!!(e.getCTM&&Id(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ft]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ft]!=="none"?l[ft]:"")),r.scale=r.rotate=r.translate="none"),R=cc(e,i.svg),i.svg&&(i.uncache?(K=e.getBBox(),c=i.xOrigin-K.x+"px "+(i.yOrigin-K.y)+"px",O=""):O=!n&&e.getAttribute("data-svg-origin"),Ml(e,O||c,!!O||i.originIsAbsolute,i.smooth!==!1,R)),E=i.xOrigin||0,A=i.yOrigin||0,R!==Os&&(w=R[0],L=R[1],F=R[2],D=R[3],u=z=R[4],d=V=R[5],R.length===6?(m=Math.sqrt(w*w+L*L),_=Math.sqrt(D*D+F*F),p=w||L?gr(L,w)*Zi:0,y=F||D?gr(F,D)*Zi+p:0,y&&(_*=Math.abs(Math.cos(y*Vr))),i.svg&&(u-=E-(E*w+A*F),d-=A-(E*L+A*D))):(j=R[6],Ze=R[7],ie=R[8],ge=R[9],Me=R[10],Ne=R[11],u=R[12],d=R[13],h=R[14],v=gr(j,Me),g=v*Zi,v&&(S=Math.cos(-v),I=Math.sin(-v),O=z*S+ie*I,K=V*S+ge*I,ee=j*S+Me*I,ie=z*-I+ie*S,ge=V*-I+ge*S,Me=j*-I+Me*S,Ne=Ze*-I+Ne*S,z=O,V=K,j=ee),v=gr(-F,Me),f=v*Zi,v&&(S=Math.cos(-v),I=Math.sin(-v),O=w*S-ie*I,K=L*S-ge*I,ee=F*S-Me*I,Ne=D*I+Ne*S,w=O,L=K,F=ee),v=gr(L,w),p=v*Zi,v&&(S=Math.cos(v),I=Math.sin(v),O=w*S+L*I,K=z*S+V*I,L=L*S-w*I,V=V*S-z*I,w=O,z=K),g&&Math.abs(g)+Math.abs(p)>359.9&&(g=p=0,f=180-f),m=Mt(Math.sqrt(w*w+L*L+F*F)),_=Mt(Math.sqrt(V*V+j*j)),v=gr(z,V),y=Math.abs(v)>2e-4?v*Zi:0,b=Ne?1/(Ne<0?-Ne:Ne):0),i.svg&&(O=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Nd(mn(e,ft)),O&&e.setAttribute("transform",O))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(m*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Mt(m),i.scaleY=Mt(_),i.rotation=Mt(p)+o,i.rotationX=Mt(g)+o,i.rotationY=Mt(f)+o,i.skewX=y+o,i.skewY=T+o,i.transformPerspective=b+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[nn]=Ga(c)),i.xOffset=i.yOffset=0,i.force3D=vn.force3D,i.renderTransform=i.svg?Tm:Ld?Ud:bm,i.uncache=0,i},Ga=function(e){return(e=e.split(" "))[0]+" "+e[1]},yo=function(e,n,i){var r=Gt(n);return Mt(parseFloat(n)+parseFloat(Fi(e,"x",i+"px",r)))+r},bm=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Ud(e,n)},Wi="0deg",us="0px",Xi=") ",Ud=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,m=i.skewY,_=i.scaleX,p=i.scaleY,g=i.transformPerspective,f=i.force3D,y=i.target,T=i.zOrigin,b="",E=f==="auto"&&e&&e!==1||f===!0;if(T&&(d!==Wi||u!==Wi)){var A=parseFloat(u)*Vr,R=Math.sin(A),v=Math.cos(A),S;A=parseFloat(d)*Vr,S=Math.cos(A),a=yo(y,a,R*S*-T),o=yo(y,o,-Math.sin(A)*-T),l=yo(y,l,v*S*-T+T)}g!==us&&(b+="perspective("+g+Xi),(r||s)&&(b+="translate("+r+"%, "+s+"%) "),(E||a!==us||o!==us||l!==us)&&(b+=l!==us||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Xi),c!==Wi&&(b+="rotate("+c+Xi),u!==Wi&&(b+="rotateY("+u+Xi),d!==Wi&&(b+="rotateX("+d+Xi),(h!==Wi||m!==Wi)&&(b+="skew("+h+", "+m+Xi),(_!==1||p!==1)&&(b+="scale("+_+", "+p+Xi),y.style[ft]=b||"translate(0, 0)"},Tm=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,m=i.target,_=i.xOrigin,p=i.yOrigin,g=i.xOffset,f=i.yOffset,y=i.forceCSS,T=parseFloat(a),b=parseFloat(o),E,A,R,v,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Vr,c*=Vr,E=Math.cos(l)*d,A=Math.sin(l)*d,R=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Vr,S=Math.tan(c-u),S=Math.sqrt(1+S*S),R*=S,v*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),E*=S,A*=S)),E=Mt(E),A=Mt(A),R=Mt(R),v=Mt(v)):(E=d,v=h,A=R=0),(T&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(T=Fi(m,"x",a,"px"),b=Fi(m,"y",o,"px")),(_||p||g||f)&&(T=Mt(T+_-(_*E+p*R)+g),b=Mt(b+p-(_*A+p*v)+f)),(r||s)&&(S=m.getBBox(),T=Mt(T+r/100*S.width),b=Mt(b+s/100*S.height)),S="matrix("+E+","+A+","+R+","+v+","+T+","+b+")",m.setAttribute("transform",S),y&&(m.style[ft]=S)},Em=function(e,n,i,r,s){var a=360,o=kt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Zi:1)-r,c=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*jc)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*jc)%a-~~(l/a)*a)),e._pt=d=new tn(e._pt,n,i,r,l,om),d.e=c,d.u="deg",e._props.push(i),d},eu=function(e,n){for(var i in n)e[i]=n[i];return e},Cm=function(e,n,i){var r=eu({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,h,m,_;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[ft]=n,o=Fs(i,1),Oi(i,ft),i.setAttribute("transform",c)):(c=getComputedStyle(i)[ft],a[ft]=n,o=Fs(i,1),a[ft]=c);for(l in di)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(m=Gt(c),_=Gt(u),d=m!==_?Fi(i,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new tn(e._pt,o,l,d,h-d,_l),e._pt.u=_||0,e._props.push(l));eu(o,r)};en("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});Va[e>1?"border"+t:t]=function(o,l,c,u,d){var h,m;if(arguments.length<4)return h=a.map(function(_){return si(o,_,c)}),m=h.join(" "),m.split(h[0]).length===5?h[0]:m;h=(u+"").split(" "),m={},a.forEach(function(_,p){return m[_]=h[p]=h[p]||h[(p-1)/2|0]}),o.init(l,m,d)}});var Od={name:"css",register:yl,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,h,m,_,p,g,f,y,T,b,E,A,R,v,S;ac||yl(),this.styles=this.styles||Pd(e),v=this.styles.props,this.tween=i;for(p in n)if(p!=="autoRound"&&(u=n[p],!(hn[p]&&yd(p,n,i,r,e,s)))){if(m=typeof u,_=Va[p],m==="function"&&(u=u.call(i,r,e,s),m=typeof u),m==="string"&&~u.indexOf("random(")&&(u=ks(u)),_)_(this,e,p,u,i)&&(R=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),u+="",Di.lastIndex=0,Di.test(c)||(g=Gt(c),f=Gt(u),f?g!==f&&(c=Fi(e,p,c,f)+f):g&&(u+=g)),this.add(o,"setProperty",c,u,r,s,0,0,p),a.push(p),v.push(p,0,o[p]);else if(m!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(i,r,e,s):l[p],kt(c)&&~c.indexOf("random(")&&(c=ks(c)),Gt(c+"")||c==="auto"||(c+=vn.units[p]||Gt(si(e,p))||""),(c+"").charAt(1)==="="&&(c=si(e,p))):c=si(e,p),h=parseFloat(c),y=m==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),d=parseFloat(u),p in qn&&(p==="autoAlpha"&&(h===1&&si(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),Ai(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),p!=="scale"&&p!=="transform"&&(p=qn[p],~p.indexOf(",")&&(p=p.split(",")[0]))),T=p in di,T){if(this.styles.save(p),S=u,m==="string"&&u.substring(0,6)==="var(--"){if(u=mn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var I=e.style.perspective;e.style.perspective=u,u=mn(e,"perspective"),I?e.style.perspective=I:Oi(e,"perspective")}d=parseFloat(u)}if(b||(E=e._gsap,E.renderTransform&&!n.parseTransform||Fs(e,n.parseTransform),A=n.smoothOrigin!==!1&&E.smooth,b=this._pt=new tn(this._pt,o,ft,0,1,E.renderTransform,E,0,-1),b.dep=1),p==="scale")this._pt=new tn(this._pt,E,"scaleY",E.scaleY,(y?Br(E.scaleY,y+d):d)-E.scaleY||0,_l),this._pt.u=0,a.push("scaleY",p),p+="X";else if(p==="transformOrigin"){v.push(nn,0,o[nn]),u=Sm(u),E.svg?Ml(e,u,0,A,0,this):(f=parseFloat(u.split(" ")[2])||0,f!==E.zOrigin&&Ai(this,E,"zOrigin",E.zOrigin,f),Ai(this,o,p,Ga(c),Ga(u)));continue}else if(p==="svgOrigin"){Ml(e,u,1,A,0,this);continue}else if(p in kd){Em(this,E,p,h,y?Br(h,y+u):u);continue}else if(p==="smoothOrigin"){Ai(this,E,"smooth",E.smooth,u);continue}else if(p==="force3D"){E[p]=u;continue}else if(p==="transform"){Cm(this,u,e);continue}}else p in o||(p=Jr(p)||p);if(T||(d||d===0)&&(h||h===0)&&!am.test(u)&&p in o)g=(c+"").substr((h+"").length),d||(d=0),f=Gt(u)||(p in vn.units?vn.units[p]:g),g!==f&&(h=Fi(e,p,c,f)),this._pt=new tn(this._pt,T?E:o,p,h,(y?Br(h,y+d):d)-h,!T&&(f==="px"||p==="zIndex")&&n.autoRound!==!1?um:_l),this._pt.u=f||0,T&&S!==u?(this._pt.b=c,this._pt.e=S,this._pt.r=cm):g!==f&&f!=="%"&&(this._pt.b=c,this._pt.r=lm);else if(p in o)Mm.call(this,e,p,c,y?y+u:u);else if(p in e)this.add(e,p,c||e[p],y?y+u:u,r,s);else if(p!=="parseTransform"){Kl(p,u);continue}T||(p in o?v.push(p,0,o[p]):typeof e[p]=="function"?v.push(p,2,e[p]()):v.push(p,1,c||e[p])),a.push(p)}}R&&Ed(this)},render:function(e,n){if(n.tween._time||!oc())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:si,aliases:qn,getSetter:function(e,n,i){var r=qn[n];return r&&r.indexOf(",")<0&&(n=r),n in di&&n!==nn&&(e._gsap.x||si(e,"x"))?i&&$c===i?n==="scale"?pm:fm:($c=i||{})&&(n==="scale"?mm:gm):e.style&&!jl(e.style[n])?hm:~n.indexOf("-")?dm:rc(e,n)},core:{_removeProperty:Oi,_getMatrix:cc}};rn.utils.checkPrefix=Jr;rn.core.getStyleSaver=Pd;(function(t,e,n,i){var r=en(t+","+e+","+n,function(s){di[s]=1});en(e,function(s){vn.units[s]="deg",kd[s]=1}),qn[r[13]]=t+","+e,en(i,function(s){var a=s.split(":");qn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");en("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){vn.units[t]="px"});rn.registerPlugin(Od);var Ee=rn.registerPlugin(Od)||rn,lx=Ee.core.Tween,Sl=["spades","hearts","diamonds","clubs"],Fd=[2,3,4,5,6,7,8,9,10,11,12,13,14],wm={spades:"♠",hearts:"♥",diamonds:"♦",clubs:"♣"},Ha={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K",14:"A"};function Am(t){return t===14?11:t>=11?10:t}var Rm=0;function Bd(t,e){return{id:`c${++Rm}`,suit:t,rank:e,enhancement:"none",seal:"none",edition:"base",baseChips:Am(e)}}function ta(){const t=[];for(const e of Sl)for(const n of Fd)t.push(Bd(e,n));return t}function Pm(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function tu(t,e=Math.random){const n=t.slice();for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}var Xn={"High Card":{chips:5,mult:1,chipsPerLvl:10,multPerLvl:1},Pair:{chips:10,mult:2,chipsPerLvl:15,multPerLvl:1},"Two Pair":{chips:20,mult:2,chipsPerLvl:20,multPerLvl:1},"Three of a Kind":{chips:30,mult:3,chipsPerLvl:20,multPerLvl:2},Straight:{chips:30,mult:4,chipsPerLvl:30,multPerLvl:3},Flush:{chips:35,mult:4,chipsPerLvl:15,multPerLvl:2},"Full House":{chips:40,mult:4,chipsPerLvl:25,multPerLvl:2},"Four of a Kind":{chips:60,mult:7,chipsPerLvl:30,multPerLvl:3},"Straight Flush":{chips:100,mult:8,chipsPerLvl:40,multPerLvl:4},"Five of a Kind":{chips:120,mult:12,chipsPerLvl:35,multPerLvl:3},"Flush House":{chips:140,mult:14,chipsPerLvl:40,multPerLvl:4},"Flush Five":{chips:160,mult:16,chipsPerLvl:50,multPerLvl:3}};function Lm(t){const e=new Map;for(const n of t){if(n.enhancement==="stone")continue;const i=e.get(n.rank)??[];i.push(n),e.set(n.rank,i)}return[...e.entries()].map(([n,i])=>({rank:n,cards:i})).sort((n,i)=>i.cards.length-n.cards.length||i.rank-n.rank)}function Dm(t){const e=t.filter(n=>n.enhancement!=="stone");if(e.length<5)return null;for(const n of["spades","hearts","diamonds","clubs"]){const i=e.filter(r=>r.suit===n||r.enhancement==="wild");if(i.length>=5){const r=new Set(i.slice(0,5).map(s=>s.id));return t.filter(s=>r.has(s.id))}}return null}function Im(t){const e=new Map;for(const i of t)i.enhancement!=="stone"&&(e.has(i.rank)||e.set(i.rank,i));if(e.size<5)return null;if(e.has(14)&&[2,3,4,5].every(i=>e.has(i)))return new Set([14,2,3,4,5]);const n=[...e.keys()].sort((i,r)=>i-r);for(let i=n.length-5;i>=0;i--){let r=!0;for(let s=1;s<5;s++)if(n[i+s]!==n[i]+s){r=!1;break}if(r)return new Set(n.slice(i,i+5))}return null}function km(t,e){return t.filter(n=>e.has(n.id)||n.enhancement==="stone")}function Ts(t){const e=t.filter(h=>h.enhancement!=="stone"),n=Lm(e),i=n.map(h=>h.cards.length),r=Dm(e),s=Im(e),a=h=>i.includes(h),o=h=>i.filter(m=>m===h).length,l=(...h)=>new Set(h.flatMap(m=>m.cards.map(_=>_.id))),c=new Set(e.map(h=>h.id));let u="High Card",d=new Set;if(a(5)&&r)u="Flush Five",d=l(n[0]);else if(a(3)&&a(2)&&r)u="Flush House",d=new Set(c);else if(a(5))u="Five of a Kind",d=l(n[0]);else if(s&&r){const h=new Set(r.map(_=>_.id)),m=new Set(e.filter(_=>s.has(_.rank)&&h.has(_.id)).map(_=>_.id));m.size>=5?(u="Straight Flush",d=m):(u="Flush",d=new Set(r.map(_=>_.id)))}else if(a(4))u="Four of a Kind",d=l(n[0]);else if(a(3)&&a(2))u="Full House",d=l(n.find(h=>h.cards.length===3),n.find(h=>h.cards.length===2));else if(r)u="Flush",d=new Set(r.map(h=>h.id));else if(s)u="Straight",d=new Set(e.filter(h=>s.has(h.rank)).map(h=>h.id));else if(a(3))u="Three of a Kind",d=l(n[0]);else if(o(2)>=2){const h=n.filter(m=>m.cards.length===2).slice(0,2);u="Two Pair",d=l(...h)}else if(a(2))u="Pair",d=l(n.find(h=>h.cards.length===2));else{u="High Card";const h=e.slice().sort((m,_)=>_.rank-m.rank)[0];h&&d.add(h.id)}return{type:u,scoringCards:km(t,d),allPlayed:t.slice()}}function It(t,e){const n=t.chips,i=t.mult;e.chipsDelta&&(t.chips+=e.chipsDelta),e.multDelta&&(t.mult+=e.multDelta),e.multMul&&e.multMul!==1&&(t.mult*=e.multMul),e.moneyDelta&&(t.money+=e.moneyDelta),t.steps.push({...e,chipsBefore:n,chipsAfter:t.chips,multBefore:i,multAfter:t.mult})}function Nm(t,e,n,i,r){const s=i?" (retrigger)":"";if(r){e.steps.push({source:`${xl(t)} debuffed${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsBefore:e.chips,chipsAfter:e.chips,multBefore:e.mult,multAfter:e.mult});return}t.enhancement==="stone"?It(e,{source:`Stone +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):(It(e,{source:`${xl(t)} +${t.baseChips} Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:t.baseChips}),t.enhancement==="bonus"?It(e,{source:`Bonus +30 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:30}):t.enhancement==="mult"?It(e,{source:`Mult Card +4 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:4}):t.enhancement==="glass"?It(e,{source:`Glass ×2 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:2}):t.enhancement==="lucky"&&(n()<1/5&&It(e,{source:`Lucky +20 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:20}),n()<1/15&&It(e,{source:`Lucky +$20${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:20}))),t.seal==="gold"&&It(e,{source:`Gold Seal +$3${s}`,stage:"played_card",cardId:t.id,retrigger:i,moneyDelta:3}),t.edition==="foil"?It(e,{source:`Foil +50 Chips${s}`,stage:"played_card",cardId:t.id,retrigger:i,chipsDelta:50}):t.edition==="holographic"?It(e,{source:`Holographic +10 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multDelta:10}):t.edition==="polychrome"&&It(e,{source:`Polychrome ×1.5 Mult${s}`,stage:"played_card",cardId:t.id,retrigger:i,multMul:1.5})}function Um(t,e,n){t.enhancement==="steel"&&It(e,{source:`Steel ×1.5 Mult${n?" (retrigger)":""}`,stage:"held_card",cardId:t.id,retrigger:n,multMul:1.5})}function Gr(t){return t.rank>=11&&t.rank<=13}function Qr(t){return t.sticker==="perishable"&&(t.perishableRounds??0)<=0}function oi(t,e){return(e.bossDebuffSuits??[]).includes(t.suit)||!!(e.bossDebuffFace&&Gr(t))}function _r(t,e,n){return oi(t,n)?!1:t.enhancement==="wild"||t.suit===e}function zd(t){return t.rank===14?11:t.rank>=11?10:t.rank}function Om(t,e){return t.scoringCards.findIndex(n=>Gr(n)&&!oi(n,e))}function Fm(t,e,n,i){let r=0;for(const s of i.jokers??[]){if(Qr(s))continue;const a=s.effect;a.kind==="retrigger-last-hand"&&i.isFinalHand||a.kind==="retrigger-ranks"&&a.ranks.includes(t.rank)||a.kind==="retrigger-face"&&Gr(t)?r+=1:a.kind==="retrigger-first"&&e===0?r+=a.extra:(a.kind==="mythic-chronos"&&(e===0||e===n.scoringCards.length-1)||a.kind==="mythic-ace"&&t.rank===14||a.kind==="mythic-blacklotus"&&(t.suit==="spades"||t.suit==="clubs"||t.enhancement==="wild")||a.kind==="mythic-emperor"&&i.isFinalHand)&&(r+=1)}return r}function Bm(t,e,n,i,r,s,a){if(oi(t,i))return;const o=a?" (retrigger)":"";for(const l of i.jokers??[]){if(Qr(l))continue;const c=l.effect,u=d=>It(r,{...d,stage:"played_card",jokerId:l.id,cardId:t.id,retrigger:a});c.kind==="score-suit-mult"&&_r(t,c.suit,i)?u({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="score-suit-chips"&&_r(t,c.suit,i)?u({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-suit-money"&&_r(t,c.suit,i)?u({source:`${l.name} +$${c.amount}${o}`,moneyDelta:c.amount}):c.kind==="score-rank-mult"&&c.ranks.includes(t.rank)?u({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="score-rank-chips"&&c.ranks.includes(t.rank)?u({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-rank-bonus"&&c.ranks.includes(t.rank)?u({source:`${l.name} +${c.chips} Chips +${c.mult} Mult${o}`,chipsDelta:c.chips,multDelta:c.mult}):c.kind==="score-face-chips"&&Gr(t)?u({source:`${l.name} +${c.amount} Chips${o}`,chipsDelta:c.amount}):c.kind==="score-face-mult"&&Gr(t)?u({source:`${l.name} +${c.amount} Mult${o}`,multDelta:c.amount}):c.kind==="suit-chance-xmult"&&_r(t,c.suit,i)?s()<c.chance&&u({source:`${l.name} ×${c.amount} Mult${o}`,multMul:c.amount}):c.kind==="first-face-xmult"&&n===e?u({source:`${l.name} ×${c.amount} Mult${o}`,multMul:c.amount}):c.kind==="mythic-royal"&&Gr(t)?u({source:`${l.name} +40 Chips +8 Mult${o}`,chipsDelta:40,multDelta:8}):c.kind==="mythic-ace"&&t.rank===14?u({source:`${l.name} ×1.25 Mult${o}`,multMul:1.25}):c.kind==="mythic-dragon"&&t.seal==="gold"?u({source:`${l.name} +$5 ×1.5 Mult${o}`,moneyDelta:5,multMul:1.5}):c.kind==="mythic-kaleidoscope"&&t.edition!=="base"&&t.edition!=="negative"?u({source:`${l.name} ×1.35 Mult${o}`,multMul:1.35}):c.kind==="mythic-bloodmoon"&&(_r(t,"hearts",i)&&u({source:`${l.name} Heart ×1.3${o}`,multMul:1.3}),_r(t,"diamonds",i)&&u({source:`${l.name} Diamond +$2${o}`,moneyDelta:2}))}}function zm(t,e,n,i,r){if(!oi(t,n)&&(Um(t,i,r),t.id===e))for(const s of n.jokers??[]){if(Qr(s)||s.effect.kind!=="lowest-held-mult")continue;const a=zd(t)*s.effect.multiplier;It(i,{source:`${s.name} +${a} Mult${r?" (retrigger)":""}`,stage:"held_card",cardId:t.id,jokerId:s.id,retrigger:r,multDelta:a})}}function Vm(t,e,n,i,r){if(Qr(t))return;const s=t.effect,a=n.heldCards??[],o=l=>It(i,{...l,stage:"joker",jokerId:t.id});if(s.kind==="chips")o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="mult")o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="xmult")o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="random-mult"){const l=s.min+Math.floor(r()*(s.max-s.min+1));t.counter=l,l>0?o({source:`${t.name} +${l} Mult`,multDelta:l}):o({source:`${t.name} +0 Mult`})}else if(s.kind==="pair-mult")Hm(e.type)&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="flush-mult-mul")e.type.includes("Flush")&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="first-hand-chips")n.handsLeftBeforePlay===n.handsPerRound&&o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-mult")s.handTypes.includes(e.type)&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="hand-chips")s.handTypes.includes(e.type)&&o({source:`${t.name} +${s.amount} Chips`,chipsDelta:s.amount});else if(s.kind==="hand-xmult")s.handTypes.includes(e.type)&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="few-cards-mult")e.allPlayed.length<=s.maxCards&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="discard-chips"){const l=Math.max(0,n.discardsLeft??0)*s.amountPerDiscard;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="zero-discard-mult")(n.discardsLeft??0)===0&&o({source:`${t.name} +${s.amount} Mult`,multDelta:s.amount});else if(s.kind==="joker-count-mult"){const l=Math.max(0,n.jokerCount??0)*s.amountPerJoker;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="held-black-xmult")a.every(l=>l.enhancement==="stone"?!1:l.enhancement==="wild"&&!oi(l,n)?!0:l.suit==="spades"||l.suit==="clubs")&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="decay-chips"){const l=Math.max(0,t.counter??s.start);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="straight-scale-chips"){const l=Math.max(0,t.counter??s.start??0);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="bus-scale-mult"||s.kind==="green-scale-mult"){const l=Math.max(0,t.counter??0);l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="deck-remaining-chips"){const l=Math.max(0,n.deckRemaining??0)*s.amountPerCard;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="money-chips"){const l=Math.max(0,Math.floor(n.money??0))*s.amountPerDollar;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="money-mult"){const l=Math.floor(Math.max(0,n.money??0)/s.dollarsPerStep)*s.amountPerStep;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="repeat-hand-xmult")n.handAlreadyPlayedThisRound&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="last-hand-xmult")n.isFinalHand&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="loyalty-xmult")(t.counter??0)===s.every-1&&o({source:`${t.name} ×${s.amount} Mult`,multMul:s.amount});else if(s.kind==="hand-count-mult"){const l=Math.max(0,n.handPlayCount??0)*s.amountPerPlay;l&&o({source:`${t.name} +${l} Mult`,multDelta:l})}else if(s.kind==="castle-scale-chips"){const l=Math.max(0,t.counter??0);l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="mythic-prism"){const l=1+new Set(e.scoringCards.filter(c=>!oi(c,n)).map(c=>c.suit)).size*.75;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-phoenix"){const l=1+Math.max(0,t.counter??0)*.25;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-leviathan"){const l=Math.max(0,n.fullDeckSize??0)*8;l&&o({source:`${t.name} +${l} Chips`,chipsDelta:l})}else if(s.kind==="mythic-eclipse"){const l=a.filter(d=>d.enhancement!=="stone"),c=l.every(d=>d.enhancement==="wild"||d.suit==="hearts"||d.suit==="diamonds"),u=l.every(d=>d.enhancement==="wild"||d.suit==="spades"||d.suit==="clubs");!a.some(d=>d.enhancement==="stone")&&(c||u)&&o({source:`${t.name} ×4 Mult`,multMul:4})}else if(s.kind==="mythic-echo"){const l=1+Math.max(0,n.priorSameHandCount??0)*.5;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-quantum"){const l=Math.floor(r()*4);t.counter=l,o(l===0?{source:`${t.name} +250 Chips`,chipsDelta:250}:l===1?{source:`${t.name} +35 Mult`,multDelta:35}:l===2?{source:`${t.name} ×3 Mult`,multMul:3}:{source:`${t.name} +$12`,moneyDelta:12})}else if(s.kind==="mythic-void"){const l=1+Math.max(0,(n.jokerCapacity??n.jokerCount??0)-(n.jokerCount??0))*.75;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-oracle"){const l=e.scoringCards.filter(c=>!oi(c,n)&&c.enhancement!=="stone").reduce((c,u)=>c+u.rank,0);l>0&&l%13===0&&o({source:`${t.name} ×5 Mult`,multMul:5})}else if(s.kind==="mythic-forge"){const l=1+Math.max(0,n.handLevelExtra??0)*.08;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-grail")r()<1/6?o({source:`${t.name} JACKPOT ×6 Mult`,multMul:6}):o({source:`${t.name} +6 Mult`,multDelta:6});else if(s.kind==="mythic-staircase"){const l=1+Math.max(0,n.distinctHandTypesThisRound??0)*.5;l>1&&o({source:`${t.name} ×${l.toFixed(2)} Mult`,multMul:l})}else if(s.kind==="mythic-emperor")n.isFinalHand&&o({source:`${t.name} ×5 Mult`,multMul:5});else if(s.kind==="mythic-worldtree"){const l=a.filter(u=>u.enhancement!=="none"||u.seal!=="none"||u.edition!=="base"&&u.edition!=="negative").length,c=Math.pow(1.25,l);c>1&&o({source:`${t.name} ×${c.toFixed(2)} Mult`,multMul:c})}}function Gm(t,e,n={}){const i=Xn[t.type],r=Math.max(1,e.level),s=i.chips+i.chipsPerLvl*(r-1),a=i.mult+i.multPerLvl*(r-1),o=n.bossHalveBase?Math.max(1,Math.floor(s/2)):s,l=n.bossHalveBase?Math.max(1,a/2):a,c=n.rng??Math.random,u={chips:o,mult:l,money:0,steps:[{source:`${t.type} (lvl ${r})`,stage:"base",chipsDelta:o,multDelta:l,chipsBefore:0,chipsAfter:o,multBefore:0,multAfter:l}]},d=Om(t,n);for(let f=0;f<t.scoringCards.length;f++){const y=t.scoringCards[f],T=1+(y.seal==="red"?1:0)+Fm(y,f,t,n);for(let b=0;b<T;b++){const E=b>0,A=oi(y,n);Nm(y,u,c,E,A),A||Bm(y,d,f,n,u,c,E)}}const h=n.heldCards??[];let m=null;const _=h.filter(f=>f.enhancement!=="stone").map((f,y)=>({card:f,index:y,value:zd(f)}));if(_.length>0){const f=Math.min(..._.map(T=>T.value)),y=_.filter(T=>T.value===f);m=y[y.length-1].card.id}const p=(n.jokers??[]).filter(f=>!Qr(f)&&f.effect.kind==="retrigger-held").length;for(const f of h){if(!(f.enhancement==="steel"||f.id===m))continue;const y=1+(f.seal==="red"?1:0)+p;for(let T=0;T<y;T++)zm(f,m,n,u,T>0)}for(const f of n.jokers??[]){if(Qr(f))continue;const y=f.edition??"base";y==="foil"?It(u,{source:`${f.name} Foil +50 Chips`,stage:"joker",chipsDelta:50,jokerId:f.id}):y==="holographic"&&It(u,{source:`${f.name} Holographic +10 Mult`,stage:"joker",multDelta:10,jokerId:f.id}),f.effect.kind==="score-suit-mult"||f.effect.kind==="score-suit-chips"||f.effect.kind==="score-suit-money"||f.effect.kind==="score-rank-mult"||f.effect.kind==="score-rank-chips"||f.effect.kind==="score-rank-bonus"||f.effect.kind==="score-face-chips"||f.effect.kind==="score-face-mult"||f.effect.kind==="lowest-held-mult"||f.effect.kind==="retrigger-last-hand"||f.effect.kind==="retrigger-ranks"||f.effect.kind==="retrigger-held"||f.effect.kind==="retrigger-face"||f.effect.kind==="retrigger-first"||f.effect.kind==="suit-chance-xmult"||f.effect.kind==="first-face-xmult"||f.effect.kind==="mythic-chronos"||f.effect.kind==="mythic-royal"||f.effect.kind==="mythic-ace"||f.effect.kind==="mythic-dragon"||f.effect.kind==="mythic-kaleidoscope"||f.effect.kind==="mythic-bloodmoon"||f.effect.kind==="mythic-blacklotus"||Vm(f,t,n,u,c),y==="polychrome"&&It(u,{source:`${f.name} Polychrome ×1.5 Mult`,stage:"joker",multMul:1.5,jokerId:f.id})}const g=[];for(const f of t.scoringCards)f.enhancement!=="glass"||oi(f,n)||c()<1/4&&(g.push(f.id),u.steps.push({source:`${xl(f)} Glass shattered`,stage:"destruction",cardId:f.id,chipsBefore:u.chips,chipsAfter:u.chips,multBefore:u.mult,multAfter:u.mult}));return{hand:t,baseChips:o,baseMult:l,finalChips:u.chips,finalMult:u.mult,total:Math.floor(u.chips*u.mult),moneyDelta:u.money,destroyedCardIds:g,steps:u.steps}}function Hm(t){return t==="Pair"||t==="Two Pair"||t==="Three of a Kind"||t==="Full House"||t==="Four of a Kind"||t==="Five of a Kind"||t==="Flush House"||t==="Flush Five"}function xl(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":`${t.rank}`}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}var nu=[{key:"pluto",name:"Pluto",description:"Level up High Card.",type:"planet",price:3,effect:{kind:"planet",handType:"High Card"}},{key:"mercury",name:"Mercury",description:"Level up Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Pair"}},{key:"uranus",name:"Uranus",description:"Level up Two Pair.",type:"planet",price:3,effect:{kind:"planet",handType:"Two Pair"}},{key:"venus",name:"Venus",description:"Level up Three of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Three of a Kind"}},{key:"saturn",name:"Saturn",description:"Level up Straight.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight"}},{key:"jupiter",name:"Jupiter",description:"Level up Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush"}},{key:"earth",name:"Earth",description:"Level up Full House.",type:"planet",price:3,effect:{kind:"planet",handType:"Full House"}},{key:"mars",name:"Mars",description:"Level up Four of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Four of a Kind"}},{key:"neptune",name:"Neptune",description:"Level up Straight Flush.",type:"planet",price:3,effect:{kind:"planet",handType:"Straight Flush"}},{key:"planet-x",name:"Planet X",description:"Level up Five of a Kind.",type:"planet",price:3,effect:{kind:"planet",handType:"Five of a Kind"}},{key:"ceres",name:"Ceres",description:"Level up Flush House.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush House"}},{key:"eris",name:"Eris",description:"Level up Flush Five.",type:"planet",price:3,effect:{kind:"planet",handType:"Flush Five"}}],Mo=[{key:"the-magician",name:"The Magician",description:"Enhance up to 2 selected cards into Lucky Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"lucky",min:1,max:2}},{key:"the-empress",name:"The Empress",description:"Enhance up to 2 selected cards into Mult Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"mult",min:1,max:2}},{key:"the-hierophant",name:"The Hierophant",description:"Enhance up to 2 selected cards into Bonus Cards.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"bonus",min:1,max:2}},{key:"the-chariot",name:"The Chariot",description:"Enhance 1 selected card into a Steel Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"steel",min:1,max:1}},{key:"justice",name:"Justice",description:"Enhance 1 selected card into a Glass Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"glass",min:1,max:1}},{key:"the-devil",name:"The Devil",description:"Enhance 1 selected card into a Gold Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"gold",min:1,max:1}},{key:"the-tower",name:"The Tower",description:"Enhance 1 selected card into a Stone Card.",type:"tarot",price:3,effect:{kind:"enhance-selected",enhancement:"stone",min:1,max:1}},{key:"the-star",name:"The Star",description:"Convert up to 3 selected cards to Diamonds.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"diamonds",min:1,max:3}},{key:"the-moon",name:"The Moon",description:"Convert up to 3 selected cards to Clubs.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"clubs",min:1,max:3}},{key:"the-sun",name:"The Sun",description:"Convert up to 3 selected cards to Hearts.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"hearts",min:1,max:3}},{key:"the-world",name:"The World",description:"Convert up to 3 selected cards to Spades.",type:"tarot",price:3,effect:{kind:"convert-suit",suit:"spades",min:1,max:3}},{key:"death",name:"Death",description:"Select 2 cards. The left card becomes a copy of the right card.",type:"tarot",price:3,effect:{kind:"copy-right-to-left",min:2,max:2}},{key:"the-hanged-man",name:"The Hanged Man",description:"Destroy up to 2 selected cards.",type:"tarot",price:3,effect:{kind:"destroy-selected",min:1,max:2}},{key:"the-hermit",name:"The Hermit",description:"Doubles money, up to a maximum gain of $20.",type:"tarot",price:3,effect:{kind:"money",mode:"double-up-to-20"}}],iu=[{key:"aura",name:"Aura",description:"Add Foil, Holographic or Polychrome to 1 selected card.",type:"spectral",price:4,effect:{kind:"edition-selected",edition:"random",min:1,max:1}},{key:"talisman",name:"Talisman",description:"Add a Gold Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"gold",min:1,max:1}},{key:"deja-vu",name:"Deja Vu",description:"Add a Red Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"red",min:1,max:1}},{key:"trance",name:"Trance",description:"Add a Blue Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"blue",min:1,max:1}},{key:"medium",name:"Medium",description:"Add a Purple Seal to 1 selected card.",type:"spectral",price:4,effect:{kind:"seal-selected",seal:"purple",min:1,max:1}},{key:"cryptid",name:"Cryptid",description:"Create 2 copies of 1 selected card in your deck.",type:"spectral",price:4,effect:{kind:"duplicate-selected",copies:2,min:1,max:1}},{key:"immolate",name:"Immolate",description:"Destroy up to 5 selected cards and gain $20.",type:"spectral",price:4,effect:{kind:"immolate-selected",min:1,max:5,money:20}}],Wm=["arcana","celestial","standard","buffoon","spectral"];function ru(t,e){const n=t==="buffoon";return e==="normal"?{choices:n?2:3,picks:1,price:4}:e==="jumbo"?{choices:n?4:5,picks:1,price:6}:{choices:n?4:5,picks:2,price:8}}function Xm(t,e){return(e==="normal"?"":e==="jumbo"?"Jumbo ":"Mega ")+(t==="arcana"?"Arcana Pack":t==="celestial"?"Celestial Pack":t==="standard"?"Standard Pack":t==="buffoon"?"Buffoon Pack":"Spectral Pack")}function su(t){if(!("min"in t&&"max"in t))return null;const e=t.kind==="copy-right-to-left"?"Select exactly 2 cards. Left becomes a copy of right.":t.kind==="destroy-selected"?"Select cards to destroy.":t.kind==="immolate-selected"?"Select cards to destroy for $20.":t.kind==="convert-suit"?"Select cards to change suit.":t.kind==="edition-selected"?"Select a card to receive an Edition.":t.kind==="seal-selected"?"Select a card to receive a Seal.":t.kind==="duplicate-selected"?"Select a card to copy.":"Select card(s) to enhance.";return{min:t.min,max:t.max,instruction:e}}var au={grabber:{key:"grabber",name:"Grabber",description:"+1 hand every round.",price:10},wasteful:{key:"wasteful",name:"Wasteful",description:"+1 discard every round.",price:10},"crystal-ball":{key:"crystal-ball",name:"Crystal Ball",description:"+1 consumable slot.",price:10},"reroll-surplus":{key:"reroll-surplus",name:"Reroll Surplus",description:"Rerolls cost $2 less.",price:10},"clearance-sale":{key:"clearance-sale",name:"Clearance Sale",description:"Shop cards and Booster Packs are 25% off.",price:10}},ou={red:{key:"red",name:"Red Deck",description:"+1 Discard every round."},blue:{key:"blue",name:"Blue Deck",description:"+1 Hand every round."},yellow:{key:"yellow",name:"Yellow Deck",description:"Start with $10 extra."},green:{key:"green",name:"Green Deck",description:"No interest; cashout pays $2 per unused Hand and $1 per unused Discard."},black:{key:"black",name:"Black Deck",description:"+1 Joker slot, -1 Hand every round."}},Vt={white:{key:"white",name:"White Stake",description:"Base difficulty.",order:0},red:{key:"red",name:"Red Stake",description:"Small Blind gives no base reward.",order:1},green:{key:"green",name:"Green Stake",description:"Score requirements scale faster.",order:2},black:{key:"black",name:"Black Stake",description:"Generated Jokers may be Eternal.",order:3},blue:{key:"blue",name:"Blue Stake",description:"-1 Discard every round.",order:4},purple:{key:"purple",name:"Purple Stake",description:"Score requirements scale even faster.",order:5},orange:{key:"orange",name:"Orange Stake",description:"Generated Jokers may be Perishable.",order:6},gold:{key:"gold",name:"Gold Stake",description:"Generated Jokers may also be Rental.",order:7}},bl={investment:{key:"investment",name:"Investment Tag",description:"Gain $25 after defeating the next Boss Blind."},coupon:{key:"coupon",name:"Coupon Tag",description:"Initial Shop cards and Booster Packs in the next Shop are free."},double:{key:"double",name:"Double Tag",description:"Copies the next non-Double Tag."},juggle:{key:"juggle",name:"Juggle Tag",description:"+3 Hand Size for the next round."},d6:{key:"d6",name:"D6 Tag",description:"Next Shop starts with a free reroll."},speed:{key:"speed",name:"Speed Tag",description:"Gain $5 for every Blind skipped this run."},economy:{key:"economy",name:"Economy Tag",description:"Double current money, adding at most $40."},"top-up":{key:"top-up",name:"Top-up Tag",description:"Create up to 2 Common Jokers if space exists."},boss:{key:"boss",name:"Boss Tag",description:"Reroll the Boss Blind for this Ante."}},Bs={wall:{key:"wall",name:"The Wall",description:"Very large Blind: score requirement is doubled again.",targetMult:4},arm:{key:"arm",name:"The Arm",description:"Playing a hand lowers that Poker Hand by 1 level.",targetMult:2},psychic:{key:"psychic",name:"The Psychic",description:"You must play exactly 5 cards.",targetMult:2},goad:{key:"goad",name:"The Goad",description:"Spade cards are debuffed.",targetMult:2},water:{key:"water",name:"The Water",description:"Start this Blind with 0 Discards.",targetMult:2},window:{key:"window",name:"The Window",description:"Diamond cards are debuffed.",targetMult:2},manacle:{key:"manacle",name:"The Manacle",description:"-1 Hand Size for this Blind.",targetMult:2},eye:{key:"eye",name:"The Eye",description:"No Poker Hand may be played more than once this Blind.",targetMult:2},mouth:{key:"mouth",name:"The Mouth",description:"After the first hand, only that Poker Hand may be played.",targetMult:2},plant:{key:"plant",name:"The Plant",description:"Face cards are debuffed.",targetMult:2},needle:{key:"needle",name:"The Needle",description:"Play only 1 Hand; score requirement is 1x Ante base.",targetMult:1},head:{key:"head",name:"The Head",description:"Heart cards are debuffed.",targetMult:2},tooth:{key:"tooth",name:"The Tooth",description:"Lose $1 for every card played.",targetMult:2},flint:{key:"flint",name:"The Flint",description:"Base Chips and Mult are halved.",targetMult:2}},$m=[300,800,2e3,5e3,11e3,2e4,35e3,5e4],jm=[300,900,2600,8e3,2e4,36e3,6e4,1e5],qm=[300,1e3,3200,9e3,25e3,6e4,11e4,2e5],lu=Object.keys(bl),cu=Object.keys(Bs),Ym={seed:Math.floor(Math.random()*1e9),handSize:8,handsPerRound:4,discardsPerRound:3,startingMoney:4};var Km=5,Hr=[{key:"joker",name:"Joker",description:"+4 Mult.",rarity:"common",price:2,effect:{kind:"mult",amount:4}},{key:"greedy-joker",name:"Greedy Joker",description:"Each scoring Diamond gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"diamonds",amount:3}},{key:"lusty-joker",name:"Lusty Joker",description:"Each scoring Heart gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"hearts",amount:3}},{key:"wrathful-joker",name:"Wrathful Joker",description:"Each scoring Spade gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"spades",amount:3}},{key:"gluttonous-joker",name:"Gluttonous Joker",description:"Each scoring Club gives +3 Mult.",rarity:"common",price:5,effect:{kind:"score-suit-mult",suit:"clubs",amount:3}},{key:"jolly-joker",name:"Jolly Joker",description:"+8 Mult when the hand contains a Pair.",rarity:"common",price:3,effect:{kind:"pair-mult",amount:8}},{key:"crazy-joker",name:"Crazy Joker",description:"+12 Mult on Straight hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Straight","Straight Flush"],amount:12}},{key:"droll-joker",name:"Droll Joker",description:"+10 Mult on Flush hands.",rarity:"common",price:4,effect:{kind:"hand-mult",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:10}},{key:"sly-joker",name:"Sly Joker",description:"+50 Chips on Pair-family hands.",rarity:"common",price:3,effect:{kind:"hand-chips",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:50}},{key:"wily-joker",name:"Wily Joker",description:"+100 Chips on Three-of-a-Kind-family hands.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:100}},{key:"clever-joker",name:"Clever Joker",description:"+80 Chips on Two Pair or Full House.",rarity:"common",price:4,effect:{kind:"hand-chips",handTypes:["Two Pair","Full House","Flush House"],amount:80}},{key:"devious-joker",name:"Devious Joker",description:"+100 Chips on Straight hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Straight","Straight Flush"],amount:100}},{key:"crafty-joker",name:"Crafty Joker",description:"+80 Chips on Flush hands.",rarity:"common",price:5,effect:{kind:"hand-chips",handTypes:["Flush","Straight Flush","Flush House","Flush Five"],amount:80}},{key:"half-joker",name:"Half Joker",description:"+20 Mult if 3 or fewer cards are played.",rarity:"common",price:5,effect:{kind:"few-cards-mult",maxCards:3,amount:20}},{key:"banner",name:"Banner",description:"+30 Chips for each remaining Discard.",rarity:"common",price:5,effect:{kind:"discard-chips",amountPerDiscard:30}},{key:"mystic-summit",name:"Mystic Summit",description:"+15 Mult when no Discards remain.",rarity:"common",price:5,effect:{kind:"zero-discard-mult",amount:15}},{key:"raised-fist",name:"Raised Fist",description:"Adds twice the rank of the lowest held card to Mult.",rarity:"common",price:5,effect:{kind:"lowest-held-mult",multiplier:2}},{key:"misprint",name:"Misprint",description:"+0–23 Mult, randomly rolled each played hand.",rarity:"common",price:4,effect:{kind:"random-mult",min:0,max:23}},{key:"even-steven",name:"Even Steven",description:"Scoring even ranks give +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-mult",ranks:[2,4,6,8,10],amount:4}},{key:"odd-todd",name:"Odd Todd",description:"Scoring odd ranks and Aces give +31 Chips.",rarity:"common",price:4,effect:{kind:"score-rank-chips",ranks:[3,5,7,9,14],amount:31}},{key:"scholar",name:"Scholar",description:"Scoring Aces give +20 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[14],chips:20,mult:4}},{key:"scary-face",name:"Scary Face",description:"Scoring face cards give +30 Chips.",rarity:"common",price:4,effect:{kind:"score-face-chips",amount:30}},{key:"smiley-face",name:"Smiley Face",description:"Scoring face cards give +5 Mult.",rarity:"common",price:4,effect:{kind:"score-face-mult",amount:5}},{key:"fibonacci",name:"Fibonacci",description:"A, 2, 3, 5 and 8 give +8 Mult when scored.",rarity:"uncommon",price:8,effect:{kind:"score-rank-mult",ranks:[14,2,3,5,8],amount:8}},{key:"abstract-joker",name:"Abstract Joker",description:"+3 Mult for every Joker you own.",rarity:"common",price:4,effect:{kind:"joker-count-mult",amountPerJoker:3}},{key:"blackboard",name:"Blackboard",description:"x3 Mult if all held cards are Spades or Clubs.",rarity:"uncommon",price:6,effect:{kind:"held-black-xmult",amount:3}},{key:"ice-cream",name:"Ice Cream",description:"Starts at +100 Chips and loses 5 Chips after each hand.",rarity:"common",price:5,effect:{kind:"decay-chips",start:100,decay:5}},{key:"runner",name:"Runner",description:"Gains +15 Chips whenever you play a Straight.",rarity:"common",price:5,effect:{kind:"straight-scale-chips",gain:15,start:0}},{key:"ride-the-bus",name:"Ride the Bus",description:"Gains +1 Mult after a hand with no scoring face card; resets otherwise.",rarity:"common",price:6,effect:{kind:"bus-scale-mult",gain:1}},{key:"green-joker",name:"Green Joker",description:"Gains +1 Mult per hand and loses 1 per discard.",rarity:"common",price:4,effect:{kind:"green-scale-mult",handGain:1,discardLoss:1}},{key:"blue-joker",name:"Blue Joker",description:"+2 Chips per card remaining in the draw pile.",rarity:"common",price:5,effect:{kind:"deck-remaining-chips",amountPerCard:2}},{key:"dusk",name:"Dusk",description:"Retrigger all scoring cards on the final Hand of a Blind.",rarity:"uncommon",price:5,effect:{kind:"retrigger-last-hand"}},{key:"hack",name:"Hack",description:"Retrigger scoring 2, 3, 4 and 5 cards.",rarity:"uncommon",price:6,effect:{kind:"retrigger-ranks",ranks:[2,3,4,5]}},{key:"mime",name:"Mime",description:"Retrigger held-card abilities once.",rarity:"uncommon",price:5,effect:{kind:"retrigger-held"}},{key:"sock-and-buskin",name:"Sock and Buskin",description:"Retrigger scoring face cards once.",rarity:"uncommon",price:6,effect:{kind:"retrigger-face"}},{key:"hanging-chad",name:"Hanging Chad",description:"Retrigger the first scoring card 2 extra times.",rarity:"common",price:4,effect:{kind:"retrigger-first",extra:2}},{key:"bloodstone",name:"Bloodstone",description:"Each scoring Heart has a 1 in 2 chance to give x1.5 Mult.",rarity:"uncommon",price:7,effect:{kind:"suit-chance-xmult",suit:"hearts",chance:.5,amount:1.5}},{key:"arrowhead",name:"Arrowhead",description:"Each scoring Spade gives +50 Chips.",rarity:"uncommon",price:7,effect:{kind:"score-suit-chips",suit:"spades",amount:50}},{key:"onyx-agate",name:"Onyx Agate",description:"Each scoring Club gives +7 Mult.",rarity:"uncommon",price:7,effect:{kind:"score-suit-mult",suit:"clubs",amount:7}},{key:"rough-gem",name:"Rough Gem",description:"Each scoring Diamond gives $1.",rarity:"uncommon",price:7,effect:{kind:"score-suit-money",suit:"diamonds",amount:1}},{key:"photograph",name:"Photograph",description:"The first scoring face card gives x2 Mult.",rarity:"common",price:5,effect:{kind:"first-face-xmult",amount:2}},{key:"walkie-talkie",name:"Walkie Talkie",description:"Scoring 10s and 4s give +10 Chips and +4 Mult.",rarity:"common",price:4,effect:{kind:"score-rank-bonus",ranks:[10,4],chips:10,mult:4}},{key:"castle",name:"Castle",description:"Gains +3 Chips for each discarded card of its target suit.",rarity:"uncommon",price:6,effect:{kind:"castle-scale-chips",gain:3}},{key:"bull",name:"Bull",description:"+2 Chips for every $1 you have.",rarity:"uncommon",price:6,effect:{kind:"money-chips",amountPerDollar:2}},{key:"bootstraps",name:"Bootstraps",description:"+2 Mult for every $5 you have.",rarity:"uncommon",price:7,effect:{kind:"money-mult",dollarsPerStep:5,amountPerStep:2}},{key:"card-sharp",name:"Card Sharp",description:"x3 Mult if this Poker Hand was already played this Blind.",rarity:"uncommon",price:6,effect:{kind:"repeat-hand-xmult",amount:3}},{key:"acrobat",name:"Acrobat",description:"x3 Mult on the final Hand of the Blind.",rarity:"uncommon",price:6,effect:{kind:"last-hand-xmult",amount:3}},{key:"loyalty-card",name:"Loyalty Card",description:"Every 6th played hand gives x4 Mult.",rarity:"uncommon",price:5,effect:{kind:"loyalty-xmult",every:6,amount:4}},{key:"the-duo",name:"The Duo",description:"x2 Mult if the hand contains a Pair.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Pair","Two Pair","Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:2}},{key:"the-trio",name:"The Trio",description:"x3 Mult if the hand contains Three of a Kind.",rarity:"rare",price:8,effect:{kind:"hand-xmult",handTypes:["Three of a Kind","Full House","Four of a Kind","Five of a Kind","Flush House","Flush Five"],amount:3}},{key:"astral-crown",name:"Astral Crown",description:"X1 + X0.75 Mult for each distinct suit among scoring cards.",rarity:"mythic",price:12,effect:{kind:"mythic-prism"}},{key:"chronomancer",name:"Chronomancer",description:"Retrigger the first and last scoring card once.",rarity:"mythic",price:13,effect:{kind:"mythic-chronos"}},{key:"phoenix-ashes",name:"Phoenix of Ashes",description:"Starts at X1 Mult. Permanently gains X0.25 for each Glass card shattered.",rarity:"mythic",price:14,effect:{kind:"mythic-phoenix"}},{key:"leviathan",name:"Leviathan",description:"+8 Chips for every card in your full deck.",rarity:"mythic",price:12,effect:{kind:"mythic-leviathan"}},{key:"total-eclipse",name:"Total Eclipse",description:"X4 Mult if all cards held in hand are the same color, or none remain.",rarity:"mythic",price:13,effect:{kind:"mythic-eclipse"}},{key:"echo-of-ages",name:"Echo of Ages",description:"Gains X0.5 Mult for each earlier play of this Poker Hand in the current Blind.",rarity:"mythic",price:12,effect:{kind:"mythic-echo"}},{key:"royal-sovereign",name:"Royal Sovereign",description:"Each scoring face card gives +40 Chips and +8 Mult.",rarity:"mythic",price:12,effect:{kind:"mythic-royal"}},{key:"ace-ascendant",name:"Ace Ascendant",description:"Retrigger scoring Aces once; each scoring Ace activation gives X1.25 Mult.",rarity:"mythic",price:13,effect:{kind:"mythic-ace"}},{key:"quantum-jester",name:"Quantum Jester",description:"Each hand becomes one fate: +250 Chips, +35 Mult, X3 Mult, or +$12.",rarity:"mythic",price:12,effect:{kind:"mythic-quantum"}},{key:"golden-dragon",name:"Golden Dragon",description:"Each scoring Gold Seal earns +$5 and gives X1.5 Mult.",rarity:"mythic",price:14,effect:{kind:"mythic-dragon"}},{key:"void-monarch",name:"Void Monarch",description:"X1 + X0.75 Mult for each empty Joker slot.",rarity:"mythic",price:13,effect:{kind:"mythic-void"}},{key:"kaleidoscope",name:"Kaleidoscope",description:"Each scoring Foil, Holographic, or Polychrome card gives X1.35 Mult.",rarity:"mythic",price:13,effect:{kind:"mythic-kaleidoscope"}},{key:"oracle-xiii",name:"Oracle XIII",description:"X5 Mult if the sum of scoring ranks is divisible by 13.",rarity:"mythic",price:14,effect:{kind:"mythic-oracle"}},{key:"celestial-forge",name:"Celestial Forge",description:"X1 Mult plus X0.08 for every Poker Hand level gained above level 1.",rarity:"mythic",price:13,effect:{kind:"mythic-forge"}},{key:"blood-moon",name:"Blood Moon",description:"Scoring Hearts give X1.3 Mult; scoring Diamonds earn +$2.",rarity:"mythic",price:13,effect:{kind:"mythic-bloodmoon"}},{key:"black-lotus",name:"Black Lotus",description:"Retrigger scoring Spades and Clubs once.",rarity:"mythic",price:13,effect:{kind:"mythic-blacklotus"}},{key:"gamblers-grail",name:"Gambler's Grail",description:"1 in 6 chance for X6 Mult; otherwise +6 Mult.",rarity:"mythic",price:12,effect:{kind:"mythic-grail"}},{key:"infinite-staircase",name:"Infinite Staircase",description:"X1 + X0.5 Mult for each different Poker Hand already played this Blind.",rarity:"mythic",price:12,effect:{kind:"mythic-staircase"}},{key:"last-emperor",name:"Last Emperor",description:"On the final Hand: retrigger every scoring card once and give X5 Mult.",rarity:"mythic",price:15,effect:{kind:"mythic-emperor"}},{key:"world-tree",name:"World Tree",description:"X1.25 Mult for every modified card held in hand.",rarity:"mythic",price:14,effect:{kind:"mythic-worldtree"}}],cx=Hr.filter(t=>t.rarity!=="mythic").length,ux=Hr.filter(t=>t.rarity==="mythic").length,hx=Hr.length,Zm=["bonus","mult","wild","glass","steel","gold","lucky"],Jm=["foil","holographic","polychrome"];function So(t){return t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function Or(t){return{...t}}function Jn(t){return t.map(Or)}function Wa(t){return{...t,effect:{...t.effect}}}function uu(t){return t.map(Wa)}function Wr(t){return{...t,effect:{...t.effect}}}function hu(t){return t.map(Wr)}function Vd(t){return t.kind==="joker"?{kind:"joker",joker:Wa(t.joker)}:t.kind==="consumable"?{kind:"consumable",consumable:Wr(t.consumable)}:{kind:"playing-card",card:Or(t.card),name:t.name,description:t.description,price:t.price,sellValue:t.sellValue}}function Qm(t){return{...t}}function Pa(t){return t?{...t}:null}function du(t){return t?{...t,consumable:Wr(t.consumable),candidateIds:[...t.candidateIds],selectedIds:[...t.selectedIds]}:null}function fu(t){return t?{...t,choices:t.choices.map(e=>({id:e.id,taken:e.taken,item:Vd(e.item)}))}:null}function pu(t){return t?{visit:t.visit,rerolls:t.rerolls,rerollCost:t.rerollCost,boosters:t.boosters.map(Qm),voucher:Pa(t.voucher),offers:t.offers.map(e=>({id:e.id,sold:e.sold,item:Vd(e.item)}))}:null}function xo(){return Object.fromEntries(Object.keys(Xn).map(t=>[t,{level:1,chips:Xn[t].chips,mult:Xn[t].mult}]))}function mu(t){return Object.fromEntries(Object.keys(t).map(e=>[e,{...t[e]}]))}var eg=class Gd{config;rng;rngDrawCount=0;phase="play";ante=1;blindIndex=0;money;ownedDeck=[];deck=[];discardPile=[];hand=[];selected=new Set;handsLeft;discardsLeft;roundScore=0;target=0;handLevels;jokers=[];consumables=[];shop=null;booster=null;targetMode=null;vouchers=[];anteVoucher=null;lastCashout=null;deckKey="red";stakeKey="white";bossBlindKey="wall";anteTags=["investment","coupon"];skippedBlinds=0;doubleTags=0;investmentTags=0;couponNextShop=!1;couponShopVisit=null;d6NextShop=!1;juggleNextBlind=0;roundHandSize=8;playedHandTypesThisRound=[];handPlayCounts=Object.fromEntries(Object.keys(Xn).map(e=>[e,0]));handsPlayedRun=0;shopVisit=0;lastScore=null;listeners=new Set;constructor(e={},n=!0){this.config={...Ym,...e},this.rng=this.createTrackedRng(this.config.seed),this.money=this.config.startingMoney,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.handLevels=xo(),this.ownedDeck=ta(),n&&this.startBlind()}static fromSnapshot(e){const n=new Gd(e.config,!1);return n.loadSnapshot(e),n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}getRngDrawCount(){return this.rngDrawCount}targetForCurrentBlind(){const e=Vt[this.stakeKey].order,n=e>=Vt.purple.order?qm:e>=Vt.green.order?jm:$m,i=n[Math.min(this.ante-1,n.length-1)],r=this.blindIndex===0?1:this.blindIndex===1?1.5:Bs[this.bossBlindKey].targetMult;return Math.round(i*r)}startBlind(){this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.roundHandSize=this.config.handSize+this.juggleNextBlind,this.juggleNextBlind=0,this.playedHandTypesThisRound=[],this.blindIndex===2&&(this.bossBlindKey==="water"&&(this.discardsLeft=0),this.bossBlindKey==="needle"&&(this.handsLeft=1),this.bossBlindKey==="manacle"&&(this.roundHandSize=Math.max(1,this.roundHandSize-1))),this.deck=tu(Jn(this.ownedDeck),this.rng),this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.drawToFull(),this.phase="play",this.emit()}enterSetup(){this.phase="setup",this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.roundScore=0,this.emit()}configureRun(e,n){this.deckKey=e,this.stakeKey=n,this.ante=1,this.blindIndex=0,this.config.handSize=8,this.config.handsPerRound=4,this.config.discardsPerRound=3,this.config.startingMoney=4,Vt[n].order>=Vt.blue.order&&(this.config.discardsPerRound-=1),e==="red"&&(this.config.discardsPerRound+=1),e==="blue"&&(this.config.handsPerRound+=1),e==="black"&&(this.config.handsPerRound-=1),this.money=e==="yellow"?14:4,this.ownedDeck=ta(),this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.handLevels=xo(),this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.handsPlayedRun=0,this.handPlayCounts=Object.fromEntries(Object.keys(Xn).map(i=>[i,0])),this.shopVisit=0,this.rollAnteOptions(),this.prepareBlindSelect()}rollAnteOptions(){this.anteTags=[this.pick(lu),this.pick(lu)],this.bossBlindKey=this.pick(cu)}prepareBlindSelect(){this.phase="blind-select",this.target=this.targetForCurrentBlind(),this.hand=[],this.deck=[],this.discardPile=[],this.selected.clear(),this.shop=null,this.booster=null,this.targetMode=null,this.emit()}playSelectedBlind(){return this.phase!=="blind-select"?!1:(this.startBlind(),!0)}currentSkipTag(){return this.blindIndex<2?this.anteTags[this.blindIndex]:null}skipCurrentBlind(){if(this.phase!=="blind-select"||this.blindIndex>=2)return!1;const e=this.currentSkipTag();return e?(this.skippedBlinds+=1,this.applyTag(e),this.blindIndex=this.blindIndex+1,this.prepareBlindSelect(),!0):!1}applyTag(e){if(e==="double"){this.doubleTags+=1;return}const n=1+this.doubleTags;this.doubleTags=0;for(let i=0;i<n;i++)this.applySingleTag(e)}applySingleTag(e){if(e==="investment")this.investmentTags+=1;else if(e==="coupon")this.couponNextShop=!0;else if(e==="juggle")this.juggleNextBlind+=3;else if(e==="d6")this.d6NextShop=!0;else if(e==="speed")this.money+=Math.max(5,this.skippedBlinds*5);else if(e==="economy")this.money+=Math.min(40,Math.max(0,this.money));else if(e==="top-up"){const n=Hr.filter(i=>i.rarity==="common");for(let i=0;i<2&&this.jokers.length<this.jokerCapacity();i++)this.jokers.push(this.makeJokerFromTemplate(this.pick(n),!1))}else if(e==="boss"){const n=cu.filter(i=>i!==this.bossBlindKey);n.length>0&&(this.bossBlindKey=this.pick(n))}}targetForPreview(){return this.targetForCurrentBlind()}playRestrictionMessage(){if(this.phase!=="play"||this.blindIndex!==2)return null;const e=this.selectedCards();if(this.bossBlindKey==="psychic"&&e.length!==5)return"The Psychic: play exactly 5 cards";if(e.length===0)return null;const n=Ts(e).type;return this.bossBlindKey==="eye"&&this.playedHandTypesThisRound.includes(n)?"The Eye: that Poker Hand was already played":this.bossBlindKey==="mouth"&&this.playedHandTypesThisRound.length>0&&this.playedHandTypesThisRound[0]!==n?`The Mouth: play only ${this.playedHandTypesThisRound[0]}`:null}drawToFull(){for(;this.hand.length<this.roundHandSize&&this.deck.length>0;)this.hand.push(this.deck.pop())}toggleSelect(e){return this.phase!=="play"?!1:this.selected.has(e)?(this.selected.delete(e),this.emit(),!1):this.selected.size>=5?!1:(this.selected.add(e),this.emit(),!0)}selectedCards(e){if(!e)return this.hand.filter(i=>this.selected.has(i.id));const n=new Map(this.hand.map(i=>[i.id,i]));return e.filter(i=>this.selected.has(i)).map(i=>n.get(i)).filter(i=>!!i)}jokerCapacity(){return 5+(this.deckKey==="black"?1:0)+this.jokers.filter(e=>(e.edition??"base")==="negative").length}consumableCapacity(){return 2+(this.vouchers.includes("crystal-ball")?1:0)+this.consumables.filter(e=>(e.edition??"base")==="negative").length}moveJoker(e,n){const i=this.jokers.findIndex(a=>a.id===e);if(i<0)return!1;const r=Math.max(0,Math.min(this.jokers.length-1,n));if(r===i)return!0;const[s]=this.jokers.splice(i,1);return this.jokers.splice(r,0,s),this.emit(),!0}canPlay(){return this.phase==="play"&&this.selected.size>0&&this.handsLeft>0&&this.playRestrictionMessage()===null}canDiscard(){return this.phase==="play"&&this.selected.size>0&&this.discardsLeft>0}playSelected(e){if(!this.canPlay())return null;const n=this.selectedCards(e),i=Ts(n),r=this.handLevels[i.type],s=this.handsLeft,a=new Set(n.map(p=>p.id)),o=new Map(this.hand.map(p=>[p.id,p])),l=(e??this.hand.map(p=>p.id)).filter(p=>!a.has(p)).map(p=>o.get(p)).filter(p=>!!p),c=this.blindIndex===2?this.bossBlindKey:null,u=c==="goad"?["spades"]:c==="window"?["diamonds"]:c==="head"?["hearts"]:[],d=this.playedHandTypesThisRound.includes(i.type);this.prepareExactJokersForHand(i);const h=Object.values(this.handLevels).reduce((p,g)=>p+Math.max(0,g.level-1),0),m=Gm(i,r,{jokers:this.jokers,heldCards:l,handsLeftBeforePlay:s,handsPerRound:this.playedHandTypesThisRound.length===0?s:this.config.handsPerRound,discardsLeft:this.discardsLeft,deckRemaining:this.deck.length,money:this.money,handPlayCount:this.handPlayCounts[i.type]??0,handAlreadyPlayedThisRound:d,isFinalHand:this.handsLeft===1,jokerCount:this.jokers.length,jokerCapacity:this.jokerCapacity(),fullDeckSize:this.ownedDeck.length,handLevelExtra:h,distinctHandTypesThisRound:new Set(this.playedHandTypesThisRound).size,priorSameHandCount:this.playedHandTypesThisRound.filter(p=>p===i.type).length,bossDebuffSuits:u,bossDebuffFace:c==="plant",bossHalveBase:c==="flint",rng:()=>this.rng()});this.roundScore+=m.total,this.money+=m.moneyDelta,this.blindIndex===2&&this.bossBlindKey==="tooth"&&(this.money-=n.length,m.moneyDelta-=n.length),this.handsLeft-=1,this.lastScore=m,this.playedHandTypesThisRound.push(i.type),this.handPlayCounts[i.type]=(this.handPlayCounts[i.type]??0)+1,this.handsPlayedRun+=1;const _=new Set;for(const p of this.jokers){if(this.isJokerDebuffed(p))continue;const g=p.effect;g.kind==="decay-chips"?(p.counter=Math.max(0,(p.counter??g.start)-g.decay),(p.counter??0)<=0&&_.add(p.id)):g.kind==="loyalty-xmult"?p.counter=((p.counter??0)+1)%g.every:g.kind==="mythic-phoenix"&&m.destroyedCardIds.length>0&&(p.counter=(p.counter??0)+m.destroyedCardIds.length)}if(_.size>0&&(this.jokers=this.jokers.filter(p=>!_.has(p.id))),this.blindIndex===2&&this.bossBlindKey==="arm"){const p=Xn[i.type],g=this.handLevels[i.type],f=Math.max(1,g.level-1);this.handLevels[i.type]={level:f,chips:p.chips+p.chipsPerLvl*(f-1),mult:p.mult+p.multPerLvl*(f-1)}}if(this.hand=this.hand.filter(p=>!this.selected.has(p.id)),this.discardPile.push(...n),this.selected.clear(),m.destroyedCardIds.length>0){const p=new Set(m.destroyedCardIds);this.discardPile=this.discardPile.filter(g=>!p.has(g.id)),this.ownedDeck=this.ownedDeck.filter(g=>!p.has(g.id))}return this.roundScore>=this.target?(this.resolveEndOfRoundHeldCards(i.type,m),this.onBlindCleared()):this.handsLeft<=0?this.phase="game-over":this.drawToFull(),this.emit(),m}discardSelected(e){if(!this.canDiscard())return null;const n=this.selectedCards(e);this.hand=this.hand.filter(i=>!this.selected.has(i.id)),this.discardPile.push(...n),this.discardsLeft-=1,this.selected.clear();for(const i of this.jokers){const r=i.effect;if(r.kind==="green-scale-mult")i.counter=Math.max(0,(i.counter??0)-r.discardLoss);else if(r.kind==="castle-scale-chips"&&i.suit){const s=n.filter(a=>!this.cardDebuffedByBoss(a)&&(a.suit===i.suit||a.enhancement==="wild")).length;i.counter=(i.counter??0)+s*r.gain}}for(const i of n)if(!(this.cardDebuffedByBoss(i)||i.seal!=="purple")){if(this.consumables.length>=this.consumableCapacity())break;this.consumables.push(this.makePurpleSealTarot())}return this.drawToFull(),this.emit(),n}onBlindCleared(){const e=this.blindIndex,n=Vt[this.stakeKey].order,i=e===0&&n>=Vt.red.order?0:3+e,r=this.jokers.reduce((u,d)=>d.effect.kind==="economy-clear"&&!this.isJokerDebuffed(d)?u+d.effect.amount:u,0),s=this.deckKey==="green",a=s?Math.max(0,this.handsLeft)*2+Math.max(0,this.discardsLeft):Math.max(0,this.handsLeft),o=s?0:Math.min(5,Math.floor(Math.max(0,this.money)/5));let l=0;e===2&&this.investmentTags>0&&(l=this.investmentTags*25,this.investmentTags=0);const c=i+a+o+r+l;this.money+=c,this.lastCashout={blindReward:i+r+l,handsBonus:a,interest:o,total:c};for(const u of this.jokers)u.rental&&(this.money-=3),u.sticker==="perishable"&&(u.perishableRounds??0)>0&&(u.perishableRounds=Math.max(0,(u.perishableRounds??0)-1)),u.effect.kind==="castle-scale-chips"&&(u.suit=this.pickCastleSuitWeighted());if(this.blindIndex<2)this.blindIndex=this.blindIndex+1;else{if(this.blindIndex=0,this.ante+=1,this.anteVoucher=null,this.ante>8){this.phase="win";return}this.rollAnteOptions()}this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=0,this.discardsLeft=0,this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=this.createShopState(),this.phase="shop"}isJokerDebuffed(e){return e.sticker==="perishable"&&(e.perishableRounds??0)<=0}continueFromShop(){return this.phase!=="shop"?!1:(this.prepareBlindSelect(),!0)}canBuyOffer(e){const n=this.findOffer(e);if(!n||n.sold)return!1;const i=this.priceForItem(n.item);if(this.money<i)return!1;if(n.item.kind==="joker"){const r=(n.item.joker.edition??"base")==="negative"?1:0;return this.jokers.length<this.jokerCapacity()+r}if(n.item.kind==="consumable"){const r=(n.item.consumable.edition??"base")==="negative"?1:0;return this.consumables.length<this.consumableCapacity()+r}return!0}buyOffer(e){const n=this.findOffer(e);if(!n||!this.canBuyOffer(e))return!1;const i=this.priceForItem(n.item);return this.money-=i,n.sold=!0,n.item.kind==="joker"?this.jokers.push(Wa(n.item.joker)):n.item.kind==="consumable"?this.consumables.push(Wr(n.item.consumable)):this.ownedDeck.push(Or(n.item.card)),this.emit(),!0}rerollShop(){if(this.phase!=="shop"||!this.shop||this.money<this.shop.rerollCost)return!1;this.money-=this.shop.rerollCost;const e=this.shop.rerollCost===0&&this.shop.rerolls===0;return this.shop.rerolls+=1,this.shop.rerollCost=e?1:this.rerollBaseCost()+this.shop.rerolls,this.shop.offers=this.createShopOffers(this.shop.visit,this.shop.rerolls),this.emit(),!0}sellJoker(e){const n=this.jokers.findIndex(r=>r.id===e);if(n<0||this.jokers[n].sticker==="eternal")return!1;const[i]=this.jokers.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}sellConsumable(e){const n=this.consumables.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.consumables.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}useConsumable(e){return this.beginUseConsumable(e)==="applied"}cardDebuffedByBoss(e){return this.blindIndex!==2?!1:this.bossBlindKey==="goad"&&e.suit==="spades"||this.bossBlindKey==="window"&&e.suit==="diamonds"||this.bossBlindKey==="head"&&e.suit==="hearts"||this.bossBlindKey==="plant"&&e.rank>=11&&e.rank<=13}pickCastleSuitWeighted(){const e=Sl.map(r=>({suit:r,count:this.ownedDeck.filter(s=>s.enhancement!=="stone"&&s.suit===r).length})),n=e.reduce((r,s)=>r+s.count,0);if(n<=0)return"spades";let i=this.rng()*n;for(const r of e)if(i-=r.count,i<0)return r.suit;return e[e.length-1].suit}prepareExactJokersForHand(e){for(const n of this.jokers){if(this.isJokerDebuffed(n))continue;const i=n.effect;i.kind==="straight-scale-chips"&&e.type.includes("Straight")?n.counter=(n.counter??i.start??0)+i.gain:i.kind==="bus-scale-mult"?n.counter=e.scoringCards.some(r=>r.rank>=11&&r.rank<=13&&!this.cardDebuffedByBoss(r))?0:(n.counter??0)+i.gain:i.kind==="green-scale-mult"&&(n.counter=(n.counter??0)+i.handGain)}}jokerRuntimeText(e){const n=this.jokers.find(s=>s.id===e);if(!n)return"";const i=n.effect,r=n.counter??0;if(this.isJokerDebuffed(n))return"DEBUFFED (Perishable expired)";if(i.kind==="random-mult")return`Last roll: +${r} Mult · range ${i.min}–${i.max}`;if(i.kind==="decay-chips")return`Current: +${r} Chips`;if(i.kind==="straight-scale-chips")return`Current: +${r} Chips`;if(i.kind==="bus-scale-mult")return`Current: +${r} Mult`;if(i.kind==="green-scale-mult")return`Current: +${r} Mult`;if(i.kind==="deck-remaining-chips")return`Current: +${this.deck.length*i.amountPerCard} Chips`;if(i.kind==="discard-chips")return`Current: +${Math.max(0,this.discardsLeft)*i.amountPerDiscard} Chips`;if(i.kind==="zero-discard-mult")return this.discardsLeft===0?`ACTIVE: +${i.amount} Mult`:"Inactive: Discards remain";if(i.kind==="joker-count-mult")return`Current: +${this.jokers.length*i.amountPerJoker} Mult`;if(i.kind==="money-chips")return`Current: +${Math.max(0,this.money)*i.amountPerDollar} Chips`;if(i.kind==="money-mult")return`Current: +${Math.floor(Math.max(0,this.money)/i.dollarsPerStep)*i.amountPerStep} Mult`;if(i.kind==="loyalty-xmult"){const s=r%i.every;return s===i.every-1?`ACTIVE: X${i.amount} Mult`:`${i.every-1-s} hands remaining`}if(i.kind==="castle-scale-chips")return`Current: +${r} Chips · target ${n.suit??"spades"}`;if(i.kind==="last-hand-xmult"||i.kind==="retrigger-last-hand")return this.handsLeft===1?"ACTIVE: final Hand":`${Math.max(0,this.handsLeft-1)} Hands until active`;if(i.kind==="repeat-hand-xmult"&&this.selected.size>0){const s=Ts(this.selectedCards()).type;return this.playedHandTypesThisRound.includes(s)?`ACTIVE: ${s} already played`:`Inactive: first ${s} this Blind`}if(i.kind==="mythic-phoenix")return`Current: X${(1+r*.25).toFixed(2)} Mult · ${r} Glass shattered`;if(i.kind==="mythic-leviathan")return`Current: +${this.ownedDeck.length*8} Chips`;if(i.kind==="mythic-echo"&&this.selected.size>0){const s=Ts(this.selectedCards()).type;return`Current for ${s}: X${(1+this.playedHandTypesThisRound.filter(a=>a===s).length*.5).toFixed(2)}`}if(i.kind==="mythic-void"){const s=Math.max(0,this.jokerCapacity()-this.jokers.length);return`Current: X${(1+s*.75).toFixed(2)} · ${s} empty slots`}if(i.kind==="mythic-forge"){const s=Object.values(this.handLevels).reduce((a,o)=>a+Math.max(0,o.level-1),0);return`Current: X${(1+s*.08).toFixed(2)} · ${s} bonus levels`}if(i.kind==="mythic-staircase"){const s=new Set(this.playedHandTypesThisRound).size;return`Current: X${(1+s*.5).toFixed(2)} · ${s} hand types`}return i.kind==="mythic-emperor"?this.handsLeft===1?"ACTIVE: X5 + full retrigger":`${Math.max(0,this.handsLeft-1)} Hands until active`:i.kind==="mythic-quantum"?`Last fate: ${["+250 Chips","+35 Mult","X3 Mult","+$12"][Math.max(0,Math.min(3,r))]}`:""}resolveEndOfRoundHeldCards(e,n){const i=this.jokers.filter(r=>!this.isJokerDebuffed(r)&&r.effect.kind==="retrigger-held").length;for(const r of this.hand){if(this.cardDebuffedByBoss(r))continue;const s=1+(r.seal==="red"?1:0)+i;for(let a=0;a<s;a++)if(r.enhancement==="gold"&&(this.money+=3,n.moneyDelta+=3,n.steps.push({source:`Gold Card +$3${a>0?" (retrigger)":""}`,stage:"end_round",cardId:r.id,retrigger:a>0,moneyDelta:3,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})),r.seal==="blue"&&this.consumables.length<this.consumableCapacity()){const o={id:this.makeRunId("blue-planet"),key:`planet-${e.toLowerCase().replaceAll(" ","-")}`,name:`${e} Planet`,description:`Upgrade ${e} by 1 level.`,type:"planet",price:3,sellValue:1,effect:{kind:"planet",handType:e},edition:"base"};this.consumables.push(o),n.steps.push({source:`Blue Seal created ${o.name}${a>0?" (retrigger)":""}`,stage:"end_round",cardId:r.id,retrigger:a>0,chipsBefore:n.finalChips,chipsAfter:n.finalChips,multBefore:n.finalMult,multAfter:n.finalMult})}}}makePurpleSealTarot(){return this.makeConsumableFromCatalog(this.pick(Mo))}openBooster(e){if(this.phase!=="shop"||!this.shop)return!1;const n=this.shop.boosters.find(s=>s.id===e);if(!n||n.sold)return!1;const i=this.discountedPrice(n.price);if(this.money<i)return!1;this.money-=i,n.sold=!0;const r=ru(n.type,n.size);return this.booster={sourceOfferId:n.id,type:n.type,size:n.size,name:n.name,choices:Array.from({length:r.choices},(s,a)=>this.makeBoosterChoice(n.type,a)),picksLeft:r.picks},this.phase="booster",this.targetMode=null,this.emit(),!0}boosterPrice(e){return this.discountedPrice(e.price)}makeBoosterChoice(e,n){let i;return e==="arcana"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(Mo))}:e==="celestial"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(nu))}:e==="spectral"?i={kind:"consumable",consumable:this.makeConsumableFromCatalog(this.pick(iu))}:e==="buffoon"?i=this.makeJokerItem():i=this.makePlayingCardItem(),{id:`pack-choice-${this.rngDrawCount}-${n}-${Math.floor(this.rng()*1e6)}`,item:i,taken:!1}}makeConsumableFromCatalog(e){return{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}chooseBooster(e){if(this.phase!=="booster"||!this.booster||this.booster.picksLeft<=0)return"invalid";const n=this.booster.choices.find(s=>s.id===e);if(!n||n.taken)return"invalid";if(n.item.kind==="joker"){const s=n.item.joker,a=(s.edition??"base")==="negative"?1:0;return this.jokers.length>=this.jokerCapacity()+a?"invalid":(this.jokers.push(Wa(s)),this.finishBoosterChoice(n))}if(n.item.kind==="playing-card")return this.ownedDeck.push(Or(n.item.card)),this.finishBoosterChoice(n);const i=n.item.consumable,r=su(i.effect);return r?(this.targetMode={source:"booster",sourceId:this.booster.sourceOfferId,choiceId:n.id,consumable:Wr(i),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...r},this.emit(),"targeting"):(this.applyConsumableWithTargets(i,[]),this.finishBoosterChoice(n))}finishBoosterChoice(e){return e.taken=!0,this.booster&&(this.booster.picksLeft-=1),this.booster&&this.booster.picksLeft<=0&&(this.booster=null,this.phase="shop"),this.targetMode=null,this.emit(),"applied"}skipBooster(){return this.phase!=="booster"?!1:(this.booster=null,this.targetMode=null,this.phase="shop",this.emit(),!0)}buyVoucher(){if(this.phase!=="shop"||!this.shop?.voucher||this.shop.voucher.sold)return!1;const e=this.shop.voucher;return this.money<e.price?!1:(this.money-=e.price,e.sold=!0,this.anteVoucher?.key===e.key&&(this.anteVoucher.sold=!0),this.vouchers.includes(e.key)||this.vouchers.push(e.key),e.key==="grabber"&&(this.config.handsPerRound+=1),e.key==="wasteful"&&(this.config.discardsPerRound+=1),e.key==="reroll-surplus"&&this.shop&&(this.shop.rerollCost=Math.max(1,this.shop.rerollCost-2)),this.emit(),!0)}beginUseConsumable(e){const n=this.consumables.find(r=>r.id===e);if(!n)return"invalid";const i=su(n.effect);if(!i){const r=this.consumables.findIndex(s=>s.id===e);return this.consumables.splice(r,1),this.applyConsumableWithTargets(n,[]),this.emit(),"applied"}return this.targetMode={source:"inventory",sourceId:e,consumable:Wr(n),candidateIds:this.makeTargetCandidateIds(),selectedIds:[],...i},this.emit(),"targeting"}toggleTargetCard(e){const n=this.targetMode;if(!n||!n.candidateIds.includes(e))return!1;const i=n.selectedIds.indexOf(e);return i>=0?(n.selectedIds.splice(i,1),this.emit(),!1):n.selectedIds.length>=n.max?!1:(n.selectedIds.push(e),this.emit(),!0)}cancelTargetMode(){return this.targetMode?(this.targetMode=null,this.emit(),!0):!1}confirmTargetMode(){const e=this.targetMode;if(!e||e.selectedIds.length<e.min||e.selectedIds.length>e.max)return!1;if(this.applyConsumableWithTargets(e.consumable,e.selectedIds),e.source==="inventory"){const i=this.consumables.findIndex(r=>r.id===e.sourceId);return i>=0&&this.consumables.splice(i,1),this.targetMode=null,this.emit(),!0}const n=this.booster?.choices.find(i=>i.id===e.choiceId);return n?(this.targetMode=null,this.finishBoosterChoice(n),!0):(this.targetMode=null,this.emit(),!1)}getTargetCandidateCards(){return this.targetMode?this.targetMode.candidateIds.map(e=>this.findRunCard(e)).filter(e=>!!e).map(Or):[]}makeTargetCandidateIds(){if(this.hand.length>0)return this.hand.map(n=>n.id);const e=this.ownedDeck.map(n=>n.id);return tu(e,this.rng).slice(0,Math.min(this.config.handSize,e.length))}findRunCard(e){return this.hand.find(n=>n.id===e)??this.deck.find(n=>n.id===e)??this.discardPile.find(n=>n.id===e)??this.ownedDeck.find(n=>n.id===e)??null}mutateCardEverywhere(e,n){for(const i of[this.ownedDeck,this.hand,this.deck,this.discardPile])for(const r of i)r.id===e&&n(r)}destroyCardEverywhere(e){this.ownedDeck=this.ownedDeck.filter(n=>n.id!==e),this.hand=this.hand.filter(n=>n.id!==e),this.deck=this.deck.filter(n=>n.id!==e),this.discardPile=this.discardPile.filter(n=>n.id!==e),this.selected.delete(e)}applyConsumableWithTargets(e,n){const i=e.effect;if(i.kind==="planet"){this.upgradeHandLevel(i.handType);return}if(i.kind==="money"){const r=i.mode==="double-up-to-20"?Math.min(20,this.money):Math.max(0,i.amount??0);this.money+=r;return}if(i.kind==="enhance-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.enhancement=i.enhancement,s.baseChips=i.enhancement==="stone"?50:s.rank===14?11:s.rank>=11?10:s.rank});return}if(i.kind==="convert-suit"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.suit=i.suit});return}if(i.kind==="destroy-selected"){for(const r of n)this.destroyCardEverywhere(r);return}if(i.kind==="copy-right-to-left"){const r=n.slice().sort((o,l)=>this.targetMode.candidateIds.indexOf(o)-this.targetMode.candidateIds.indexOf(l)),s=r[0],a=this.findRunCard(r[1]);if(!s||!a)return;this.mutateCardEverywhere(s,o=>{o.suit=a.suit,o.rank=a.rank,o.enhancement=a.enhancement,o.seal=a.seal,o.edition=a.edition,o.baseChips=a.baseChips});return}if(i.kind==="edition-selected"){for(const r of n){const s=i.edition==="random"?this.pick(["foil","holographic","polychrome"]):i.edition;this.mutateCardEverywhere(r,a=>{a.edition=s})}return}if(i.kind==="seal-selected"){for(const r of n)this.mutateCardEverywhere(r,s=>{s.seal=i.seal});return}if(i.kind==="duplicate-selected"){const r=n[0]?this.findRunCard(n[0]):null;if(!r)return;for(let s=0;s<i.copies;s++){const a=Or(r);a.id=this.makeRunId("copy"),this.ownedDeck.push(a)}return}if(i.kind==="immolate-selected"){for(const r of n)this.destroyCardEverywhere(r);this.money+=i.money}}createShopState(){const e=++this.shopVisit;if(this.couponNextShop?(this.couponShopVisit=e,this.couponNextShop=!1):this.couponShopVisit=null,!this.anteVoucher||this.anteVoucher.sold){const i=Object.keys(au).filter(r=>!this.vouchers.includes(r));this.anteVoucher=i.length>0?{...au[this.pick(i)],sold:!1}:null}const n={visit:e,offers:this.createShopOffers(e,0),boosters:this.createBoosterOffers(e),voucher:Pa(this.anteVoucher),rerolls:0,rerollCost:this.d6NextShop?0:this.rerollBaseCost()};return this.d6NextShop=!1,n}createShopOffers(e,n){return[0,1].map(i=>{const r=this.rng()<.7?this.makeJokerItem():this.makeConsumableItem();return this.makeShopOffer(e,n,i,r)})}createBoosterOffers(e){return[0,1].map(n=>{const i=this.pick(Wm),r=this.rng(),s=r<.68?"normal":r<.9?"jumbo":"mega",a=ru(i,s);return{id:`booster-${e}-${n}`,type:i,size:s,name:Xm(i,s),description:`Choose ${a.picks} from ${a.choices}.`,price:a.price,sold:!1}})}rerollBaseCost(){return Math.max(1,Km-(this.vouchers.includes("reroll-surplus")?2:0))}makeShopOffer(e,n,i,r){return{id:`shop-${e}-${n}-${i}`,item:r,sold:!1}}makeJokerFromTemplate(e,n=!0){const i={...e,id:this.makeRunId("joker"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base",sticker:"none",rental:!1};i.effect.kind==="decay-chips"?i.counter=i.effect.start:i.effect.kind==="castle-scale-chips"?(i.counter=0,i.suit=this.pickCastleSuitWeighted()):(i.effect.kind==="straight-scale-chips"||i.effect.kind==="bus-scale-mult"||i.effect.kind==="green-scale-mult"||i.effect.kind==="loyalty-xmult"||i.effect.kind==="mythic-phoenix")&&(i.counter=i.effect.kind==="straight-scale-chips"?i.effect.start??0:0);const r=new Set(["runner","ride-the-bus","green-joker","castle"]),s=new Set(["ice-cream"]);if(n&&i.rarity!=="mythic"){const a=Vt[this.stakeKey].order;if(a>=Vt.black.order){const o=this.rng();o<.3&&!s.has(i.key)?i.sticker="eternal":a>=Vt.orange.order&&o<.6&&!r.has(i.key)&&(i.sticker="perishable",i.perishableRounds=5)}a>=Vt.gold.order&&this.rng()<.3&&(i.rental=!0)}return i}makeJokerItem(){const e=this.rng(),n=e<.68?"common":e<.93?"uncommon":e<.98?"rare":"mythic",i=Hr.filter(r=>r.rarity===n);return{kind:"joker",joker:this.makeJokerFromTemplate(this.pick(i.length?i:Hr))}}makeConsumableItem(){const e=this.makeConsumableTemplate();return{kind:"consumable",consumable:{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect},edition:"base"}}}makeConsumableTemplate(){const e=this.rng(),n=e<.45?nu:e<.88?Mo:iu;return this.pick(n)}makePlayingCardItem(){const e=this.pick(Sl),n=this.pick(Fd),i=this.pick(Zm),r=Bd(e,n);return r.enhancement=i,i==="stone"&&(r.baseChips=50),this.rng()>.82&&(r.edition=this.pick(Jm)),{kind:"playing-card",card:r,name:`${Ha[n]} of ${So(e)}${r.edition!=="base"?` (${So(r.edition)})`:""}`,description:`Add a ${So(i)} card to your deck.`,price:r.edition==="base"?4:6,sellValue:1}}findOffer(e){return this.shop?.offers.find(n=>n.id===e)??null}priceForItem(e){const n=e.kind==="joker"?e.joker.rental?1:e.joker.price:e.kind==="consumable"?e.consumable.price:e.price;return this.discountedPrice(n)}shopPriceForItem(e){return this.priceForItem(e)}discountedPrice(e){return this.shop&&this.couponShopVisit===this.shop.visit?0:this.vouchers.includes("clearance-sale")?Math.max(1,Math.ceil(e*.75)):e}upgradeHandLevel(e){const n=Xn[e],i=this.handLevels[e].level+1;this.handLevels[e]={level:i,chips:n.chips+n.chipsPerLvl*(i-1),mult:n.mult+n.multPerLvl*(i-1)}}pick(e){return e[Math.floor(this.rng()*e.length)]}makeRunId(e){return`${e}-${this.rngDrawCount}-${Math.floor(this.rng()*1e6)}`}reset(e){if(typeof e=="object"&&e!==null){this.loadSnapshot(e),this.emit();return}this.config={...this.config,seed:typeof e=="number"?e:Math.floor(Math.random()*1e9)},this.rng=this.createTrackedRng(this.config.seed),this.ante=1,this.blindIndex=0,this.money=this.config.startingMoney,this.ownedDeck=ta(),this.jokers=[],this.consumables=[],this.shop=null,this.booster=null,this.targetMode=null,this.vouchers=[],this.anteVoucher=null,this.lastCashout=null,this.deckKey="red",this.stakeKey="white",this.bossBlindKey="wall",this.anteTags=["investment","coupon"],this.skippedBlinds=0,this.doubleTags=0,this.investmentTags=0,this.couponNextShop=!1,this.couponShopVisit=null,this.d6NextShop=!1,this.juggleNextBlind=0,this.roundHandSize=this.config.handSize,this.playedHandTypesThisRound=[],this.handPlayCounts=Object.fromEntries(Object.keys(Xn).map(n=>[n,0])),this.handsPlayedRun=0,this.shopVisit=0,this.handLevels=xo(),this.lastScore=null,this.enterSetup()}toSnapshot(){return{version:4,config:{...this.config},rngDrawCount:this.rngDrawCount,phase:this.phase,ante:this.ante,blindIndex:this.blindIndex,money:this.money,ownedDeck:Jn(this.ownedDeck),deck:Jn(this.deck),discardPile:Jn(this.discardPile),hand:Jn(this.hand),selected:[...this.selected],handsLeft:this.handsLeft,discardsLeft:this.discardsLeft,roundScore:this.roundScore,target:this.target,handLevels:mu(this.handLevels),jokers:uu(this.jokers),consumables:hu(this.consumables),shop:pu(this.shop),booster:fu(this.booster),targetMode:du(this.targetMode),vouchers:[...this.vouchers],anteVoucher:Pa(this.anteVoucher),lastCashout:this.lastCashout?{...this.lastCashout}:null,deckKey:this.deckKey,stakeKey:this.stakeKey,bossBlindKey:this.bossBlindKey,anteTags:[...this.anteTags],skippedBlinds:this.skippedBlinds,doubleTags:this.doubleTags,investmentTags:this.investmentTags,couponNextShop:this.couponNextShop,couponShopVisit:this.couponShopVisit,d6NextShop:this.d6NextShop,juggleNextBlind:this.juggleNextBlind,roundHandSize:this.roundHandSize,playedHandTypesThisRound:[...this.playedHandTypesThisRound],handPlayCounts:{...this.handPlayCounts},handsPlayedRun:this.handsPlayedRun}}loadSnapshot(e){const n=e.version;if(n!==1&&n!==2&&n!==3&&n!==4)throw new Error(`Unsupported snapshot version: ${n}`);const i=this.normalizeSnapshot(e);this.config={...i.config},this.rng=this.createTrackedRng(i.config.seed,i.rngDrawCount),this.phase=i.phase,this.ante=i.ante,this.blindIndex=i.blindIndex,this.money=i.money,this.ownedDeck=Jn(i.ownedDeck),this.deck=Jn(i.deck),this.discardPile=Jn(i.discardPile),this.hand=Jn(i.hand),this.selected=new Set(i.selected),this.handsLeft=i.handsLeft,this.discardsLeft=i.discardsLeft,this.roundScore=i.roundScore,this.target=i.target,this.handLevels=mu(i.handLevels),this.jokers=uu(i.jokers),this.consumables=hu(i.consumables),this.shop=pu(i.shop),this.booster=fu(i.booster),this.targetMode=du(i.targetMode),this.vouchers=[...i.vouchers],this.anteVoucher=Pa(i.anteVoucher),this.lastCashout=i.lastCashout?{...i.lastCashout}:null,this.deckKey=i.deckKey,this.stakeKey=i.stakeKey,this.bossBlindKey=i.bossBlindKey,this.anteTags=[...i.anteTags],this.skippedBlinds=i.skippedBlinds,this.doubleTags=i.doubleTags,this.investmentTags=i.investmentTags,this.couponNextShop=i.couponNextShop,this.couponShopVisit=i.couponShopVisit,this.d6NextShop=i.d6NextShop,this.juggleNextBlind=i.juggleNextBlind,this.roundHandSize=i.roundHandSize,this.playedHandTypesThisRound=[...i.playedHandTypesThisRound],this.handPlayCounts={...i.handPlayCounts},this.handsPlayedRun=i.handsPlayedRun,this.shopVisit=i.shop?.visit??this.completedShopCount(),this.lastScore=null}normalizeSnapshot(e){if(e.version===4)return e;let n;if(e.version===3)n=e;else if(e.version===2)n={...e,version:3,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null};else{const i=e,r=[...i.deck,...i.discardPile,...i.hand],s=new Set,a=r.filter(o=>s.has(o.id)?!1:(s.add(o.id),!0));n={...i,version:3,ownedDeck:a.length?a:ta(),jokers:[],consumables:[],shop:null,booster:null,targetMode:null,vouchers:[],anteVoucher:null,lastCashout:null}}return{...n,version:4,deckKey:"red",stakeKey:"white",bossBlindKey:"wall",anteTags:["investment","coupon"],skippedBlinds:0,doubleTags:0,investmentTags:0,couponNextShop:!1,couponShopVisit:null,d6NextShop:!1,juggleNextBlind:0,roundHandSize:n.config.handSize,playedHandTypesThisRound:[],handPlayCounts:Object.fromEntries(Object.keys(Xn).map(i=>[i,0])),handsPlayedRun:0}}completedShopCount(){return Math.max(0,(this.ante-1)*3+this.blindIndex)}createTrackedRng(e,n=0){const i=Pm(e);for(let r=0;r<n;r++)i();return this.rngDrawCount=n,()=>(this.rngDrawCount+=1,i())}},Fr={spades:0,hearts:1,diamonds:2,clubs:3},gu=[[14,13,12,11,10],[13,12,11,10,9],[12,11,10,9,8],[11,10,9,8,7],[10,9,8,7,6],[9,8,7,6,5],[8,7,6,5,4],[7,6,5,4,3],[6,5,4,3,2],[5,4,3,2,14]];function Hd(t,e,n){return Fr[t.suit]-Fr[e.suit]||(n.get(t.id)??0)-(n.get(e.id)??0)}function tg(t){const e=new Map(t.map((a,o)=>[a.id,o])),n=new Set(t.filter(a=>a.enhancement!=="stone").map(a=>a.rank));let i=gu[0],r=-1;for(const a of gu){const o=a.reduce((l,c)=>l+(n.has(c)?1:0),0);o>r&&(r=o,i=a)}const s=new Map(i.map((a,o)=>[a,o]));return t.slice().sort((a,o)=>{const l=a.enhancement==="stone";if(l!==(o.enhancement==="stone"))return l?1:-1;const c=s.get(a.rank),u=s.get(o.rank),d=c!==void 0,h=u!==void 0;return d!==h?d?-1:1:d&&h&&c!==u?c-u:a.rank!==o.rank?o.rank-a.rank:Hd(a,o,e)})}function ng(t){const e=new Map(t.map((l,c)=>[l.id,c])),n=t.filter(l=>l.enhancement!=="stone"),i=n.filter(l=>l.enhancement==="wild").length,r=new Map;Object.keys(Fr).forEach(l=>r.set(l,0));for(const l of n)l.enhancement!=="wild"&&r.set(l.suit,(r.get(l.suit)??0)+1);const s=Object.keys(Fr).sort((l,c)=>{const u=(r.get(l)??0)+i;return(r.get(c)??0)+i-u||Fr[l]-Fr[c]}),a=s[0],o=new Map(s.map((l,c)=>[l,c]));return t.slice().sort((l,c)=>{const u=l.enhancement==="stone";if(u!==(c.enhancement==="stone"))return u?1:-1;const d=l.enhancement==="wild"?0:o.get(l.suit)??99,h=c.enhancement==="wild"?0:o.get(c.suit)??99;if(d!==h)return d-h;if(d<=0&&h<=0&&l.enhancement!==c.enhancement){if(l.suit===a&&l.enhancement!=="wild")return-1;if(c.suit===a&&c.enhancement!=="wild")return 1}return l.rank!==c.rank?c.rank-l.rank:Hd(l,c,e)})}var Tl=1e3,ai=1001,El=1002,qt=1003,ig=1004,rg=1005,gn=1006,sg=1007,uc=1008,Ii=1009,ag=1010,og=1011,Wd=1012,lg=1013,lr=1014,ro=1015,cr=1016,Xd=1017,$d=1018,jd=1020,cg=35902,ug=35899,hg=1021,dg=1022,zs=1023,Vs=1026,qd=1027,fg=1028,Yd=1029,Xa=1030,Kd=1031,Zd=1033,pg=33776,mg=33777,gg=33778,_g=33779,vg=35840,yg=35841,Mg=35842,Sg=35843,xg=36196,bg=37492,Tg=37496,Eg=37488,Cg=37489,wg=37490,Ag=37491,Rg=37808,Pg=37809,Lg=37810,Dg=37811,Ig=37812,kg=37813,Ng=37814,Ug=37815,Og=37816,Fg=37817,Bg=37818,zg=37819,Vg=37820,Gg=37821,Hg=36492,Wg=36494,Xg=36495,$g=36283,jg=36284,qg=36285,Yg=36286,$a=2300,Cl=2301,bo=2302,_u=2303,vu=2400,yu=2401,Mu=2402,Kg=3200;var jt="srgb",wl="srgb-linear",ja="linear",qa="srgb",To=7680;var Zg=35044;var es=2e3;function Jg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qg(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Gs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function e_(){const t=Gs("canvas");return t.style.display="block",t}var Su={},ts=null;function xu(...t){const e="THREE."+t.shift();ts?ts("log",e,...t):console.log(e,...t)}function Jd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Re(...t){t=Jd(t);const e="THREE."+t.shift();if(ts)ts("warn",e,...t);else{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Le(...t){t=Jd(t);const e="THREE."+t.shift();if(ts)ts("error",e,...t);else{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Al(...t){const e=t.join(" ");e in Su||(Su[e]=!0,Re(...t))}function t_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var n_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},hr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eo=Math.PI/180,Rl=180/Math.PI;function js(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[t&255]+Bt[t>>8&255]+Bt[t>>16&255]+Bt[t>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[n&63|128]+Bt[n>>8&255]+"-"+Bt[n>>16&255]+Bt[n>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ye(t,e,n){return Math.max(e,Math.min(n,t))}function i_(t,e){return(t%e+e)%e}function Co(t,e,n){return(1-n)*t+n*e}function hs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Xe=class Qd{static{Qd.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},dr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s+0],h=r[s+1],m=r[s+2],_=r[s+3];if(u!==_||o!==d||l!==h||c!==m){let p=o*d+l*h+c*m+u*_;p<0&&(d=-d,h=-h,m=-m,_=-_,p=-p);let g=1-a;if(p<.9995){const f=Math.acos(p),y=Math.sin(f);g=Math.sin(g*f)/y,a=Math.sin(a*f)/y,o=o*g+d*a,l=l*g+h*a,c=c*g+m*a,u=u*g+_*a}else{o=o*g+d*a,l=l*g+h*a,c=c*g+m*a,u=u*g+_*a;const f=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=f,l*=f,c*=f,u*=f}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=r[s],d=r[s+1],h=r[s+2],m=r[s+3];return t[e]=a*m+c*u+o*h-l*d,t[e+1]=o*m+c*d+l*u-a*h,t[e+2]=l*m+c*h+a*d-o*u,t[e+3]=c*m-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),d=o(n/2),h=o(i/2),m=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"YXZ":this._x=d*c*u+l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"ZXY":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u-d*h*m;break;case"ZYX":this._x=d*c*u-l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u+d*h*m;break;case"YZX":this._x=d*c*u+l*h*m,this._y=l*h*u+d*c*m,this._z=l*c*m-d*h*u,this._w=l*c*u-d*h*m;break;case"XZY":this._x=d*c*u-l*h*m,this._y=l*h*u-d*c*m,this._z=l*c*m+d*h*u,this._w=l*c*u+d*h*m;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-l)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},X=class ef{static{ef.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wo.copy(this).projectOnVector(e),this.sub(wo)}reflect(e){return this.sub(wo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wo=new X,bu=new dr,Fe=class tf{static{tf.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],m=i[5],_=i[8],p=r[0],g=r[3],f=r[6],y=r[1],T=r[4],b=r[7],E=r[2],A=r[5],R=r[8];return s[0]=a*p+o*y+l*E,s[3]=a*g+o*T+l*A,s[6]=a*f+o*b+l*R,s[1]=c*p+u*y+d*E,s[4]=c*g+u*T+d*A,s[7]=c*f+u*b+d*R,s[2]=h*p+m*y+_*E,s[5]=h*g+m*T+_*A,s[8]=h*f+m*b+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=n*d+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/_;return e[0]=d*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*n-r*l)*p,e[5]=(r*s-o*n)*p,e[6]=m*p,e[7]=(i*l-c*n)*p,e[8]=(a*n-i*s)*p,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ao.makeScale(e,n)),this}rotate(e){return this.premultiply(Ao.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ao.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ao=new Fe,Tu=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Eu=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function r_(){const t={enabled:!0,workingColorSpace:wl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Xr(r.r),r.g=Xr(r.g),r.b=Xr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?ja:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Al("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Al("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[wl]:{primaries:e,whitePoint:i,transfer:ja,toXYZ:Tu,fromXYZ:Eu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:i,transfer:qa,toXYZ:Tu,fromXYZ:Eu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),t}var qe=r_();function li(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Xr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var vr,s_=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{vr===void 0&&(vr=Gs("canvas")),vr.width=t.width,vr.height=t.height;const i=vr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=vr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=li(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},a_=0,hc=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:a_++}),this.uuid=js(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Ro(i[s].image)):r.push(Ro(i[s]))}else r=Ro(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ro(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?s_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var o_=0,Po=new X,bn=class La extends hr{constructor(e=La.DEFAULT_IMAGE,n=La.DEFAULT_MAPPING,i=ai,r=ai,s=gn,a=uc,o=zs,l=Ii,c=La.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=js(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Po).x}get height(){return this.source.getSize(Po).y}get depth(){return this.source.getSize(Po).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Re(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tl:e.x=e.x-Math.floor(e.x);break;case ai:e.x=e.x<0?0:1;break;case El:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tl:e.y=e.y-Math.floor(e.y);break;case ai:e.y=e.y<0?0:1;break;case El:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=300;bn.DEFAULT_ANISOTROPY=1;var wt=class nf{static{nf.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],m=l[5],_=l[9],p=l[2],g=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-p)<.01&&Math.abs(_-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+p)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,b=(m+1)/2,E=(f+1)/2,A=(u+h)/4,R=(d+p)/4,v=(_+g)/4;return T>b&&T>E?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=R/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=v/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=R/s,r=v/s),this.set(i,r,s,n),this}let y=Math.sqrt((g-_)*(g-_)+(d-p)*(d-p)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(g-_)/y,this.y=(d-p)/y,this.z=(h-u)/y,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Ye(this.x,e.x,n.x),this.y=Ye(this.y,e.y,n.y),this.z=Ye(this.z,e.z,n.z),this.w=Ye(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Ye(this.x,e,n),this.y=Ye(this.y,e,n),this.z=Ye(this.z,e,n),this.w=Ye(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},l_=class extends hr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new wt(0,0,t,e),this.scissorTest=!1,this.viewport=new wt(0,0,t,e),this.textures=[];const i=new bn({width:t,height:e,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new hc(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends l_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},rf=class extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},c_=class extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=qt,this.minFilter=qt,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},St=class Pl{static{Pl.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,u,d,h,m,_,p,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,m,_,p,g)}set(e,n,i,r,s,a,o,l,c,u,d,h,m,_,p,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=_,f[11]=p,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/yr.setFromMatrixColumn(e,0).length(),s=1/yr.setFromMatrixColumn(e,1).length(),a=1/yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*d,_=o*u,p=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=m+_*c,n[5]=h-p*c,n[9]=-o*l,n[2]=p-h*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*d,_=c*u,p=c*d;n[0]=h+p*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=m*o-_,n[6]=p+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*d,_=c*u,p=c*d;n[0]=h-p*o,n[4]=-a*d,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*u,n[9]=p-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*d,_=o*u,p=o*d;n[0]=l*u,n[4]=_*c-m,n[8]=h*c+p,n[1]=l*d,n[5]=p*c+h,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,p=o*c;n[0]=l*u,n[4]=p-h*d,n[8]=_*d+m,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=m*d+_,n[10]=h-p*d}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,p=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+p,n[5]=a*u,n[9]=m*d-_,n[2]=_*d-m,n[6]=o*u,n[10]=p*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(u_,e,h_)}lookAt(e,n,i){const r=this.elements;return cn.subVectors(e,n),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),_i.crossVectors(i,cn),_i.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),_i.crossVectors(i,cn)),_i.normalize(),na.crossVectors(cn,_i),r[0]=_i.x,r[4]=na.x,r[8]=cn.x,r[1]=_i.y,r[5]=na.y,r[9]=cn.y,r[2]=_i.z,r[6]=na.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],m=i[13],_=i[2],p=i[6],g=i[10],f=i[14],y=i[3],T=i[7],b=i[11],E=i[15],A=r[0],R=r[4],v=r[8],S=r[12],I=r[1],w=r[5],L=r[9],F=r[13],D=r[2],z=r[6],V=r[10],O=r[14],K=r[3],ee=r[7],ie=r[11],ge=r[15];return s[0]=a*A+o*I+l*D+c*K,s[4]=a*R+o*w+l*z+c*ee,s[8]=a*v+o*L+l*V+c*ie,s[12]=a*S+o*F+l*O+c*ge,s[1]=u*A+d*I+h*D+m*K,s[5]=u*R+d*w+h*z+m*ee,s[9]=u*v+d*L+h*V+m*ie,s[13]=u*S+d*F+h*O+m*ge,s[2]=_*A+p*I+g*D+f*K,s[6]=_*R+p*w+g*z+f*ee,s[10]=_*v+p*L+g*V+f*ie,s[14]=_*S+p*F+g*O+f*ge,s[3]=y*A+T*I+b*D+E*K,s[7]=y*R+T*w+b*z+E*ee,s[11]=y*v+T*L+b*V+E*ie,s[15]=y*S+T*F+b*O+E*ge,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],m=e[14],_=e[3],p=e[7],g=e[11],f=e[15],y=l*m-c*h,T=o*m-c*d,b=o*h-l*d,E=a*m-c*u,A=a*h-l*u,R=a*d-o*u;return n*(p*y-g*T+f*b)-i*(_*y-g*E+f*A)+r*(_*T-p*E+f*R)-s*(_*b-p*A+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],m=e[11],_=e[12],p=e[13],g=e[14],f=e[15],y=n*o-i*a,T=n*l-r*a,b=n*c-s*a,E=i*l-r*o,A=i*c-s*o,R=r*c-s*l,v=u*p-d*_,S=u*g-h*_,I=u*f-m*_,w=d*g-h*p,L=d*f-m*p,F=h*f-m*g,D=y*F-T*L+b*w+E*I-A*S+R*v;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/D;return e[0]=(o*F-l*L+c*w)*z,e[1]=(r*L-i*F-s*w)*z,e[2]=(p*R-g*A+f*E)*z,e[3]=(h*A-d*R-m*E)*z,e[4]=(l*I-a*F-c*S)*z,e[5]=(n*F-r*I+s*S)*z,e[6]=(g*b-_*R-f*T)*z,e[7]=(u*R-h*b+m*T)*z,e[8]=(a*L-o*I+c*v)*z,e[9]=(i*I-n*L-s*v)*z,e[10]=(_*A-p*b+f*y)*z,e[11]=(d*b-u*A-m*y)*z,e[12]=(o*S-a*w-l*v)*z,e[13]=(n*w-i*S+r*v)*z,e[14]=(p*T-_*E-g*y)*z,e[15]=(u*E-d*T+h*y)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,m=s*u,_=s*d,p=a*u,g=a*d,f=o*d,y=l*c,T=l*u,b=l*d,E=i.x,A=i.y,R=i.z;return r[0]=(1-(p+f))*E,r[1]=(m+b)*E,r[2]=(_-T)*E,r[3]=0,r[4]=(m-b)*A,r[5]=(1-(h+f))*A,r[6]=(g+y)*A,r[7]=0,r[8]=(_+T)*R,r[9]=(g-y)*R,r[10]=(1-(h+p))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=yr.set(r[0],r[1],r[2]).length();const o=yr.set(r[4],r[5],r[6]).length(),l=yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Nn.copy(this);const c=1/a,u=1/o,d=1/l;return Nn.elements[0]*=c,Nn.elements[1]*=c,Nn.elements[2]*=c,Nn.elements[4]*=u,Nn.elements[5]*=u,Nn.elements[6]*=u,Nn.elements[8]*=d,Nn.elements[9]*=d,Nn.elements[10]*=d,n.setFromRotationMatrix(Nn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=es,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),m=(i+r)/(i-r);let _,p;if(l)_=s/(a-s),p=a*s/(a-s);else if(o===2e3)_=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===2001)_=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=es,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,p;if(l)_=1/(a-s),p=a/(a-s);else if(o===2e3)_=-2/(a-s),p=-(a+s)/(a-s);else if(o===2001)_=-1/(a-s),p=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},yr=new X,Nn=new St,u_=new X(0,0,0),h_=new X(1,1,1),_i=new X,na=new X,cn=new X,Cu=new St,wu=new dr,ns=class sf{constructor(e=0,n=0,i=0,r=sf.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wu.setFromEuler(this),this.setFromQuaternion(wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ns.DEFAULT_ORDER="XYZ";var dc=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},d_=0,Au=new X,Mr=new dr,Qn=new St,ia=new X,ds=new X,f_=new X,p_=new dr,Ru=new X(1,0,0),Pu=new X(0,1,0),Lu=new X(0,0,1),Du={type:"added"},m_={type:"removed"},Sr={type:"childadded",child:null},Lo={type:"childremoved",child:null},xn=class Da extends hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=js(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Da.DEFAULT_UP.clone();const e=new X,n=new ns,i=new dr,r=new X(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Da.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Da.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.multiply(Mr),this}rotateOnWorldAxis(e,n){return Mr.setFromAxisAngle(e,n),this.quaternion.premultiply(Mr),this}rotateX(e){return this.rotateOnAxis(Ru,e)}rotateY(e){return this.rotateOnAxis(Pu,e)}rotateZ(e){return this.rotateOnAxis(Lu,e)}translateOnAxis(e,n){return Au.copy(e).applyQuaternion(this.quaternion),this.position.add(Au.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ru,e)}translateY(e){return this.translateOnAxis(Pu,e)}translateZ(e){return this.translateOnAxis(Lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ia.copy(e):ia.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ds,ia,this.up):Qn.lookAt(ia,ds,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Mr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Mr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Du),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(m_),Lo.child=e,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Du),Sr.child=e,this.dispatchEvent(Sr),Sr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,f_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,p_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};xn.DEFAULT_UP=new X(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ri=class extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}},g_={type:"move"},Do=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=.02,m=.005;l.inputState.pinching&&d>h+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(g_)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ra={h:0,s:0,l:0};function Io(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=jt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=qe.workingColorSpace){return this.r=t,this.g=e,this.b=n,qe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=qe.workingColorSpace){if(t=i_(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=Io(s,r,t+1/3),this.g=Io(s,r,t),this.b=Io(s,r,t-1/3)}return qe.colorSpaceToWorking(this,i),this}setStyle(t,e=jt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Re("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);Re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=jt){const n=af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=Xr(t.r),this.g=Xr(t.g),this.b=Xr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jt){return qe.workingToColorSpace(zt.copy(this),t),Math.round(Ye(zt.r*255,0,255))*65536+Math.round(Ye(zt.g*255,0,255))*256+Math.round(Ye(zt.b*255,0,255))}getHexString(t=jt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qe.workingColorSpace){qe.workingToColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=qe.workingColorSpace){return qe.workingToColorSpace(zt.copy(this),e),t.r=zt.r,t.g=zt.g,t.b=zt.b,t}getStyle(t=jt){qe.workingToColorSpace(zt.copy(this),t);const e=zt.r,n=zt.g,i=zt.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(vi),this.setHSL(vi.h+t,vi.s+e,vi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(vi),t.getHSL(ra);const n=Co(vi.h,ra.h,e),i=Co(vi.s,ra.s,e),r=Co(vi.l,ra.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},zt=new Ge;Ge.NAMES=af;var __=class extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ns,this.environmentIntensity=1,this.environmentRotation=new ns,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Un=new X,ei=new X,ko=new X,ti=new X,xr=new X,br=new X,Iu=new X,No=new X,Uo=new X,Oo=new X,Fo=new wt,Bo=new wt,zo=new wt,fs=class Ir{constructor(e=new X,n=new X,i=new X){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ei.subVectors(i,n),ko.subVectors(e,n);const a=Un.dot(Un),o=Un.dot(ei),l=Un.dot(ko),c=ei.dot(ei),u=ei.dot(ko),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Fo.setScalar(0),Bo.setScalar(0),zo.setScalar(0),Fo.fromBufferAttribute(e,n),Bo.fromBufferAttribute(e,i),zo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fo,s.x),a.addScaledVector(Bo,s.y),a.addScaledVector(zo,s.z),a}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ei.subVectors(e,n),Un.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Un.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ir.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ir.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ir.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ir.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ir.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;xr.subVectors(r,i),br.subVectors(s,i),No.subVectors(e,i);const l=xr.dot(No),c=br.dot(No);if(l<=0&&c<=0)return n.copy(i);Uo.subVectors(e,r);const u=xr.dot(Uo),d=br.dot(Uo);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(xr,a);Oo.subVectors(e,s);const m=xr.dot(Oo),_=br.dot(Oo);if(_>=0&&m<=_)return n.copy(s);const p=m*c-l*_;if(p<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(br,o);const g=u*_-m*d;if(g<=0&&d-u>=0&&m-_>=0)return Iu.subVectors(s,r),o=(d-u)/(d-u+(m-_)),n.copy(r).addScaledVector(Iu,o);const f=1/(g+p+h);return a=p*f,o=h*f,n.copy(i).addScaledVector(xr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},qs=class{constructor(t=new X(1/0,1/0,1/0),e=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(On.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(On.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=On.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,On):On.fromBufferAttribute(r,s),On.applyMatrix4(t.matrixWorld),this.expandByPoint(On);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),sa.copy(n.boundingBox)),sa.applyMatrix4(t.matrixWorld),this.union(sa)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,On),On.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),aa.subVectors(this.max,ps),Tr.subVectors(t.a,ps),Er.subVectors(t.b,ps),Cr.subVectors(t.c,ps),yi.subVectors(Er,Tr),Mi.subVectors(Cr,Er),$i.subVectors(Tr,Cr);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-$i.z,$i.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,$i.z,0,-$i.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-$i.y,$i.x,0];return!Vo(e,Tr,Er,Cr,aa)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Tr,Er,Cr,aa))?!1:(oa.crossVectors(yi,Mi),e=[oa.x,oa.y,oa.z],Vo(e,Tr,Er,Cr,aa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,On).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(On).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new X,new X,new X,new X,new X,new X,new X,new X],On=new X,sa=new qs,Tr=new X,Er=new X,Cr=new X,yi=new X,Mi=new X,$i=new X,ps=new X,aa=new X,oa=new X,ji=new X;function Vo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ji.fromArray(t,s);const o=r.x*Math.abs(ji.x)+r.y*Math.abs(ji.y)+r.z*Math.abs(ji.z),l=e.dot(ji),c=n.dot(ji),u=i.dot(ji);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Tt=new X,la=new Xe,v_=0,yn=class extends hr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:v_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zg,this.updateRanges=[],this.gpuType=ro,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)la.fromBufferAttribute(this,e),la.applyMatrix3(t),this.setXY(e,la.x,la.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix3(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix4(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyNormalMatrix(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.transformDirection(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Zt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Zt(e,this.array),n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},of=class extends yn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},lf=class extends yn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ci=class extends yn{constructor(t,e,n){super(new Float32Array(t),e,n)}},y_=new qs,ms=new X,Go=new X,so=class{constructor(t=new X,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):y_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ms,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Go.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Go)),this.expandByPoint(ms.copy(t.center).sub(Go))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},M_=0,Cn=new St,Ho=new xn,wr=new X,un=new qs,gs=new qs,Dt=new X,pi=class cf extends hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=js(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jg(e)?lf:of)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return Ho.lookAt(e),Ho.updateMatrix(),this.applyMatrix4(Ho.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wr).negate(),this.translate(wr.x,wr.y,wr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ci(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];un.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(Dt.addVectors(un.min,gs.min),un.expandByPoint(Dt),Dt.addVectors(un.max,gs.max),un.expandByPoint(Dt)):(un.expandByPoint(gs.min),un.expandByPoint(gs.max))}un.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Dt.fromBufferAttribute(o,c),l&&(wr.fromBufferAttribute(e,c),Dt.add(wr)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new X,l[v]=new X;const c=new X,u=new X,d=new X,h=new Xe,m=new Xe,_=new Xe,p=new X,g=new X;function f(v,S,I){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,S),d.fromBufferAttribute(i,I),h.fromBufferAttribute(s,v),m.fromBufferAttribute(s,S),_.fromBufferAttribute(s,I),u.sub(c),d.sub(c),m.sub(h),_.sub(h);const w=1/(m.x*_.y-_.x*m.y);isFinite(w)&&(p.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(w),g.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(w),o[v].add(p),o[S].add(p),o[I].add(p),l[v].add(g),l[S].add(g),l[I].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let v=0,S=y.length;v<S;++v){const I=y[v],w=I.start,L=I.count;for(let F=w,D=w+L;F<D;F+=3)f(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new X,b=new X,E=new X,A=new X;function R(v){E.fromBufferAttribute(r,v),A.copy(E);const S=o[v];T.copy(S),T.sub(E.multiplyScalar(E.dot(S))).normalize(),b.crossVectors(A,S);const I=b.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,I)}for(let v=0,S=y.length;v<S;++v){const I=y[v],w=I.start,L=I.count;for(let F=w,D=w+L;F<D;F+=3)R(e.getX(F+0)),R(e.getX(F+1)),R(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,d=new X;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),p=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,p),a.fromBufferAttribute(n,g),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,m=n.count;h<m;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Dt.fromBufferAttribute(e,n),Dt.normalize(),e.setXYZ(n,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let p=0,g=l.length;p<g;p++){o.isInterleavedBufferAttribute?m=l[p]*o.data.stride+o.offset:m=l[p]*u;for(let f=0;f<u;f++)h[_++]=c[m++]}return new yn(h,u,d)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cf,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],m=e(h,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},S_=0,as=class extends hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=js(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=To,this.stencilZFail=To,this.stencilZPass=To,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Re(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Re(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ii=new X,Wo=new X,ca=new X,Si=new X,Xo=new X,ua=new X,$o=new X,fc=class{constructor(t=new X,e=new X(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Wo.copy(t).add(e).multiplyScalar(.5),ca.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(Wo);const r=t.distanceTo(e)*.5,s=-this.direction.dot(ca),a=Si.dot(this.direction),o=-Si.dot(ca),l=Si.lengthSq(),c=Math.abs(1-s*s);let u,d,h,m;if(c>0)if(u=s*o-a,d=s*a-o,m=r*c,u>=0)if(d>=-m)if(d<=m){const _=1/c;u*=_,d*=_,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-m?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Wo).addScaledVector(ca,d),h}intersectSphere(t,e){ii.subVectors(t.center,this.origin);const n=ii.dot(this.direction),i=ii.dot(ii)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,r){Xo.subVectors(e,t),ua.subVectors(n,t),$o.crossVectors(Xo,ua);let s=this.direction.dot($o),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;Si.subVectors(this.origin,t);const o=a*this.direction.dot(ua.crossVectors(Si,ua));if(o<0)return null;const l=a*this.direction.dot(Xo.cross(Si));if(l<0||o+l>s)return null;const c=-a*Si.dot($o);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},uf=class extends as{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ku=new St,qi=new fc,ha=new so,Nu=new X,da=new X,fa=new X,pa=new X,jo=new X,ma=new X,Uu=new X,ga=new X,Yt=class extends xn{constructor(t=new pi,e=new uf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ma.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(jo.fromBufferAttribute(u,t),s?ma.addScaledVector(jo,c):ma.addScaledVector(jo.sub(e),c))}e.add(ma)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ha.copy(n.boundingSphere),ha.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(ha.containsPoint(qi.origin)===!1&&(qi.intersectSphere(ha,Nu)===null||qi.origin.distanceToSquared(Nu)>(t.far-t.near)**2))&&(ku.copy(r).invert(),qi.copy(t.ray).applyMatrix4(ku),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=s[p.materialIndex],f=Math.max(p.start,h.start),y=Math.min(a.count,Math.min(p.start+p.count,h.start+h.count));for(let T=f,b=y;T<b;T+=3){const E=a.getX(T),A=a.getX(T+1),R=a.getX(T+2);i=_a(this,g,t,n,l,c,u,E,A,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const f=a.getX(p),y=a.getX(p+1),T=a.getX(p+2);i=_a(this,s,t,n,l,c,u,f,y,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=s[p.materialIndex],f=Math.max(p.start,h.start),y=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let T=f,b=y;T<b;T+=3){const E=T,A=T+1,R=T+2;i=_a(this,g,t,n,l,c,u,E,A,R),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=m,g=_;p<g;p+=3){const f=p,y=p+1,T=p+2;i=_a(this,s,t,n,l,c,u,f,y,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}};function x_(t,e,n,i,r,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;ga.copy(o),ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ga);return c<n.near||c>n.far?null:{distance:c,point:ga.clone(),object:t}}function _a(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,da),t.getVertexPosition(l,fa),t.getVertexPosition(c,pa);const u=x_(t,e,n,i,da,fa,pa,Uu);if(u){const d=new X;fs.getBarycoord(Uu,da,fa,pa,d),r&&(u.uv=fs.getInterpolatedAttribute(r,o,l,c,d,new Xe)),s&&(u.uv1=fs.getInterpolatedAttribute(s,o,l,c,d,new Xe)),a&&(u.normal=fs.getInterpolatedAttribute(a,o,l,c,d,new X),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};fs.getNormal(da,fa,pa,h.normal),u.face=h,u.barycoord=d}return u}var b_=class extends bn{constructor(t=null,e=1,n=1,i,r,s,a,o,l=qt,c=qt,u,d){super(null,s,a,o,l,c,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},qo=new X,T_=new X,E_=new Fe,Ti=class{constructor(t=new X(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=qo.subVectors(n,e).cross(T_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(qo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||E_.getNormalMatrix(t),i=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Yi=new so,C_=new Xe(.5,.5),va=new X,pc=class{constructor(t=new Ti,e=new Ti,n=new Ti,i=new Ti,r=new Ti,s=new Ti){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=es,n=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],m=r[8],_=r[9],p=r[10],g=r[11],f=r[12],y=r[13],T=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,g-m,b-f).normalize(),i[1].setComponents(l+s,h+c,g+m,b+f).normalize(),i[2].setComponents(l+a,h+u,g+_,b+y).normalize(),i[3].setComponents(l-a,h-u,g-_,b-y).normalize(),n)i[4].setComponents(o,d,p,T).normalize(),i[5].setComponents(l-o,h-d,g-p,b-T).normalize();else if(i[4].setComponents(l-o,h-d,g-p,b-T).normalize(),e===2e3)i[5].setComponents(l+o,h+d,g+p,b+T).normalize();else if(e===2001)i[5].setComponents(o,d,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476+C_.distanceTo(t.center),Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(va.x=i.normal.x>0?t.max.x:t.min.x,va.y=i.normal.y>0?t.max.y:t.min.y,va.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(va)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},w_=class extends as{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ou=new St,Ll=new fc,ya=new so,Ma=new X,A_=class extends xn{constructor(t=new pi,e=new w_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ya.copy(n.boundingSphere),ya.applyMatrix4(i),ya.radius+=r,t.ray.intersectsSphere(ya)===!1)return;Ou.copy(i).invert(),Ll.copy(t.ray).applyMatrix4(Ou);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let h=u,m=d;h<m;h++){const _=l.getX(h);Ma.fromBufferAttribute(c,_),Fu(Ma,_,o,i,t,e,this)}}else{const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let h=u,m=d;h<m;h++)Ma.fromBufferAttribute(c,h),Fu(Ma,h,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function Fu(t,e,n,i,r,s,a){const o=Ll.distanceSqToPoint(t);if(o<n){const l=new X;Ll.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var hf=class extends bn{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},df=class extends bn{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},is=class extends bn{constructor(t,e,n=lr,i,r,s,a=qt,o=qt,l,c=Vs,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hc(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},R_=class extends is{constructor(t,e=lr,n=301,i,r,s=qt,a=qt,o,l=Vs){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ff=class extends bn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},mc=class pf extends pi{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ci(c,3)),this.setAttribute("normal",new ci(u,3)),this.setAttribute("uv",new ci(d,2));function _(p,g,f,y,T,b,E,A,R,v,S){const I=b/R,w=E/v,L=b/2,F=E/2,D=A/2,z=R+1,V=v+1;let O=0,K=0;const ee=new X;for(let ie=0;ie<V;ie++){const ge=ie*w-F;for(let Me=0;Me<z;Me++)ee[p]=(Me*I-L)*y,ee[g]=ge*T,ee[f]=D,c.push(ee.x,ee.y,ee.z),ee[p]=0,ee[g]=0,ee[f]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Me/R),d.push(1-ie/v),O+=1}for(let ie=0;ie<v;ie++)for(let ge=0;ge<R;ge++){const Me=h+ge+z*ie,Ze=h+ge+z*(ie+1),Ne=h+(ge+1)+z*(ie+1),j=h+(ge+1)+z*ie;l.push(Me,Ze,j),l.push(Ze,Ne,j),K+=6}o.addGroup(m,K,S),m+=K,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},or=class mf extends pi{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,m=[],_=[],p=[],g=[];for(let f=0;f<u;f++){const y=f*h-a;for(let T=0;T<c;T++){const b=T*d-s;_.push(b,-y,0),p.push(0,0,1),g.push(T/o),g.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const T=y+c*f,b=y+c*(f+1),E=y+1+c*(f+1),A=y+1+c*f;m.push(T,b,A),m.push(b,E,A)}this.setIndex(m),this.setAttribute("position",new ci(_,3)),this.setAttribute("normal",new ci(p,3)),this.setAttribute("uv",new ci(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.width,e.height,e.widthSegments,e.heightSegments)}};function rs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Bu(r))r.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Bu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function $t(t){const e={};for(let n=0;n<t.length;n++){const i=rs(t[n]);for(const r in i)e[r]=i[r]}return e}function Bu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function P_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gf(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}var L_={clone:rs,merge:$t},D_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends as{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D_,this.fragmentShader=I_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=P_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},k_=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Dl=class extends as{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ns,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},N_=class extends as{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},U_=class extends as{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Sa(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Ys=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{e:{let s;t:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},O_=class extends Ys{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:vu,endingEnd:vu}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case yu:r=t,a=2*e-n;break;case Mu:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case yu:s=t,o=2*n-e;break;case Mu:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=(n-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,m=(n-e)/(i-e),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,f=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,y=(-1-h)*p+(1.5+h)*_+.5*m,T=h*p-h*_;for(let b=0;b!==a;++b)r[b]=g*s[c+b]+f*s[l+b]+y*s[o+b]+T*s[u+b];return r}},F_=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*u+s[o+d]*c;return r}},B_=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},z_=class extends Ys{interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.settings||this.DefaultSettings_,u=c.inTangents,d=c.outTangents;if(!u||!d){const _=(n-e)/(i-e),p=1-_;for(let g=0;g!==a;++g)r[g]=s[l+g]*p+s[o+g]*_;return r}const h=a*2,m=t-1;for(let _=0;_!==a;++_){const p=s[l+_],g=s[o+_],f=m*h+_*2,y=d[f],T=d[f+1],b=t*h+_*2,E=u[b],A=u[b+1];let R=(n-e)/(i-e),v,S,I,w,L;for(let F=0;F<8;F++){v=R*R,S=v*R,I=1-R,w=I*I,L=w*I;const D=L*e+3*w*R*y+3*I*v*E+S*i-n;if(Math.abs(D)<1e-10)break;const z=3*w*(y-e)+6*I*R*(E-y)+3*v*(i-E);if(Math.abs(z)<1e-10)break;R=R-D/z,R=Math.max(0,Math.min(1,R))}r[_]=L*p+3*w*R*T+3*I*v*A+S*g}return r}},Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Sa(e,this.TimeBufferType),this.values=Sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Sa(t.times,Array),values:Sa(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new B_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new F_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new O_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new z_(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case $a:e=this.InterpolantFactoryMethodDiscrete;break;case Cl:e=this.InterpolantFactoryMethodLinear;break;case bo:e=this.InterpolantFactoryMethodSmooth;break;case _u:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return Cl;case this.InterpolantFactoryMethodSmooth:return bo;case this.InterpolantFactoryMethodBezier:return _u}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Le("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Le("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&Qg(i))for(let a=0,o=i.length;a!==o;++a){const l=i[a];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===bo,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{const c=a*n,u=c-n,d=c+n;for(let h=0;h!==n;++h){const m=e[c+h];if(m!==e[u+h]||m!==e[d+h]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*n,u=s*n;for(let d=0;d!==n;++d)e[u+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.ValueTypeName="";Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Cl;var Ks=class extends Zn{constructor(t,e,n){super(t,e,n)}};Ks.prototype.ValueTypeName="bool";Ks.prototype.ValueBufferType=Array;Ks.prototype.DefaultInterpolation=$a;Ks.prototype.InterpolantFactoryMethodLinear=void 0;Ks.prototype.InterpolantFactoryMethodSmooth=void 0;var V_=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};V_.prototype.ValueTypeName="color";var G_=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};G_.prototype.ValueTypeName="number";var H_=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let c=l+a;l!==c;l+=4)dr.slerpFlat(r,0,s,l-a,s,l,o);return r}},_f=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new H_(this.times,this.values,this.getValueSize(),t)}};_f.prototype.ValueTypeName="quaternion";_f.prototype.InterpolantFactoryMethodSmooth=void 0;var Zs=class extends Zn{constructor(t,e,n){super(t,e,n)}};Zs.prototype.ValueTypeName="string";Zs.prototype.ValueBufferType=Array;Zs.prototype.DefaultInterpolation=$a;Zs.prototype.InterpolantFactoryMethodLinear=void 0;Zs.prototype.InterpolantFactoryMethodSmooth=void 0;var W_=class extends Zn{constructor(t,e,n,i){super(t,e,n,i)}};W_.prototype.ValueTypeName="vector";var Yo={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(zu(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!zu(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function zu(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var X_=class{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],m=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},$_=new X_,gc=class{constructor(t){this.manager=t!==void 0?t:$_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ar=new WeakMap,j_=class extends gc{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Yo.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let u=Ar.get(s);u===void 0&&(u=[],Ar.set(s,u)),u.push({onLoad:e,onError:i})}return s}const a=Gs("img");function o(){c(),e&&e(this);const u=Ar.get(this)||[];for(let d=0;d<u.length;d++){const h=u[d];h.onLoad&&h.onLoad(this)}Ar.delete(this),r.manager.itemEnd(t)}function l(u){c(),i&&i(u),Yo.remove(`image:${t}`);const d=Ar.get(this)||[];for(let h=0;h<d.length;h++){const m=d[h];m.onError&&m.onError(u)}Ar.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Yo.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},q_=class extends gc{constructor(t){super(t)}load(t,e,n,i){const r=new bn,s=new j_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},vf=class extends xn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Ko=new St,Vu=new X,Gu=new X,Y_=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Ii,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new pc,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),Ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ko,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ko)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new X,ba=new dr,Vn=new X,yf=class extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=es,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,ba,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ba,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(xa,ba,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ba,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new X,Hu=new Xe,Wu=new Xe,An=class extends yf{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rl*2*Math.atan(Math.tan(Eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,Hu,Wu),e.subVectors(Wu,Hu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Eo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_c=class extends yf{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},K_=class extends Y_{constructor(){super(new _c(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xu=class extends vf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new K_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Z_=class extends vf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},Rr=-90,Pr=1,J_=class extends xn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(Rr,Pr,t,e);i.layers=this.layers,this.add(i);const r=new An(Rr,Pr,t,e);r.layers=this.layers,this.add(r);const s=new An(Rr,Pr,t,e);s.layers=this.layers,this.add(s);const a=new An(Rr,Pr,t,e);a.layers=this.layers,this.add(a);const o=new An(Rr,Pr,t,e);o.layers=this.layers,this.add(o);const l=new An(Rr,Pr,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Q_=class extends An{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},vc="\\[\\]\\.:\\/",ev=new RegExp("["+vc+"]","g"),yc="[^"+vc+"]",tv="[^"+vc.replace("\\.","")+"]",nv=/((?:WC+[\/:])*)/.source.replace("WC",yc),iv=/(WCOD+)?/.source.replace("WCOD",tv),rv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),av=new RegExp("^"+nv+iv+rv+sv+"$"),ov=["material","materials","bones","map"],lv=class{constructor(t,e,n){const i=n||gt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},gt=class kr{constructor(e,n,i){this.path=n,this.parsedPath=i||kr.parseTrackName(n),this.node=kr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new kr.Composite(e,n,i):new kr(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ev,"")}static parseTrackName(e){const n=av.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);ov.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=kr.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;Le("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=lv;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var $u=new St,cv=class{constructor(t,e,n=0,i=1/0){this.ray=new fc(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new dc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Le("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $u.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($u),this}intersectObject(t,e=!0,n=[]){return Il(t,this,n,e),n.sort(ju),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Il(t[i],this,n,e);return n.sort(ju),n}};function ju(t,e){return t.distance-e.distance}function Il(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)Il(s[a],e,n,!0)}}var uv=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Re("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},dx=class Mf{static{Mf.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function qu(t,e,n,i){const r=hv(i);switch(n){case hg:return t*e;case fg:return t*e/r.components*r.byteLength;case Yd:return t*e/r.components*r.byteLength;case Xa:return t*e*2/r.components*r.byteLength;case Kd:return t*e*2/r.components*r.byteLength;case dg:return t*e*3/r.components*r.byteLength;case zs:return t*e*4/r.components*r.byteLength;case Zd:return t*e*4/r.components*r.byteLength;case pg:case mg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gg:case _g:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yg:case Sg:return Math.max(t,16)*Math.max(e,8)/4;case vg:case Mg:return Math.max(t,8)*Math.max(e,8)/2;case xg:case bg:case Eg:case Cg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Tg:case wg:case Ag:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rg:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Pg:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Lg:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Dg:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ig:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kg:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ng:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ug:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Og:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Fg:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Bg:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case zg:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Vg:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Gg:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hg:case Wg:case Xg:return Math.ceil(t/4)*Math.ceil(e/4)*16;case $g:case jg:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qg:case Yg:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hv(t){switch(t){case Ii:case ag:return{byteLength:1,components:1};case Wd:case og:case cr:return{byteLength:2,components:1};case Xd:case $d:return{byteLength:2,components:4};case lr:case lg:case ro:return{byteLength:4,components:1};case cg:case ug:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function Sf(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dv(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<d.length;m++){const _=d[h],p=d[m];p.start<=_.start+_.count+1?_.count=Math.max(_.count,p.start+p.count-_.start):(++h,d[h]=p)}d.length=h+1;for(let m=0,_=d.length;m<_;m++){const p=d[m];t.bufferSubData(c,p.start*u.BYTES_PER_ELEMENT,u,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Be={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},he={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},$n={basic:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:$t([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:$t([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:$t([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:$t([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:$t([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:$t([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:$t([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:$t([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:$t([he.common,he.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:$t([he.lights,he.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};$n.physical={uniforms:$t([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};var Ta={r:0,b:0,g:0},fv=new St,xf=new Fe;xf.set(-1,0,0,0,1,0,0,0,1);function pv(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function m(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){const b=y.backgroundBlurriness>0;T=e.get(T,b)}return T}function _(y){let T=!1;const b=m(y);b===null?g(a,o):b&&b.isColor&&(g(b,1),T=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(y,T){const b=m(T);b&&(b.isCubeTexture||b.mapping===306)?(c===void 0&&(c=new Yt(new mc(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:rs($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(T.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xf),c.material.toneMapped=qe.getTransfer(b.colorSpace)!==qa,(u!==b||d!==b.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new Yt(new or(2,2),new sn({name:"BackgroundMaterial",uniforms:rs($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=qe.getTransfer(b.colorSpace)!==qa,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,h=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,T){y.getRGB(Ta,gf(t)),n.buffers.color.setClear(Ta.r,Ta.g,Ta.b,T,s)}function f(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,g(a,o)},render:_,addToRenderList:p,dispose:f}}function mv(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,L,F,D,z){let V=!1;const O=d(w,D,F,L);s!==O&&(s=O,c(s.object)),V=m(w,D,F,z),V&&_(w,D,F,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(w,L,F,D),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function d(w,L,F,D){const z=D.wireframe===!0;let V=i[L.id];V===void 0&&(V={},i[L.id]=V);const O=w.isInstancedMesh===!0?w.id:0;let K=V[O];K===void 0&&(K={},V[O]=K);let ee=K[F.id];ee===void 0&&(ee={},K[F.id]=ee);let ie=ee[z];return ie===void 0&&(ie=h(l()),ee[z]=ie),ie}function h(w){const L=[],F=[],D=[];for(let z=0;z<n;z++)L[z]=0,F[z]=0,D[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:w,attributes:{},index:null}}function m(w,L,F,D){const z=s.attributes,V=L.attributes;let O=0;const K=F.getAttributes();for(const ee in K)if(K[ee].location>=0){const ie=z[ee];let ge=V[ee];if(ge===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ge=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ge=w.instanceColor)),ie===void 0||ie.attribute!==ge||ge&&ie.data!==ge.data)return!0;O++}return s.attributesNum!==O||s.index!==D}function _(w,L,F,D){const z={},V=L.attributes;let O=0;const K=F.getAttributes();for(const ee in K)if(K[ee].location>=0){let ie=V[ee];ie===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const ge={};ge.attribute=ie,ie&&ie.data&&(ge.data=ie.data),z[ee]=ge,O++}s.attributes=z,s.attributesNum=O,s.index=D}function p(){const w=s.newAttributes;for(let L=0,F=w.length;L<F;L++)w[L]=0}function g(w){f(w,0)}function f(w,L){const F=s.newAttributes,D=s.enabledAttributes,z=s.attributeDivisors;F[w]=1,D[w]===0&&(t.enableVertexAttribArray(w),D[w]=1),z[w]!==L&&(t.vertexAttribDivisor(w,L),z[w]=L)}function y(){const w=s.newAttributes,L=s.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==w[F]&&(t.disableVertexAttribArray(F),L[F]=0)}function T(w,L,F,D,z,V,O){O===!0?t.vertexAttribIPointer(w,L,F,z,V):t.vertexAttribPointer(w,L,F,D,z,V)}function b(w,L,F,D){p();const z=D.attributes,V=F.getAttributes(),O=L.defaultAttributeValues;for(const K in V){const ee=V[K];if(ee.location>=0){let ie=z[K];if(ie===void 0&&(K==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),K==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const ge=ie.normalized,Me=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;const Ne=Ze.buffer,j=Ze.type,le=Ze.bytesPerElement,Se=j===t.INT||j===t.UNSIGNED_INT||ie.gpuType===1013;if(ie.isInterleavedBufferAttribute){const pe=ie.data,Ae=pe.stride,Ue=ie.offset;if(pe.isInstancedInterleavedBuffer){for(let De=0;De<ee.locationSize;De++)f(ee.location+De,pe.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let De=0;De<ee.locationSize;De++)g(ee.location+De);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let De=0;De<ee.locationSize;De++)T(ee.location+De,Me/ee.locationSize,j,ge,Ae*le,(Ue+Me/ee.locationSize*De)*le,Se)}else{if(ie.isInstancedBufferAttribute){for(let pe=0;pe<ee.locationSize;pe++)f(ee.location+pe,ie.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<ee.locationSize;pe++)g(ee.location+pe);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let pe=0;pe<ee.locationSize;pe++)T(ee.location+pe,Me/ee.locationSize,j,ge,Me*le,Me/ee.locationSize*pe*le,Se)}}else if(O!==void 0){const ge=O[K];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(ee.location,ge);break;case 3:t.vertexAttrib3fv(ee.location,ge);break;case 4:t.vertexAttrib4fv(ee.location,ge);break;default:t.vertexAttrib1fv(ee.location,ge)}}}}y()}function E(){S();for(const w in i){const L=i[w];for(const F in L){const D=L[F];for(const z in D){const V=D[z];for(const O in V)u(V[O].object),delete V[O];delete D[z]}}delete i[w]}}function A(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const F in L){const D=L[F];for(const z in D){const V=D[z];for(const O in V)u(V[O].object),delete V[O];delete D[z]}}delete i[w.id]}function R(w){for(const L in i){const F=i[L];for(const D in F){const z=F[D];if(z[w.id]===void 0)continue;const V=z[w.id];for(const O in V)u(V[O].object),delete V[O];delete z[w.id]}}}function v(w){for(const L in i){const F=i[L],D=w.isInstancedMesh===!0?w.id:0,z=F[D];if(z!==void 0){for(const V in z){const O=z[V];for(const K in O)u(O[K].object),delete O[K];delete z[V]}delete F[D],Object.keys(F).length===0&&delete i[L]}}}function S(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:S,resetDefaultState:I,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:p,enableAttribute:g,disableUnusedAttributes:y}}function gv(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function _v(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==1023&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const v=R===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==1009&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==1015&&!v)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Re("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:b,maxSamples:E,samples:A}}function vv(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ti,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,m){const _=d.clippingPlanes,p=d.clipIntersection,g=d.clipShadows,f=t.get(d);if(!r||_===null||_.length===0||s&&!g)s?u(null):c();else{const y=s?0:i,T=y*4;let b=f.clippingState||null;l.value=b,b=u(_,h,T,m);for(let E=0;E!==T;++E)b[E]=n[E];f.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,_){const p=d!==null?d.length:0;let g=null;if(p!==0){if(g=l.value,_!==!0||g===null){const f=m+p*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<f)&&(g=new Float32Array(f));for(let T=0,b=m;T!==p;++T,b+=4)a.copy(d[T]).applyMatrix4(y,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,g}}var Pi=4,Yu=[.125,.215,.35,.446,.526,.582],Ji=20,yv=256,_s=new _c,Ku=new Ge,Zo=null,Jo=0,Qo=0,el=!1,Mv=new X,Zu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:s=256,position:a=Mv}=r;Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Qo),this._renderer.xr.enabled=el,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Qo=this._renderer.getActiveMipmapLevel(),el=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:cr,format:zs,colorSpace:wl,depthBuffer:!1},i=Ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=bv(r,t,e),this._ggxMaterial=xv(r,t,e)}return i}_compileMaterial(t){const e=new Yt(new pi,t);this._renderer.compile(e,_s)}_sceneToCubeUV(t,e,n,i,r){const s=new An(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(Ku),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Yt(new mc,new uf({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,h=d.material;let m=!1;const _=t.background;_?_.isColor&&(h.color.copy(_),t.background=null,m=!0):(h.color.copy(Ku),m=!0);for(let p=0;p<6;p++){const g=p%3;g===0?(s.up.set(0,a[p],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[p],r.y,r.z)):g===1?(s.up.set(0,0,a[p]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[p],r.z)):(s.up.set(0,a[p],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[p]));const f=this._cubeSize;Lr(i,g*f,p>2?f:0,f,f),l.setRenderTarget(i),m&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=c,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;Lr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(s,_s)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,h=this._sizeLods[n],m=3*h*(n>d-Pi?n-d+Pi:0),_=4*(this._cubeSize-h);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=d-e,Lr(r,m,_,3*h,2*h),i.setRenderTarget(r),i.render(a,_s),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-n,Lr(t,m,_,3*h,2*h),i.setRenderTarget(t),i.render(a,_s)}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Le("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*Ji-1),_=r/m,p=isFinite(r)?1+Math.floor(c*_):Ji;p>Ji&&Re(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ji}`);const g=[];let f=0;for(let b=0;b<Ji;++b){const E=b/_,A=Math.exp(-E*E/2);g.push(A),b===0?f+=A:b<p&&(f+=2*A)}for(let b=0;b<g.length;b++)g[b]=g[b]/f;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const T=this._sizeLods[i];Lr(e,3*T*(i>y-Pi?i-y+Pi:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(u,_s)}};function Sv(t){const e=[],n=[],i=[];let r=t;const s=t-Pi+1+Yu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Pi?l=Yu[a-t+Pi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,p=3,g=2,f=1,y=new Float32Array(p*_*m),T=new Float32Array(g*_*m),b=new Float32Array(f*_*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,v=A>2?0:-1,S=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];y.set(S,p*_*A),T.set(h,g*_*A);const I=[A,A,A,A,A,A];b.set(I,f*_*A)}const E=new pi;E.setAttribute("position",new yn(y,p)),E.setAttribute("uv",new yn(T,g)),E.setAttribute("faceIndex",new yn(b,f)),i.push(new Yt(E,null)),r>Pi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Ju(t,e,n){const i=new Yn(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xv(t,e,n){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yv,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ao(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bv(t,e,n){const i=new Float32Array(Ji),r=new X(0,1,0);return new sn({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ao(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Qu(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ao(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function eh(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ao(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function ao(){return`

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
	`}var bf=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new hf(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new mc(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Yt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=gn),new J_(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}};function Tv(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,m=!1){return h==null?null:m?a(h):s(h)}function s(h){if(h&&h.isTexture){const m=h.mapping;if(m===303||m===304)if(e.has(h)){const _=e.get(h).texture;return o(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const p=new bf(_.height);return p.fromEquirectangularTexture(t,h),e.set(h,p),h.addEventListener("dispose",c),o(p.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const m=h.mapping,_=m===303||m===304,p=m===301||m===302;if(_||p){let g=n.get(h);const f=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==f)return i===null&&(i=new Zu(t)),g=_?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return _&&y&&y.height>0||p&&y&&l(y)?(i===null&&(i=new Zu(t)),g=_?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,n.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function o(h,m){return m===303?h.mapping=301:m===304&&(h.mapping=302),h}function l(h){let m=0;const _=6;for(let p=0;p<_;p++)h[p]!==void 0&&m++;return m===_}function c(h){const m=h.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function u(h){const m=h.target;m.removeEventListener("dispose",u);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Ev(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Al("WebGLRenderer: "+i+" extension not supported."),r}}}function Cv(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const m in h)e.update(h[m],t.ARRAY_BUFFER)}function c(d){const h=[],m=d.index,_=d.attributes.position;let p=0;if(_===void 0)return;if(m!==null){const y=m.array;p=m.version;for(let T=0,b=y.length;T<b;T+=3){const E=y[T+0],A=y[T+1],R=y[T+2];h.push(E,A,A,R,R,E)}}else{const y=_.array;p=_.version;for(let T=0,b=y.length/3-1;T<b;T+=3){const E=T+0,A=T+1,R=T+2;h.push(E,A,A,R,R,E)}}const g=new(_.count>=65535?lf:of)(h,1);g.version=p;const f=s.get(d);f&&e.remove(f),s.set(d,g)}function u(d){const h=s.get(d);if(h){const m=d.index;m!==null&&h.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function wv(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,m){m!==0&&(t.drawElementsInstanced(i,h,s,d*a,m),n.update(h,i,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,m);let _=0;for(let p=0;p<m;p++)_+=h[p];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Av(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Rv(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let S=function(){R.dispose(),i.delete(o),o.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let T=0;m===!0&&(T=1),_===!0&&(T=2),p===!0&&(T=3);let b=o.attributes.position.count*T,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const A=new Float32Array(b*E*4*d),R=new rf(A,b,E,d);R.type=ro,R.needsUpdate=!0;const v=T*4;for(let I=0;I<d;I++){const w=g[I],L=f[I],F=y[I],D=b*E*4*I;for(let z=0;z<w.count;z++){const V=z*v;m===!0&&(r.fromBufferAttribute(w,z),A[D+V+0]=r.x,A[D+V+1]=r.y,A[D+V+2]=r.z,A[D+V+3]=0),_===!0&&(r.fromBufferAttribute(L,z),A[D+V+4]=r.x,A[D+V+5]=r.y,A[D+V+6]=r.z,A[D+V+7]=0),p===!0&&(r.fromBufferAttribute(F,z),A[D+V+8]=r.x,A[D+V+9]=r.y,A[D+V+10]=r.z,A[D+V+11]=F.itemSize===4?r.w:1)}}h={count:d,texture:R,size:new Xe(b,E)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Pv(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==u&&(m.update(),s.set(m,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var Lv={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Dv(t,e,n,i,r){const s=new Yn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new is(e,n):void 0}),a=new Yn(e,n,{type:cr,depthBuffer:!1,stencilBuffer:!1}),o=new pi;o.setAttribute("position",new ci([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ci([0,2,0,0,2,0],2));const l=new k_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Yt(o,l),u=new _c(-1,1,1,-1,0,1);let d=null,h=null,m=!1,_,p=null,g=[],f=!1;this.setSize=function(y,T){s.setSize(y,T),a.setSize(y,T);for(let b=0;b<g.length;b++){const E=g[b];E.setSize&&E.setSize(y,T)}},this.setEffects=function(y){g=y,f=g.length>0&&g[0].isRenderPass===!0;const T=s.width,b=s.height;for(let E=0;E<g.length;E++){const A=g[E];A.setSize&&A.setSize(T,b)}},this.begin=function(y,T){if(m||y.toneMapping===0&&g.length===0)return!1;if(p=T,T!==null){const b=T.width,E=T.height;(s.width!==b||s.height!==E)&&this.setSize(b,E)}return f===!1&&y.setRenderTarget(s),_=y.toneMapping,y.toneMapping=0,!0},this.hasRenderPass=function(){return f},this.end=function(y,T){y.toneMapping=_,m=!0;let b=s,E=a;for(let A=0;A<g.length;A++){const R=g[A];if(R.enabled!==!1&&(R.render(y,E,b,T),R.needsSwap!==!1)){const v=b;b=E,E=v}}if(d!==y.outputColorSpace||h!==y.toneMapping){d=y.outputColorSpace,h=y.toneMapping,l.defines={},qe.getTransfer(d)==="srgb"&&(l.defines.SRGB_TRANSFER="");const A=Lv[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(c,u),p=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Tf=new bn,kl=new is(1,1),Ef=new rf,Cf=new c_,wf=new hf,th=[],nh=[],ih=new Float32Array(16),rh=new Float32Array(9),sh=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=th[r];if(s===void 0&&(s=new Float32Array(r),th[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function oo(t,e){let n=nh[e];n===void 0&&(n=new Int32Array(e),nh[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Iv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function Nv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function Uv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function Ov(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;sh.set(i),t.uniformMatrix2fv(this.addr,!1,sh),Pt(n,i)}}function Fv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;rh.set(i),t.uniformMatrix3fv(this.addr,!1,rh),Pt(n,i)}}function Bv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Rt(n,i))return;ih.set(i),t.uniformMatrix4fv(this.addr,!1,ih),Pt(n,i)}}function zv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Vv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function Gv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function Hv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function Wv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function $v(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function jv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function qv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(kl.compareFunction=n.isReversedDepthBuffer()?518:515,s=kl):s=Tf,n.setTexture2D(e||s,r)}function Yv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Cf,r)}function Kv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||wf,r)}function Zv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ef,r)}function Jv(t){switch(t){case 5126:return Iv;case 35664:return kv;case 35665:return Nv;case 35666:return Uv;case 35674:return Ov;case 35675:return Fv;case 35676:return Bv;case 5124:case 35670:return zv;case 35667:case 35671:return Vv;case 35668:case 35672:return Gv;case 35669:case 35673:return Hv;case 5125:return Wv;case 36294:return Xv;case 36295:return $v;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return Yv;case 35680:case 36300:case 36308:case 36293:return Kv;case 36289:case 36303:case 36311:case 36292:return Zv}}function Qv(t,e){t.uniform1fv(this.addr,e)}function e0(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function t0(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function n0(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function i0(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function r0(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function s0(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function a0(t,e){t.uniform1iv(this.addr,e)}function o0(t,e){t.uniform2iv(this.addr,e)}function l0(t,e){t.uniform3iv(this.addr,e)}function c0(t,e){t.uniform4iv(this.addr,e)}function u0(t,e){t.uniform1uiv(this.addr,e)}function h0(t,e){t.uniform2uiv(this.addr,e)}function d0(t,e){t.uniform3uiv(this.addr,e)}function f0(t,e){t.uniform4uiv(this.addr,e)}function p0(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=kl:a=Tf;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function m0(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Cf,s[a])}function g0(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||wf,s[a])}function _0(t,e,n){const i=this.cache,r=e.length,s=oo(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ef,s[a])}function v0(t){switch(t){case 5126:return Qv;case 35664:return e0;case 35665:return t0;case 35666:return n0;case 35674:return i0;case 35675:return r0;case 35676:return s0;case 5124:case 35670:return a0;case 35667:case 35671:return o0;case 35668:case 35672:return l0;case 35669:case 35673:return c0;case 5125:return u0;case 36294:return h0;case 36295:return d0;case 36296:return f0;case 35678:case 36198:case 36298:case 36306:case 35682:return p0;case 35679:case 36299:case 36307:return m0;case 35680:case 36300:case 36308:case 36293:return g0;case 36289:case 36303:case 36311:case 36292:return _0}}var y0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jv(e.type)}},M0=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}},S0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}},tl=/(\w+)(\])?(\[|\.)?/g;function ah(t,e){t.seq.push(e),t.map[e.id]=e}function x0(t,e,n){const i=t.name,r=i.length;for(tl.lastIndex=0;;){const s=tl.exec(i),a=tl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){ah(n,c===void 0?new y0(o,t,e):new M0(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new S0(o),ah(n,u)),n=u}}}var Ia=class{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s);x0(a,t.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}};function oh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var b0=37297,T0=0;function E0(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var lh=new Fe;function C0(t){qe._getMatrix(lh,qe.workingColorSpace,t);const e=`mat3( ${lh.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case ja:return[e,"LinearTransferOETF"];case qa:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ch(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+E0(t.getShaderSource(e),a)}else return r}function w0(t,e){const n=C0(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var A0={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function R0(t,e){const n=A0[e];return n===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var Ea=new X;function P0(){return qe.getLuminanceCoefficients(Ea),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${Ea.x.toFixed(4)}, ${Ea.y.toFixed(4)}, ${Ea.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Es).join(`
`)}function D0(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function I0(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Es(t){return t!==""}function uh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var k0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nl(t){return t.replace(k0,U0)}var N0=new Map;function U0(t,e){let n=Be[e];if(n===void 0){const i=N0.get(e);if(i!==void 0)n=Be[i],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nl(n)}var O0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(t){return t.replace(O0,F0)}function F0(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fh(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var B0={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function z0(t){return B0[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var V0={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function G0(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":V0[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var H0={302:"ENVMAP_MODE_REFRACTION"};function W0(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":H0[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var X0={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function $0(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":X0[t.combine]||"ENVMAP_BLENDING_NONE"}function j0(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function q0(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=z0(n),c=G0(n),u=W0(n),d=$0(n),h=j0(n),m=L0(n),_=D0(s),p=r.createProgram();let g,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Es).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(Es).join(`
`),f.length>0&&(f+=`
`)):(g=[fh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Es).join(`
`),f=[fh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?Be.tonemapping_pars_fragment:"",n.toneMapping!==0?R0("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,w0("linearToOutputTexel",n.outputColorSpace),P0(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Es).join(`
`)),a=Nl(a),a=uh(a,n),a=hh(a,n),o=Nl(o),o=uh(o,n),o=hh(o,n),a=dh(a),o=dh(o),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const T=y+g+a,b=y+f+o,E=oh(r,r.VERTEX_SHADER,T),A=oh(r,r.FRAGMENT_SHADER,b);r.attachShader(p,E),r.attachShader(p,A),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function R(w){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(p)||"",F=r.getShaderInfoLog(E)||"",D=r.getShaderInfoLog(A)||"",z=L.trim(),V=F.trim(),O=D.trim();let K=!0,ee=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,E,A);else{const ie=ch(r,E,"vertex"),ge=ch(r,A,"fragment");Le("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+z+`
`+ie+`
`+ge)}else z!==""?Re("WebGLProgram: Program Info Log:",z):(V===""||O==="")&&(ee=!1);ee&&(w.diagnostics={runnable:K,programLog:z,vertexShader:{log:V,prefix:g},fragmentShader:{log:O,prefix:f}})}r.deleteShader(E),r.deleteShader(A),v=new Ia(r,p),S=I0(r,p)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(p,b0)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=T0++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=A,this}var Y0=0,K0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Z0(t),e.set(t,n)),n}},Z0=class{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}};function J0(t){return t===1030||t===37490||t===36285}function Q0(t,e,n,i,r,s){const a=new dc,o=new K0,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,S,I,w,L,F){const D=w.fog,z=L.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,O=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=e.get(v.envMap||V,O),ee=K&&K.mapping===306?K.image.height:null,ie=m[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Re("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const ge=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Me=ge!==void 0?ge.length:0;let Ze=0;z.morphAttributes.position!==void 0&&(Ze=1),z.morphAttributes.normal!==void 0&&(Ze=2),z.morphAttributes.color!==void 0&&(Ze=3);let Ne,j,le,Se;if(ie){const Ie=$n[ie];Ne=Ie.vertexShader,j=Ie.fragmentShader}else Ne=v.vertexShader,j=v.fragmentShader,o.update(v),le=o.getVertexShaderID(v),Se=o.getFragmentShaderID(v);const pe=t.getRenderTarget(),Ae=t.state.buffers.depth.getReversed(),Ue=L.isInstancedMesh===!0,De=L.isBatchedMesh===!0,tt=!!v.map,We=!!v.matcap,At=!!K,vt=!!v.aoMap,ln=!!v.lightMap,Ot=!!v.bumpMap,bt=!!v.normalMap,k=!!v.displacementMap,Xt=!!v.emissiveMap,$e=!!v.metalnessMap,Je=!!v.roughnessMap,de=v.anisotropy>0,ut=v.clearcoat>0,Ce=v.dispersion>0,C=v.iridescence>0,M=v.sheen>0,G=v.transmission>0,Y=de&&!!v.anisotropyMap,J=ut&&!!v.clearcoatMap,ne=ut&&!!v.clearcoatNormalMap,ce=ut&&!!v.clearcoatRoughnessMap,N=C&&!!v.iridescenceMap,se=C&&!!v.iridescenceThicknessMap,ue=M&&!!v.sheenColorMap,me=M&&!!v.sheenRoughnessMap,Z=!!v.specularMap,Pe=!!v.specularColorMap,Oe=!!v.specularIntensityMap,je=G&&!!v.transmissionMap,ze=G&&!!v.thicknessMap,P=!!v.gradientMap,q=!!v.alphaMap,te=v.alphaTest>0,oe=!!v.alphaHash,xe=!!v.extensions;let Q=0;v.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(Q=t.toneMapping);const be={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Ne,fragmentShader:j,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:De,batchingColor:De&&L._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&L.instanceColor!==null,instancingMorph:Ue&&L.morphTexture!==null,outputColorSpace:pe===null?t.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:We,envMap:At,envMapMode:At&&K.mapping,envMapCubeUVHeight:ee,aoMap:vt,lightMap:ln,bumpMap:Ot,normalMap:bt,displacementMap:k,emissiveMap:Xt,normalMapObjectSpace:bt&&v.normalMapType===1,normalMapTangentSpace:bt&&v.normalMapType===0,packedNormalMap:bt&&v.normalMapType===0&&J0(v.normalMap.format),metalnessMap:$e,roughnessMap:Je,anisotropy:de,anisotropyMap:Y,clearcoat:ut,clearcoatMap:J,clearcoatNormalMap:ne,clearcoatRoughnessMap:ce,dispersion:Ce,iridescence:C,iridescenceMap:N,iridescenceThicknessMap:se,sheen:M,sheenColorMap:ue,sheenRoughnessMap:me,specularMap:Z,specularColorMap:Pe,specularIntensityMap:Oe,transmission:G,transmissionMap:je,thicknessMap:ze,gradientMap:P,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:q,alphaTest:te,alphaHash:oe,combine:v.combine,mapUv:tt&&_(v.map.channel),aoMapUv:vt&&_(v.aoMap.channel),lightMapUv:ln&&_(v.lightMap.channel),bumpMapUv:Ot&&_(v.bumpMap.channel),normalMapUv:bt&&_(v.normalMap.channel),displacementMapUv:k&&_(v.displacementMap.channel),emissiveMapUv:Xt&&_(v.emissiveMap.channel),metalnessMapUv:$e&&_(v.metalnessMap.channel),roughnessMapUv:Je&&_(v.roughnessMap.channel),anisotropyMapUv:Y&&_(v.anisotropyMap.channel),clearcoatMapUv:J&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&_(v.sheenRoughnessMap.channel),specularMapUv:Z&&_(v.specularMap.channel),specularColorMapUv:Pe&&_(v.specularColorMap.channel),specularIntensityMapUv:Oe&&_(v.specularIntensityMap.channel),transmissionMapUv:je&&_(v.transmissionMap.channel),thicknessMapUv:ze&&_(v.thicknessMap.channel),alphaMapUv:q&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(bt||de),vertexNormals:!!z.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(tt||q),fog:!!D,useFog:v.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||z.attributes.normal===void 0&&bt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ae,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ze,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Xt&&v.emissiveMap.isVideoTexture===!0&&qe.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||De)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function g(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)S.push(I),S.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(f(S,v),y(S,v),S.push(t.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function f(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function y(v,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const S=m[v.type];let I;if(S){const w=$n[S];I=L_.clone(w.uniforms)}else I=v.uniforms;return I}function b(v,S){let I=u.get(S);return I!==void 0?++I.usedTimes:(I=new q0(t,S,v,r),c.push(I),u.set(S,I)),I}function E(v){if(--v.usedTimes===0){const S=c.indexOf(v);c[S]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function A(v){o.remove(v)}function R(){o.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:T,acquireProgram:b,releaseProgram:E,releaseShaderCache:A,programs:c,dispose:R}}function ey(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ty(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ph(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function mh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let m=0;return h.isInstancedMesh&&(m+=2),h.isSkinnedMesh&&(m+=1),m}function o(h,m,_,p,g,f){let y=t[e];return y===void 0?(y={id:h.id,object:h,geometry:m,material:_,materialVariant:a(h),groupOrder:p,renderOrder:h.renderOrder,z:g,group:f},t[e]=y):(y.id=h.id,y.object=h,y.geometry=m,y.material=_,y.materialVariant=a(h),y.groupOrder=p,y.renderOrder=h.renderOrder,y.z=g,y.group=f),e++,y}function l(h,m,_,p,g,f){const y=o(h,m,_,p,g,f);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function c(h,m,_,p,g,f){const y=o(h,m,_,p,g,f);_.transmission>0?i.unshift(y):_.transparent===!0?r.unshift(y):n.unshift(y)}function u(h,m){n.length>1&&n.sort(h||ty),i.length>1&&i.sort(m||ph),r.length>1&&r.sort(m||ph)}function d(){for(let h=e,m=t.length;h<m;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function ny(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new mh,t.set(i,[a])):r>=s.length?(a=new mh,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function iy(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new X,color:new Ge};break;case"SpotLight":n={position:new X,direction:new X,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new X,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new X,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new X,halfWidth:new X,halfHeight:new X};break}return t[e.id]=n,n}}}function ry(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var sy=0;function ay(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function oy(t){const e=new iy,n=ry(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new X);const r=new X,s=new St,a=new St;function o(c){let u=0,d=0,h=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let m=0,_=0,p=0,g=0,f=0,y=0,T=0,b=0,E=0,A=0,R=0;c.sort(ay);for(let S=0,I=c.length;S<I;S++){const w=c[S],L=w.color,F=w.intensity,D=w.distance;let z=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===1030?z=w.shadow.map.texture:z=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*F,d+=L.g*F,h+=L.b*F;else if(w.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(w.sh.coefficients[V],F);R++}else if(w.isDirectionalLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,K=n.get(w);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.directionalShadow[m]=K,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=w.shadow.matrix,y++}i.directional[m]=V,m++}else if(w.isSpotLight){const V=e.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(L).multiplyScalar(F),V.distance=D,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,i.spot[p]=V;const O=w.shadow;if(w.map&&(i.spotLightMap[E]=w.map,E++,O.updateMatrices(w),w.castShadow&&A++),i.spotLightMatrix[p]=O.matrix,w.castShadow){const K=n.get(w);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=z,b++}p++}else if(w.isRectAreaLight){const V=e.get(w);V.color.copy(L).multiplyScalar(F),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=V,g++}else if(w.isPointLight){const V=e.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const O=w.shadow,K=n.get(w);K.shadowIntensity=O.intensity,K.shadowBias=O.bias,K.shadowNormalBias=O.normalBias,K.shadowRadius=O.radius,K.shadowMapSize=O.mapSize,K.shadowCameraNear=O.camera.near,K.shadowCameraFar=O.camera.far,i.pointShadow[_]=K,i.pointShadowMap[_]=z,i.pointShadowMatrix[_]=w.shadow.matrix,T++}i.point[_]=V,_++}else if(w.isHemisphereLight){const V=e.get(w);V.skyColor.copy(w.color).multiplyScalar(F),V.groundColor.copy(w.groundColor).multiplyScalar(F),i.hemi[f]=V,f++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==m||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==g||v.hemiLength!==f||v.numDirectionalShadows!==y||v.numPointShadows!==T||v.numSpotShadows!==b||v.numSpotMaps!==E||v.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=p,i.rectArea.length=g,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=b+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,v.directionalLength=m,v.pointLength=_,v.spotLength=p,v.rectAreaLength=g,v.hemiLength=f,v.numDirectionalShadows=y,v.numPointShadows=T,v.numSpotShadows=b,v.numSpotMaps=E,v.numLightProbes=R,i.version=sy++)}function l(c,u){let d=0,h=0,m=0,_=0,p=0;const g=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const T=c[f];if(T.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),d++}else if(T.isSpotLight){const b=i.spot[m];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),m++}else if(T.isRectAreaLight){const b=i.rectArea[_];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(T.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),_++}else if(T.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(g),h++}else if(T.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(g),p++}}}return{setup:o,setupView:l,state:i}}function gh(t){const e=new oy(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function ly(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new gh(t),e.set(r,[o])):s>=a.length?(o=new gh(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var cy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uy=`uniform sampler2D shadow_pass;
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
}`,hy=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],dy=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],_h=new St,vs=new X,nl=new X;function fy(t,e,n){let i=new pc;const r=new Xe,s=new Xe,a=new wt,o=new N_,l=new U_,c={},u=n.maxTextureSize,d={0:1,1:0,2:2},h=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:cy,fragmentShader:uy}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new pi;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Yt(_,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let f=this.type;this.render=function(A,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===2&&(Re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const S=t.getRenderTarget(),I=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),L=t.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const F=f!==this.type;F&&R.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(z=>z.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,z=A.length;D<z;D++){const V=A[D],O=V.shadow;if(O===void 0){Re("WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const K=O.getFrameExtents();r.multiply(K),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,O.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=ee,O.map===null||F===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===3){if(V.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Yn(r.x,r.y,{format:Xa,type:cr,minFilter:gn,magFilter:gn,generateMipmaps:!1}),O.map.texture.name=V.name+".shadowMap",O.map.depthTexture=new is(r.x,r.y,ro),O.map.depthTexture.name=V.name+".shadowMapDepth",O.map.depthTexture.format=Vs,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt}else V.isPointLight?(O.map=new bf(r.x),O.map.depthTexture=new R_(r.x,lr)):(O.map=new Yn(r.x,r.y),O.map.depthTexture=new is(r.x,r.y,lr)),O.map.depthTexture.name=V.name+".shadowMap",O.map.depthTexture.format=Vs,this.type===1?(O.map.depthTexture.compareFunction=ee?518:515,O.map.depthTexture.minFilter=gn,O.map.depthTexture.magFilter=gn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=qt,O.map.depthTexture.magFilter=qt);O.camera.updateProjectionMatrix()}const ie=O.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<ie;ge++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(O.map),t.clear());const Me=O.getViewport(ge);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),L.viewport(a)}if(V.isPointLight){const Me=O.camera,Ze=O.matrix,Ne=V.distance||Me.far;Ne!==Me.far&&(Me.far=Ne,Me.updateProjectionMatrix()),vs.setFromMatrixPosition(V.matrixWorld),Me.position.copy(vs),nl.copy(Me.position),nl.add(hy[ge]),Me.up.copy(dy[ge]),Me.lookAt(nl),Me.updateMatrixWorld(),Ze.makeTranslation(-vs.x,-vs.y,-vs.z),_h.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),O._frustum.setFromProjectionMatrix(_h,Me.coordinateSystem,Me.reversedDepth)}else O.updateMatrices(V);i=O.getFrustum(),b(R,v,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===3&&y(O,v),O.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(S,I,w)};function y(A,R){const v=e.update(p);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Yn(r.x,r.y,{format:Xa,type:cr})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,v,h,p,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,v,m,p,null)}function T(A,R,v,S){let I=null;const w=v.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)I=w;else if(I=v.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const L=I.uuid,F=R.uuid;let D=c[L];D===void 0&&(D={},c[L]=D);let z=D[F];z===void 0&&(z=I.clone(),D[F]=z,R.addEventListener("dispose",E)),I=z}if(I.visible=R.visible,I.wireframe=R.wireframe,S===3?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:d[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const L=t.properties.get(I);L.light=v}return I}function b(A,R,v,S,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===3)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,A.matrixWorld);const L=e.update(A),F=A.material;if(Array.isArray(F)){const D=L.groups;for(let z=0,V=D.length;z<V;z++){const O=D[z],K=F[O.materialIndex];if(K&&K.visible){const ee=T(A,K,S,I);A.onBeforeShadow(t,A,R,v,L,ee,O),t.renderBufferDirect(v,null,L,ee,A,O),A.onAfterShadow(t,A,R,v,L,ee,O)}}}else if(F.visible){const D=T(A,F,S,I);A.onBeforeShadow(t,A,R,v,L,D,null),t.renderBufferDirect(v,null,L,D,A,null),A.onAfterShadow(t,A,R,v,L,D,null)}}const w=A.children;for(let L=0,F=w.length;L<F;L++)b(w[L],R,v,S,I)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const v=c[R],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}function py(t,e){function n(){let P=!1;const q=new wt;let te=null;const oe=new wt(0,0,0,0);return{setMask:function(xe){te!==xe&&!P&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){P=xe},setClear:function(xe,Q,be,Ie,Kt){Kt===!0&&(xe*=Ie,Q*=Ie,be*=Ie),q.set(xe,Q,be,Ie),oe.equals(q)===!1&&(t.clearColor(xe,Q,be,Ie),oe.copy(q))},reset:function(){P=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let P=!1,q=!1,te=null,oe=null,xe=null;return{setReversed:function(Q){if(q!==Q){const be=e.get("EXT_clip_control");Q?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),q=Q;const Ie=xe;xe=null,this.setClear(Ie)}},getReversed:function(){return q},setTest:function(Q){Q?pe(t.DEPTH_TEST):Ae(t.DEPTH_TEST)},setMask:function(Q){te!==Q&&!P&&(t.depthMask(Q),te=Q)},setFunc:function(Q){if(q&&(Q=n_[Q]),oe!==Q){switch(Q){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}oe=Q}},setLocked:function(Q){P=Q},setClear:function(Q){xe!==Q&&(xe=Q,q&&(Q=1-Q),t.clearDepth(Q))},reset:function(){P=!1,te=null,oe=null,xe=null,q=!1}}}function r(){let P=!1,q=null,te=null,oe=null,xe=null,Q=null,be=null,Ie=null,Kt=null;return{setTest:function(lt){P||(lt?pe(t.STENCIL_TEST):Ae(t.STENCIL_TEST))},setMask:function(lt){q!==lt&&!P&&(t.stencilMask(lt),q=lt)},setFunc:function(lt,Bn,In){(te!==lt||oe!==Bn||xe!==In)&&(t.stencilFunc(lt,Bn,In),te=lt,oe=Bn,xe=In)},setOp:function(lt,Bn,In){(Q!==lt||be!==Bn||Ie!==In)&&(t.stencilOp(lt,Bn,In),Q=lt,be=Bn,Ie=In)},setLocked:function(lt){P=lt},setClear:function(lt){Kt!==lt&&(t.clearStencil(lt),Kt=lt)},reset:function(){P=!1,q=null,te=null,oe=null,xe=null,Q=null,be=null,Ie=null,Kt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},m=new WeakMap,_=[],p=null,g=!1,f=null,y=null,T=null,b=null,E=null,A=null,R=null,v=new Ge(0,0,0),S=0,I=!1,w=null,L=null,F=null,D=null,z=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,K=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(ee)[1]),O=K>=1):ee.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),O=K>=2);let ie=null,ge={};const Me=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),Ne=new wt().fromArray(Me),j=new wt().fromArray(Ze);function le(P,q,te,oe){const xe=new Uint8Array(4),Q=t.createTexture();t.bindTexture(P,Q),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let be=0;be<te;be++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(q,0,t.RGBA,1,1,oe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(q+be,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Q}const Se={};Se[t.TEXTURE_2D]=le(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=le(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=le(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=le(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),pe(t.DEPTH_TEST),a.setFunc(3),Ot(!1),bt(1),pe(t.CULL_FACE),vt(0);function pe(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function Ae(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function Ue(P,q){return h[P]!==q?(t.bindFramebuffer(P,q),h[P]=q,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=q),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=q),!0):!1}function De(P,q){let te=_,oe=!1;if(P){te=m.get(q),te===void 0&&(te=[],m.set(q,te));const xe=P.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,be=xe.length;Q<be;Q++)te[Q]=t.COLOR_ATTACHMENT0+Q;te.length=xe.length,oe=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,oe=!0);oe&&t.drawBuffers(te)}function tt(P){return p!==P?(t.useProgram(P),p=P,!0):!1}const We={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};We[103]=t.MIN,We[104]=t.MAX;const At={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function vt(P,q,te,oe,xe,Q,be,Ie,Kt,lt){if(P===0){g===!0&&(Ae(t.BLEND),g=!1);return}if(g===!1&&(pe(t.BLEND),g=!0),P!==5){if(P!==f||lt!==I){if((y!==100||E!==100)&&(t.blendEquation(t.FUNC_ADD),y=100,E=100),lt)switch(P){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Le("WebGLState: Invalid blending: ",P);break}else switch(P){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",P);break}T=null,b=null,A=null,R=null,v.set(0,0,0),S=0,f=P,I=lt}return}xe=xe||q,Q=Q||te,be=be||oe,(q!==y||xe!==E)&&(t.blendEquationSeparate(We[q],We[xe]),y=q,E=xe),(te!==T||oe!==b||Q!==A||be!==R)&&(t.blendFuncSeparate(At[te],At[oe],At[Q],At[be]),T=te,b=oe,A=Q,R=be),(Ie.equals(v)===!1||Kt!==S)&&(t.blendColor(Ie.r,Ie.g,Ie.b,Kt),v.copy(Ie),S=Kt),f=P,I=!1}function ln(P,q){P.side===2?Ae(t.CULL_FACE):pe(t.CULL_FACE);let te=P.side===1;q&&(te=!te),Ot(te),P.blending===1&&P.transparent===!1?vt(0):vt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Xt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?pe(t.SAMPLE_ALPHA_TO_COVERAGE):Ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ot(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function bt(P){P!==0?(pe(t.CULL_FACE),P!==L&&(P===1?t.cullFace(t.BACK):P===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ae(t.CULL_FACE),L=P}function k(P){P!==F&&(O&&t.lineWidth(P),F=P)}function Xt(P,q,te){P?(pe(t.POLYGON_OFFSET_FILL),(D!==q||z!==te)&&(D=q,z=te,a.getReversed()&&(q=-q),t.polygonOffset(q,te))):Ae(t.POLYGON_OFFSET_FILL)}function $e(P){P?pe(t.SCISSOR_TEST):Ae(t.SCISSOR_TEST)}function Je(P){P===void 0&&(P=t.TEXTURE0+V-1),ie!==P&&(t.activeTexture(P),ie=P)}function de(P,q,te){te===void 0&&(ie===null?te=t.TEXTURE0+V-1:te=ie);let oe=ge[te];oe===void 0&&(oe={type:void 0,texture:void 0},ge[te]=oe),(oe.type!==P||oe.texture!==q)&&(ie!==te&&(t.activeTexture(te),ie=te),t.bindTexture(P,q||Se[P]),oe.type=P,oe.texture=q)}function ut(){const P=ge[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ce(){try{t.compressedTexImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function C(){try{t.compressedTexImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function M(){try{t.texSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function G(){try{t.texSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ne(){try{t.texStorage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function ce(){try{t.texStorage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function N(){try{t.texImage2D(...arguments)}catch(P){Le("WebGLState:",P)}}function se(){try{t.texImage3D(...arguments)}catch(P){Le("WebGLState:",P)}}function ue(P){return d[P]!==void 0?d[P]:t.getParameter(P)}function me(P,q){d[P]!==q&&(t.pixelStorei(P,q),d[P]=q)}function Z(P){Ne.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ne.copy(P))}function Pe(P){j.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),j.copy(P))}function Oe(P,q){let te=c.get(q);te===void 0&&(te=new WeakMap,c.set(q,te));let oe=te.get(P);oe===void 0&&(oe=t.getUniformBlockIndex(q,P.name),te.set(P,oe))}function je(P,q){const te=c.get(q).get(P);l.get(q)!==te&&(t.uniformBlockBinding(q,te,P.__bindingPointIndex),l.set(q,te))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,ge={},h={},m=new WeakMap,_=[],p=null,g=!1,f=null,y=null,T=null,b=null,E=null,A=null,R=null,v=new Ge(0,0,0),S=0,I=!1,w=null,L=null,F=null,D=null,z=null,Ne.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:pe,disable:Ae,bindFramebuffer:Ue,drawBuffers:De,useProgram:tt,setBlending:vt,setMaterial:ln,setFlipSided:Ot,setCullFace:bt,setLineWidth:k,setPolygonOffset:Xt,setScissorTest:$e,activeTexture:Je,bindTexture:de,unbindTexture:ut,compressedTexImage2D:Ce,compressedTexImage3D:C,texImage2D:N,texImage3D:se,pixelStorei:me,getParameter:ue,updateUBOMapping:Oe,uniformBlockBinding:je,texStorage2D:ne,texStorage3D:ce,texSubImage2D:M,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:Z,viewport:Pe,reset:ze}}function my(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d=new Set;let h;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(C,M){return _?new OffscreenCanvas(C,M):Gs("canvas")}function g(C,M,G){let Y=1;const J=Ce(C);if((J.width>G||J.height>G)&&(Y=G/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ne=Math.floor(Y*J.width),ce=Math.floor(Y*J.height);h===void 0&&(h=p(ne,ce));const N=M?p(ne,ce):h;return N.width=ne,N.height=ce,N.getContext("2d").drawImage(C,0,0,ne,ce),Re("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ne+"x"+ce+")."),N}else return"data"in C&&Re("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function f(C){return C.generateMipmaps}function y(C){t.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(C,M,G,Y,J,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ce;Y&&(ce=e.get("EXT_texture_norm16"),ce||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=M;if(M===t.RED&&(G===t.FLOAT&&(N=t.R32F),G===t.HALF_FLOAT&&(N=t.R16F),G===t.UNSIGNED_BYTE&&(N=t.R8),G===t.UNSIGNED_SHORT&&ce&&(N=ce.R16_EXT),G===t.SHORT&&ce&&(N=ce.R16_SNORM_EXT)),M===t.RED_INTEGER&&(G===t.UNSIGNED_BYTE&&(N=t.R8UI),G===t.UNSIGNED_SHORT&&(N=t.R16UI),G===t.UNSIGNED_INT&&(N=t.R32UI),G===t.BYTE&&(N=t.R8I),G===t.SHORT&&(N=t.R16I),G===t.INT&&(N=t.R32I)),M===t.RG&&(G===t.FLOAT&&(N=t.RG32F),G===t.HALF_FLOAT&&(N=t.RG16F),G===t.UNSIGNED_BYTE&&(N=t.RG8),G===t.UNSIGNED_SHORT&&ce&&(N=ce.RG16_EXT),G===t.SHORT&&ce&&(N=ce.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(G===t.UNSIGNED_BYTE&&(N=t.RG8UI),G===t.UNSIGNED_SHORT&&(N=t.RG16UI),G===t.UNSIGNED_INT&&(N=t.RG32UI),G===t.BYTE&&(N=t.RG8I),G===t.SHORT&&(N=t.RG16I),G===t.INT&&(N=t.RG32I)),M===t.RGB_INTEGER&&(G===t.UNSIGNED_BYTE&&(N=t.RGB8UI),G===t.UNSIGNED_SHORT&&(N=t.RGB16UI),G===t.UNSIGNED_INT&&(N=t.RGB32UI),G===t.BYTE&&(N=t.RGB8I),G===t.SHORT&&(N=t.RGB16I),G===t.INT&&(N=t.RGB32I)),M===t.RGBA_INTEGER&&(G===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),G===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),G===t.UNSIGNED_INT&&(N=t.RGBA32UI),G===t.BYTE&&(N=t.RGBA8I),G===t.SHORT&&(N=t.RGBA16I),G===t.INT&&(N=t.RGBA32I)),M===t.RGB&&(G===t.UNSIGNED_SHORT&&ce&&(N=ce.RGB16_EXT),G===t.SHORT&&ce&&(N=ce.RGB16_SNORM_EXT),G===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),G===t.UNSIGNED_INT_10F_11F_11F_REV&&(N=t.R11F_G11F_B10F)),M===t.RGBA){const se=ne?ja:qe.getTransfer(J);G===t.FLOAT&&(N=t.RGBA32F),G===t.HALF_FLOAT&&(N=t.RGBA16F),G===t.UNSIGNED_BYTE&&(N=se==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),G===t.UNSIGNED_SHORT&&ce&&(N=ce.RGBA16_EXT),G===t.SHORT&&ce&&(N=ce.RGBA16_SNORM_EXT),G===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),G===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function E(C,M){let G;return C?M===null||M===1014||M===1020?G=t.DEPTH24_STENCIL8:M===1015?G=t.DEPTH32F_STENCIL8:M===1012&&(G=t.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===1014||M===1020?G=t.DEPTH_COMPONENT24:M===1015?G=t.DEPTH_COMPONENT32F:M===1012&&(G=t.DEPTH_COMPONENT16),G}function A(C,M){return f(C)===!0||C.isFramebufferTexture&&C.minFilter!==1003&&C.minFilter!==1006?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){const M=C.target;M.removeEventListener("dispose",R),S(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function v(C){const M=C.target;M.removeEventListener("dispose",v),w(M)}function S(C){const M=i.get(C);if(M.__webglInit===void 0)return;const G=C.source,Y=m.get(G);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(C),Object.keys(Y).length===0&&m.delete(G)}i.remove(C)}function I(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const G=C.source,Y=m.get(G);delete Y[M.__cacheKey],a.memory.textures--}function w(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)t.deleteFramebuffer(M.__webglFramebuffer[Y]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=C.textures;for(let Y=0,J=G.length;Y<J;Y++){const ne=i.get(G[Y]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(C)}let L=0;function F(){L=0}function D(){return L}function z(C){L=C}function V(){const C=L;return C>=r.maxTextures&&Re("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function O(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function K(C,M){const G=i.get(C);if(C.isVideoTexture&&de(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Y=C.image;if(Y===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(G,C,M);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,G.__webglTexture,t.TEXTURE0+M)}function ee(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ae(G,C,M);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,G.__webglTexture,t.TEXTURE0+M)}function ie(C,M){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){Ae(G,C,M);return}n.bindTexture(t.TEXTURE_3D,G.__webglTexture,t.TEXTURE0+M)}function ge(C,M){const G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Ue(G,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture,t.TEXTURE0+M)}const Me={[Tl]:t.REPEAT,[ai]:t.CLAMP_TO_EDGE,[El]:t.MIRRORED_REPEAT},Ze={[qt]:t.NEAREST,[ig]:t.NEAREST_MIPMAP_NEAREST,[rg]:t.NEAREST_MIPMAP_LINEAR,[gn]:t.LINEAR,[sg]:t.LINEAR_MIPMAP_NEAREST,[uc]:t.LINEAR_MIPMAP_LINEAR},Ne={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function j(C,M){if(M.type===1015&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===1006||M.magFilter===1007||M.magFilter===1005||M.magFilter===1008||M.minFilter===1006||M.minFilter===1007||M.minFilter===1005||M.minFilter===1008)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,Me[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,Me[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,Me[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Ze[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Ze[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Ne[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===1003||M.minFilter!==1005&&M.minFilter!==1008||M.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function le(C,M){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));const Y=M.source;let J=m.get(Y);J===void 0&&(J={},m.set(Y,J));const ne=O(M);if(ne!==C.__cacheKey){J[ne]===void 0&&(J[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[ne].usedTimes++;const ce=J[C.__cacheKey];ce!==void 0&&(J[C.__cacheKey].usedTimes--,ce.usedTimes===0&&I(M)),C.__cacheKey=ne,C.__webglTexture=J[ne].texture}return G}function Se(C,M,G){return Math.floor(Math.floor(C/G)/M)}function pe(C,M,G,Y){const ne=C.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,G,Y,M.data);else{ne.sort((me,Z)=>me.start-Z.start);let ce=0;for(let me=1;me<ne.length;me++){const Z=ne[ce],Pe=ne[me],Oe=Z.start+Z.count,je=Se(Pe.start,M.width,4),ze=Se(Z.start,M.width,4);Pe.start<=Oe+1&&je===ze&&Se(Pe.start+Pe.count-1,M.width,4)===je?Z.count=Math.max(Z.count,Pe.start+Pe.count-Z.start):(++ce,ne[ce]=Pe)}ne.length=ce+1;const N=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let me=0,Z=ne.length;me<Z;me++){const Pe=ne[me],Oe=Math.floor(Pe.start/4),je=Math.ceil(Pe.count/4),ze=Oe%M.width,P=Math.floor(Oe/M.width),q=je,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,ze,P,q,te,G,Y,M.data)}C.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,N),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function Ae(C,M,G){let Y=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=t.TEXTURE_3D);const J=le(C,M),ne=M.source;n.bindTexture(Y,C.__webglTexture,t.TEXTURE0+G);const ce=i.get(ne);if(ne.version!==ce.__version||J===!0){if(n.activeTexture(t.TEXTURE0+G),!(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)){const q=qe.getPrimaries(qe.workingColorSpace),te=M.colorSpace===""?null:qe.getPrimaries(M.colorSpace),oe=M.colorSpace===""||q===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let N=g(M.image,!1,r.maxTextureSize);N=ut(M,N);const se=s.convert(M.format,M.colorSpace),ue=s.convert(M.type);let me=b(M.internalFormat,se,ue,M.normalized,M.colorSpace,M.isVideoTexture);j(Y,M);let Z;const Pe=M.mipmaps,Oe=M.isVideoTexture!==!0,je=ce.__version===void 0||J===!0,ze=ne.dataReady,P=A(M,N);if(M.isDepthTexture)me=E(M.format===qd,M.type),je&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,me,N.width,N.height):n.texImage2D(t.TEXTURE_2D,0,me,N.width,N.height,0,se,ue,null));else if(M.isDataTexture)if(Pe.length>0){Oe&&je&&n.texStorage2D(t.TEXTURE_2D,P,me,Pe[0].width,Pe[0].height);for(let q=0,te=Pe.length;q<te;q++)Z=Pe[q],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Z.width,Z.height,se,ue,Z.data):n.texImage2D(t.TEXTURE_2D,q,me,Z.width,Z.height,0,se,ue,Z.data);M.generateMipmaps=!1}else Oe?(je&&n.texStorage2D(t.TEXTURE_2D,P,me,N.width,N.height),ze&&pe(M,N,se,ue)):n.texImage2D(t.TEXTURE_2D,0,me,N.width,N.height,0,se,ue,N.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,me,Pe[0].width,Pe[0].height,N.depth);for(let q=0,te=Pe.length;q<te;q++)if(Z=Pe[q],M.format!==1023)if(se!==null)if(Oe){if(ze)if(M.layerUpdates.size>0){const oe=qu(Z.width,Z.height,M.format,M.type);for(const xe of M.layerUpdates){const Q=Z.data.subarray(xe*oe/Z.data.BYTES_PER_ELEMENT,(xe+1)*oe/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,xe,Z.width,Z.height,1,se,Q)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Z.width,Z.height,N.depth,se,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,me,Z.width,Z.height,N.depth,0,Z.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?ze&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Z.width,Z.height,N.depth,se,ue,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,me,Z.width,Z.height,N.depth,0,se,ue,Z.data)}else{Oe&&je&&n.texStorage2D(t.TEXTURE_2D,P,me,Pe[0].width,Pe[0].height);for(let q=0,te=Pe.length;q<te;q++)Z=Pe[q],M.format!==1023?se!==null?Oe?ze&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Z.width,Z.height,se,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,q,me,Z.width,Z.height,0,Z.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Z.width,Z.height,se,ue,Z.data):n.texImage2D(t.TEXTURE_2D,q,me,Z.width,Z.height,0,se,ue,Z.data)}else if(M.isDataArrayTexture)if(Oe){if(je&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,me,N.width,N.height,N.depth),ze)if(M.layerUpdates.size>0){const q=qu(N.width,N.height,M.format,M.type);for(const te of M.layerUpdates){const oe=N.data.subarray(te*q/N.data.BYTES_PER_ELEMENT,(te+1)*q/N.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,N.width,N.height,1,se,ue,oe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,se,ue,N.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,me,N.width,N.height,N.depth,0,se,ue,N.data);else if(M.isData3DTexture)Oe?(je&&n.texStorage3D(t.TEXTURE_3D,P,me,N.width,N.height,N.depth),ze&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,se,ue,N.data)):n.texImage3D(t.TEXTURE_3D,0,me,N.width,N.height,N.depth,0,se,ue,N.data);else if(M.isFramebufferTexture){if(je)if(Oe)n.texStorage2D(t.TEXTURE_2D,P,me,N.width,N.height);else{let q=N.width,te=N.height;for(let oe=0;oe<P;oe++)n.texImage2D(t.TEXTURE_2D,oe,me,q,te,0,se,ue,null),q>>=1,te>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const q=t.canvas;if(q.hasAttribute("layoutsubtree")||q.setAttribute("layoutsubtree","true"),N.parentNode!==q){q.appendChild(N),d.add(M),q.onpaint=be=>{const Ie=be.changedElements;for(const Kt of d)Ie.includes(Kt.image)&&(Kt.needsUpdate=!0)},q.requestPaint();return}const te=0,oe=t.RGBA,xe=t.RGBA,Q=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,te,oe,xe,Q,N),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Oe&&je){const q=Ce(Pe[0]);n.texStorage2D(t.TEXTURE_2D,P,me,q.width,q.height)}for(let q=0,te=Pe.length;q<te;q++)Z=Pe[q],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,se,ue,Z):n.texImage2D(t.TEXTURE_2D,q,me,se,ue,Z);M.generateMipmaps=!1}else if(Oe){if(je){const q=Ce(N);n.texStorage2D(t.TEXTURE_2D,P,me,q.width,q.height)}ze&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,ue,N)}else n.texImage2D(t.TEXTURE_2D,0,me,se,ue,N);f(M)&&y(Y),ce.__version=ne.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Ue(C,M,G){if(M.image.length!==6)return;const Y=le(C,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+G);const ne=i.get(J);if(J.version!==ne.__version||Y===!0){n.activeTexture(t.TEXTURE0+G);const ce=qe.getPrimaries(qe.workingColorSpace),N=M.colorSpace===""?null:qe.getPrimaries(M.colorSpace),se=M.colorSpace===""||ce===N?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ue=M.isCompressedTexture||M.image[0].isCompressedTexture,me=M.image[0]&&M.image[0].isDataTexture,Z=[];for(let Q=0;Q<6;Q++)!ue&&!me?Z[Q]=g(M.image[Q],!0,r.maxCubemapSize):Z[Q]=me?M.image[Q].image:M.image[Q],Z[Q]=ut(M,Z[Q]);const Pe=Z[0],Oe=s.convert(M.format,M.colorSpace),je=s.convert(M.type),ze=b(M.internalFormat,Oe,je,M.normalized,M.colorSpace),P=M.isVideoTexture!==!0,q=ne.__version===void 0||Y===!0,te=J.dataReady;let oe=A(M,Pe);j(t.TEXTURE_CUBE_MAP,M);let xe;if(ue){P&&q&&n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,ze,Pe.width,Pe.height);for(let Q=0;Q<6;Q++){xe=Z[Q].mipmaps;for(let be=0;be<xe.length;be++){const Ie=xe[be];M.format!==1023?Oe!==null?P?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ie.width,Ie.height,Oe,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,Ie.width,Ie.height,0,Ie.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,0,0,Ie.width,Ie.height,Oe,je,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be,ze,Ie.width,Ie.height,0,Oe,je,Ie.data)}}}else{if(xe=M.mipmaps,P&&q){xe.length>0&&oe++;const Q=Ce(Z[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,oe,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(me){P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Z[Q].width,Z[Q].height,Oe,je,Z[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Z[Q].width,Z[Q].height,0,Oe,je,Z[Q].data);for(let be=0;be<xe.length;be++){const Ie=xe[be].image[Q].image;P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Ie.width,Ie.height,Oe,je,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,Ie.width,Ie.height,0,Oe,je,Ie.data)}}else{P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,je,Z[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Oe,je,Z[Q]);for(let be=0;be<xe.length;be++){const Ie=xe[be];P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,0,0,Oe,je,Ie.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,be+1,ze,Oe,je,Ie.image[Q])}}}f(M)&&y(t.TEXTURE_CUBE_MAP),ne.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function De(C,M,G,Y,J,ne){const ce=s.convert(G.format,G.colorSpace),N=s.convert(G.type),se=b(G.internalFormat,ce,N,G.normalized,G.colorSpace),ue=i.get(M),me=i.get(G);if(me.__renderTarget=M,!ue.__hasExternalTextures){const Z=Math.max(1,M.width>>ne),Pe=Math.max(1,M.height>>ne);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ne,se,Z,Pe,M.depth,0,ce,N,null):n.texImage2D(J,ne,se,Z,Pe,0,ce,N,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Je(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,me.__webglTexture,0,$e(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,me.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(C,M,G){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ne=E(M.stencilBuffer,J),ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Je(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(M),ne,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(M),ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,C)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const ne=Y[J],ce=s.convert(ne.format,ne.colorSpace),N=s.convert(ne.type),se=b(ne.internalFormat,ce,N,ne.normalized,ne.colorSpace);Je(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e(M),se,M.width,M.height):G?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e(M),se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(C,M,G){const Y=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(M.depthTexture);if(J.__renderTarget=M,(!J.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,M.depthTexture.addEventListener("dispose",R)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),j(t.TEXTURE_CUBE_MAP,M.depthTexture);const ue=s.convert(M.depthTexture.format),me=s.convert(M.depthTexture.type);let Z;M.depthTexture.format===1026?Z=t.DEPTH_COMPONENT24:M.depthTexture.format===1027&&(Z=t.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Z,M.width,M.height,0,ue,me,null)}}else K(M.depthTexture,0);const ne=J.__webglTexture,ce=$e(M),N=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+G:t.TEXTURE_2D,se=M.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===1026)Je(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,N,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,se,N,ne,0);else if(M.depthTexture.format===1027)Je(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,N,ne,0,ce):t.framebufferTexture2D(t.FRAMEBUFFER,se,N,ne,0);else throw new Error("Unknown depthTexture format")}function At(C){const M=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)We(M.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?We(M.__webglFramebuffer[0],C,0):We(M.__webglFramebuffer,C,0)}else if(G){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=t.createRenderbuffer(),tt(M.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),tt(M.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function vt(C,M,G){const Y=i.get(C);M!==void 0&&De(Y.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),G!==void 0&&At(C)}function ln(C){const M=C.texture,G=i.get(C),Y=i.get(M);C.addEventListener("dispose",v);const J=C.textures,ne=C.isWebGLCubeRenderTarget===!0,ce=J.length>1;if(ce||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=M.version,a.memory.textures++),ne){G.__webglFramebuffer=[];for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[N]=[];for(let se=0;se<M.mipmaps.length;se++)G.__webglFramebuffer[N][se]=t.createFramebuffer()}else G.__webglFramebuffer[N]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let N=0;N<M.mipmaps.length;N++)G.__webglFramebuffer[N]=t.createFramebuffer()}else G.__webglFramebuffer=t.createFramebuffer();if(ce)for(let N=0,se=J.length;N<se;N++){const ue=i.get(J[N]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Je(C)===!1){G.__webglMultisampledFramebuffer=t.createFramebuffer(),G.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let N=0;N<J.length;N++){const se=J[N];G.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,G.__webglColorRenderbuffer[N]);const ue=s.convert(se.format,se.colorSpace),me=s.convert(se.type),Z=b(se.internalFormat,ue,me,se.normalized,se.colorSpace,C.isXRRenderTarget===!0),Pe=$e(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Pe,Z,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.RENDERBUFFER,G.__webglColorRenderbuffer[N])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(G.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),j(t.TEXTURE_CUBE_MAP,M);for(let N=0;N<6;N++)if(M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)De(G.__webglFramebuffer[N][se],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,se);else De(G.__webglFramebuffer[N],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);f(M)&&y(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let N=0,se=J.length;N<se;N++){const ue=J[N],me=i.get(ue);let Z=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Z=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,me.__webglTexture),j(Z,ue),De(G.__webglFramebuffer,C,ue,t.COLOR_ATTACHMENT0+N,Z,0),f(ue)&&y(Z)}n.unbindTexture()}else{let N=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(N=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(N,Y.__webglTexture),j(N,M),M.mipmaps&&M.mipmaps.length>0)for(let se=0;se<M.mipmaps.length;se++)De(G.__webglFramebuffer[se],C,M,t.COLOR_ATTACHMENT0,N,se);else De(G.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,N,0);f(M)&&y(N),n.unbindTexture()}C.depthBuffer&&At(C)}function Ot(C){const M=C.textures;for(let G=0,Y=M.length;G<Y;G++){const J=M[G];if(f(J)){const ne=T(C),ce=i.get(J).__webglTexture;n.bindTexture(ne,ce),y(ne),n.unbindTexture()}}}const bt=[],k=[];function Xt(C){if(C.samples>0){if(Je(C)===!1){const M=C.textures,G=C.width,Y=C.height;let J=t.COLOR_BUFFER_BIT;const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(C),N=M.length>1;if(N)for(let ue=0;ue<M.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer);const se=C.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ue=0;ue<M.length;ue++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),N){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const me=i.get(M[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,me,0)}t.blitFramebuffer(0,0,G,Y,0,0,G,Y,J,t.NEAREST),l===!0&&(bt.length=0,k.length=0,bt.push(t.COLOR_ATTACHMENT0+ue),C.depthBuffer&&C.resolveDepthBuffer===!1&&(bt.push(ne),k.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,k)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,bt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),N)for(let ue=0;ue<M.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,ce.__webglColorRenderbuffer[ue]);const me=i.get(M[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,me,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function $e(C){return Math.min(r.maxSamples,C.samples)}function Je(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function de(C){const M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function ut(C,M){const G=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!=="srgb-linear"&&G!==""&&(qe.getTransfer(G)==="srgb"?(Y!==1023||J!==1009)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",G)),M}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=z,this.setTexture2D=K,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=ge,this.rebindTextures=vt,this.setupRenderTarget=ln,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gy(t,e){function n(i,r=""){let s;const a=qe.getTransfer(r);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var _y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vy=`
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

}`,yy=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new ff(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new sn({vertexShader:_y,fragmentShader:vy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new or(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},My=class extends hr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,m=null;const _=typeof XRWebGLBinding<"u",p=new yy,g={},f=e.getContextAttributes();let y=null,T=null;const b=[],E=[],A=new Xe;let R=null;const v=new An;v.viewport=new wt;const S=new An;S.viewport=new wt;const I=[v,S],w=new Q_;let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let le=b[j];return le===void 0&&(le=new Do,b[j]=le),le.getTargetRaySpace()},this.getControllerGrip=function(j){let le=b[j];return le===void 0&&(le=new Do,b[j]=le),le.getGripSpace()},this.getHand=function(j){let le=b[j];return le===void 0&&(le=new Do,b[j]=le),le.getHandSpace()};function D(j){const le=E.indexOf(j.inputSource);if(le===-1)return;const Se=b[le];Se!==void 0&&(Se.update(j.inputSource,j.frame,l||s),Se.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",V);for(let j=0;j<b.length;j++){const le=E[j];le!==null&&(E[j]=null,b[j].disconnect(le))}L=null,F=null,p.reset();for(const j in g)delete g[j];t.setRenderTarget(y),h=null,d=null,u=null,i=null,T=null,Ne.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(y=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",z),i.addEventListener("inputsourceschange",V),f.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Se=null,pe=null;f.depth&&(pe=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,le=f.stencil?qd:Vs,Se=f.stencil?jd:lr);const Ae={colorFormat:e.RGBA8,depthFormat:pe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ae),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Yn(d.textureWidth,d.textureHeight,{format:zs,type:Ii,depthTexture:new is(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,le),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Yn(h.framebufferWidth,h.framebufferHeight,{format:zs,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function V(j){for(let le=0;le<j.removed.length;le++){const Se=j.removed[le],pe=E.indexOf(Se);pe>=0&&(E[pe]=null,b[pe].disconnect(Se))}for(let le=0;le<j.added.length;le++){const Se=j.added[le];let pe=E.indexOf(Se);if(pe===-1){for(let Ue=0;Ue<b.length;Ue++)if(Ue>=E.length){E.push(Se),pe=Ue;break}else if(E[Ue]===null){E[Ue]=Se,pe=Ue;break}if(pe===-1)break}const Ae=b[pe];Ae&&Ae.connect(Se)}}const O=new X,K=new X;function ee(j,le,Se){O.setFromMatrixPosition(le.matrixWorld),K.setFromMatrixPosition(Se.matrixWorld);const pe=O.distanceTo(K),Ae=le.projectionMatrix.elements,Ue=Se.projectionMatrix.elements,De=Ae[14]/(Ae[10]-1),tt=Ae[14]/(Ae[10]+1),We=(Ae[9]+1)/Ae[5],At=(Ae[9]-1)/Ae[5],vt=(Ae[8]-1)/Ae[0],ln=(Ue[8]+1)/Ue[0],Ot=De*vt,bt=De*ln,k=pe/(-vt+ln),Xt=k*-vt;if(le.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Xt),j.translateZ(k),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const $e=De+k,Je=tt+k,de=Ot-Xt,ut=bt+(pe-Xt),Ce=We*tt/Je*$e,C=At*tt/Je*$e;j.projectionMatrix.makePerspective(de,ut,Ce,C,$e,Je),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ie(j,le){le===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(le.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let le=j.near,Se=j.far;p.texture!==null&&(p.depthNear>0&&(le=p.depthNear),p.depthFar>0&&(Se=p.depthFar)),w.near=S.near=v.near=le,w.far=S.far=v.far=Se,(L!==w.near||F!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,F=w.far),w.layers.mask=j.layers.mask|6,v.layers.mask=w.layers.mask&-5,S.layers.mask=w.layers.mask&-3;const pe=j.parent,Ae=w.cameras;ie(w,pe);for(let Ue=0;Ue<Ae.length;Ue++)ie(Ae[Ue],pe);Ae.length===2?ee(w,v,S):w.projectionMatrix.copy(v.projectionMatrix),ge(j,w,pe)};function ge(j,le,Se){Se===null?j.matrix.copy(le.matrixWorld):(j.matrix.copy(Se.matrixWorld),j.matrix.invert(),j.matrix.multiply(le.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(le.projectionMatrix),j.projectionMatrixInverse.copy(le.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Rl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(j){o=j,d!==null&&(d.fixedFoveation=j),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(w)},this.getCameraTexture=function(j){return g[j]};let Me=null;function Ze(j,le){if(c=le.getViewerPose(l||s),m=le,c!==null){const Se=c.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let pe=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let Ue=0;Ue<Se.length;Ue++){const De=Se[Ue];let tt=null;if(h!==null)tt=h.getViewport(De);else{const At=u.getViewSubImage(d,De);tt=At.viewport,Ue===0&&(t.setRenderTargetTextures(T,At.colorTexture,At.depthStencilTexture),t.setRenderTarget(T))}let We=I[Ue];We===void 0&&(We=new An,We.layers.enable(Ue),We.viewport=new wt,I[Ue]=We),We.matrix.fromArray(De.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(De.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(tt.x,tt.y,tt.width,tt.height),Ue===0&&(w.matrix.copy(We.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pe===!0&&w.cameras.push(We)}const Ae=i.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=n.getBinding();const Ue=u.getDepthInformation(Se[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,i.renderState)}if(Ae&&Ae.includes("camera-access")&&_){t.state.unbindTexture(),u=n.getBinding();for(let Ue=0;Ue<Se.length;Ue++){const De=Se[Ue].camera;if(De){let tt=g[De];tt||(tt=new ff,g[De]=tt);const We=u.getCameraImage(De);tt.sourceTexture=We}}}}for(let Se=0;Se<b.length;Se++){const pe=E[Se],Ae=b[Se];pe!==null&&Ae!==void 0&&Ae.update(pe,le,l||s)}Me&&Me(j,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),m=null}const Ne=new Sf;Ne.setAnimationLoop(Ze),this.setAnimationLoop=function(j){Me=j},this.dispose=function(){}}},Sy=new St,Af=new Fe;Af.set(-1,0,0,0,1,0,0,0,1);function xy(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,gf(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,y,T,b){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),d(g,f)):f.isMeshPhongMaterial?(s(g,f),u(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),h(g,f),f.isMeshPhysicalMaterial&&m(g,f,b)):f.isMeshMatcapMaterial?(s(g,f),_(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),p(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?l(g,f,y,T):f.isSpriteMaterial?c(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===1&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===1&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const y=e.get(f),T=y.envMap,b=y.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(Sy.makeRotationFromEuler(b)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Af),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function l(g,f,y,T){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*y,g.scale.value=T*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function c(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function d(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function h(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,y){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===1&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,f){f.matcap&&(g.matcap.value=f.matcap)}function p(g,f){const y=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function by(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,T){const b=T.program;i.uniformBlockBinding(y,b)}function c(y,T){let b=r[y.id];b===void 0&&(_(y),b=u(y),r[y.id]=b,y.addEventListener("dispose",g));const E=T.program;i.updateUBOMapping(y,E);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const T=d();y.__bindingPointIndex=T;const b=t.createBuffer(),E=y.__size,A=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,b),b}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Le("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const T=r[y.id],b=y.uniforms,E=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let A=0,R=b.length;A<R;A++){const v=Array.isArray(b[A])?b[A]:[b[A]];for(let S=0,I=v.length;S<I;S++){const w=v[S];if(m(w,A,S,E)===!0){const L=w.__offset,F=Array.isArray(w.value)?w.value:[w.value];let D=0;for(let z=0;z<F.length;z++){const V=F[z],O=p(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,L+D,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):ArrayBuffer.isView(V)?w.__data.set(new V.constructor(V.buffer,V.byteOffset,w.__data.length)):(V.toArray(w.__data,D),D+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,T,b,E){const A=y.value,R=T+"_"+b;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:ArrayBuffer.isView(A)?E[R]=A.slice():E[R]=A.clone(),!0;{const v=E[R];if(typeof A=="number"||typeof A=="boolean"){if(v!==A)return E[R]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(v.equals(A)===!1)return v.copy(A),!0}}return!1}function _(y){const T=y.uniforms;let b=0;const E=16;for(let R=0,v=T.length;R<v;R++){const S=Array.isArray(T[R])?T[R]:[T[R]];for(let I=0,w=S.length;I<w;I++){const L=S[I],F=Array.isArray(L.value)?L.value:[L.value];for(let D=0,z=F.length;D<z;D++){const V=F[D],O=p(V),K=b%E,ee=K%O.boundary,ie=K+ee;b+=ee,ie!==0&&E-ie<O.storage&&(b+=E-ie),L.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=O.storage}}}const A=b%E;return A>0&&(b+=E-A),y.__size=b,y.__cache={},this}function p(y){const T={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(T.boundary=4,T.storage=4):y.isVector2?(T.boundary=8,T.storage=8):y.isVector3||y.isColor?(T.boundary=16,T.storage=12):y.isVector4?(T.boundary=16,T.storage=16):y.isMatrix3?(T.boundary=48,T.storage=48):y.isMatrix4?(T.boundary=64,T.storage=64):y.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(T.boundary=16,T.storage=y.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",y),T}function g(y){const T=y.target;T.removeEventListener("dispose",g);const b=a.indexOf(T.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function f(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}var Ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Gn=null;function Ey(){return Gn===null&&(Gn=new b_(Ty,16,16,Xa,cr),Gn.name="DFG_LUT",Gn.minFilter=gn,Gn.magFilter=gn,Gn.wrapS=ai,Gn.wrapT=ai,Gn.generateMipmaps=!1,Gn.needsUpdate=!0),Gn}var Cy=class{constructor(t={}){const{canvas:e=e_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Ii}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=s;const _=h,p=new Set([Zd,Kd,Yd]),g=new Set([Ii,lr,Wd,jd,Xd,$d]),f=new Uint32Array(4),y=new Int32Array(4),T=new X;let b=null,E=null;const A=[],R=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let I=!1,w=null;this._outputColorSpace=jt;let L=0,F=0,D=null,z=-1,V=null;const O=new wt,K=new wt;let ee=null;const ie=new Ge(0);let ge=0,Me=e.width,Ze=e.height,Ne=1,j=null,le=null;const Se=new wt(0,0,Me,Ze),pe=new wt(0,0,Me,Ze);let Ae=!1;const Ue=new pc;let De=!1,tt=!1;const We=new St,At=new X,vt=new wt,ln={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function bt(){return D===null?Ne:1}let k=n;function Xt(x,U){return e.getContext(x,U)}try{const x={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r184"),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",be,!1),k===null){const U="webgl2";if(k=Xt(U,x),k===null)throw Xt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(x){throw Le("WebGLRenderer: "+x.message),x}let $e,Je,de,ut,Ce,C,M,G,Y,J,ne,ce,N,se,ue,me,Z,Pe,Oe,je,ze,P,q;function te(){$e=new Ev(k),$e.init(),ze=new gy(k,$e),Je=new _v(k,$e,t,ze),de=new py(k,$e),Je.reversedDepthBuffer&&d&&de.buffers.depth.setReversed(!0),ut=new Av(k),Ce=new ey,C=new my(k,$e,de,Ce,Je,ze,ut),M=new Tv(S),G=new dv(k),P=new mv(k,G),Y=new Cv(k,G,ut,P),J=new Pv(k,Y,G,P,ut),Pe=new Rv(k,Je,C),ue=new vv(Ce),ne=new Q0(S,M,$e,Je,P,ue),ce=new xy(S,Ce),N=new ny,se=new ly($e),Z=new pv(S,M,de,J,m,o),me=new fy(S,J,Je),q=new by(k,ut,Je,de),Oe=new gv(k,$e,ut),je=new wv(k,$e,ut),ut.programs=ne.programs,S.capabilities=Je,S.extensions=$e,S.properties=Ce,S.renderLists=N,S.shadowMap=me,S.state=de,S.info=ut}te(),_!==1009&&(v=new Dv(_,e.width,e.height,i,r));const oe=new My(S,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const x=$e.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=$e.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(x){x!==void 0&&(Ne=x,this.setSize(Me,Ze,!1))},this.getSize=function(x){return x.set(Me,Ze)},this.setSize=function(x,U,$=!0){if(oe.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=x,Ze=U,e.width=Math.floor(x*Ne),e.height=Math.floor(U*Ne),$===!0&&(e.style.width=x+"px",e.style.height=U+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,x,U)},this.getDrawingBufferSize=function(x){return x.set(Me*Ne,Ze*Ne).floor()},this.setDrawingBufferSize=function(x,U,$){Me=x,Ze=U,Ne=$,e.width=Math.floor(x*$),e.height=Math.floor(U*$),this.setViewport(0,0,x,U)},this.setEffects=function(x){if(_===1009){Le("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let U=0;U<x.length;U++)if(x[U].isOutputPass===!0){Re("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(O)},this.getViewport=function(x){return x.copy(Se)},this.setViewport=function(x,U,$,W){x.isVector4?Se.set(x.x,x.y,x.z,x.w):Se.set(x,U,$,W),de.viewport(O.copy(Se).multiplyScalar(Ne).round())},this.getScissor=function(x){return x.copy(pe)},this.setScissor=function(x,U,$,W){x.isVector4?pe.set(x.x,x.y,x.z,x.w):pe.set(x,U,$,W),de.scissor(K.copy(pe).multiplyScalar(Ne).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(x){de.setScissorTest(Ae=x)},this.setOpaqueSort=function(x){j=x},this.setTransparentSort=function(x){le=x},this.getClearColor=function(x){return x.copy(Z.getClearColor())},this.setClearColor=function(){Z.setClearColor(...arguments)},this.getClearAlpha=function(){return Z.getClearAlpha()},this.setClearAlpha=function(){Z.setClearAlpha(...arguments)},this.clear=function(x=!0,U=!0,$=!0){let W=0;if(x){let H=!1;if(D!==null){const re=D.texture.format;H=p.has(re)}if(H){const re=D.texture.type,fe=g.has(re),_e=Z.getClearColor(),ve=Z.getClearAlpha(),ke=_e.r,Ve=_e.g,He=_e.b;fe?(f[0]=ke,f[1]=Ve,f[2]=He,f[3]=ve,k.clearBufferuiv(k.COLOR,0,f)):(y[0]=ke,y[1]=Ve,y[2]=He,y[3]=ve,k.clearBufferiv(k.COLOR,0,y))}else W|=k.COLOR_BUFFER_BIT}U&&(W|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),w=x},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",be,!1),Z.dispose(),N.dispose(),se.dispose(),Ce.dispose(),M.dispose(),J.dispose(),P.dispose(),q.dispose(),ne.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Rc),oe.removeEventListener("sessionend",Pc),Hi.stop()};function xe(x){x.preventDefault(),xu("WebGLRenderer: Context Lost."),I=!0}function Q(){xu("WebGLRenderer: Context Restored."),I=!1;const x=ut.autoReset,U=me.enabled,$=me.autoUpdate,W=me.needsUpdate,H=me.type;te(),ut.autoReset=x,me.enabled=U,me.autoUpdate=$,me.needsUpdate=W,me.type=H}function be(x){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function Ie(x){const U=x.target;U.removeEventListener("dispose",Ie),Kt(U)}function Kt(x){lt(x),Ce.remove(x)}function lt(x){const U=Ce.get(x).programs;U!==void 0&&(U.forEach(function($){ne.releaseProgram($)}),x.isShaderMaterial&&ne.releaseShaderCache(x))}this.renderBufferDirect=function(x,U,$,W,H,re){U===null&&(U=ln);const fe=H.isMesh&&H.matrixWorld.determinant()<0,_e=np(x,U,$,W,H);de.setMaterial(W,fe);let ve=$.index,ke=1;if(W.wireframe===!0){if(ve=Y.getWireframeAttribute($),ve===void 0)return;ke=2}const Ve=$.drawRange,He=$.attributes.position;let we=Ve.start*ke,at=(Ve.start+Ve.count)*ke;re!==null&&(we=Math.max(we,re.start*ke),at=Math.min(at,(re.start+re.count)*ke)),ve!==null?(we=Math.max(we,0),at=Math.min(at,ve.count)):He!=null&&(we=Math.max(we,0),at=Math.min(at,He.count));const pt=at-we;if(pt<0||pt===1/0)return;P.setup(H,W,_e,$,ve);let mt,Qe=Oe;if(ve!==null&&(mt=G.get(ve),Qe=je,Qe.setIndex(mt)),H.isMesh)W.wireframe===!0?(de.setLineWidth(W.wireframeLinewidth*bt()),Qe.setMode(k.LINES)):Qe.setMode(k.TRIANGLES);else if(H.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),de.setLineWidth(Ft*bt()),H.isLineSegments?Qe.setMode(k.LINES):H.isLineLoop?Qe.setMode(k.LINE_LOOP):Qe.setMode(k.LINE_STRIP)}else H.isPoints?Qe.setMode(k.POINTS):H.isSprite&&Qe.setMode(k.TRIANGLES);if(H.isBatchedMesh)if($e.get("WEBGL_multi_draw"))Qe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ft=H._multiDrawStarts,ye=H._multiDrawCounts,kn=H._multiDrawCount,et=ve?G.get(ve).bytesPerElement:1,En=Ce.get(W).currentProgram.getUniforms();for(let zn=0;zn<kn;zn++)En.setValue(k,"_gl_DrawID",zn),Qe.render(Ft[zn]/et,ye[zn])}else if(H.isInstancedMesh)Qe.renderInstances(we,pt,H.count);else if($.isInstancedBufferGeometry){const Ft=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,ye=Math.min($.instanceCount,Ft);Qe.renderInstances(we,pt,ye)}else Qe.render(we,pt)};function Bn(x,U,$){x.transparent===!0&&x.side===2&&x.forceSinglePass===!1?(x.side=1,x.needsUpdate=!0,Qs(x,U,$),x.side=0,x.needsUpdate=!0,Qs(x,U,$),x.side=2):Qs(x,U,$)}this.compile=function(x,U,$=null){$===null&&($=x),E=se.get($),E.init(U),R.push(E),$.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),x!==$&&x.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(E.pushLight(H),H.castShadow&&E.pushShadow(H))}),E.setupLights();const W=new Set;return x.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const re=H.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const _e=re[fe];Bn(_e,$,H),W.add(_e)}else Bn(re,$,H),W.add(re)}),E=R.pop(),W},this.compileAsync=function(x,U,$=null){const W=this.compile(x,U,$);return new Promise(H=>{function re(){if(W.forEach(function(fe){Ce.get(fe).currentProgram.isReady()&&W.delete(fe)}),W.size===0){H(x);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let In=null;function ep(x){In&&In(x)}function Rc(){Hi.stop()}function Pc(){Hi.start()}const Hi=new Sf;Hi.setAnimationLoop(ep),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(x){In=x,oe.setAnimationLoop(x),x===null?Hi.stop():Hi.start()},oe.addEventListener("sessionstart",Rc),oe.addEventListener("sessionend",Pc),this.render=function(x,U){if(U!==void 0&&U.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;w!==null&&w.renderStart(x,U);const $=oe.enabled===!0&&oe.isPresenting===!0,W=v!==null&&(D===null||$)&&v.begin(S,D);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),x.isScene===!0&&x.onBeforeRender(S,x,U,D),E=se.get(x,R.length),E.init(U),E.state.textureUnits=C.getTextureUnits(),R.push(E),We.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ue.setFromProjectionMatrix(We,es,U.reversedDepth),tt=this.localClippingEnabled,De=ue.init(this.clippingPlanes,tt),b=N.get(x,A.length),b.init(),A.push(b),oe.enabled===!0&&oe.isPresenting===!0){const re=S.xr.getDepthSensingMesh();re!==null&&uo(re,U,-1/0,S.sortObjects)}uo(x,U,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(j,le),Ot=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Ot&&Z.addToRenderList(b,x),this.info.render.frame++,De===!0&&ue.beginShadows();const H=E.state.shadowsArray;if(me.render(H,x,U),De===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&v.hasRenderPass())===!1){const re=b.opaque,fe=b.transmissive;if(E.setupLights(),U.isArrayCamera){const _e=U.cameras;if(fe.length>0)for(let ve=0,ke=_e.length;ve<ke;ve++){const Ve=_e[ve];Dc(re,fe,x,Ve)}Ot&&Z.render(x);for(let ve=0,ke=_e.length;ve<ke;ve++){const Ve=_e[ve];Lc(b,x,Ve,Ve.viewport)}}else fe.length>0&&Dc(re,fe,x,U),Ot&&Z.render(x),Lc(b,x,U)}D!==null&&F===0&&(C.updateMultisampleRenderTarget(D),C.updateRenderTargetMipmap(D)),W&&v.end(S),x.isScene===!0&&x.onAfterRender(S,x,U),P.resetDefaultState(),z=-1,V=null,R.pop(),R.length>0?(E=R[R.length-1],C.setTextureUnits(E.state.textureUnits),De===!0&&ue.setGlobalState(S.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,w!==null&&w.renderEnd()};function uo(x,U,$,W){if(x.visible===!1)return;if(x.layers.test(U.layers)){if(x.isGroup)$=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(U);else if(x.isLightProbeGrid)E.pushLightProbeGrid(x);else if(x.isLight)E.pushLight(x),x.castShadow&&E.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||Ue.intersectsSprite(x)){W&&vt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(We);const re=J.update(x),fe=x.material;fe.visible&&b.push(x,re,fe,$,vt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||Ue.intersectsObject(x))){const re=J.update(x),fe=x.material;if(W&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),vt.copy(x.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),vt.copy(re.boundingSphere.center)),vt.applyMatrix4(x.matrixWorld).applyMatrix4(We)),Array.isArray(fe)){const _e=re.groups;for(let ve=0,ke=_e.length;ve<ke;ve++){const Ve=_e[ve],He=fe[Ve.materialIndex];He&&He.visible&&b.push(x,re,He,$,vt.z,Ve)}}else fe.visible&&b.push(x,re,fe,$,vt.z,null)}}const H=x.children;for(let re=0,fe=H.length;re<fe;re++)uo(H[re],U,$,W)}function Lc(x,U,$,W){const{opaque:H,transmissive:re,transparent:fe}=x;E.setupLightsView($),De===!0&&ue.setGlobalState(S.clippingPlanes,$),W&&de.viewport(O.copy(W)),H.length>0&&Js(H,U,$),re.length>0&&Js(re,U,$),fe.length>0&&Js(fe,U,$),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function Dc(x,U,$,W){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const He=$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Yn(1,1,{generateMipmaps:!0,type:He?cr:Ii,minFilter:uc,samples:Math.max(4,Je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const H=E.state.transmissionRenderTarget[W.id],re=W.viewport||O;H.setSize(re.z*S.transmissionResolutionScale,re.w*S.transmissionResolutionScale);const fe=S.getRenderTarget(),_e=S.getActiveCubeFace(),ve=S.getActiveMipmapLevel();S.setRenderTarget(H),S.getClearColor(ie),ge=S.getClearAlpha(),ge<1&&S.setClearColor(16777215,.5),S.clear(),Ot&&Z.render($);const ke=S.toneMapping;S.toneMapping=0;const Ve=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),De===!0&&ue.setGlobalState(S.clippingPlanes,W),Js(x,$,W),C.updateMultisampleRenderTarget(H),C.updateRenderTargetMipmap(H),$e.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let we=0,at=U.length;we<at;we++){const{object:pt,geometry:mt,material:Qe,group:Ft}=U[we];if(Qe.side===2&&pt.layers.test(W.layers)){const ye=Qe.side;Qe.side=1,Qe.needsUpdate=!0,Ic(pt,$,W,mt,Qe,Ft),Qe.side=ye,Qe.needsUpdate=!0,He=!0}}He===!0&&(C.updateMultisampleRenderTarget(H),C.updateRenderTargetMipmap(H))}S.setRenderTarget(fe,_e,ve),S.setClearColor(ie,ge),Ve!==void 0&&(W.viewport=Ve),S.toneMapping=ke}function Js(x,U,$){const W=U.isScene===!0?U.overrideMaterial:null;for(let H=0,re=x.length;H<re;H++){const fe=x[H],{object:_e,geometry:ve,group:ke}=fe;let Ve=fe.material;Ve.allowOverride===!0&&W!==null&&(Ve=W),_e.layers.test($.layers)&&Ic(_e,U,$,ve,Ve,ke)}}function Ic(x,U,$,W,H,re){x.onBeforeRender(S,U,$,W,H,re),x.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),H.onBeforeRender(S,U,$,W,x,re),H.transparent===!0&&H.side===2&&H.forceSinglePass===!1?(H.side=1,H.needsUpdate=!0,S.renderBufferDirect($,U,W,H,x,re),H.side=0,H.needsUpdate=!0,S.renderBufferDirect($,U,W,H,x,re),H.side=2):S.renderBufferDirect($,U,W,H,x,re),x.onAfterRender(S,U,$,W,H,re)}function Qs(x,U,$){U.isScene!==!0&&(U=ln);const W=Ce.get(x),H=E.state.lights,re=E.state.shadowsArray,fe=H.state.version,_e=ne.getParameters(x,H.state,re,U,$,E.state.lightProbeGridArray),ve=ne.getProgramCacheKey(_e);let ke=W.programs;W.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Ve=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;W.envMap=M.get(x.envMap||W.environment,Ve),W.envMapRotation=W.environment!==null&&x.envMap===null?U.environmentRotation:x.envMapRotation,ke===void 0&&(x.addEventListener("dispose",Ie),ke=new Map,W.programs=ke);let He=ke.get(ve);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===fe)return Nc(x,_e),He}else _e.uniforms=ne.getUniforms(x),w!==null&&x.isNodeMaterial&&w.build(x,$,_e),x.onBeforeCompile(_e,S),He=ne.acquireProgram(_e,ve),ke.set(ve,He),W.uniforms=_e.uniforms;const we=W.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(we.clippingPlanes=ue.uniform),Nc(x,_e),W.needsLights=rp(x),W.lightsStateVersion=fe,W.needsLights&&(we.ambientLightColor.value=H.state.ambient,we.lightProbe.value=H.state.probe,we.directionalLights.value=H.state.directional,we.directionalLightShadows.value=H.state.directionalShadow,we.spotLights.value=H.state.spot,we.spotLightShadows.value=H.state.spotShadow,we.rectAreaLights.value=H.state.rectArea,we.ltc_1.value=H.state.rectAreaLTC1,we.ltc_2.value=H.state.rectAreaLTC2,we.pointLights.value=H.state.point,we.pointLightShadows.value=H.state.pointShadow,we.hemisphereLights.value=H.state.hemi,we.directionalShadowMatrix.value=H.state.directionalShadowMatrix,we.spotLightMatrix.value=H.state.spotLightMatrix,we.spotLightMap.value=H.state.spotLightMap,we.pointShadowMatrix.value=H.state.pointShadowMatrix),W.lightProbeGrid=E.state.lightProbeGridArray.length>0,W.currentProgram=He,W.uniformsList=null,He}function kc(x){if(x.uniformsList===null){const U=x.currentProgram.getUniforms();x.uniformsList=Ia.seqWithValue(U.seq,x.uniforms)}return x.uniformsList}function Nc(x,U){const $=Ce.get(x);$.outputColorSpace=U.outputColorSpace,$.batching=U.batching,$.batchingColor=U.batchingColor,$.instancing=U.instancing,$.instancingColor=U.instancingColor,$.instancingMorph=U.instancingMorph,$.skinning=U.skinning,$.morphTargets=U.morphTargets,$.morphNormals=U.morphNormals,$.morphColors=U.morphColors,$.morphTargetsCount=U.morphTargetsCount,$.numClippingPlanes=U.numClippingPlanes,$.numIntersection=U.numClipIntersection,$.vertexAlphas=U.vertexAlphas,$.vertexTangents=U.vertexTangents,$.toneMapping=U.toneMapping}function tp(x,U){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;T.setFromMatrixPosition(U.matrixWorld);for(let $=0,W=x.length;$<W;$++){const H=x[$];if(H.texture!==null&&H.boundingBox.containsPoint(T))return H}return null}function np(x,U,$,W,H){U.isScene!==!0&&(U=ln),C.resetTextureUnits();const re=U.fog,fe=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,_e=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:qe.workingColorSpace,ve=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,ke=M.get(W.envMap||fe,ve),Ve=W.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,He=!!$.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),we=!!$.morphAttributes.position,at=!!$.morphAttributes.normal,pt=!!$.morphAttributes.color;let mt=0;W.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mt=S.toneMapping);const Qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Ft=Qe!==void 0?Qe.length:0,ye=Ce.get(W),kn=E.state.lights;if(De===!0&&(tt===!0||x!==V)){const nt=x===V&&W.id===z;ue.setState(W,x,nt)}let et=!1;W.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==kn.state.version||ye.outputColorSpace!==_e||H.isBatchedMesh&&ye.batching===!1||!H.isBatchedMesh&&ye.batching===!0||H.isBatchedMesh&&ye.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ye.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ye.instancing===!1||!H.isInstancedMesh&&ye.instancing===!0||H.isSkinnedMesh&&ye.skinning===!1||!H.isSkinnedMesh&&ye.skinning===!0||H.isInstancedMesh&&ye.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ye.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ye.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ye.instancingMorph===!1&&H.morphTexture!==null||ye.envMap!==ke||W.fog===!0&&ye.fog!==re||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==ue.numPlanes||ye.numIntersection!==ue.numIntersection)||ye.vertexAlphas!==Ve||ye.vertexTangents!==He||ye.morphTargets!==we||ye.morphNormals!==at||ye.morphColors!==pt||ye.toneMapping!==mt||ye.morphTargetsCount!==Ft||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ye.__version=W.version);let En=ye.currentProgram;et===!0&&(En=Qs(W,U,H),w&&W.isNodeMaterial&&w.onUpdateProgram(W,En,ye));let zn=!1,mi=!1,pr=!1;const it=En.getUniforms(),yt=ye.uniforms;if(de.useProgram(En.program)&&(zn=!0,mi=!0,pr=!0),W.id!==z&&(z=W.id,mi=!0),ye.needsLights){const nt=tp(E.state.lightProbeGridArray,H);ye.lightProbeGrid!==nt&&(ye.lightProbeGrid=nt,mi=!0)}if(zn||V!==x){de.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),it.setValue(k,"projectionMatrix",x.projectionMatrix),it.setValue(k,"viewMatrix",x.matrixWorldInverse);const nt=it.map.cameraPosition;nt!==void 0&&nt.setValue(k,At.setFromMatrixPosition(x.matrixWorld)),Je.logarithmicDepthBuffer&&it.setValue(k,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&it.setValue(k,"isOrthographic",x.isOrthographicCamera===!0),V!==x&&(V=x,mi=!0,pr=!0)}if(ye.needsLights&&(kn.state.directionalShadowMap.length>0&&it.setValue(k,"directionalShadowMap",kn.state.directionalShadowMap,C),kn.state.spotShadowMap.length>0&&it.setValue(k,"spotShadowMap",kn.state.spotShadowMap,C),kn.state.pointShadowMap.length>0&&it.setValue(k,"pointShadowMap",kn.state.pointShadowMap,C)),H.isSkinnedMesh){it.setOptional(k,H,"bindMatrix"),it.setOptional(k,H,"bindMatrixInverse");const nt=H.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),it.setValue(k,"boneTexture",nt.boneTexture,C))}H.isBatchedMesh&&(it.setOptional(k,H,"batchingTexture"),it.setValue(k,"batchingTexture",H._matricesTexture,C),it.setOptional(k,H,"batchingIdTexture"),it.setValue(k,"batchingIdTexture",H._indirectTexture,C),it.setOptional(k,H,"batchingColorTexture"),H._colorsTexture!==null&&it.setValue(k,"batchingColorTexture",H._colorsTexture,C));const gi=$.morphAttributes;if((gi.position!==void 0||gi.normal!==void 0||gi.color!==void 0)&&Pe.update(H,$,En),(mi||ye.receiveShadow!==H.receiveShadow)&&(ye.receiveShadow=H.receiveShadow,it.setValue(k,"receiveShadow",H.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(yt.envMapIntensity.value=U.environmentIntensity),yt.dfgLUT!==void 0&&(yt.dfgLUT.value=Ey()),mi){if(it.setValue(k,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&ip(yt,pr),re&&W.fog===!0&&ce.refreshFogUniforms(yt,re),ce.refreshMaterialUniforms(yt,W,Ne,Ze,E.state.transmissionRenderTarget[x.id]),ye.needsLights&&ye.lightProbeGrid){const nt=ye.lightProbeGrid;yt.probesSH.value=nt.texture,yt.probesMin.value.copy(nt.boundingBox.min),yt.probesMax.value.copy(nt.boundingBox.max),yt.probesResolution.value.copy(nt.resolution)}Ia.upload(k,kc(ye),yt,C)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ia.upload(k,kc(ye),yt,C),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&it.setValue(k,"center",H.center),it.setValue(k,"modelViewMatrix",H.modelViewMatrix),it.setValue(k,"normalMatrix",H.normalMatrix),it.setValue(k,"modelMatrix",H.matrixWorld),W.uniformsGroups!==void 0){const nt=W.uniformsGroups;for(let cs=0,mr=nt.length;cs<mr;cs++){const Uc=nt[cs];q.update(Uc,En),q.bind(Uc,En)}}return En}function ip(x,U){x.ambientLightColor.needsUpdate=U,x.lightProbe.needsUpdate=U,x.directionalLights.needsUpdate=U,x.directionalLightShadows.needsUpdate=U,x.pointLights.needsUpdate=U,x.pointLightShadows.needsUpdate=U,x.spotLights.needsUpdate=U,x.spotLightShadows.needsUpdate=U,x.rectAreaLights.needsUpdate=U,x.hemisphereLights.needsUpdate=U}function rp(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(x,U,$){const W=Ce.get(x);W.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ce.get(x.texture).__webglTexture=U,Ce.get(x.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:$,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,U){const $=Ce.get(x);$.__webglFramebuffer=U,$.__useDefaultFramebuffer=U===void 0};const sp=k.createFramebuffer();this.setRenderTarget=function(x,U=0,$=0){D=x,L=U,F=$;let W=null,H=!1,re=!1;if(x){const fe=Ce.get(x);if(fe.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(k.FRAMEBUFFER,fe.__webglFramebuffer),O.copy(x.viewport),K.copy(x.scissor),ee=x.scissorTest,de.viewport(O),de.scissor(K),de.setScissorTest(ee),z=-1;return}else if(fe.__webglFramebuffer===void 0)C.setupRenderTarget(x);else if(fe.__hasExternalTextures)C.rebindTextures(x,Ce.get(x.texture).__webglTexture,Ce.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const ke=x.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&Ce.has(ke)&&(x.width!==ke.image.width||x.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(x)}}const _e=x.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(re=!0);const ve=Ce.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(ve[U])?W=ve[U][$]:W=ve[U],H=!0):x.samples>0&&C.useMultisampledRTT(x)===!1?W=Ce.get(x).__webglMultisampledFramebuffer:Array.isArray(ve)?W=ve[$]:W=ve,O.copy(x.viewport),K.copy(x.scissor),ee=x.scissorTest}else O.copy(Se).multiplyScalar(Ne).floor(),K.copy(pe).multiplyScalar(Ne).floor(),ee=Ae;if($!==0&&(W=sp),de.bindFramebuffer(k.FRAMEBUFFER,W)&&de.drawBuffers(x,W),de.viewport(O),de.scissor(K),de.setScissorTest(ee),H){const fe=Ce.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,$)}else if(re){const fe=U;for(let _e=0;_e<x.textures.length;_e++){const ve=Ce.get(x.textures[_e]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+_e,ve.__webglTexture,$,fe)}}else if(x!==null&&$!==0){const fe=Ce.get(x.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,fe.__webglTexture,$)}z=-1},this.readRenderTargetPixels=function(x,U,$,W,H,re,fe,_e=0){if(!(x&&x.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve){de.bindFramebuffer(k.FRAMEBUFFER,ve);try{const ke=x.textures[_e],Ve=ke.format,He=ke.type;if(x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(He)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=x.width-W&&$>=0&&$<=x.height-H&&k.readPixels(U,$,W,H,ze.convert(Ve),ze.convert(He),re)}finally{const ke=D!==null?Ce.get(D).__webglFramebuffer:null;de.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(x,U,$,W,H,re,fe,_e=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Ce.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&fe!==void 0&&(ve=ve[fe]),ve)if(U>=0&&U<=x.width-W&&$>=0&&$<=x.height-H){de.bindFramebuffer(k.FRAMEBUFFER,ve);const ke=x.textures[_e],Ve=ke.format,He=ke.type;if(x.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const we=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,we),k.bufferData(k.PIXEL_PACK_BUFFER,re.byteLength,k.STREAM_READ),k.readPixels(U,$,W,H,ze.convert(Ve),ze.convert(He),0);const at=D!==null?Ce.get(D).__webglFramebuffer:null;de.bindFramebuffer(k.FRAMEBUFFER,at);const pt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await t_(k,pt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,we),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,re),k.deleteBuffer(we),k.deleteSync(pt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,U=null,$=0){const W=Math.pow(2,-$),H=Math.floor(x.image.width*W),re=Math.floor(x.image.height*W),fe=U!==null?U.x:0,_e=U!==null?U.y:0;C.setTexture2D(x,0),k.copyTexSubImage2D(k.TEXTURE_2D,$,0,0,fe,_e,H,re),de.unbindTexture()};const ap=k.createFramebuffer(),op=k.createFramebuffer();this.copyTextureToTexture=function(x,U,$=null,W=null,H=0,re=0){let fe,_e,ve,ke,Ve,He,we,at,pt;const mt=x.isCompressedTexture?x.mipmaps[re]:x.image;if($!==null)fe=$.max.x-$.min.x,_e=$.max.y-$.min.y,ve=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,Ve=$.min.y,He=$.isBox3?$.min.z:0;else{const yt=Math.pow(2,-H);fe=Math.floor(mt.width*yt),_e=Math.floor(mt.height*yt),x.isDataArrayTexture?ve=mt.depth:x.isData3DTexture?ve=Math.floor(mt.depth*yt):ve=1,ke=0,Ve=0,He=0}W!==null?(we=W.x,at=W.y,pt=W.z):(we=0,at=0,pt=0);const Qe=ze.convert(U.format),Ft=ze.convert(U.type);let ye;U.isData3DTexture?(C.setTexture3D(U,0),ye=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),ye=k.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),ye=k.TEXTURE_2D),de.activeTexture(k.TEXTURE0),de.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),de.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),de.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const kn=de.getParameter(k.UNPACK_ROW_LENGTH),et=de.getParameter(k.UNPACK_IMAGE_HEIGHT),En=de.getParameter(k.UNPACK_SKIP_PIXELS),zn=de.getParameter(k.UNPACK_SKIP_ROWS),mi=de.getParameter(k.UNPACK_SKIP_IMAGES);de.pixelStorei(k.UNPACK_ROW_LENGTH,mt.width),de.pixelStorei(k.UNPACK_IMAGE_HEIGHT,mt.height),de.pixelStorei(k.UNPACK_SKIP_PIXELS,ke),de.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),de.pixelStorei(k.UNPACK_SKIP_IMAGES,He);const pr=x.isDataArrayTexture||x.isData3DTexture,it=U.isDataArrayTexture||U.isData3DTexture;if(x.isDepthTexture){const yt=Ce.get(x),gi=Ce.get(U),nt=Ce.get(yt.__renderTarget),cs=Ce.get(gi.__renderTarget);de.bindFramebuffer(k.READ_FRAMEBUFFER,nt.__webglFramebuffer),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,cs.__webglFramebuffer);for(let mr=0;mr<ve;mr++)pr&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(x).__webglTexture,H,He+mr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,re,pt+mr)),k.blitFramebuffer(ke,Ve,fe,_e,we,at,fe,_e,k.DEPTH_BUFFER_BIT,k.NEAREST);de.bindFramebuffer(k.READ_FRAMEBUFFER,null),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(H!==0||x.isRenderTargetTexture||Ce.has(x)){const yt=Ce.get(x),gi=Ce.get(U);de.bindFramebuffer(k.READ_FRAMEBUFFER,ap),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,op);for(let nt=0;nt<ve;nt++)pr?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,yt.__webglTexture,H,He+nt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,yt.__webglTexture,H),it?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gi.__webglTexture,re,pt+nt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gi.__webglTexture,re),H!==0?k.blitFramebuffer(ke,Ve,fe,_e,we,at,fe,_e,k.COLOR_BUFFER_BIT,k.NEAREST):it?k.copyTexSubImage3D(ye,re,we,at,pt+nt,ke,Ve,fe,_e):k.copyTexSubImage2D(ye,re,we,at,ke,Ve,fe,_e);de.bindFramebuffer(k.READ_FRAMEBUFFER,null),de.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else it?x.isDataTexture||x.isData3DTexture?k.texSubImage3D(ye,re,we,at,pt,fe,_e,ve,Qe,Ft,mt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(ye,re,we,at,pt,fe,_e,ve,Qe,mt.data):k.texSubImage3D(ye,re,we,at,pt,fe,_e,ve,Qe,Ft,mt):x.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,re,we,at,fe,_e,Qe,Ft,mt.data):x.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,re,we,at,mt.width,mt.height,Qe,mt.data):k.texSubImage2D(k.TEXTURE_2D,re,we,at,fe,_e,Qe,Ft,mt);de.pixelStorei(k.UNPACK_ROW_LENGTH,kn),de.pixelStorei(k.UNPACK_IMAGE_HEIGHT,et),de.pixelStorei(k.UNPACK_SKIP_PIXELS,En),de.pixelStorei(k.UNPACK_SKIP_ROWS,zn),de.pixelStorei(k.UNPACK_SKIP_IMAGES,mi),re===0&&U.generateMipmaps&&k.generateMipmap(ye),de.unbindTexture()},this.initRenderTarget=function(x){Ce.get(x).__webglFramebuffer===void 0&&C.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?C.setTextureCube(x,0):x.isData3DTexture?C.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?C.setTexture2DArray(x,0):C.setTexture2D(x,0),de.unbindTexture()},this.resetState=function(){L=0,F=0,D=null,de.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(t),e.unpackColorSpace=qe._getUnpackColorSpace()}},wy={hearts:"#e23b3b",diamonds:"#e23b3b",spades:"#1a1a1a",clubs:"#1a1a1a"},dn=256,Nt=360,vh=new Map,Ki=null;function Ay(t){return`${t.rank}-${t.suit}-${t.enhancement}-${t.edition}-${t.seal}`}var yh=new Map,ys=new Map;function Ry(t,e){const n=yh.get(t);if(n){e(n);return}const i=ys.get(t);if(i){i.push(e);return}ys.set(t,[e]);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{yh.set(t,r),ys.get(t)?.forEach(s=>s(r)),ys.delete(t)},r.onerror=()=>{ys.delete(t)},r.src=t}var Py={bonus:"rgba( 60, 120, 255, 0.28)",mult:"rgba(220,  55,  55, 0.28)",wild:"rgba(160,  70, 255, 0.28)",glass:"rgba(100, 210, 255, 0.28)",steel:"rgba(180, 192, 208, 0.38)",stone:"rgba(120, 120, 120, 0.50)",gold:"rgba(245, 195,  40, 0.38)",lucky:"rgba( 60, 200,  80, 0.28)"},Ly={foil:"rgba(180, 220, 255, 0.30)",holographic:"rgba(200, 100, 255, 0.28)",polychrome:"rgba(255, 180,  60, 0.25)",negative:"rgba( 20,  20,  20, 0.55)"};function Mh(t,e,n,i){t.save(),ki(t,6,6,n-12,i-12,22),t.clip(),t.fillStyle=e,t.fillRect(0,0,n,i),t.restore()}function Dy(t,e,n,i,r,s){const a=e.getContext("2d");if(!a)return;a.clearRect(0,0,e.width,e.height),a.save(),ki(a,6,6,e.width-12,e.height-12,22),a.clip(),a.drawImage(t,0,0,e.width,e.height),a.restore();const o=Py[i];o&&Mh(a,o,e.width,e.height);const l=Ly[r];l&&Mh(a,l,e.width,e.height),a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)",ki(a,6,6,e.width-12,e.height-12,22),a.stroke(),a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.18)",ki(a,9,9,e.width-18,e.height-18,19),a.stroke(),s!=="none"&&(a.fillStyle=s==="gold"?"#ffd24a":s==="red"?"#ff5a5a":s==="blue"?"#54a8ff":"#c084ff",a.beginPath(),a.arc(e.width/2,e.height-50,22,0,Math.PI*2),a.fill(),a.lineWidth=3,a.strokeStyle="rgba(0,0,0,0.4)",a.stroke()),n.needsUpdate=!0}function Rf(t,e,n,i,r,s){for(const a of["svg","png","webp","jpg"])Ry(`${t}.${a}`,o=>Dy(o,e,n,i,r,s))}function ki(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function Sh(t){const e=Ay(t),n=vh.get(e);if(n)return n;const i=document.createElement("canvas");i.width=dn,i.height=Nt;const r=i.getContext("2d");if(r.fillStyle="#fdfdfd",ki(r,6,6,dn-12,Nt-12,22),r.fill(),r.lineWidth=4,r.strokeStyle="#222",ki(r,6,6,dn-12,Nt-12,22),r.stroke(),t.enhancement==="stone")r.fillStyle="#555",r.font="bold 56px serif",r.textAlign="center",r.fillText("STONE",dn/2,Nt/2+18);else{const o=wy[t.suit],l=Ha[t.rank],c=wm[t.suit];r.fillStyle=o,r.textAlign="center",r.textBaseline="middle";const u=l==="10"?78:98,d=l==="10"?64:55;r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.save(),r.translate(dn,Nt),r.rotate(Math.PI),r.textAlign="center",r.textBaseline="middle",r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.restore(),r.textAlign="center",r.font="bold 160px serif",r.fillText(c,dn/2,Nt/2+32)}(o=>{t.seal!=="none"&&(o.fillStyle=t.seal==="gold"?"#ffd24a":t.seal==="red"?"#ff5a5a":t.seal==="blue"?"#54a8ff":"#c084ff",o.beginPath(),o.arc(dn/2,Nt-50,22,0,Math.PI*2),o.fill(),o.lineWidth=3,o.strokeStyle="rgba(0,0,0,0.4)",o.stroke())})(r);const a=new df(i);return a.colorSpace=jt,a.anisotropy=4,vh.set(e,a),t.enhancement!=="stone"&&Rf(`/art/cards/${Ha[t.rank]}_${t.suit}`,i,a,t.enhancement,t.edition,t.seal),a}function Pf(){if(Ki)return Ki;const t=document.createElement("canvas");t.width=dn,t.height=Nt;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,dn,Nt);n.addColorStop(0,"#7a1622"),n.addColorStop(1,"#3a0a12"),e.fillStyle=n,ki(e,6,6,dn-12,Nt-12,22),e.fill(),e.strokeStyle="#f0c060",e.lineWidth=3,ki(e,18,18,dn-36,Nt-36,16),e.stroke(),e.strokeStyle="rgba(240,192,96,0.25)",e.lineWidth=1;for(let i=-Nt;i<dn;i+=14)e.beginPath(),e.moveTo(i,0),e.lineTo(i+Nt,Nt),e.stroke(),e.beginPath(),e.moveTo(i,Nt),e.lineTo(i+Nt,0),e.stroke();return e.fillStyle="#f0c060",e.textAlign="center",e.font="bold 96px serif",e.fillText("♠",dn/2,Nt/2+36),Ki=new df(t),Ki.colorSpace=jt,Ki.anisotropy=4,Rf("/art/back/default",t,Ki,"none","base","none"),Ki}var Wn=1.2,bi=1.68,Cs=.04,Lf={value:0};function Iy(t){Lf.value+=t}var ky=class extends Ri{card;selected=!1;hovered=!1;baseY=0;baseZ=0;baseRotZ=0;handIndex=0;faceMesh;backMesh;glowMesh;shadowMesh;glowMaterial;shadowMaterial;constructor(t){super(),this.card=t;const e=new or(Wn,bi),n=.5,i=new Xe(.06,-.08),r=new or(Wn+n,bi+n);this.shadowMaterial=new sn({transparent:!0,depthWrite:!1,uniforms:{uSize:{value:new Xe(Wn+n,bi+n)},uInner:{value:new Xe(Wn,bi)},uRadius:{value:.18},uOffset:{value:i},uOpacity:{value:.55}},vertexShader:`
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
      `}),this.shadowMesh=new Yt(r,this.shadowMaterial),this.shadowMesh.position.z=-Cs*.5,this.shadowMesh.renderOrder=-2;const s=.35,a=new or(Wn+s,bi+s);this.glowMaterial=new sn({transparent:!0,depthWrite:!1,blending:2,uniforms:{uOpacity:{value:0},uTime:Lf,uColor:{value:new Ge(6994175)},uSize:{value:new Xe(Wn+s,bi+s)},uInner:{value:new Xe(Wn,bi)},uRadius:{value:.18}},vertexShader:`
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
      `}),this.glowMesh=new Yt(a,this.glowMaterial),this.glowMesh.position.z=-Cs*.25,this.glowMesh.renderOrder=-1,this.glowMesh.visible=!1;const o=new Dl({map:Sh(t),roughness:.55,metalness:.05,alphaTest:.5,emissive:new Ge(0),emissiveIntensity:0}),l=new Dl({map:Pf(),roughness:.55,metalness:.05,alphaTest:.5});this.faceMesh=new Yt(e,o),this.faceMesh.position.z=Cs/2,this.backMesh=new Yt(e,l),this.backMesh.position.z=-Cs/2,this.backMesh.rotation.y=Math.PI,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this,this.add(this.shadowMesh,this.faceMesh,this.backMesh,this.glowMesh)}resetForCard(t){Ee.killTweensOf(this.position),Ee.killTweensOf(this.rotation),Ee.killTweensOf(this.scale),this.card=t,this.selected=!1,this.hovered=!1,this.baseY=0,this.baseZ=0,this.baseRotZ=0,this.handIndex=0,delete this.userData.keepAlive,this.position.set(0,0,0),this.rotation.set(0,0,0),this.scale.set(1,1,1),this.glowMesh.visible=!1,this.glowMaterial.uniforms.uOpacity.value=0;const e=this.faceMesh.material;e.map=Sh(t),e.emissive.setHex(0),e.emissiveIntensity=0,e.needsUpdate=!0,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this}moveTo(t,e=.45,n=0){this.baseY=t.y,this.baseZ=t.z??0,this.baseRotZ=t.rotZ??0,Ee.to(this.position,{x:t.x,y:this.baseY+(this.selected?.45:0)+(this.hovered?.2:0),z:this.baseZ+(this.selected?.6:0)+(this.hovered?.5:0),duration:e,delay:n,ease:"power3.out"}),Ee.to(this.rotation,{x:0,y:0,z:this.baseRotZ,duration:e,delay:n,ease:"power3.out"})}setHover(t){this.hovered!==t&&(this.hovered=t,Ee.to(this.position,{y:this.baseY+(this.selected?.45:0)+(t?.2:0),z:this.baseZ+(this.selected?.6:0)+(t?.5:0),duration:.18,ease:"power2.out"}),Ee.to(this.rotation,{x:t?-.05:0,duration:.18,ease:"power2.out"}))}setSelected(t){if(this.selected===t)return;this.selected=t,Ee.to(this.position,{y:this.baseY+(t?.45:0)+(this.hovered?.2:0),z:this.baseZ+(t?.6:0)+(this.hovered?.5:0),duration:.22,ease:"back.out(2)"});const e=this.glowMaterial.uniforms.uOpacity;t&&(this.glowMesh.visible=!0),Ee.to(e,{value:t?1:0,duration:t?.28:.22,ease:t?"power2.out":"power2.in",onComplete:()=>{this.selected||(this.glowMesh.visible=!1)}})}pulse(t=1.18,e=.35){const n=Ee.timeline();n.to(this.scale,{x:t*1.08,y:t*.92,z:t,duration:e*.25,ease:"power2.out"}),n.to(this.scale,{x:t*.95,y:t*1.05,z:t,duration:e*.25,ease:"sine.inOut"}),n.to(this.scale,{x:1,y:1,z:1,duration:e*.5,ease:"elastic.out(1, 0.5)"})}flash(t=16765514,e=.5){const n=this.faceMesh.material;n.emissive.setHex(t),Ee.fromTo(n,{emissiveIntensity:0},{emissiveIntensity:.9,duration:e*.3,ease:"power2.out",yoyo:!0,repeat:1})}dispose(){this.faceMesh.geometry.dispose(),this.faceMesh.material.dispose(),this.backMesh.material.dispose(),this.glowMesh.geometry.dispose(),this.glowMaterial.dispose(),this.shadowMesh.geometry.dispose(),this.shadowMaterial.dispose()}},Dr=400,Ny=class{points;positions;colors;sizes;data=[];cursor=0;constructor(){const t=new pi;this.positions=new Float32Array(Dr*3),this.colors=new Float32Array(Dr*3),this.sizes=new Float32Array(Dr),t.setAttribute("position",new yn(this.positions,3)),t.setAttribute("color",new yn(this.colors,3)),t.setAttribute("size",new yn(this.sizes,1));const e=new sn({uniforms:{uPixel:{value:window.devicePixelRatio||1}},transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,vertexShader:`
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
      `});this.points=new A_(t,e),this.points.frustumCulled=!1,this.points.renderOrder=10;for(let n=0;n<Dr;n++)this.data[n]={active:!1,age:0,life:1,vx:0,vy:0,vz:0,gravity:0,startSize:1},this.sizes[n]=0}emit(t,e={}){const n=e.count??12,i=e.color??new Ge("#ffd24a"),r=e.spread??.8,s=e.speed??2.2,a=e.life??.9,o=e.size??14,l=e.gravity??-4.5,c=t.clone();this.points.parent&&this.points.parent.worldToLocal(c);for(let u=0;u<n;u++){const d=this.cursor;this.cursor=(this.cursor+1)%Dr;const h=this.data[d];h.active=!0,h.age=0,h.life=a*(.7+Math.random()*.6);const m=Math.random()*Math.PI*2,_=Math.random()*r;h.vx=Math.cos(m)*_*s*.5,h.vy=s*(.6+Math.random()*.8),h.vz=(Math.random()-.5)*r,h.gravity=l,h.startSize=o*(.7+Math.random()*.6),this.positions[d*3+0]=c.x,this.positions[d*3+1]=c.y,this.positions[d*3+2]=c.z,this.colors[d*3+0]=i.r,this.colors[d*3+1]=i.g,this.colors[d*3+2]=i.b,this.sizes[d]=h.startSize}}update(t){let e=!1;for(let n=0;n<Dr;n++){const i=this.data[n];if(!i.active)continue;if(i.age+=t,i.age>=i.life){i.active=!1,this.sizes[n]=0;continue}e=!0,i.vy+=i.gravity*t,this.positions[n*3+0]+=i.vx*t,this.positions[n*3+1]+=i.vy*t,this.positions[n*3+2]+=i.vz*t;const r=i.age/i.life;this.sizes[n]=i.startSize*(1-r)}(e||this.cursor!==0)&&(this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("size").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0)}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}},Ms="./";function Df(t){const e=t.replace(/^\/+/,"");return Ms===""||Ms==="./"?`./${e}`:`${Ms.endsWith("/")?Ms:`${Ms}/`}${e}`}var Uy=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],Oy=["clubs","diamonds","hearts","spades"],If="art/ui/background.png",Fy="art/back/default.svg",By=Uy.flatMap(t=>Oy.map(e=>`art/cards/${t}_${e}.svg`)),zy=["art/ui/open-poker-logo.png",If,"art/ui/background.svg","art/ui/chip.svg","art/ui/coin.svg","art/ui/btn_discard.svg","art/ui/btn_new_run.svg","art/ui/btn_options.svg","art/ui/btn_play.svg","art/ui/btn_run_info.svg",Fy,"art/back/default.png","art/blinds/small.svg","art/blinds/big.svg","art/blinds/boss.svg","art/jokers/joker_01.svg","art/jokers/joker_02.svg","art/jokers/joker_03.svg","art/jokers/joker_04.svg","art/jokers/joker_05.svg","art/consumables/planet.svg","art/consumables/spectral.svg","art/consumables/tarot.svg",...By];function Vy(t){return`art/cards/${Ha[t.rank]}_${t.suit}.svg`}function Gy(t){return[...new Set(t)]}function xh(t,e,n){return Math.max(e,Math.min(n,t))}function Hy(){const t=new or(2,2),e=new sn({uniforms:{uTime:{value:0},uColorA:{value:new Ge("#107052")},uColorB:{value:new Ge("#063329")},uColorC:{value:new Ge("#29a36d")},uMap:{value:null},uUseMap:{value:0}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1}),n=new Yt(t,e);return n.renderOrder=-1,n.frustumCulled=!1,n}function Wy(t){const e=new q_;let n=null,i=!1;const r=t.material;return(()=>{if(i)return;const a=Df(If);e.load(a,o=>{if(i){o.dispose();return}o.colorSpace=jt,n=o,r.uniforms.uMap.value=o,r.uniforms.uUseMap.value=1},void 0,()=>{})})(),{dispose:()=>{i=!0,r.uniforms.uMap.value=null,r.uniforms.uUseMap.value=0,n?.dispose()}}}function Xy(t){const e=new __,n=new An(28,t.clientWidth/t.clientHeight,.1,100);n.position.set(0,1.2,12),n.lookAt(0,.6,0);const i=new Cy({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(t.clientWidth,t.clientHeight),i.outputColorSpace=jt,t.appendChild(i.domElement);const r=Hy();e.add(r);const s=Wy(r);e.add(new Z_(16777215,.55));const a=new Xu(16777215,1.1);a.position.set(2,4,5),e.add(a);const o=new Xu(8964351,.4);o.position.set(-3,2,-2),e.add(o);const l=new Ri;l.position.set(0,-.9,0),l.scale.setScalar(.7),e.add(l);const c=new Ri;c.position.set(0,.4,0),c.scale.setScalar(.78),e.add(c);const u=new Ri;u.position.set(4.6,-1.75,0),u.scale.setScalar(.68),u.rotation.z=-.04,e.add(u);const d=new or(Wn,bi),h=new Dl({map:Pf(),roughness:.85,metalness:.05,alphaTest:.5}),m=12,_=[];for(let L=0;L<m;L++){const F=new Yt(d,h);F.position.set(L*.012,L*.018,L*Cs*.5),u.add(F),_.push(F)}const p=L=>{const F=Math.max(0,Math.min(m,Math.ceil(L/52*m)));for(let D=0;D<_.length;D++)_[D].visible=D<F};p(52);const g=new Ny;e.add(g.points);const f=(L,F)=>{g.emit(L,F)},y=()=>new X,T=L=>new Ge(L),b=()=>{const L=Math.max(1,t.clientWidth),F=Math.max(1,t.clientHeight),D=xh(Math.min(L/1440,F/900),.78,1),z=xh((1920-L)/1920,0,.5)*1.15+(1-D)*.35,V=-.9+(1-D)*1.35,O=.4+(1-D)*.28,K=4.6-(1-D)*.85,ee=-1.75+(1-D)*.45;l.position.set(z,V,0),l.scale.setScalar(.7*D),c.position.set(z,O,0),c.scale.setScalar(.78*D),u.position.set(K,ee,0),u.scale.setScalar(.68*D)};b();const E=()=>{const L=t.clientWidth,F=t.clientHeight;i.setSize(L,F),n.aspect=L/F,n.updateProjectionMatrix(),b()};window.addEventListener("resize",E);const A=new uv;let R=0;const v=()=>{const L=A.getDelta(),F=A.elapsedTime;r.material.uniforms.uTime.value=F,Iy(L),g.update(L),i.render(e,n),R=requestAnimationFrame(v)};return R=requestAnimationFrame(v),{scene:e,camera:n,renderer:i,handGroup:l,playGroup:c,deckGroup:u,setDeckCount:p,particles:g,emitBurst:f,createVector3:y,createColor:T,getMetrics:()=>({frame:i.info.render.frame,calls:i.info.render.calls,triangles:i.info.render.triangles,points:i.info.render.points,lines:i.info.render.lines}),dispose:()=>{cancelAnimationFrame(R),window.removeEventListener("resize",E),s.dispose(),r.geometry.dispose(),r.material.dispose(),d.dispose(),h.dispose(),g.dispose(),i.dispose(),i.domElement.remove()},shake:(L=.15,F=.35)=>{const D={x:n.position.x,y:n.position.y},z=Ee.timeline({onComplete:()=>{n.position.x=D.x,n.position.y=D.y}}),V=6;for(let O=0;O<V;O++)z.to(n.position,{x:D.x+(Math.random()-.5)*L*2,y:D.y+(Math.random()-.5)*L*2,duration:F/V,ease:"sine.inOut"});z.to(n.position,{x:D.x,y:D.y,duration:.1,ease:"power2.out"})}}}function Ul(t){if(t===0)return[];const e=Math.min(Wn*1.05,9/Math.max(t,1)),n=-((t-1)*e)/2,i=.04,r=.05;return Array.from({length:t},(s,a)=>{const o=n+a*e,l=a-(t-1)/2,c=-l*i;return{x:o,y:-Math.abs(l)*r*.5,z:a*.02,rotZ:c}})}function $y(t){const e=Wn*1.1,n=-((t-1)*e)/2;return Array.from({length:t},(i,r)=>({x:n+r*e,y:.7,z:0,rotZ:0}))}var er=1e-4;function jy(t,e,n){return Math.max(e,Math.min(n,t))}function on(t,e,n={}){const i=jy(n.pan??0,-1,1);if(Math.abs(i)<.001)return e;const r=t.createStereoPanner();return r.pan.value=i,r.connect(e),r}function xt(t,e,n,i,r,s=t.currentTime){const a=t.createGain();return a.gain.setValueAtTime(er,s),a.gain.exponentialRampToValueAtTime(Math.max(er,r),s+n),a.gain.exponentialRampToValueAtTime(er,s+n+i),a.connect(e),a}function ls(t,e,n,i,r,s,a=t.currentTime){const o=t.createGain();return o.gain.setValueAtTime(er,a),o.gain.exponentialRampToValueAtTime(Math.max(er,s),a+n),o.gain.setValueAtTime(Math.max(er,s),a+n+i),o.gain.exponentialRampToValueAtTime(er,a+n+i+r),o.connect(e),o}function an(t,e,n,i,r,s=0,a=t.currentTime){const o=t.createOscillator();return o.type=n,o.frequency.setValueAtTime(i,a),o.detune.setValueAtTime(s,a),o.connect(e),o.start(a),o.stop(a+r+.05),o}function qy(t,e){const n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let s=0;s<n;s++)r[s]=Math.random()*2-1;return i}function Tn(t,e,n,i=t.currentTime){const r=t.createBufferSource();return r.buffer=qy(t,n),r.connect(e),r.start(i),r.stop(i+n+.05),r}function Lt(t,e,n,i,r=1){const s=t.createBiquadFilter();return s.type=n,s.frequency.value=i,s.Q.value=r,s.connect(e),s}function Ni(t,e,n,i,r,s,a=0){an(t,xt(t,e,.002,r,i,s),"triangle",n,r,a,s).frequency.exponentialRampToValueAtTime(n*.985,s+r)}function Yy(t,e,n={}){const i=n.volume??.07,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;Tn(t,Lt(t,Lt(t,xt(t,s,.0015,.045,i,a),"highpass",550*r,.7),"lowpass",2100*r,.45),.055,a),an(t,xt(t,s,.002,.035,i*.28,a),"sine",180*r,.04,n.detune??0,a)}function Ky(t,e,n={}){const i=n.volume??.18,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;an(t,Lt(t,ls(t,s,.008,.018,.16,i,a),"lowpass",900*r,.65),"sine",138*r,.2,n.detune??0,a).frequency.exponentialRampToValueAtTime(220*r,a+.09),Tn(t,Lt(t,xt(t,s,.003,.11,i*.42,a+.006),"bandpass",760*r,.9),.13,a+.006)}function Zy(t,e,n={}){const i=n.volume??.14,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;an(t,Lt(t,ls(t,s,.007,.01,.15,i,a),"lowpass",760*r,.55),"sine",250*r,.18,n.detune??0,a).frequency.exponentialRampToValueAtTime(120*r,a+.12),Tn(t,Lt(t,xt(t,s,.003,.08,i*.34,a+.01),"bandpass",560*r,.8),.1,a+.01)}function Jy(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,xt(t,s,.001,.095,i,a),"bandpass",2600*r,1.15);o.frequency.exponentialRampToValueAtTime(930*r,a+.11),Tn(t,o,.12,a),an(t,xt(t,s,.002,.06,i*.16,a+.045),"triangle",92*r,.075,n.detune??0,a+.045)}function Qy(t,e,n={}){const i=n.volume??.28,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,xt(t,s,.004,.13,i,a),"bandpass",2900*r,1.8);o.frequency.exponentialRampToValueAtTime(760*r,a+.14),Tn(t,o,.15,a),an(t,xt(t,s,.001,.05,i*.34,a+.035),"triangle",820*r,.06,(n.detune??0)+7,a+.035)}function eM(t,e,n={}){const i=n.volume??.36,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,ls(t,s,.012,.03,.29,i,a),"lowpass",420*r,1.2);o.frequency.exponentialRampToValueAtTime(2600*r,a+.18),o.frequency.exponentialRampToValueAtTime(420*r,a+.34),Tn(t,o,.36,a),an(t,xt(t,s,.015,.22,i*.18,a+.02),"sine",86*r,.26,n.detune??0,a+.02).frequency.exponentialRampToValueAtTime(118*r,a+.2)}function tM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,Lt(t,ls(t,s,.004,.015,.25,i,a),"highpass",180*r,.7),"lowpass",4200*r,.9);o.frequency.exponentialRampToValueAtTime(380*r,a+.28),Tn(t,o,.31,a),an(t,xt(t,s,.006,.18,i*.2,a+.04),"triangle",160*r,.22,n.detune??0,a+.04).frequency.exponentialRampToValueAtTime(78*r,a+.22)}function nM(t,e,n={}){const i=n.volume??.16,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;Ni(t,s,930*r,i,.055,a,(n.detune??0)-5),Ni(t,s,1570*r,i*.42,.04,a+.002,(n.detune??0)+8),Tn(t,Lt(t,xt(t,s,.001,.025,i*.42,a),"highpass",1700*r,.5),.032,a)}function iM(t,e,n={}){const i=n.volume??.17,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;Ni(t,s,720*r,i*.65,.07,a,n.detune??0),Ni(t,s,1440*r,i*.54,.06,a+.004,(n.detune??0)+11),Ni(t,s,2160*r,i*.28,.05,a+.008,(n.detune??0)-9)}function rM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;[330,440,660].forEach((o,l)=>{const c=a+l*.045;an(t,xt(t,s,.004,.22-l*.035,i*(1-l*.16),c),l===0?"triangle":"sine",o*r,.24,n.detune??0,c).frequency.exponentialRampToValueAtTime(o*1.08*r,c+.14)}),Tn(t,Lt(t,xt(t,s,.003,.16,i*.34,a+.035),"highpass",2400*r,.45),.18,a+.035)}function sM(t,e,n={}){const i=n.volume??.42,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;[0,.09].forEach((o,l)=>{const c=a+o,u=(l===0?1040:1320)*r;Ni(t,s,u,i*.8,.32,c,(n.detune??0)+l*6),Ni(t,s,u*1.52,i*.38,.24,c+.006,(n.detune??0)-l*8),Tn(t,Lt(t,xt(t,s,.001,.055,i*.34,c),"highpass",2600*r,.7),.07,c)}),[523.25,659.25,783.99,1046.5].forEach((o,l)=>{const c=a+.16+l*.055;Ni(t,s,o*r,i*.42,.28,c,n.detune??0)})}function aM(t,e,n={}){const i=n.volume??.48,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=[392,523.25,659.25,783.99,1046.5];o.forEach((l,c)=>{const u=a+c*.095,d=c===o.length-1?.65:.42;an(t,Lt(t,ls(t,s,.01,.04,d,i*(c===o.length-1?.9:.62),u),"lowpass",3600*r,.8),"triangle",l*r,d+.04,n.detune??0,u),an(t,xt(t,s,.002,.2,i*.18,u+.012),"sine",l*2.01*r,.22,(n.detune??0)+4,u+.012)}),Tn(t,Lt(t,xt(t,s,.02,.6,i*.18,a+.32),"highpass",3200*r,.4),.7,a+.32)}function oM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=on(t,e,n),a=t.currentTime,o=Lt(t,s,"lowpass",850*r,.45),l=[196,174.61,155.56,130.81];l.forEach((c,u)=>{const d=a+u*.22,h=u===l.length-1?1:.62,m=ls(t,o,.045,.02,h,i*(1-u*.08),d);an(t,m,"triangle",c*r,h+.04,(n.detune??0)-5,d).frequency.exponentialRampToValueAtTime(c*.96*r,d+h),an(t,xt(t,m,.05,h*.82,i*.24,d+.01),"sine",c/2*r,h,n.detune??0,d+.01)}),Tn(t,Lt(t,xt(t,s,.03,.55,i*.18,a+.12),"lowpass",260*r,.8),.65,a+.12)}function lM(t,e,n={}){const i=n.volume??.24,r=n.pitch??1,s=on(t,e,n),a=t.currentTime;an(t,xt(t,s,.0015,.055,i,a),"triangle",360*r,.07,n.detune??0,a).frequency.exponentialRampToValueAtTime(170*r,a+.055),Tn(t,Lt(t,xt(t,s,.001,.025,i*.5,a+.002),"highpass",1600*r,.6),.032,a+.002)}var cM=""+new URL("Veludo No Copo-CQSci05v.mp3",import.meta.url).href,uM=class{ctx;dest;buffer=null;source=null;pendingStart=!1;constructor(t,e){this.ctx=t,this.dest=e,this.load()}async load(){try{const t=await(await fetch(cM)).arrayBuffer();this.buffer=await this.ctx.decodeAudioData(t),this.pendingStart&&(this.pendingStart=!1,this.playBuffer())}catch(t){console.warn("[BackgroundMusic] Failed to load music file:",t)}}start(){this.buffer?this.playBuffer():this.pendingStart=!0}stop(){if(this.pendingStart=!1,this.source){try{this.source.stop()}catch{}this.source=null}}playBuffer(){if(this.stop(),!this.buffer)return;const t=this.ctx.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.dest),t.start(),this.source=t}},bh="open-poker:muted",Th="open-poker:volume",Eh="open-poker:music-muted",hM=class{ctx=null;master=null;sfxLimiter=null;musicGain=null;music=null;musicLoadPending=!1;voices=new Map;unlocked=!1;muted=!1;volume=.7;mutedListeners=new Set;musicMuted=!1;musicVolume=.06;musicMutedListeners=new Set;constructor(){try{this.muted=localStorage.getItem(bh)==="1",this.musicMuted=localStorage.getItem(Eh)==="1";const t=localStorage.getItem(Th);t&&(this.volume=Math.max(0,Math.min(1,parseFloat(t))))}catch{}}registerDefaults(){const t=(e,n)=>this.register(e,{synth:n});t("click",Yy),t("select",Ky),t("deselect",Zy),t("deal",Jy),t("flip",Qy),t("whoosh",eM),t("sweep",tM),t("chipTick",nM),t("multTick",iM),t("scorePop",rM),t("chaching",sM),t("win",aM),t("lose",oM),t("buttonClick",lM)}register(t,e){this.voices.set(t,e)}installUnlockListener(){const t=()=>{this.unlock(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t,{once:!1}),window.addEventListener("keydown",t,{once:!1})}ensureContext(){if(this.ctx)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.sfxLimiter=this.ctx.createDynamicsCompressor(),this.sfxLimiter.threshold.value=-13,this.sfxLimiter.knee.value=8,this.sfxLimiter.ratio.value=5,this.sfxLimiter.attack.value=.003,this.sfxLimiter.release.value=.16,this.master.connect(this.sfxLimiter),this.sfxLimiter.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicMuted?0:this.musicVolume,this.musicGain.connect(this.ctx.destination)}catch{return null}return this.ctx}unlock(){const t=this.ensureContext();t&&(t.state==="suspended"&&t.resume(),this.unlocked=!0,this.startMusicWhenReady(t))}startMusicWhenReady(t){if(!(this.musicMuted||this.music||this.musicLoadPending||!this.musicGain)){if(this.musicLoadPending=!0,this.music||!this.musicGain||this.ctx!==t){this.musicLoadPending=!1;return}this.music=new uM(t,this.musicGain),this.music.start(),this.musicLoadPending=!1}}play(t,e={}){if(this.muted||!this.unlocked)return;const n=this.ensureContext();if(!n||!this.master)return;const i=this.voices.get(t);if(i){if(i.buffer){this.playBuffer(n,i.buffer,e);return}i.url&&!i.buffer&&this.loadBuffer(n,i),i.synth&&i.synth(n,this.master,e)}}playBuffer(t,e,n){if(!this.master)return;const i=t.createBufferSource();i.buffer=e,n.detune&&(i.detune.value=n.detune),n.pitch&&(i.playbackRate.value=n.pitch);const r=t.createGain();r.gain.value=n.volume??1,i.connect(r).connect(this.master),i.start()}loadBuffer(t,e){!e.url||e.buffer||fetch(e.url).then(n=>n.arrayBuffer()).then(n=>t.decodeAudioData(n)).then(n=>{e.buffer=n}).catch(()=>{})}setMuted(t){this.muted=t;try{localStorage.setItem(bh,t?"1":"0")}catch{}this.master&&(this.master.gain.value=t?0:this.volume);for(const e of this.mutedListeners)e(t)}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem(Th,String(this.volume))}catch{}this.master&&!this.muted&&(this.master.gain.value=this.volume)}onMutedChange(t){return this.mutedListeners.add(t),()=>this.mutedListeners.delete(t)}setMusicMuted(t){this.musicMuted=t;try{localStorage.setItem(Eh,t?"1":"0")}catch{}this.musicGain&&(this.musicGain.gain.value=t?0:this.musicVolume),!t&&this.unlocked&&this.ctx&&this.startMusicWhenReady(this.ctx);for(const e of this.musicMutedListeners)e(t)}toggleMusicMute(){return this.setMusicMuted(!this.musicMuted),this.musicMuted}isMusicMuted(){return this.musicMuted}onMusicMutedChange(t){return this.musicMutedListeners.add(t),()=>this.musicMutedListeners.delete(t)}dispose(){this.music?.stop(),this.music=null;try{this.ctx?.close()}catch{}this.ctx=null,this.master=null,this.sfxLimiter=null,this.musicGain=null,this.musicLoadPending=!1,this.unlocked=!1}},Te=new hM;Te.registerDefaults();Te.installUnlockListener();function dM(t){const{renderer:e,camera:n,handGroup:i,getHandObjects:r,onToggleSelect:s,onReorder:a}=t,o=e.domElement,l=new cv,c=new Xe;let u=null,d=null,h=new Xe,m=null,_=0;const p=.012;function g(S){return Math.max(-.7,Math.min(.7,S.position.x/4.5))}function f(S){const I=o.getBoundingClientRect();c.x=(S.clientX-I.left)/I.width*2-1,c.y=-((S.clientY-I.top)/I.height)*2+1}function y(){const S=r();if(S.length===0)return null;l.setFromCamera(c,n);const I=S.flatMap(L=>[L.faceMesh,L.backMesh]),w=l.intersectObjects(I,!1);return w.length===0?null:w[0].object.userData.cardObject??null}function T(S){l.setFromCamera(c,n);const I=new Ti(new X(0,0,1),-S),w=new X;return l.ray.intersectPlane(I,w)?w.x:null}function b(S){if(f(S),d&&!m){const w=c.x-h.x,L=c.y-h.y;if(w*w+L*L>p*p){m=d,m.position.x;const F=T(i.position.z+m.position.z);F!==null?_=F-(m.position.x+i.position.x):_=0,Te.play("flip",{volume:.24,pan:g(m)}),Ee.to(m.position,{y:m.baseY+.6,z:m.baseZ+.4,duration:.15})}}if(m){const w=T(i.position.z+m.baseZ+.4);w!==null&&(m.position.x=w-i.position.x-_),E();return}const I=y();I!==u&&(u?.setHover(!1),u=I,u?.setHover(!0),I&&Te.play("click",{volume:.1,detune:(Math.random()-.5)*160,pan:g(I)}),o.style.cursor=I?"pointer":"default")}function E(){const S=r().slice().sort((w,L)=>w.position.x-L.position.x),I=Ul(S.length);S.forEach((w,L)=>{w.handIndex=L,w!==m&&w.moveTo(I[L],.18)})}function A(S){f(S);const I=y();I&&(d=I,h.set(c.x,c.y),o.setPointerCapture(S.pointerId))}function R(S){if(o.hasPointerCapture(S.pointerId)&&o.releasePointerCapture(S.pointerId),m){const I=r().slice().sort((L,F)=>L.position.x-F.position.x),w=Ul(I.length);I.forEach((L,F)=>{L.handIndex=F,L.moveTo(w[F],.25)}),a(I.map(L=>L.card.id)),m=null,d=null;return}if(d){const I=s(d.card.id);d.setSelected(I),Te.play(I?"select":"deselect",{detune:(Math.random()-.5)*70,pan:g(d)}),d=null}}function v(){u?.setHover(!1),u=null,o.style.cursor="default"}return o.addEventListener("pointermove",b),o.addEventListener("pointerdown",A),o.addEventListener("pointerup",R),o.addEventListener("pointerleave",v),()=>{o.removeEventListener("pointermove",b),o.removeEventListener("pointerdown",A),o.removeEventListener("pointerup",R),o.removeEventListener("pointerleave",v)}}var fM=[{action:"play_hand",description:"Play selected cards",keys:["Enter"]},{action:"discard",description:"Discard selected cards",keys:["Backspace","Delete"]},{action:"restart_run",description:"Start a new run",keys:["KeyR"]},{action:"toggle_mute",description:"Mute/unmute audio",keys:["KeyM"]}],pM={"btn-play":"play_hand","btn-discard":"discard","overlay-restart":"restart_run","btn-mute":"toggle_mute"},mM=new Map(fM.flatMap(t=>t.keys.map(e=>[e,t.action])));function gM(t){return t.ctrlKey||t.metaKey||t.altKey?null:mM.get(t.code)??null}var _M=15e3;function vM(t={}){return Gy([...zy,...(t.cards??[]).map(Vy)]).map(e=>({url:Df(e),label:e}))}function yM(t){return new Promise((e,n)=>{const i=window.setTimeout(()=>n(new Error(`Timed out loading image: ${t}`)),_M),r=new Image;r.decoding="async",r.onload=()=>{if(window.clearTimeout(i),!r.decode){e();return}r.decode().catch(()=>{}).then(()=>e())},r.onerror=()=>{window.clearTimeout(i),n(new Error(`Failed to load image: ${t}`))},r.src=t})}async function MM(t,e={}){const n=vM(e),i=n.length,r=[];let s=0;return t?.({loaded:s,total:i,label:"Preparing assets",failed:0}),await Promise.all(n.map(async a=>{try{await yM(a.url)}catch(o){r.push(a.label),console.warn(`[preload] ${a.label}`,o)}finally{s+=1,t?.({loaded:s,total:i,label:a.label,failed:r.length})}})),{total:i,failed:r}}var ae=t=>document.getElementById(t),fr=t=>document.getElementById(t),il=fr("splash-screen"),Ch=fr("splash-progress-bar"),rl=fr("splash-status"),wh=fr("splash-percent"),Ol=ae("canvas-host"),SM=ae("blind-name"),Ah=ae("blind-badge"),xM=ae("blind-target"),bM=ae("blind-reward"),Fl=ae("round-score"),sl=ae("hand-type"),Hs=ae("chips"),Ws=ae("mult"),TM=ae("ante"),EM=ae("round"),CM=ae("money"),wM=ae("hands-left"),AM=ae("discards-left"),RM=ae("seed"),PM=ae("hand-counter"),LM=ae("deck-counter"),ka=ae("joker-slots"),DM=ae("joker-count"),Rh=ae("consumable-slots"),IM=ae("consumable-count"),kM=ae("btn-play"),NM=ae("btn-discard"),Mc=ae("btn-sort-straight"),Sc=ae("btn-sort-flush"),UM=ae("btn-runinfo"),OM=ae("btn-options"),Bl=ae("run-info-overlay"),Ph=ae("run-info-list"),FM=ae("btn-run-info-back"),zl=ae("options-overlay"),BM=ae("btn-options-back"),kf=ae("btn-option-sfx"),Nf=ae("btn-option-music"),zM=ae("btn-option-new-run"),VM=ae("btn-option-return"),GM=ae("kanban-close-game"),Ya=ae("score-popup"),Lh=ae("popup-hand"),Vl=ae("popup-total"),ws=ae("overlay"),HM=ae("overlay-title"),WM=ae("overlay-sub"),Fn=ae("shop-overlay"),Ka=ae("shop-panel"),Gl=ae("shop-offers"),XM=ae("shop-inventory"),$M=ae("shop-money"),jM=ae("shop-next-blind"),qM=ae("shop-reroll-cost"),xc=ae("btn-shop-reroll"),Hl=ae("btn-shop-next"),Dh=ae("shop-boosters"),al=ae("shop-voucher"),YM=ae("booster-overlay"),KM=ae("booster-name"),ZM=ae("booster-kind"),JM=ae("booster-picks"),Ih=ae("booster-choices"),QM=ae("btn-booster-skip"),eS=ae("target-overlay"),tS=ae("target-name"),nS=ae("target-instruction"),kh=ae("target-cards"),iS=ae("btn-target-cancel"),Wl=ae("btn-target-confirm"),Rn=ae("item-info"),rS=ae("item-info-kind"),sS=ae("item-info-name"),aS=ae("item-info-desc"),Uf=ae("item-info-meta"),oS=ae("btn-item-info-close"),lS=ae("setup-overlay"),Nh=ae("setup-decks"),tr=ae("setup-stake"),cS=ae("setup-stake-desc"),uS=ae("btn-setup-start"),hS=ae("blind-select-overlay"),Uh=ae("blind-select-cards");function dS(t,e,n){return Math.max(e,Math.min(n,t))}function bc(){const t=window.innerWidth||1280,e=window.innerHeight||720,n=dS(Math.min(t/1280,e/900),.72,1),i=Math.round(14*n),r=260,s=16*n,a=i+r*n+s,o=Math.max(320,(t-a-i)/n),l=Math.max(360,(e-i*2)/n),c=document.documentElement;c.style.setProperty("--ui-scale",n.toFixed(3)),c.style.setProperty("--ui-edge",`${i}px`),c.style.setProperty("--sidebar-layout-height",`${l}px`),c.style.setProperty("--hud-top-left",`${a}px`),c.style.setProperty("--hud-top-layout-width",`${o}px`)}bc();function fS(t){const e=t.total===0?1:t.loaded/t.total,n=Math.round(e*100);if(Ch&&(Ch.style.transform=`scaleX(${e})`),wh&&(wh.textContent=`${n}%`),!!rl){if(t.loaded>=t.total){rl.textContent=t.failed>0?`Loaded with ${t.failed} fallback${t.failed===1?"":"s"}`:"Ready";return}rl.textContent=`Loading ${t.label}`}}function pS(){il&&window.setTimeout(()=>{il.classList.add("is-complete"),window.setTimeout(()=>il.remove(),650)},220)}var Of="kanban-open-poker:run-v1";function mS(){try{const t=localStorage.getItem(Of);if(!t)return null;const e=JSON.parse(t);return e?.version===1&&e.snapshot?e:null}catch{return null}}var Xs=mS(),B=new eg;if(Xs?.snapshot)try{B.reset(Xs.snapshot)}catch(t){console.warn("[save] Could not restore Open Poker run:",t),B.enterSetup()}else B.enterSetup();var Bi=Object.fromEntries(Object.keys(B.handLevels).map(t=>[t,0]));if(Xs?.handPlayCounts)for(const t of Object.keys(Bi))Bi[t]=Math.max(0,Number(Xs.handPlayCounts[t]??0)||0);var ss=null;function Ff(){for(const t of Object.keys(Bi))Bi[t]=0}var Oh=await MM(fS,{cards:B.hand});Oh.failed.length>0&&console.warn("[preload] Assets loaded with fallbacks:",Oh.failed);pS();var Ct=Xy(Ol),Ht=new Map,Za=[],Ei=!1,nr=!1,$r=!1,jr=null,Dn=!1,Ja=[];function Bf(t){return Math.max(-.7,Math.min(.7,t/4.5))}function zf(t){const e=Ja.pop()??document.createElement("div");return e.removeAttribute("style"),e.className="card-score-float",e.textContent="",t.appendChild(e),e}function Vf(t){t.remove(),t.removeAttribute("style"),t.className="card-score-float",t.textContent="",Ja.push(t)}function gS(t){let e=Ht.get(t.id);return e||(e=Za.pop()??new ky(t),e.resetForCard(t),Ct.handGroup.add(e),e.position.set(6,-2,1),e.rotation.y=Math.PI,Ht.set(t.id,e),Te.play("deal",{volume:.27,detune:(Math.random()-.5)*180,pitch:.94+Math.random()*.12,pan:(Math.random()-.5)*.5}),Ee.to(e.rotation,{y:0,duration:.5,delay:.05,ease:"power3.out"})),e}function lo(t,e){Ct.handGroup.remove(e),Ct.playGroup.remove(e),Ht.delete(t),e.resetForCard(e.card),Za.push(e)}function Fh(t){Ct.handGroup.remove(t),Ct.playGroup.remove(t),t.dispose()}var _n=[],zi=Xs?.activeHandSort??null;function Gi(){try{const t={version:1,snapshot:B.toSnapshot(),activeHandSort:zi,handPlayCounts:{...Bi},savedAt:Date.now()};localStorage.setItem(Of,JSON.stringify(t))}catch(t){console.warn("[save] Could not persist Open Poker run:",t)}}function Tc(){Gi(),window.parent!==window&&window.parent.postMessage({type:"open-poker-close"},"*")}function _S(){const t=B.hand.map(e=>e.id);_n=_n.filter(e=>t.includes(e));for(const e of t)_n.includes(e)||_n.push(e)}function vS(){return _n.map(t=>Ht.get(t)).filter(Boolean)}function Ec(){Mc.classList.toggle("is-active",zi==="straight"),Sc.classList.toggle("is-active",zi==="flush")}function Gf(){!zi||B.hand.length<2||(_n=(zi==="straight"?tg(B.hand):ng(B.hand)).map(t=>t.id))}function Qa(t){Dn||B.phase!=="play"||B.hand.length<2||(zi=t,Gf(),Ec(),Gi(),Te.play("buttonClick"),fi(.28))}function fi(t=.4){Gf(),_S();const e={};for(const r of B.hand)e[r.id]=r;const n=_n.map(r=>e[r]).filter(Boolean),i=Ul(n.length);n.forEach((r,s)=>{const a=gS(r);a.handIndex=s,a.setSelected(B.selected.has(r.id)),a.moveTo(i[s],t,s*.04)});for(const[r,s]of Ht)!e[r]&&!s.userData.keepAlive&&lo(r,s)}function Bh(t){return t.split(" ").map(e=>e.charAt(0)).join("").slice(0,3).toUpperCase()}var eo=B.deckKey;function Cc(){Rn.classList.add("hidden")}function zh(t,e,n){const i=e==="joker"?t:null;Rn.dataset.rarity=i?.rarity??"consumable",Rn.dataset.jokerId=i?.id??"",rS.textContent=i?`${i.rarity.toUpperCase()} JOKER`:t.type.toUpperCase(),sS.textContent=t.name,aS.textContent=t.description;const r=[`Sell $${t.sellValue}`];if((t.edition??"base")!=="base"&&r.push(t.edition??"base"),i){i.sticker==="eternal"&&r.push("Eternal · cannot sell"),i.sticker==="perishable"&&r.push(`Perishable · ${i.perishableRounds??0} rounds`),i.rental&&r.push("Rental · -$3/round");const c=B.jokerRuntimeText(i.id);c&&r.push(c)}Uf.textContent=r.join(" · "),Rn.classList.remove("hidden");const s=n.getBoundingClientRect(),a=Rn.getBoundingClientRect(),o=Math.min(window.innerWidth-a.width-12,Math.max(12,s.left)),l=Math.min(window.innerHeight-a.height-12,s.bottom+10);Rn.style.left=`${o}px`,Rn.style.top=`${l}px`}function Hf(){ka.replaceChildren();const t=B.jokerCapacity();for(let n=0;n<t;n++){const i=document.createElement("div"),r=B.jokers[n];if(i.className=`joker-slot${r?" filled":""}`,i.dataset.jokerIndex=String(n),i.addEventListener("dragover",s=>{s.dataTransfer?.types.includes("application/x-open-poker-joker")&&(s.preventDefault(),i.classList.add("drag-target"))}),i.addEventListener("dragleave",()=>i.classList.remove("drag-target")),i.addEventListener("drop",s=>{s.preventDefault(),i.classList.remove("drag-target");const a=s.dataTransfer?.getData("application/x-open-poker-joker");a&&B.moveJoker(a,n)&&(Te.play("buttonClick"),ot())}),r){i.dataset.jokerId=r.id,i.textContent=Bh(r.name),r.rarity==="mythic"&&i.classList.add("mythic");const s=B.jokerRuntimeText(r.id);i.title=`${r.name} - ${r.description}${s?` · ${s}`:""} · Drag to reorder`,i.draggable=!0,i.addEventListener("click",a=>{a.stopPropagation(),zh(r,"joker",i)}),i.addEventListener("dragstart",a=>{a.dataTransfer?.setData("application/x-open-poker-joker",r.id),a.dataTransfer&&(a.dataTransfer.effectAllowed="move"),i.classList.add("dragging")}),i.addEventListener("dragend",()=>{i.classList.remove("dragging"),ka.querySelectorAll(".drag-target").forEach(a=>a.classList.remove("drag-target"))})}ka.appendChild(i)}Rh.replaceChildren();const e=B.consumableCapacity();for(let n=0;n<e;n++){const i=document.createElement("div"),r=B.consumables[n];i.className=`consumable-slot${r?" filled":""}`,r&&(i.dataset.consumableId=r.id,i.textContent=Bh(r.name),i.title=`${r.name} - ${r.description}`,i.addEventListener("click",s=>{s.stopPropagation(),zh(r,"consumable",i)})),Rh.appendChild(i)}}Hf();var Xl=["Small Blind","Big Blind","Boss Blind"],yS=[["SMALL","BLIND"],["BIG","BLIND"],["BOSS"]],MS=["small","big","boss"],SS=["$","$$","$$$$$"];function Wf(t){return t.kind==="joker"?t.joker.name:t.kind==="consumable"?t.consumable.name:t.name}function Xf(t){return t.kind==="joker"?t.joker.description:t.kind==="consumable"?t.consumable.description:t.description}function xS(t){return t.kind==="playing-card"?"Deck Card":t.kind==="joker"?`${t.joker.rarity.toUpperCase()} JOKER`:t.kind}function Vh(t,e,n){const i=document.createElement("div");i.className="shop-inventory-group";const r=document.createElement("div");r.className="shop-inventory-title",r.textContent=`${n==="joker"?"Jokers":"Consumables"} ${t.length}/${e}`,i.appendChild(r);const s=document.createElement("div");s.className="shop-inventory-list";for(let a=0;a<e;a++){const o=t[a],l=document.createElement("div");if(l.className=`shop-inventory-row${o?" filled":""}`,!o){l.textContent="Empty slot",s.appendChild(l);continue}const c=document.createElement("div");c.className="shop-inventory-copy";const u=document.createElement("strong");u.textContent=o.name;const d=document.createElement("span");if(d.textContent=o.description,c.append(u,d),l.appendChild(c),n==="consumable"){const m=document.createElement("button");m.className="shop-mini-btn use",m.textContent="Use",m.addEventListener("click",()=>{const _=B.beginUseConsumable(o.id);_!=="invalid"&&(Te.play(_==="targeting"?"buttonClick":"chaching"),ot())}),l.appendChild(m)}const h=document.createElement("button");h.className="shop-mini-btn",h.textContent=`Sell $${o.sellValue}`,h.addEventListener("click",()=>{(n==="joker"?B.sellJoker(o.id):B.sellConsumable(o.id))&&(Te.play("buttonClick"),ot())}),l.appendChild(h),s.appendChild(l)}return i.appendChild(s),i}function bS(t){const e=Fn.classList.contains("hidden");t?(Fn.classList.remove("hidden"),e&&(Fn.style.opacity="1",Ee.fromTo(Fn,{opacity:0},{opacity:1,duration:.25,ease:"power2.out"}),Ee.fromTo(Ka,{y:24,scale:.96},{y:0,scale:1,duration:.38,ease:"back.out(1.4)"}),Te.play("chaching",{volume:.35}))):Fn.classList.add("hidden")}function TS(){const t=B.phase==="shop"&&!!B.shop&&!nr;if(bS(t),!t||!B.shop)return;$M.textContent=`$${B.money}`,jM.textContent=Xl[B.blindIndex],qM.textContent=`$${B.shop.rerollCost}`,xc.disabled=B.money<B.shop.rerollCost;const e=B.lastCashout,n=Ka.querySelector(".shop-kicker");n&&(n.textContent=e?`Cashout $${e.total} · Blind $${e.blindReward} · Hands $${e.handsBonus} · Interest $${e.interest}`:"Blind cleared"),Gl.replaceChildren(),B.shop.offers.forEach((r,s)=>{const a=document.createElement("article"),o=B.canBuyOffer(r.id);a.className=`shop-offer ${r.item.kind}${r.sold?" sold":""}`,r.item.kind==="joker"&&r.item.joker.rarity==="mythic"&&a.classList.add("mythic");const l=document.createElement("div");l.className="shop-offer-kind",l.textContent=xS(r.item),a.appendChild(l);const c=document.createElement("h3");c.textContent=Wf(r.item),a.appendChild(c);const u=document.createElement("p");u.textContent=Xf(r.item),a.appendChild(u);const d=document.createElement("button");d.className="shop-buy-btn",d.dataset.testid=`shop-buy-${s}`,d.disabled=r.sold||!o,d.textContent=r.sold?"Sold":`Buy $${B.shopPriceForItem(r.item)}`,d.addEventListener("click",()=>{B.buyOffer(r.id)&&(Te.play("chaching"),Ee.fromTo(a,{scale:1},{scale:1.04,duration:.14,yoyo:!0,repeat:1,ease:"power2.out"}),ot())}),a.appendChild(d),Gl.appendChild(a)}),Dh.replaceChildren(),B.shop.boosters.forEach(r=>{const s=document.createElement("article");s.className=`booster-shop-card ${r.type}${r.sold?" sold":""}`;const a=document.createElement("span");a.className="booster-shop-kind",a.textContent=r.size==="normal"?r.type:`${r.size} · ${r.type}`;const o=document.createElement("strong");o.textContent=r.name;const l=document.createElement("span");l.textContent=r.description;const c=document.createElement("button");c.className="shop-buy-btn";const u=B.boosterPrice(r);c.disabled=r.sold||B.money<u,c.textContent=r.sold?"Opened":`Buy & Open $${u}`,c.addEventListener("click",()=>{B.openBooster(r.id)&&(Te.play("scorePop"),ot())}),s.append(a,o,l,c),Dh.appendChild(s)}),al.replaceChildren();const i=B.shop.voucher;if(i){const r=document.createElement("article");r.className=`voucher-card${i.sold?" sold":""}`;const s=document.createElement("strong");s.textContent=i.name;const a=document.createElement("span");a.textContent=i.description;const o=document.createElement("button");o.className="shop-buy-btn",o.disabled=i.sold||B.money<i.price,o.textContent=i.sold?"Redeemed":`Redeem $${i.price}`,o.addEventListener("click",()=>{B.buyVoucher()&&(Te.play("chaching"),ot())}),r.append(s,a,o),al.appendChild(r)}else{const r=document.createElement("div");r.className="voucher-empty",r.textContent="All Vouchers redeemed",al.appendChild(r)}XM.replaceChildren(Vh(B.jokers,B.jokerCapacity(),"joker"),Vh(B.consumables,B.consumableCapacity(),"consumable"))}function ES(t,e){t.replaceChildren(),e.forEach((n,i)=>{i>0&&t.appendChild(document.createElement("br")),t.append(document.createTextNode(n))})}function CS(t){const e=document.createElement("span");e.className="counter-total",e.textContent="/8",TM.replaceChildren(document.createTextNode(String(t)),e)}function $f(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":String(t.rank)}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}function wS(t){return Wf(t)}function AS(t){return Xf(t)}function RS(){const t=B.phase==="booster"&&!!B.booster;YM.classList.toggle("hidden",!t),!(!t||!B.booster)&&(KM.textContent=B.booster.name,ZM.textContent=B.booster.type.toUpperCase(),JM.textContent=`Choose ${B.booster.picksLeft}`,Ih.replaceChildren(),B.booster.choices.forEach(e=>{const n=document.createElement("article");n.className=`booster-choice ${e.item.kind}${e.taken?" taken":""}`,e.item.kind==="joker"&&e.item.joker.rarity==="mythic"&&n.classList.add("mythic");const i=document.createElement("span");i.className="booster-choice-type",i.textContent=e.item.kind==="consumable"?e.item.consumable.type:e.item.kind==="playing-card"?"playing card":"joker";const r=document.createElement("strong");r.textContent=wS(e.item);const s=document.createElement("span");s.textContent=AS(e.item),e.item.kind==="playing-card"&&(r.textContent=$f(e.item.card),s.textContent=`${e.item.description} · ${e.item.card.enhancement} · ${e.item.card.seal} · ${e.item.card.edition}`);const a=document.createElement("button");a.className="shop-buy-btn",a.disabled=e.taken,a.textContent=e.taken?"Taken":e.item.kind==="consumable"?"Use":"Take",a.addEventListener("click",()=>{const o=B.chooseBooster(e.id);o!=="invalid"&&(Te.play(o==="targeting"?"buttonClick":"chaching"),ot())}),n.append(i,r,s,a),Ih.appendChild(n)}))}function PS(){const t=B.targetMode;if(eS.classList.toggle("hidden",!t),!t)return;tS.textContent=t.consumable.name,nS.textContent=`${t.instruction} (${t.min}–${t.max})`,kh.replaceChildren();const e=new Set(t.selectedIds);B.getTargetCandidateCards().forEach(n=>{const i=document.createElement("button");i.type="button",i.className=`target-card${e.has(n.id)?" selected":""}`;const r=document.createElement("strong");r.textContent=$f(n);const s=document.createElement("span"),a=[n.enhancement,n.seal,n.edition].filter(o=>o!=="none"&&o!=="base");s.textContent=a.length>0?a.join(" · "):"Base card",i.append(r,s),i.addEventListener("click",()=>{B.toggleTargetCard(n.id),ot()}),kh.appendChild(i)}),Wl.disabled=t.selectedIds.length<t.min||t.selectedIds.length>t.max,Wl.textContent=`Use (${t.selectedIds.length}/${t.max})`}function wc(){const t=B.phase==="setup";lS.classList.toggle("hidden",!t),t&&(Nh.replaceChildren(),Object.keys(ou).forEach(e=>{const n=ou[e],i=document.createElement("button");i.type="button",i.className=`setup-deck-card${eo===e?" selected":""}`;const r=document.createElement("strong");r.textContent=n.name;const s=document.createElement("span");s.textContent=n.description,i.append(r,s),i.addEventListener("click",()=>{eo=e,wc(),Te.play("buttonClick")}),Nh.appendChild(i)}),tr.options.length===0&&(Object.keys(Vt).forEach(e=>{const n=document.createElement("option");n.value=e,n.textContent=Vt[e].name,tr.appendChild(n)}),tr.value=B.stakeKey),cS.textContent=Vt[tr.value]?.description??"")}function LS(t){const e=B.blindIndex;B.blindIndex=t;const n=B.targetForPreview();return B.blindIndex=e,n}function DS(){const t=B.phase==="blind-select";if(hS.classList.toggle("hidden",!t),!t)return;const e=document.getElementById("blind-select-ante");e&&(e.textContent=String(B.ante)),Uh.replaceChildren(),[0,1,2].forEach(n=>{const i=n===B.blindIndex,r=n<B.blindIndex,s=document.createElement("article");s.className=`blind-select-card${n===2?" boss":""}${i?" current":""}${r?" done":""}`;const a=document.createElement("span");a.className="blind-select-kind",a.textContent=n===0?"SMALL":n===1?"BIG":"BOSS";const o=document.createElement("strong");o.textContent=n===0?"Small Blind":n===1?"Big Blind":Bs[B.bossBlindKey].name;const l=document.createElement("div");l.className="blind-select-target",l.textContent=`Score ${LS(n).toLocaleString()}`;const c=document.createElement("div");c.className="blind-select-reward",c.textContent=`Reward $${n===0&&Vt[B.stakeKey].order>=Vt.red.order?0:3+n}`;const u=document.createElement("p");if(n<2){const h=bl[B.anteTags[n]];u.textContent=`Skip → ${h.name}: ${h.description}`}else u.textContent=Bs[B.bossBlindKey].description;const d=document.createElement("div");if(d.className="blind-select-actions",i){const h=document.createElement("button");if(h.type="button",h.className="btn btn-play",h.textContent="Play",h.addEventListener("click",()=>{B.playSelectedBlind()&&(Te.play("buttonClick"),ot(),fi(.55))}),d.appendChild(h),n<2){const m=bl[B.anteTags[n]],_=document.createElement("button");_.type="button",_.className="btn btn-ghost",_.textContent=`Skip · ${m.name}`,_.addEventListener("click",()=>{B.skipCurrentBlind()&&(Te.play("chaching"),ot())}),d.appendChild(_)}}else{const h=document.createElement("span");h.className="blind-select-status",h.textContent=r?"Done / Skipped":"Locked",d.appendChild(h)}s.append(a,o,l,c,u,d),Uh.appendChild(s)})}function ot(){Hf();const t=B.blindIndex;SM.textContent=t===2?Bs[B.bossBlindKey].name:Xl[t],Ah.className=`blind-badge ${MS[t]}`;const e=Ah.querySelector("span");e&&ES(e,yS[t]),xM.textContent=B.target.toLocaleString(),bM.textContent=SS[t],Fl.textContent=($r?jr??B.roundScore:B.roundScore).toLocaleString(),CS(B.ante);const n=(B.ante-1)*3+B.blindIndex+1;EM.textContent=String(n),CM.textContent=`$${B.money}`,wM.textContent=`${B.handsLeft}`,AM.textContent=`${B.discardsLeft}`,RM.textContent=String(B.config.seed),PM.textContent=`${B.hand.length}/${B.config.handSize}`,LM.textContent=`${B.deck.length}/${B.ownedDeck.length}`,Ct.setDeckCount(B.deck.length),DM.textContent=`${B.jokers.length}/${B.jokerCapacity()}`,IM.textContent=`${B.consumables.length}/${B.consumableCapacity()}`;const i=B.selectedCards();if(i.length===0)sl.textContent="-",Hs.textContent="0",Ws.textContent="0";else{const a=Ts(i),o=B.handLevels[a.type];sl.textContent=`${a.type} (lvl ${o.level})`,Hs.textContent=`${o.chips}`,Ws.textContent=`${o.mult}`}kM.disabled=Dn||!B.canPlay(),NM.disabled=Dn||!B.canDiscard();const r=Dn||B.phase!=="play"||B.hand.length<2;if(Mc.disabled=r,Sc.disabled=r,Ec(),(B.phase==="game-over"||B.phase==="win")&&!Ei){const a=ws.classList.contains("hidden");ws.classList.remove("hidden"),HM.textContent=B.phase==="win"?"You Win!":"Game Over",WM.textContent=B.phase==="win"?`Ante ${B.ante-1} cleared on seed ${B.config.seed}`:`Could not beat ${Xl[t]} - score ${B.roundScore.toLocaleString()} / ${B.target.toLocaleString()}`,a&&(Te.play(B.phase==="win"?"win":"lose"),Ee.fromTo(ws.querySelector(".overlay-card"),{scale:.7,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"}))}else ws.classList.add("hidden");if(TS(),RS(),PS(),wc(),DS(),!Rn.classList.contains("hidden")){const a=Rn.dataset.jokerId;if(a){const o=B.jokers.find(l=>l.id===a);if(o){const l=B.jokerRuntimeText(o.id),c=[`Sell $${o.sellValue}`];(o.edition??"base")!=="base"&&c.push(o.edition??"base"),o.sticker==="eternal"&&c.push("Eternal · cannot sell"),o.sticker==="perishable"&&c.push(`Perishable · ${o.perishableRounds??0} rounds`),o.rental&&c.push("Rental · -$3/round"),l&&c.push(l),Uf.textContent=c.join(" · ")}}}const s=B.playRestrictionMessage();s&&B.selected.size>0&&(sl.textContent=s)}function IS(t){const e=Math.round(t*100)/100;return Number.isInteger(e)?e.toLocaleString():e.toLocaleString(void 0,{maximumFractionDigits:2})}function Na(t,e,n,i,r){const s={v:e};let a=e;const o=Math.max(1,Math.floor((n-e)/18));Ee.to(s,{v:n,duration:i,ease:"power2.out",onUpdate:()=>{const l=s.v;t.textContent=IS(l),r&&l-a>=o&&(a=l,Te.play(r,{volume:.12,detune:(Math.random()-.5)*250}))}})}function kS(t){Ya.classList.remove("hidden"),Lh.textContent=`${t.hand.type}`,Hs.textContent=Math.round(t.baseChips).toLocaleString(),Ws.textContent=Math.round(t.baseMult).toLocaleString(),Vl.textContent="0",Ee.fromTo(Ya,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(2)"}),Ee.fromTo(Lh,{scale:.7},{scale:1,duration:.3,ease:"back.out(2)"}),Te.play("scorePop")}function NS(t){Na(Vl,0,t.total,.8),Ee.fromTo(Vl,{scale:.6},{scale:1.2,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}),Te.play("chaching");const e=Math.max(.08,Math.min(.6,t.total/Math.max(1,B.target)*.5));Ct.shake(e,.45),Ee.delayedCall(1.5,()=>{Ee.to(Ya,{opacity:0,duration:.4,onComplete:()=>Ya.classList.add("hidden")})})}function US(t,e){const n=jf(e);if(n.length===0)return;const i=Ct.createVector3();t.getWorldPosition(i),i.y+=1.1;const r=i.project(Ct.camera),s=Ol.getBoundingClientRect(),a=(r.x+1)/2*s.width,o=(1-r.y)/2*s.height;n.forEach((l,c)=>{const u=zf(Ol);u.className=`card-score-float ${l.cls}`,u.textContent=l.text,u.style.left=`${a}px`,u.style.top=`${o}px`,u.style.opacity="0";const d=c*.08,h=28+c*6;Ee.fromTo(u,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:d,ease:"back.out(2.2)"}),Ee.to(u,{y:-h,scale:1,duration:.9,delay:d+.22,ease:"sine.out"}),Ee.to(u,{opacity:0,duration:.45,delay:d+.7,ease:"power1.in",onComplete:()=>Vf(u)})})}function OS(t,e){if(e.length===0)return;const n=t.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height*.25;e.forEach((s,a)=>{const o=zf(document.body);o.className=`card-score-float ${s.cls}`,o.textContent=s.text,o.style.position="fixed",o.style.left=`${i}px`,o.style.top=`${r}px`,o.style.opacity="0",o.style.zIndex="60";const l=a*.08,c=32+a*6;Ee.fromTo(o,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:l,ease:"back.out(2.2)"}),Ee.to(o,{y:-c,scale:1,duration:.9,delay:l+.22,ease:"sine.out"}),Ee.to(o,{opacity:0,duration:.45,delay:l+.7,ease:"power1.in",onComplete:()=>Vf(o)})})}function jf(t){const e=[];if(t.chipsDelta&&e.push({text:`+${Math.round(t.chipsDelta)}`,cls:"is-chips"}),t.multDelta&&e.push({text:`+${Math.round(t.multDelta)} Mult`,cls:"is-mult-add"}),t.multMul&&t.multMul!==1){const n=Number.isInteger(t.multMul)?t.multMul.toString():t.multMul.toFixed(1);e.push({text:`×${n} Mult`,cls:"is-mult-mul"})}return t.moneyDelta&&e.push({text:`+$${Math.round(t.moneyDelta)}`,cls:"is-money"}),e}function ui(t,e){if(t==="select_card")return Dn||!e?.cardId?!1:B.toggleSelect(e.cardId);if(t==="play_hand"){if(Dn||!B.canPlay())return;Te.play("buttonClick"),FS();return}if(t==="discard"){if(Dn||!B.canDiscard())return;Te.play("buttonClick"),BS();return}if(t==="continue_shop"){zS();return}if(t==="restart_run"){Kf();return}if(t==="toggle_mute"){Te.toggleMute(),Te.isMuted()||Te.play("buttonClick");return}}async function FS(){if(!B.canPlay())return;const t=new Map(B.hand.map(p=>[p.id,p])),e=_n.filter(p=>B.selected.has(p)).map(p=>t.get(p)).filter(p=>!!p);if(e.length===0)return;Dn=!0,$r=!0,jr=B.roundScore;const n=$y(e.length);Te.play("whoosh");const i=Ct.createVector3();e.forEach((p,g)=>{const f=Ht.get(p.id);f&&(f.userData.keepAlive=!0,f.getWorldPosition(i),Ct.handGroup.remove(f),Ct.playGroup.add(f),Ct.playGroup.worldToLocal(i),f.position.copy(i),f.setSelected(!1),f.moveTo(n[g],.55,g*.07))}),await new Promise(p=>setTimeout(p,650)),Ei=!0,nr=!0;const r=B.playSelected(_n);if(!r){Ei=!1,nr=!1,$r=!1,jr=null,Dn=!1;return}Bi[r.hand.type]=B.handPlayCounts[r.hand.type]??(Bi[r.hand.type]??0)+1,Gi();const s=B.phase==="game-over"||B.phase==="win",a=B.phase==="shop";s?ws.classList.add("hidden"):a?(Fn.classList.add("hidden"),Ei=!1):(Ei=!1,nr=!1),kS(r);const o=new Set(r.hand.scoringCards.map(p=>p.id));for(const p of e){if(o.has(p.id))continue;const g=Ht.get(p.id);if(!g)continue;const f=g.faceMesh.material;f.transparent=!0,Ee.to(f,{opacity:.5,duration:.2})}const l=r.steps.filter(p=>p.stage!=="base"&&p.stage!=="destruction"&&p.stage!=="end_round"),c=.19,u=.15;l.forEach((p,g)=>{const f=u+g*c;Ee.delayedCall(f,()=>{if(p.cardId){const y=Ht.get(p.cardId);y&&(y.pulse(p.retrigger?1.28:1.18,.34),y.flash(p.retrigger?9300223:16765514,.42),US(y,p),Te.play(p.retrigger?"multTick":"chipTick",{volume:.22,pitch:p.retrigger?1.18:1,pan:Bf(y.position.x)}))}if(p.jokerId){const y=ka.querySelector(`[data-joker-id="${p.jokerId}"]`);y&&(Ee.fromTo(y,{scale:1,y:0},{scale:1.18,y:-8,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"}),OS(y,jf(p))),Te.play("multTick",{volume:.24,pitch:1.06})}p.chipsAfter!==void 0&&p.chipsBefore!==void 0&&p.chipsAfter!==p.chipsBefore&&(Na(Hs,p.chipsBefore,p.chipsAfter,.18,"chipTick"),Ee.fromTo(Hs,{scale:1},{scale:1.14,duration:.12,yoyo:!0,repeat:1})),p.multAfter!==void 0&&p.multBefore!==void 0&&p.multAfter!==p.multBefore&&(Na(Ws,p.multBefore,p.multAfter,.18,"multTick"),Ee.fromTo(Ws,{scale:1},{scale:1.18,duration:.12,yoyo:!0,repeat:1}))})});const d=r.steps.filter(p=>p.stage==="destruction"),h=u+l.length*c;d.forEach((p,g)=>{Ee.delayedCall(h+g*.22,()=>{if(!p.cardId)return;const f=Ht.get(p.cardId);if(!f)return;f.flash(16727887,.65),f.pulse(1.3,.4);const y=Ct.createVector3();f.getWorldPosition(y),Ct.emitBurst(y,{count:26,color:Ct.createColor("#8de8ff"),speed:3.2,spread:1.2,life:1.1,size:18}),Te.play("scorePop",{volume:.38,pitch:1.25})})});const m=h+d.length*.22+.35;Ee.delayedCall(m,()=>NS(r));const _=B.roundScore-r.total;Ee.delayedCall(m+.05,()=>{Na(Fl,_,B.roundScore,1,"chipTick"),Ee.fromTo(Fl,{scale:1},{scale:1.25,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})}),Ee.delayedCall(m+1.2,()=>{$r=!1,jr=null;for(const p of e){const g=Ht.get(p.id);g&&(Ee.to(g.position,{y:-6,duration:.5,ease:"power2.in"}),Ee.to(g.rotation,{z:(Math.random()-.5)*1.5,duration:.5}),Ee.delayedCall(.55,()=>{lo(p.id,g)}))}Dn=!1,fi(.5),ot(),s?(Ei=!1,ot()):a&&(nr=!1,ot())})}async function BS(){if(!B.canDiscard())return;Dn=!0;const t=new Map(B.hand.map(i=>[i.id,i])),e=_n.filter(i=>B.selected.has(i)).map(i=>t.get(i)).filter(i=>!!i),n=e.reduce((i,r)=>i+(Ht.get(r.id)?.position.x??0),0)/Math.max(1,e.length);Te.play("sweep",{pan:Bf(n)});for(const i of e){const r=Ht.get(i.id);r&&(r.userData.keepAlive=!0,Ee.to(r.position,{y:-5,x:r.position.x+(Math.random()-.5)*1.5,duration:.45,ease:"power2.in"}),Ee.to(r.rotation,{z:(Math.random()-.5)*1.2,duration:.45}),Ee.delayedCall(.5,()=>{lo(i.id,r)}))}B.discardSelected(e.map(i=>i.id)),Ee.delayedCall(.55,()=>{Dn=!1,fi(.45)})}function zS(){return B.phase!=="shop"?!1:(Te.play("buttonClick"),Hl.disabled=!0,xc.disabled=!0,Ee.to(Ka,{y:-18,scale:.97,duration:.2,ease:"power2.in"}),Ee.to(Fn,{opacity:0,duration:.28,ease:"power2.inOut",onComplete:()=>{Fn.classList.add("hidden"),Fn.style.opacity="",Ka.style.transform="",B.continueFromShop(),fi(.65),ot(),Hl.disabled=!1}}),!0)}var VS=["Flush Five","Flush House","Five of a Kind","Straight Flush","Four of a Kind","Full House","Flush","Straight","Three of a Kind","Two Pair","Pair","High Card"];function qf(){Ph.replaceChildren();for(const t of VS){const e=B.handLevels[t],n=document.createElement("div");n.className="run-info-row";const i=document.createElement("span");i.className="run-info-level",i.textContent=`lvl.${e.level}`;const r=document.createElement("strong");r.className="run-info-name",r.textContent=t;const s=document.createElement("span");s.className="run-info-score";const a=document.createElement("span");a.className="run-info-chips",a.textContent=e.chips.toLocaleString();const o=document.createElement("span");o.className="run-info-x",o.textContent="×";const l=document.createElement("span");l.className="run-info-mult",l.textContent=e.mult.toLocaleString(),s.append(a,o,l);const c=document.createElement("span");c.className="run-info-count",c.textContent=`# ${Bi[t]??0}`,n.append(i,r,s,c),Ph.appendChild(n)}}function Ac(){kf.textContent=`Sound Effects: ${Te.isMuted()?"Off":"On"}`,Nf.textContent=`Music: ${Te.isMusicMuted()?"Off":"On"}`}function Yf(t){ss=t,t==="run-info"?(qf(),Bl.classList.remove("hidden"),zl.classList.add("hidden")):(Ac(),zl.classList.remove("hidden"),Bl.classList.add("hidden")),Te.play("buttonClick")}function co(){ss&&(Bl.classList.add("hidden"),zl.classList.add("hidden"),ss=null,Te.play("buttonClick"))}function Kf(){Te.play("buttonClick"),$r=!1,jr=null,nr=!1,Ei=!1,Fn.classList.add("hidden"),Fn.style.opacity="";for(const[,t]of[...Ht])lo(t.card.id,t);Ht.clear(),_n=[],zi=null,Ff(),co(),B.reset(),eo=B.deckKey,tr.value=B.stakeKey,fi(.6),ot()}for(const[t,e]of Object.entries(pM)){const n=fr(t);n&&n.addEventListener("click",()=>{ui(e)})}Mc.addEventListener("click",()=>Qa("straight"));Sc.addEventListener("click",()=>Qa("flush"));UM.addEventListener("click",()=>Yf("run-info"));OM.addEventListener("click",()=>Yf("options"));FM.addEventListener("click",co);BM.addEventListener("click",co);GM.addEventListener("click",Tc);VM.addEventListener("click",Tc);kf.addEventListener("click",()=>{Te.toggleMute(),Te.isMuted()||Te.play("buttonClick"),Ac()});Nf.addEventListener("click",()=>{Te.toggleMusicMute(),Ac()});zM.addEventListener("click",()=>{Kf()});oS.addEventListener("click",t=>{t.stopPropagation(),Cc()});document.addEventListener("click",t=>{Rn.classList.contains("hidden")||t.target instanceof Node&&Rn.contains(t.target)||Cc()});tr.addEventListener("change",wc);uS.addEventListener("click",()=>{B.configureRun(eo,tr.value),Ff(),Te.play("buttonClick"),ot()});QM.addEventListener("click",()=>{B.skipBooster()&&(Te.play("buttonClick"),ot())});iS.addEventListener("click",()=>{B.cancelTargetMode()&&(Te.play("buttonClick"),ot())});Wl.addEventListener("click",()=>{B.confirmTargetMode()&&(Te.play("chaching"),ot())});xc.addEventListener("click",()=>{B.rerollShop()&&(Te.play("sweep"),Ee.fromTo(Gl,{opacity:.55,y:8},{opacity:1,y:0,duration:.22,ease:"power2.out"}),ot())});Hl.addEventListener("click",()=>{ui("continue_shop")});var Ca=fr("btn-mute"),Zf=null;if(Ca){const t=e=>{Ca.textContent=e?"🔇":"🔊",Ca.setAttribute("aria-label",e?"Unmute SFX":"Mute SFX"),Ca.title=e?"Unmute SFX":"Mute SFX"};t(Te.isMuted()),Zf=Te.onMutedChange(t)}var Ss=fr("btn-music-mute"),Jf=null;if(Ss){const t=e=>{Ss.textContent=e?"🔇":"🎵",Ss.setAttribute("aria-label",e?"Unmute Music":"Mute Music"),Ss.title=e?"Unmute Music":"Mute Music"};t(Te.isMusicMuted()),Ss.addEventListener("click",()=>Te.toggleMusicMute()),Jf=Te.onMusicMutedChange(t)}var Qf=t=>{if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),Rn.classList.contains("hidden")?B.targetMode?(B.cancelTargetMode(),ot()):B.phase==="booster"?(B.skipBooster(),ot()):ss?co():Tc():Cc();return}if(ss)return;if(!t.repeat&&(t.code==="ControlLeft"||t.code==="ControlRight")){t.preventDefault(),ui("play_hand");return}if(!t.repeat&&(t.code==="ShiftLeft"||t.code==="ShiftRight")){t.preventDefault(),ui("discard");return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.code==="KeyS"){t.preventDefault(),Qa("straight");return}if(t.code==="KeyF"){t.preventDefault(),Qa("flush");return}}const e=gM(t);e&&(t.preventDefault(),ui(e))};window.addEventListener("keydown",Qf);window.addEventListener("resize",bc);window.addEventListener("pagehide",Gi);var GS=dM({renderer:Ct.renderer,camera:Ct.camera,handGroup:Ct.handGroup,getHandObjects:vS,onToggleSelect:t=>!!ui("select_card",{cardId:t}),onReorder:t=>{_n=t,zi=null,Ec(),Gi()}}),HS=B.subscribe(()=>{Gi(),ot(),ss==="run-info"&&qf()});window.__OPEN_POKER_TEST__={snapshot:()=>B.toSnapshot(),loadSnapshot:t=>{$r=!1,jr=null,nr=!1,Ei=!1,B.reset(t),_n=t.hand.map(e=>e.id),fi(0),ot()},selectFirst:(t=1)=>{const e=[...B.selected];for(const n of e)B.toggleSelect(n);for(const n of B.hand.slice(0,Math.max(0,Math.min(5,t))))B.selected.has(n.id)||B.toggleSelect(n.id)},play:()=>{ui("play_hand")},discard:()=>{ui("discard")},buyOffer:(t=0)=>{const e=B.shop?.offers[t];return e?B.buyOffer(e.id):!1},rerollShop:()=>B.rerollShop(),continueShop:()=>{const t=B.continueFromShop();return t&&(fi(0),ot()),t},sellJoker:(t=0)=>{const e=B.jokers[t];return e?B.sellJoker(e.id):!1},sellConsumable:(t=0)=>{const e=B.consumables[t];return e?B.sellConsumable(e.id):!1},useConsumable:(t=0)=>{const e=B.consumables[t];return e?B.useConsumable(e.id):!1},restart:()=>{ui("restart_run")},dispose:()=>{GS(),HS(),Zf?.(),Jf?.(),window.removeEventListener("keydown",Qf),window.removeEventListener("resize",bc),window.removeEventListener("pagehide",Gi),Ee.globalTimeline.clear();for(const[,t]of Ht)Fh(t);for(Ht.clear();Za.length>0;){const t=Za.pop();t&&Fh(t)}for(;Ja.length>0;)Ja.pop()?.remove();Ct.dispose(),Te.dispose()}};fi(.6);ot();Gi();
