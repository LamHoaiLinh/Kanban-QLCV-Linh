(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function ei(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function lh(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ts={duration:.5,overwrite:!1,delay:0},yl,Ut,lt,An=1e8,st=1/An,ko=Math.PI*2,yf=ko/4,Tf=0,ch=Math.sqrt,Ef=Math.cos,bf=Math.sin,Dt=function(e){return typeof e=="string"},_t=function(e){return typeof e=="function"},ai=function(e){return typeof e=="number"},Tl=function(e){return typeof e>"u"},qn=function(e){return typeof e=="object"},jt=function(e){return e!==!1},El=function(){return typeof window<"u"},Hs=function(e){return _t(e)||Dt(e)},uh=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},zt=Array.isArray,Af=/random\([^)]+\)/g,wf=/,\s*/g,pc=/(?:-?\.?\d|\.)+/gi,hh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ya=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,dh=/[+-]=-?[.\d]+/,Cf=/[^,'"\[\]\s]+/gi,Rf=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,kn,zo,bl,gn={},xa={},fh,ph=function(e){return(xa=Vr(e,gn))&&en},Al=function(e,n){return console.warn("Invalid property",e,"set to",n,"Missing plugin? gsap.registerPlugin()")},Es=function(e,n){return!n&&console.warn(e)},mh=function(e,n){return e&&(gn[e]=n)&&xa&&(xa[e]=n)||gn},bs=function(){return 0},Pf={suppressEvents:!0,isStart:!0,kill:!1},ma={suppressEvents:!0,kill:!1},Lf={suppressEvents:!0},wl={},bi=[],Vo={},_h,ln={},$a={},mc=30,_a=[],Cl="",Rl=function(e){var n=e[0],i,r;if(qn(n)||_t(n)||(e=[e]),!(i=(n._gsap||{}).harness)){for(r=_a.length;r--&&!_a[r].targetTest(n););i=_a[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Bh(e[r],i)))||e.splice(r,1);return e},er=function(e){return e._gsap||Rl(wn(e))[0]._gsap},gh=function(e,n,i){return(i=e[n])&&_t(i)?e[n]():Tl(i)&&e.getAttribute&&e.getAttribute(n)||i},Kt=function(e,n){return(e=e.split(",")).forEach(n)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},ut=function(e){return Math.round(e*1e7)/1e7||0},Nr=function(e,n){var i=n.charAt(0),r=parseFloat(n.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Df=function(e,n){for(var i=n.length,r=0;e.indexOf(n[r])<0&&++r<i;);return r<i},ya=function(){var e=bi.length,n=bi.slice(0),i,r;for(Vo={},bi.length=0,i=0;i<e;i++)r=n[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Pl=function(e){return!!(e._initted||e._startAt||e.add)},vh=function(e,n,i,r){bi.length&&!Ut&&ya(),e.render(n,i,r||!!(Ut&&n<0&&Pl(e))),bi.length&&!Ut&&ya()},Mh=function(e){var n=parseFloat(e);return(n||n===0)&&(e+"").match(Cf).length<2?n:Dt(e)?e.trim():e},Sh=function(e){return e},vn=function(e,n){for(var i in n)i in e||(e[i]=n[i]);return e},If=function(e){return function(n,i){for(var r in i)r in n||r==="duration"&&e||r==="ease"||(n[r]=i[r])}},Vr=function(e,n){for(var i in n)e[i]=n[i];return e},_c=function t(e,n){for(var i in n)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=qn(n[i])?t(e[i]||(e[i]={}),n[i]):n[i]);return e},Ta=function(e,n){var i={},r;for(r in e)r in n||(i[r]=e[r]);return i},Ms=function(e){var n=e.parent||ht,i=e.keyframes?If(zt(e.keyframes)):vn;if(jt(e.inherit))for(;n;)i(e,n.vars.defaults),n=n.parent||n._dp;return e},Uf=function(e,n){for(var i=e.length,r=i===n.length;r&&i--&&e[i]===n[i];);return i<0},xh=function(e,n,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=n[s];a&&a[s]>o;)a=a._prev;return a?(n._next=a._next,a._next=n):(n._next=e[i],e[i]=n),n._next?n._next._prev=n:e[r]=n,n._prev=a,n.parent=n._dp=e,n},Fa=function(e,n,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=n._prev,a=n._next;s?s._next=a:e[i]===n&&(e[i]=a),a?a._prev=s:e[r]===n&&(e[r]=s),n._next=n._prev=n.parent=null},Pi=function(e,n){e.parent&&(!n||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},tr=function(e,n){if(e&&(!n||n._end>e._dur||n._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Nf=function(e){for(var n=e.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return e},Go=function(e,n,i,r){return e._startAt&&(Ut?e._startAt.revert(ma):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(n,!0,r))},Of=function t(e){return!e||e._ts&&t(e.parent)},gc=function(e){return e._repeat?Gr(e._tTime,e=e.duration()+e._rDelay)*e:0},Gr=function(e,n){var i=Math.floor(e=ut(e/n));return e&&i===e?i-1:i},Ea=function(e,n){return(e-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Ba=function(e){return e._end=ut(e._start+(e._tDur/Math.abs(e._ts||e._rts||st)||0))},ka=function(e,n){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ut(i._time-(e._ts>0?n/e._ts:((e._dirty?e.totalDuration():e._tDur)-n)/-e._ts)),Ba(e),i._dirty||tr(i,e)),e},yh=function(e,n){var i;if((n._time||!n._dur&&n._initted||n._start<e._time&&(n._dur||!n.add))&&(i=Ea(e.rawTime(),n),(!n._dur||Ns(0,n.totalDuration(),i)-n._tTime>st)&&n.render(i,!0)),tr(e,n)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-st}},Gn=function(e,n,i,r){return n.parent&&Pi(n),n._start=ut((ai(i)?i:i||e!==ht?En(e,i,n):e._time)+n._delay),n._end=ut(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),xh(e,n,"_first","_last",e._sort?"_start":0),Ho(n)||(e._recent=n),r||yh(e,n),e._ts<0&&ka(e,e._tTime),e},Th=function(e,n){return(gn.ScrollTrigger||Al("scrollTrigger",n))&&gn.ScrollTrigger.create(n,e)},Eh=function(e,n,i,r,s){if(Dl(e,n,s),!e._initted)return 1;if(!i&&e._pt&&!Ut&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_h!==un.frame)return bi.push(e),e._lazy=[s,r],1},Ff=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},Ho=function(e){var n=e.data;return n==="isFromStart"||n==="isStart"},Bf=function(e,n,i,r){var s=e.ratio,a=n<0||!n&&(!e._start&&Ff(e)&&!(!e._initted&&Ho(e))||(e._ts<0||e._dp._ts<0)&&!Ho(e))?0:1,o=e._rDelay,l=0,c,u,d;if(o&&e._repeat&&(l=Ns(0,e._tDur,n),u=Gr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Gr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Ut||r||e._zTime===st||!n&&e._zTime){if(!e._initted&&Eh(e,n,r,i,l))return;for(d=e._zTime,e._zTime=n||(i?st:0),i||(i=n&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;n<0&&Go(e,n,i,!0),e._onUpdate&&!i&&hn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&hn(e,"onRepeat"),(n>=e._tDur||n<0)&&e.ratio===a&&(a&&Pi(e,1),!i&&!Ut&&(hn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=n)},kf=function(e,n,i){var r;if(i>n)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>n)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<n)return r;r=r._prev}},Hr=function(e,n,i,r){var s=e._repeat,a=ut(n)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:ut(a*(s+1)+e._rDelay*s):a,o>0&&!r&&ka(e,e._tTime=e._tDur*o),e.parent&&Ba(e),i||tr(e.parent,e),e},vc=function(e){return e instanceof $t?tr(e):Hr(e,e._dur)},zf={_start:0,endTime:bs,totalDuration:bs},En=function t(e,n,i){var r=e.labels,s=e._recent||zf,a=e.duration()>=An?s.endTime(!1):e._dur,o,l,c;return Dt(n)&&(isNaN(n)||n in r)?(l=n.charAt(0),c=n.substr(-1)==="%",o=n.indexOf("="),l==="<"||l===">"?(o>=0&&(n=n.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(n.substr(1))||0)*(c?(o<0?s:i).totalDuration()/100:1)):o<0?(n in r||(r[n]=a),r[n]):(l=parseFloat(n.charAt(o-1)+n.substr(o+1)),c&&i&&(l=l/100*(zt(i)?i[0]:i).totalDuration()),o>1?t(e,n.substr(0,o-1),i)+l:a+l)):n==null?a:+n},Ss=function(e,n,i){var r=ai(n[1]),s=(r?2:1)+(e<2?0:1),a=n[s],o,l;if(r&&(a.duration=n[1]),a.parent=i,e){for(o=a,l=i;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=jt(l.vars.inherit)&&l.parent;a.immediateRender=jt(o.immediateRender),e<2?a.runBackwards=1:a.startAt=n[s-1]}return new Et(n[0],a,n[s+1])},Oi=function(e,n){return e||e===0?n(e):n},Ns=function(e,n,i){return i<e?e:i>n?n:i},kt=function(e,n){return!Dt(e)||!(n=Rf.exec(e))?"":n[1]},Vf=function(e,n,i){return Oi(i,function(r){return Ns(e,n,r)})},Wo=[].slice,bh=function(e,n){return e&&qn(e)&&"length"in e&&(!n&&!e.length||e.length-1 in e&&qn(e[0]))&&!e.nodeType&&e!==kn},Gf=function(e,n,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Dt(r)&&!n||bh(r,1)?(s=i).push.apply(s,wn(r)):i.push(r)})||i},wn=function(e,n,i){return lt&&!n&&lt.selector?lt.selector(e):Dt(e)&&!i&&(zo||!Wr())?Wo.call((n||bl).querySelectorAll(e),0):zt(e)?Gf(e,i):bh(e)?Wo.call(e,0):e?[e]:[]},Xo=function(e){return e=wn(e)[0]||Es("Invalid scope")||{},function(n){var i=e.current||e.nativeElement||e;return wn(n,i.querySelectorAll?i:i===e?Es("Invalid scope")||bl.createElement("div"):e)}},Ah=function(e){return e.sort(function(){return .5-Math.random()})},wh=function(e){if(_t(e))return e;var n=qn(e)?e:{each:e},i=nr(n.ease),r=n.from||0,s=parseFloat(n.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=n.axis,u=r,d=r;return Dt(r)?u=d={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],d=r[1]),function(h,f,g){var _=(g||n).length,m=a[_],p,M,T,E,b,R,C,v,x;if(!m){if(x=n.grid==="auto"?0:(n.grid||[1,An])[1],!x){for(C=-An;C<(C=g[x++].getBoundingClientRect().left)&&x<_;);x<_&&x--}for(m=a[_]=[],p=l?Math.min(x,_)*u-.5:r%x,M=x===An?0:l?_*d/x-.5:r/x|0,C=0,v=An,R=0;R<_;R++)T=R%x-p,E=M-(R/x|0),m[R]=b=c?Math.abs(c==="y"?E:T):ch(T*T+E*E),b>C&&(C=b),b<v&&(v=b);r==="random"&&Ah(m),m.max=C-v,m.min=v,m.v=_=(parseFloat(n.amount)||parseFloat(n.each)*(x>_?_-1:c?c==="y"?_/x:x:Math.max(x,_/x))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=kt(n.amount||n.each)||0,i=i&&_<0?tp(i):i}return _=(m[h]-m.min)/m.max||0,ut(m.b+(i?i(_):_)*m.v)+m.u}},qo=function(e){var n=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ut(Math.round(parseFloat(i)/e)*e*n);return(r-r%1)/n+(ai(i)?0:kt(i))}},Ch=function(e,n){var i=zt(e),r,s;return!i&&qn(e)&&(r=i=e.radius||An,e.values?(e=wn(e.values),(s=!ai(e[0]))&&(r*=r)):e=qo(e.increment)),Oi(n,i?_t(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=An,u=0,d=e.length,h,f;d--;)s?(h=e[d].x-o,f=e[d].y-l,h=h*h+f*f):h=Math.abs(e[d]-o),h<c&&(c=h,u=d);return u=!r||c<=r?e[u]:a,s||u===a||ai(a)?u:u+kt(a)}:qo(e))},Rh=function(e,n,i,r){return Oi(zt(e)?!n:i===!0?!!(i=0):!r,function(){return zt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(n-e+i*.99))/i)*i*r)/r})},Hf=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return function(r){return n.reduce(function(s,a){return a(s)},r)}},Wf=function(e,n){return function(i){return e(parseFloat(i))+(n||kt(i))}},Xf=function(e,n,i){return Lh(e,n,0,1,i)},Ph=function(e,n,i){return Oi(i,function(r){return e[~~n(r)]})},qf=function t(e,n,i){var r=n-e;return zt(e)?Ph(e,t(0,e.length),n):Oi(i,function(s){return(r+(s-e)%r)%r+e})},Yf=function t(e,n,i){var r=n-e,s=r*2;return zt(e)?Ph(e,t(0,e.length-1),n):Oi(i,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},As=function(e){return e.replace(Af,function(n){var i=n.indexOf("[")+1,r=n.substring(i||7,i?n.indexOf("]"):n.length-1).split(wf);return Rh(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},Lh=function(e,n,i,r,s){var a=n-e,o=r-i;return Oi(s,function(l){return i+((l-e)/a*o||0)})},$f=function t(e,n,i,r){var s=isNaN(e+n)?0:function(f){return(1-f)*e+f*n};if(!s){var a=Dt(e),o={},l,c,u,d,h;if(i===!0&&(r=1)&&(i=null),a)e={p:e},n={p:n};else if(zt(e)&&!zt(n)){for(u=[],d=e.length,h=d-2,c=1;c<d;c++)u.push(t(e[c-1],e[c]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},i=n}else r||(e=Vr(zt(e)?[]:{},e));if(!u){for(l in n)Ll.call(o,e,l,"get",n[l]);s=function(g){return Nl(g,o)||(a?e.p:e)}}}return Oi(i,s)},Mc=function(e,n,i){var r=e.labels,s=An,a,o,l;for(a in r)o=r[a]-n,o<0==!!i&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},hn=function(e,n,i){var r=e.vars,s=r[n],a=lt,o=e._ctx,l,c,u;if(s)return l=r[n+"Params"],c=r.callbackScope||e,i&&bi.length&&ya(),o&&(lt=o),u=l?s.apply(c,l):s.call(c),lt=a,u},ps=function(e){return Pi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ut),e.progress()<1&&hn(e,"onInterrupt"),e},Ir,Dh=[],Ih=function(e){if(e)if(e=!e.name&&e.default||e,El()||e.headless){var n=e.name,i=_t(e),r=n&&!i&&e.init?function(){this._props=[]}:e,s={init:bs,render:Nl,add:Ll,kill:hp,modifier:up,rawVars:0},a={targetTest:0,get:0,getSetter:Ul,aliases:{},register:0};if(Wr(),e!==r){if(ln[n])return;vn(r,vn(Ta(e,s),a)),Vr(r.prototype,Vr(s,Ta(e,a))),ln[r.prop=n]=r,e.targetTest&&(_a.push(r),wl[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}mh(n,r),e.register&&e.register(en,r,Zt)}else Dh.push(e)},rt=255,ms={aqua:[0,rt,rt],lime:[0,rt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rt],navy:[0,0,128],white:[rt,rt,rt],olive:[128,128,0],yellow:[rt,rt,0],orange:[rt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rt,0,0],pink:[rt,192,203],cyan:[0,rt,rt],transparent:[rt,rt,rt,0]},ja=function(e,n,i){return e+=e<0?1:e>1?-1:0,(e*6<1?n+(i-n)*e*6:e<.5?i:e*3<2?n+(i-n)*(2/3-e)*6:n)*rt+.5|0},Uh=function(e,n,i){var r=e?ai(e)?[e>>16,e>>8&rt,e&rt]:0:ms.black,s,a,o,l,c,u,d,h,f,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ms[e])r=ms[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&rt,r&rt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&rt,e&rt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(pc),!n)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=ja(l+1/3,s,a),r[1]=ja(l,s,a),r[2]=ja(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(hh),i&&r.length<4&&(r[3]=1),r}else r=e.match(pc)||ms.transparent;r=r.map(Number)}return n&&!g&&(s=r[0]/rt,a=r[1]/rt,o=r[2]/rt,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),i&&r.length<4&&(r[3]=1),r},Nh=function(e){var n=[],i=[],r=-1;return e.split(Ai).forEach(function(s){var a=s.match(Dr)||[];n.push.apply(n,a),i.push(r+=a.length+1)}),n.c=i,n},Sc=function(e,n,i){var r="",s=(e+r).match(Ai),a=n?"hsla(":"rgba(",o=0,l,c,u,d;if(!s)return e;if(s=s.map(function(h){return(h=Uh(h,n,1))&&a+(n?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(u=Nh(e),l=i.c,l.join(r)!==u.c.join(r)))for(c=e.replace(Ai,"1").split(Dr),d=c.length-1;o<d;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:i).shift());if(!c)for(c=e.split(Ai),d=c.length-1;o<d;o++)r+=c[o]+s[o];return r+c[d]},Ai=(function(){var t="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ms)t+="|"+e+"\\b";return new RegExp(t+")","gi")})(),jf=/hsl[a]?\(/,Oh=function(e){var n=e.join(" "),i;if(Ai.lastIndex=0,Ai.test(n))return i=jf.test(n),e[1]=Sc(e[1],i),e[0]=Sc(e[0],i,Nh(e[1])),!0},ws,un=(function(){var t=Date.now,e=500,n=33,i=t(),r=i,s=1e3/240,a=s,o=[],l,c,u,d,h,f,g=function _(m){var p=t()-r,M=m===!0,T,E,b,R;if((p>e||p<0)&&(i+=p-n),r+=p,b=r-i,T=b-a,(T>0||M)&&(R=++d.frame,h=b-d.time*1e3,d.time=b=b/1e3,a+=T+(T>=s?4:s-T),E=1),M||(l=c(_)),E)for(f=0;f<o.length;f++)o[f](b,h,R,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){fh&&(!zo&&El()&&(kn=zo=window,bl=kn.document||{},gn.gsap=en,(kn.gsapVersions||(kn.gsapVersions=[])).push(en.version),ph(xa||kn.GreenSockGlobals||!kn.gsap&&kn||{}),Dh.forEach(Ih)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},ws=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ws=0,c=bs},lagSmoothing:function(m,p){e=m||1/0,n=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,M){var T=p?function(E,b,R,C){m(E,b,R,C),d.remove(T)}:m;return d.remove(m),o[M?"unshift":"push"](T),Wr(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})(),Wr=function(){return!ws&&un.wake()},Ke={},Kf=/^[\d.\-M][\d.\-,\s]/,Zf=/["']/g,Jf=function(e){for(var n={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,a=i.length,o,l,c;s<a;s++)l=i[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),n[r]=isNaN(c)?c.replace(Zf,"").trim():+c,r=l.substr(o+1).trim();return n},Qf=function(e){var n=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",n);return e.substring(n,~r&&r<i?e.indexOf(")",i+1):i)},ep=function(e){var n=(e+"").split("("),i=Ke[n[0]];return i&&n.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[Jf(n[1])]:Qf(e).split(",").map(Mh)):Ke._CE&&Kf.test(e)?Ke._CE("",e):i},tp=function(e){return function(n){return 1-e(1-n)}},nr=function(e,n){return e&&(_t(e)?e:Ke[e]||ep(e))||n},or=function(e,n,i,r){i===void 0&&(i=function(l){return 1-n(1-l)}),r===void 0&&(r=function(l){return l<.5?n(l*2)/2:1-n((1-l)*2)/2});var s={easeIn:n,easeOut:i,easeInOut:r},a;return Kt(e,function(o){Ke[o]=gn[o]=s,Ke[a=o.toLowerCase()]=i;for(var l in s)Ke[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ke[o+"."+l]=s[l]}),s},Fh=function(e){return function(n){return n<.5?(1-e(1-n*2))/2:.5+e((n-.5)*2)/2}},Ka=function t(e,n,i){var r=n>=1?n:1,s=(i||(e?.3:.45))/(n<1?n:1),a=s/ko*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*bf((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:Fh(o);return s=ko/s,l.config=function(c,u){return t(e,c,u)},l},Za=function t(e,n){n===void 0&&(n=1.70158);var i=function(a){return a?--a*a*((n+1)*a+n)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Fh(i);return r.config=function(s){return t(e,s)},r};Kt("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var n=e<5?e+1:e;or(t+",Power"+(n-1),e?function(i){return Math.pow(i,n)}:function(i){return i},function(i){return 1-Math.pow(1-i,n)},function(i){return i<.5?Math.pow(i*2,n)/2:1-Math.pow((1-i)*2,n)/2})});Ke.Linear.easeNone=Ke.none=Ke.Linear.easeIn;or("Elastic",Ka("in"),Ka("out"),Ka());(function(t,e){var n=1/e,i=2*n,r=2.5*n,s=function(o){return o<n?t*o*o:o<i?t*Math.pow(o-1.5/e,2)+.75:o<r?t*(o-=2.25/e)*o+.9375:t*Math.pow(o-2.625/e,2)+.984375};or("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);or("Expo",function(t){return Math.pow(2,10*(t-1))*t+t*t*t*t*t*t*(1-t)});or("Circ",function(t){return-(ch(1-t*t)-1)});or("Sine",function(t){return t===1?1:-Ef(t*yf)+1});or("Back",Za("in"),Za("out"),Za());Ke.SteppedEase=Ke.steps=gn.SteppedEase={config:function(e,n){e===void 0&&(e=1);var i=1/e,r=e+(n?0:1),s=n?1:0,a=1-st;return function(o){return((r*Ns(0,a,o)|0)+s)*i}}};Ts.ease=Ke["quad.out"];Kt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return Cl+=t+","+t+"Params,"});var Bh=function(e,n){this.id=Tf++,e._gsap=this,this.target=e,this.harness=n,this.get=n?n.get:gh,this.set=n?n.getSetter:Ul},Cs=(function(){function t(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Hr(this,+n.duration,1,1),this.data=n.data,lt&&(this._ctx=lt,lt.data.push(this)),ws||un.wake()}var e=t.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Hr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Wr(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ka(this,i),!s._dp||s.parent||yh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Gn(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),vh(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+gc(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+gc(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Gr(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ea(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-st?0:this._rts,this.totalTime(Ns(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),Ba(this),Nf(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ut(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Gn(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(jt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ea(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Lf);var r=Ut;return Ut=i,Pl(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ut=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,vc(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,vc(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(En(this,i),jt(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,jt(r)),this._dur||(this._zTime=-st),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-st:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-st)},e.eventCallback=function(i,r,s){var a=this.vars;return arguments.length>1?(r?(a[i]=r,s&&(a[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete a[i],this):a[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(a){var o=_t(i)?i:Sh,l=function(){var u=r.then;r.then=null,s&&s(),_t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),a(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ps(this)},t})();vn(Cs.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var $t=(function(t){lh(e,t);function e(i,r){var s;return i===void 0&&(i={}),s=t.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=jt(i.sortChildren),ht&&Gn(i.parent||ht,ei(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Th(ei(s),i.scrollTrigger),s}var n=e.prototype;return n.to=function(r,s,a){return Ss(0,arguments,this),this},n.from=function(r,s,a){return Ss(1,arguments,this),this},n.fromTo=function(r,s,a,o){return Ss(2,arguments,this),this},n.set=function(r,s,a){return s.duration=0,s.parent=this,Ms(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,En(this,a),1),this},n.call=function(r,s,a){return Gn(this,Et.delayedCall(0,r,s),a)},n.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Et(r,a,En(this,l)),this},n.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ms(a).immediateRender=jt(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},n.staggerFromTo=function(r,s,a,o,l,c,u,d){return o.startAt=a,Ms(o).immediateRender=jt(o.immediateRender),this.staggerTo(r,s,o,l,c,u,d)},n.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:ut(r),d=this._zTime<0!=r<0&&(this._initted||!c),h,f,g,_,m,p,M,T,E,b,R,C;if(this!==ht&&u>l&&r>=0&&(u=l),u!==this._tTime||a||d){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,E=this._start,T=this._ts,p=!T,d&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,m=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,a);if(h=ut(u%m),u===l?(_=this._repeat,h=c):(b=ut(u/m),_=~~b,_&&_===b&&(h=c,_--),h>c&&(h=c)),b=Gr(this._tTime,m),!o&&this._tTime&&b!==_&&this._tTime-b*m-this._dur<=0&&(b=_),R&&_&1&&(h=c-h,C=1),_!==b&&!this._lock){var v=R&&b&1,x=v===(R&&_&1);if(_<b&&(v=!v),o=v?0:u%c?c:u,this._lock=1,this.render(o||(C?0:ut(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&hn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,b=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,o=v?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=kf(this,ut(o),ut(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&u&&c&&!s&&!b&&(hn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=-st);break}}f=g}else{f=this._last;for(var D=r<0?r:h;f;){if(g=f._prev,(f._act||D<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(r,s,a);if(f.render(f._ts>0?(D-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(D-f._start)*f._ts,s,a||Ut&&Pl(f)),h!==this._time||!this._ts&&!p){M=0,g&&(u+=this._zTime=D?-st:st);break}}f=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-st)._zTime=h>=o?1:-1,this._ts))return this._start=E,Ba(this),this.render(r,s,a);this._onUpdate&&!s&&hn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(E===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Pi(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(hn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(r,s){var a=this;if(ai(s)||(s=En(this,s,r)),!(r instanceof Cs)){if(zt(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Dt(r))return this.addLabel(r,s);if(_t(r))r=Et.delayedCall(0,r);else return this}return this!==r?Gn(this,r,s):this},n.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-An);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Et?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},n.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},n.remove=function(r){return Dt(r)?this.removeLabel(r):_t(r)?this.killTweensOf(r):(r.parent===this&&Fa(this,r),r===this._recent&&(this._recent=this._last),tr(this))},n.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ut(un.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),t.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},n.addLabel=function(r,s){return this.labels[r]=En(this,s),this},n.removeLabel=function(r){return delete this.labels[r],this},n.addPause=function(r,s,a){var o=Et.delayedCall(0,s||bs,a);return o.data="isPause",this._hasPause=1,Gn(this,o,En(this,r))},n.removePause=function(r){var s=this._first;for(r=En(this,r);s;)s._start===r&&s.data==="isPause"&&Pi(s),s=s._next},n.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)Si!==o[l]&&o[l].kill(r,s);return this},n.getTweensOf=function(r,s){for(var a=[],o=wn(r),l=this._first,c=ai(s),u;l;)l instanceof Et?Df(l._targets,o)&&(c?(!Si||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},n.tweenTo=function(r,s){s=s||{};var a=this,o=En(a,r),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,g=Et.to(a,vn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||st,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Hr(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},n.tweenFromTo=function(r,s,a){return this.tweenTo(s,vn({startAt:{time:En(this,r)}},a))},n.recent=function(){return this._recent},n.nextLabel=function(r){return r===void 0&&(r=this._time),Mc(this,En(this,r))},n.previousLabel=function(r){return r===void 0&&(r=this._time),Mc(this,En(this,r),1)},n.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},n.shiftChildren=function(r,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(r=ut(r);o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return tr(this)},n.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return t.prototype.invalidate.call(this,r)},n.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),tr(this)},n.totalDuration=function(r){var s=0,a=this,o=a._last,l=An,c,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(d=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Gn(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=ut(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Hr(a,a===ht&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(ht._ts&&(vh(ht,Ea(r,ht)),_h=un.frame),un.frame>=mc){mc+=pn.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&pn.autoSleep&&un._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||un.sleep()}}},e})(Cs);vn($t.prototype,{_lock:0,_hasPause:0,_forcing:0});var np=function(e,n,i,r,s,a,o){var l=new Zt(this._pt,e,n,0,1,Wh,null,s),c=0,u=0,d,h,f,g,_,m,p,M;for(l.b=i,l.e=r,i+="",r+="",(p=~r.indexOf("random("))&&(r=As(r)),a&&(M=[i,r],a(M,e,n),i=M[0],r=M[1]),h=i.match(Ya)||[];d=Ya.exec(r);)g=d[0],_=r.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Nr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},c=Ya.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(dh.test(r)||p)&&(l.e=0),this._pt=l,l},Ll=function(e,n,i,r,s,a,o,l,c,u){_t(r)&&(r=r(s||0,e,a));var d=e[n],h=i!=="get"?i:_t(d)?c?e[n.indexOf("set")||!_t(e["get"+n.substr(3)])?n:"get"+n.substr(3)](c):e[n]():d,f=_t(d)?c?op:Gh:Il,g;if(Dt(r)&&(~r.indexOf("random(")&&(r=As(r)),r.charAt(1)==="="&&(g=Nr(h,r)+(kt(h)||0),(g||g===0)&&(r=g))),!u||h!==r||Yo)return!isNaN(h*r)&&r!==""?(g=new Zt(this._pt,e,n,+h||0,r-(h||0),typeof d=="boolean"?cp:Hh,0,f),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(n in e)&&Al(n,r),np.call(this,e,n,h,r,f,l||pn.stringFilter,c))},ip=function(e,n,i,r,s){if(_t(e)&&(e=xs(e,s,n,i,r)),!qn(e)||e.style&&e.nodeType||zt(e)||uh(e))return Dt(e)?xs(e,s,n,i,r):e;var a={},o;for(o in e)a[o]=xs(e[o],s,n,i,r);return a},kh=function(e,n,i,r,s,a){var o,l,c,u;if(ln[e]&&(o=new ln[e]).init(s,o.rawVars?n[e]:ip(n[e],r,s,a,i),i,r,a)!==!1&&(i._pt=l=new Zt(i._pt,s,e,0,1,o.render,o,0,o.priority),i!==Ir))for(c=i._ptLookup[i._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Si,Yo,Dl=function t(e,n,i){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,d=r.yoyoEase,h=r.keyframes,f=r.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!yl,E=e.timeline,b=r.easeReverse||d,R,C,v,x,D,w,L,B,I,k,z,F,j;if(E&&(!h||!s)&&(s="none"),e._ease=nr(s,Ts.ease),e._rEase=b&&(nr(b)||e._ease),e._from=!E&&!!r.runBackwards,e._from&&(e.ratio=1),!E||h&&!r.stagger){if(B=m[0]?er(m[0]).harness:0,F=B&&r[B.prop],R=Ta(r,wl),_&&(_._zTime<0&&_.progress(1),n<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?ma:Pf),_._lazy=0),a){if(Pi(e._startAt=Et.set(m,vn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&jt(l),startAt:null,delay:0,onUpdate:c&&function(){return hn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ut||!o&&!f)&&e._startAt.revert(ma),o&&g&&n<=0&&i<=0){n&&(e._zTime=n);return}}else if(u&&g&&!_){if(n&&(o=!1),v=vn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&jt(l),immediateRender:o,stagger:0,parent:p},R),F&&(v[B.prop]=F),Pi(e._startAt=Et.set(m,v)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(Ut?e._startAt.revert(ma):e._startAt.render(-1,!0)),e._zTime=n,!o)t(e._startAt,st,st);else if(!n)return}for(e._pt=e._ptCache=0,l=g&&jt(l)||l&&!g,C=0;C<m.length;C++){if(D=m[C],L=D._gsap||Rl(m)[C]._gsap,e._ptLookup[C]=k={},Vo[L.id]&&bi.length&&ya(),z=M===m?C:M.indexOf(D),B&&(I=new B).init(D,F||R,e,z,M)!==!1&&(e._pt=x=new Zt(e._pt,D,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(ee){k[ee]=x}),I.priority&&(w=1)),!B||F)for(v in R)ln[v]&&(I=kh(v,R,e,z,D,M))?I.priority&&(w=1):k[v]=x=Ll.call(e,D,v,"get",R[v],z,M,0,r.stringFilter);e._op&&e._op[C]&&e.kill(D,e._op[C]),T&&e._pt&&(Si=e,ht.killTweensOf(D,k,e.globalTime(n)),j=!e.parent,Si=0),e._pt&&l&&(Vo[L.id]=1)}w&&Xh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!j,h&&n<=0&&E.render(An,!0,!0)},rp=function(e,n,i,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[n],u,d,h,f;if(!c)for(c=e._ptCache[n]=[],h=e._ptLookup,f=e._targets.length;f--;){if(u=h[f][n],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==n&&u.fp!==n;)u=u._next;if(!u)return Yo=1,e.vars[n]="+=0",Dl(e,o),Yo=0,l?Es(n+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=i-u.s,d.e&&(d.e=Mt(i)+kt(d.e)),d.b&&(d.b=u.s+kt(d.b))},sp=function(e,n){var i=e[0]?er(e[0]).harness:0,r=i&&i.aliases,s,a,o,l;if(!r)return n;s=Vr({},n);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},ap=function(e,n,i,r){var s=n.ease||r||"power1.inOut",a,o;if(zt(n))o=i[e]||(i[e]=[]),n.forEach(function(l,c){return o.push({t:c/(n.length-1)*100,v:l,e:s})});else for(a in n)o=i[a]||(i[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:n[a],e:s})},xs=function(e,n,i,r,s){return _t(e)?e.call(n,i,r,s):Dt(e)&&~e.indexOf("random(")?As(e):e},zh=Cl+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Vh={};Kt(zh+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Vh[t]=1});var Et=(function(t){lh(e,t);function e(i,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=t.call(this,a?r:Ms(r))||this;var l=o.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=r.parent||ht,M=(zt(i)||uh(i)?ai(i[0]):"length"in r)?[i]:wn(i),T,E,b,R,C,v,x,D;if(o._targets=M.length?Rl(M):Es("GSAP target "+i+" not found. https://gsap.com",!pn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Hs(c)||Hs(u)){r=o.vars;var w=r.easeReverse||r.yoyoEase;if(T=o.timeline=new $t({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),T.kill(),T.parent=T._dp=ei(o),T._start=0,h||Hs(c)||Hs(u)){if(R=M.length,x=h&&wh(h),qn(h))for(C in h)~zh.indexOf(C)&&(D||(D={}),D[C]=h[C]);for(E=0;E<R;E++)b=Ta(r,Vh),b.stagger=0,w&&(b.easeReverse=w),D&&Vr(b,D),v=M[E],b.duration=+xs(c,ei(o),E,v,M),b.delay=(+xs(u,ei(o),E,v,M)||0)-o._delay,!h&&R===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),T.to(v,b,x?x(E,v,M):0),T._ease=Ke.none;T.duration()?c=u=0:o.timeline=0}else if(g){Ms(vn(T.vars.defaults,{ease:"none"})),T._ease=nr(g.ease||r.ease||"none");var L=0,B,I,k;if(zt(g))g.forEach(function(z){return T.to(M,z,">")}),T.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||ap(C,g[C],b,g.easeEach);for(C in b)for(B=b[C].sort(function(z,F){return z.t-F.t}),L=0,E=0;E<B.length;E++)I=B[E],k={ease:I.e,duration:(I.t-(E?B[E-1].t:0))/100*c},k[C]=I.v,T.to(M,k,L),L+=k.duration;T.duration()<c&&T.to({},{duration:c-T.duration()})}}c||o.duration(c=T.duration())}else o.timeline=0;return f===!0&&!yl&&(Si=ei(o),ht.killTweensOf(M),Si=0),Gn(p,ei(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(d||!c&&!g&&o._start===ut(p._time)&&jt(d)&&Of(ei(o))&&p.data!=="nested")&&(o._tTime=-st,o.render(Math.max(0,-u)||0)),m&&Th(ei(o),m),o}var n=e.prototype;return n.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,d=r>l-st&&!u?l:r<st?0:r,h,f,g,_,m,p,M,T;if(!c)Bf(this,r,s,a);else if(d!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=ut(d%_),d===l?(g=this._repeat,h=c):(m=ut(d/_),g=~~m,g&&g===m?(h=c,g--):h>c&&(h=c)),p=this._yoyo&&g&1,p&&(h=c-h),m=Gr(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(ut(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Eh(this,u?r:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._rEase){var E=h<o;if(E!==this._inv){var b=E?o:c-o;this._inv=E,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=b?(E?-1:1)/b:0,this._invScale=E?-this.ratio:1-this.ratio,this._invEase=E?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(hn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;T&&T.render(r<0?r:T._dur*T._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Go(this,r,s,a),hn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&hn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Go(this,r,!0,!0),(r||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Pi(this,1),!s&&!(u&&!o)&&(d||o||p)&&(hn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),t.prototype.invalidate.call(this,r)},n.resetTo=function(r,s,a,o,l){ws||un.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Dl(this,c),u=this._ease(c/this._dur),rp(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(ka(this,0),this.parent||xh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ps(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Ut),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Si&&Si.vars.overwrite!==!0)._first||ps(this),this.parent&&a!==this.timeline.totalDuration()&&Hr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?wn(r):o,c=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!s||s==="all")&&Uf(o,l))return s==="all"&&(this._pt=0),ps(this);for(d=this._op=this._op||[],s!=="all"&&(Dt(s)&&(_={},Kt(s,function(M){return _[M]=1}),s=_),s=sp(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Fa(this,m,"_pt"),delete h[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&ps(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ss(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ss(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return ht.killTweensOf(r,s,a)},e})(Cs);vn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kt("staggerTo,staggerFrom,staggerFromTo",function(t){Et[t]=function(){var e=new $t,n=Wo.call(arguments,0);return n.splice(t==="staggerFromTo"?5:4,0,0),e[t].apply(e,n)}});var Il=function(e,n,i){return e[n]=i},Gh=function(e,n,i){return e[n](i)},op=function(e,n,i,r){return e[n](r.fp,i)},lp=function(e,n,i){return e.setAttribute(n,i)},Ul=function(e,n){return _t(e[n])?Gh:Tl(e[n])&&e.setAttribute?lp:Il},Hh=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e6)/1e6,n)},cp=function(e,n){return n.set(n.t,n.p,!!(n.s+n.c*e),n)},Wh=function(e,n){var i=n._pt,r="";if(!e&&n.b)r=n.b;else if(e===1&&n.e)r=n.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=n.c}n.set(n.t,n.p,r,n)},Nl=function(e,n){for(var i=n._pt;i;)i.r(e,i.d),i=i._next},up=function(e,n,i,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,n,i),s=a},hp=function(e){for(var n=this._pt,i,r;n;)r=n._next,n.p===e&&!n.op||n.op===e?Fa(this,n,"_pt"):n.dep||(i=1),n=r;return!i},dp=function(e,n,i,r){r.mSet(e,n,r.m.call(r.tween,i,r.mt),r)},Xh=function(e){for(var n=e._pt,i,r,s,a;n;){for(i=n._next,r=s;r&&r.pr>n.pr;)r=r._next;(n._prev=r?r._prev:a)?n._prev._next=n:s=n,(n._next=r)?r._prev=n:a=n,n=i}e._pt=s},Zt=(function(){function t(n,i,r,s,a,o,l,c,u){this.t=i,this.s=s,this.c=a,this.p=r,this.r=o||Hh,this.d=l||this,this.set=c||Il,this.pr=u||0,this._next=n,n&&(n._prev=this)}var e=t.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=dp,this.m=i,this.mt=s,this.tween=r},t})();Kt(Cl+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(t){return wl[t]=1});gn.TweenMax=gn.TweenLite=Et;gn.TimelineLite=gn.TimelineMax=$t;ht=new $t({sortChildren:!1,defaults:Ts,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=Oh;var ir=[],ga={},fp=[],xc=0,pp=0,Ja=function(e){return(ga[e]||fp).map(function(n){return n()})},$o=function(){var e=Date.now(),n=[];e-xc>2&&(Ja("matchMediaInit"),ir.forEach(function(i){var r=i.queries,s=i.conditions,a,o,l,c;for(o in r)a=kn.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(i.revert(),l&&n.push(i))}),Ja("matchMediaRevert"),n.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),xc=e,Ja("matchMedia"))},qh=(function(){function t(n,i){this.selector=i&&Xo(i),this.data=[],this._r=[],this.isReverted=!1,this.id=pp++,n&&this.add(n)}var e=t.prototype;return e.add=function(i,r,s){_t(i)&&(s=r,r=i,i=_t);var a=this,o=function(){var c=lt,u=a.selector,d;return c&&c!==a&&c.data.push(a),s&&(a.selector=Xo(s)),lt=a,d=r.apply(a,arguments),_t(d)&&a._r.push(d),lt=c,a.selector=u,a.isReverted=!1,d};return a.last=o,i===_t?o(a,function(l){return a.add(null,l)}):i?a[i]=o:o},e.ignore=function(i){var r=lt;lt=null,i(this),lt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof t?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(i)}),l=s.data.length;l--;)c=s.data[l],c instanceof $t?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Et)&&c.revert&&c.revert(i);s._r.forEach(function(u){return u(i,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=ir.length;a--;)ir[a].id===this.id&&ir.splice(a,1)},e.revert=function(i){this.kill(i||{})},t})(),mp=(function(){function t(n){this.contexts=[],this.scope=n,lt&&lt.data.push(this)}var e=t.prototype;return e.add=function(i,r,s){qn(i)||(i={matches:i});var a=new qh(0,s||this.scope),o=a.conditions={},l,c,u;lt&&!a.selector&&(a.selector=lt.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=i;for(c in i)c==="all"?u=1:(l=kn.matchMedia(i[c]),l&&(ir.indexOf(a)<0&&ir.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener($o):l.addEventListener("change",$o)));return u&&r(a,function(d){return a.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},t})(),ba={registerPlugin:function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];n.forEach(function(r){return Ih(r)})},timeline:function(e){return new $t(e)},getTweensOf:function(e,n){return ht.getTweensOf(e,n)},getProperty:function(e,n,i,r){Dt(e)&&(e=wn(e)[0]);var s=er(e||{}).get,a=i?Sh:Mh;return i==="native"&&(i=""),e&&(n?a((ln[n]&&ln[n].get||s)(e,n,i,r)):function(o,l,c){return a((ln[o]&&ln[o].get||s)(e,o,l,c))})},quickSetter:function(e,n,i){if(e=wn(e),e.length>1){var r=e.map(function(u){return en.quickSetter(u,n,i)}),s=r.length;return function(u){for(var d=s;d--;)r[d](u)}}e=e[0]||{};var a=ln[n],o=er(e),l=o.harness&&(o.harness.aliases||{})[n]||n,c=a?function(u){var d=new a;Ir._pt=0,d.init(e,i?u+i:u,Ir,0,[e]),d.render(1,d),Ir._pt&&Nl(1,Ir)}:o.set(e,l);return a?c:function(u){return c(e,l,i?u+i:u,o,1)}},quickTo:function(e,n,i){var r,s=en.to(e,vn((r={},r[n]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),a=function(l,c,u){return s.resetTo(n,l,c,u)};return a.tween=s,a},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=nr(e.ease,Ts.ease)),_c(Ts,e||{})},config:function(e){return _c(pn,e||{})},registerEffect:function(e){var n=e.name,i=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!ln[o]&&!gn[o]&&Es(n+" effect requires "+o+" plugin.")}),$a[n]=function(o,l,c){return i(wn(o),vn(l||{},s),c)},a&&($t.prototype[n]=function(o,l,c){return this.add($a[n](o,qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,n){Ke[e]=nr(n)},parseEase:function(e,n){return arguments.length?nr(e,n):Ke},getById:function(e){return ht.getById(e)},exportRoot:function(e,n){e===void 0&&(e={});var i=new $t(e),r,s;for(i.smoothChildTiming=jt(e.smoothChildTiming),ht.remove(i),i._dp=0,i._time=i._tTime=ht._time,r=ht._first;r;)s=r._next,(n||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&Gn(i,r,r._start-r._delay),r=s;return Gn(ht,i,0),i},context:function(e,n){return e?new qh(e,n):lt},matchMedia:function(e){return new mp(e)},matchMediaRefresh:function(){return ir.forEach(function(e){var n=e.conditions,i,r;for(r in n)n[r]&&(n[r]=!1,i=1);i&&e.revert()})||$o()},addEventListener:function(e,n){var i=ga[e]||(ga[e]=[]);~i.indexOf(n)||i.push(n)},removeEventListener:function(e,n){var i=ga[e],r=i&&i.indexOf(n);r>=0&&i.splice(r,1)},utils:{wrap:qf,wrapYoyo:Yf,distribute:wh,random:Rh,snap:Ch,normalize:Xf,getUnit:kt,clamp:Vf,splitColor:Uh,toArray:wn,selector:Xo,mapRange:Lh,pipe:Hf,unitize:Wf,interpolate:$f,shuffle:Ah},install:ph,effects:$a,ticker:un,updateRoot:$t.updateRoot,plugins:ln,globalTimeline:ht,core:{PropTween:Zt,globals:mh,Tween:Et,Timeline:$t,Animation:Cs,getCache:er,_removeLinkedListItem:Fa,reverting:function(){return Ut},context:function(e){return e&&lt&&(lt.data.push(e),e._ctx=lt),lt},suppressOverwrites:function(e){return yl=e}}};Kt("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ba[t]=Et[t]});un.add($t.updateRoot);Ir=ba.to({},{duration:0});var _p=function(e,n){for(var i=e._pt;i&&i.p!==n&&i.op!==n&&i.fp!==n;)i=i._next;return i},gp=function(e,n){var i=e._targets,r,s,a;for(r in n)for(s=i.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=_p(a,r)),a&&a.modifier&&a.modifier(n[r],e,i[s],r))},Qa=function(e,n){return{name:e,headless:1,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Dt(s)&&(l={},Kt(s,function(u){return l[u]=1}),s=l),n){l={};for(c in s)l[c]=n(s[c]);s=l}gp(o,s)}}}},en=ba.registerPlugin({name:"attr",init:function(e,n,i,r,s){var a,o,l;this.tween=i;for(a in n)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",n[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,n){for(var i=n._pt;i;)Ut?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,n){for(var i=n.length;i--;)this.add(e,i,e[i]||0,n[i],0,0,0,0,0,1)}},Qa("roundProps",qo),Qa("modifiers"),Qa("snap",Ch))||ba;Et.version=$t.version=en.version="3.15.0";fh=1;El()&&Wr();var RS=Ke.Power0,PS=Ke.Power1,LS=Ke.Power2,DS=Ke.Power3,IS=Ke.Power4,US=Ke.Linear,NS=Ke.Quad,OS=Ke.Cubic,FS=Ke.Quart,BS=Ke.Quint,kS=Ke.Strong,zS=Ke.Elastic,VS=Ke.Back,GS=Ke.SteppedEase,HS=Ke.Bounce,WS=Ke.Sine,XS=Ke.Expo,qS=Ke.Circ,yc,xi,Or,Ol,ji,Tc,Fl,vp=function(){return typeof window<"u"},oi={},Yi=180/Math.PI,Fr=Math.PI/180,fr=Math.atan2,Ec=1e8,Bl=/([A-Z])/g,Mp=/(left|right|width|margin|padding|x)/i,Sp=/[\s,\(]\S/,Hn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},jo=function(e,n){return n.set(n.t,n.p,Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},xp=function(e,n){return n.set(n.t,n.p,e===1?n.e:Math.round((n.s+n.c*e)*1e4)/1e4+n.u,n)},yp=function(e,n){return n.set(n.t,n.p,e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Tp=function(e,n){return n.set(n.t,n.p,e===1?n.e:e?Math.round((n.s+n.c*e)*1e4)/1e4+n.u:n.b,n)},Ep=function(e,n){var i=n.s+n.c*e;n.set(n.t,n.p,~~(i+(i<0?-.5:.5))+n.u,n)},Yh=function(e,n){return n.set(n.t,n.p,e?n.e:n.b,n)},$h=function(e,n){return n.set(n.t,n.p,e!==1?n.b:n.e,n)},bp=function(e,n,i){return e.style[n]=i},Ap=function(e,n,i){return e.style.setProperty(n,i)},wp=function(e,n,i){return e._gsap[n]=i},Cp=function(e,n,i){return e._gsap.scaleX=e._gsap.scaleY=i},Rp=function(e,n,i,r,s){var a=e._gsap;a.scaleX=a.scaleY=i,a.renderTransform(s,a)},Pp=function(e,n,i,r,s){var a=e._gsap;a[n]=i,a.renderTransform(s,a)},dt="transform",Jt=dt+"Origin",Lp=function t(e,n){var i=this,r=this.target,s=r.style,a=r._gsap;if(e in oi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Hn[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=ti(r,o)}):this.tfm[e]=a.x?a[e]:ti(r,e),e===Jt&&(this.tfm.zOrigin=a.zOrigin);else return Hn.transform.split(",").forEach(function(o){return t.call(i,o,n)});if(this.props.indexOf(dt)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Jt,n,"")),e=dt}(s||n)&&this.props.push(e,n,s[e])},jh=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Dp=function(){var e=this.props,n=this.target,i=n.style,r=n._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?n[e[s]](e[s+2]):n[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bl,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),s=Fl(),(!s||!s.isStart)&&!i[dt]&&(jh(i),r.zOrigin&&i[Jt]&&(i[Jt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Kh=function(e,n){var i={target:e,props:[],revert:Dp,save:Lp};return e._gsap||en.core.getCache(e),n&&e.style&&e.nodeType&&n.split(",").forEach(function(r){return i.save(r)}),i},Zh,Ko=function(e,n){var i=xi.createElementNS?xi.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):xi.createElement(e);return i&&i.style?i:xi.createElement(e)},dn=function t(e,n,i){var r=getComputedStyle(e);return r[n]||r.getPropertyValue(n.replace(Bl,"-$1").toLowerCase())||r.getPropertyValue(n)||!i&&t(e,Xr(n)||n,1)||""},bc="O,Moz,ms,Ms,Webkit".split(","),Xr=function(e,n,i){var r=(n||ji).style,s=5;if(e in r&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(bc[s]+e in r););return s<0?null:(s===3?"ms":s>=0?bc[s]:"")+e},Zo=function(){vp()&&window.document&&(yc=window,xi=yc.document,Or=xi.documentElement,ji=Ko("div")||{style:{}},Ko("div"),dt=Xr(dt),Jt=dt+"Origin",ji.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Zh=!!Xr("perspective"),Fl=en.core.reverting,Ol=1)},Ac=function(e){var n=e.ownerSVGElement,i=Ko("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),Or.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),Or.removeChild(i),s},wc=function(e,n){for(var i=n.length;i--;)if(e.hasAttribute(n[i]))return e.getAttribute(n[i])},Jh=function(e){var n,i;try{n=e.getBBox()}catch{n=Ac(e),i=1}return n&&(n.width||n.height)||i||(n=Ac(e)),n&&!n.width&&!n.x&&!n.y?{x:+wc(e,["x","cx","x1"])||0,y:+wc(e,["y","cy","y1"])||0,width:0,height:0}:n},Qh=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Jh(e))},Li=function(e,n){if(n){var i=e.style,r;n in oi&&n!==Jt&&(n=dt),i.removeProperty?(r=n.substr(0,2),(r==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),i.removeProperty(r==="--"?n:n.replace(Bl,"-$1").toLowerCase())):i.removeAttribute(n)}},yi=function(e,n,i,r,s,a){var o=new Zt(e._pt,n,i,0,1,a?$h:Yh);return e._pt=o,o.b=r,o.e=s,e._props.push(i),o},Cc={deg:1,rad:1,turn:1},Ip={grid:1,flex:1},Di=function t(e,n,i,r){var s=parseFloat(i)||0,a=(i+"").trim().substr((s+"").length)||"px",o=ji.style,l=Mp.test(n),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",f=r==="%",g,_,m,p;if(r===a||!s||Cc[r]||Cc[a])return s;if(a!=="px"&&!h&&(s=t(e,n,i,"px")),p=e.getCTM&&Qh(e),(f||a==="%")&&(oi[n]||~n.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Mt(f?s/g*d:s/100*g);if(o[l?"width":"height"]=d+(h?a:r),_=r!=="rem"&&~n.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===xi||!_.appendChild)&&(_=xi.body),m=_._gsap,m&&f&&m.width&&l&&m.time===un.time&&!m.uncache)return Mt(s/m.width*d);if(f&&(n==="height"||n==="width")){var M=e.style[n];e.style[n]=d+r,g=e[u],M?e.style[n]=M:Li(e,n)}else(f||a==="%")&&!Ip[dn(_,"display")]&&(o.position=dn(e,"position")),_===e&&(o.position="static"),_.appendChild(ji),g=ji[u],_.removeChild(ji),o.position="absolute";return l&&f&&(m=er(_),m.time=un.time,m.width=_[u]),Mt(h?g*s/d:g&&s?d/g*s:0)},ti=function(e,n,i,r){var s;return Ol||Zo(),n in Hn&&n!=="transform"&&(n=Hn[n],~n.indexOf(",")&&(n=n.split(",")[0])),oi[n]&&n!=="transform"?(s=Ps(e,r),s=n!=="transformOrigin"?s[n]:s.svg?s.origin:wa(dn(e,Jt))+" "+s.zOrigin+"px"):(s=e.style[n],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Aa[n]&&Aa[n](e,n,i)||dn(e,n)||gh(e,n)||(n==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Di(e,n,s,i)+i:s},Up=function(e,n,i,r){if(!i||i==="none"){var s=Xr(n,e,1),a=s&&dn(e,s,1);a&&a!==i?(n=s,i=a):n==="borderColor"&&(i=dn(e,"borderTopColor"))}var o=new Zt(this._pt,e.style,n,0,1,Wh),l=0,c=0,u,d,h,f,g,_,m,p,M,T,E,b;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=dn(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[n],e.style[n]=r,r=dn(e,n)||r,_?e.style[n]=_:Li(e,n)),u=[i,r],Oh(u),i=u[0],r=u[1],h=i.match(Dr)||[],b=r.match(Dr)||[],b.length){for(;d=Dr.exec(r);)m=d[0],M=r.substring(l,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(f=parseFloat(_)||0,E=_.substr((f+"").length),m.charAt(1)==="="&&(m=Nr(f,m)+E),p=parseFloat(m),T=m.substr((p+"").length),l=Dr.lastIndex-T.length,T||(T=T||pn.units[n]||E,l===r.length&&(r+=T,o.e+=T)),E!==T&&(f=Di(e,n,_,T)||0),o._pt={_next:o._pt,p:M||c===1?M:",",s:f,c:p-f,m:g&&g<4||n==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=n==="display"&&r==="none"?$h:Yh;return dh.test(r)&&(o.e=0),this._pt=o,o},Rc={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Np=function(e){var n=e.split(" "),i=n[0],r=n[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),n[0]=Rc[i]||i,n[1]=Rc[r]||r,n.join(" ")},Op=function(e,n){if(n.tween&&n.tween._time===n.tween._dur){var i=n.t,r=i.style,s=n.u,a=i._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],oi[o]&&(l=1,o=o==="transformOrigin"?Jt:dt),Li(i,o);l&&(Li(i,dt),a&&(a.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Ps(i,1),a.uncache=1,jh(r)))}},Aa={clearProps:function(e,n,i,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Zt(e._pt,n,i,0,0,Op);return a.u=r,a.pr=-10,a.tween=s,e._props.push(i),1}}},Rs=[1,0,0,1,0,0],ed={},td=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pc=function(e){var n=dn(e,dt);return td(n)?Rs:n.substr(7).match(hh).map(Mt)},kl=function(e,n){var i=e._gsap||er(e),r=e.style,s=Pc(e),a,o,l,c;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Rs:s):(s===Rs&&!e.offsetParent&&e!==Or&&!i.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Or.appendChild(e)),s=Pc(e),l?r.display=l:Li(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Or.removeChild(e))),n&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jo=function(e,n,i,r,s,a){var o=e._gsap,l=s||kl(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=l[0],g=l[1],_=l[2],m=l[3],p=l[4],M=l[5],T=n.split(" "),E=parseFloat(T[0])||0,b=parseFloat(T[1])||0,R,C,v,x;i?l!==Rs&&(C=f*m-g*_)&&(v=E*(m/C)+b*(-_/C)+(_*M-m*p)/C,x=E*(-g/C)+b*(f/C)-(f*M-g*p)/C,E=v,b=x):(R=Jh(e),E=R.x+(~T[0].indexOf("%")?E/100*R.width:E),b=R.y+(~(T[1]||T[0]).indexOf("%")?b/100*R.height:b)),r||r!==!1&&o.smooth?(p=E-c,M=b-u,o.xOffset=d+(p*f+M*_)-p,o.yOffset=h+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=E,o.yOrigin=b,o.smooth=!!r,o.origin=n,o.originIsAbsolute=!!i,e.style[Jt]="0px 0px",a&&(yi(a,o,"xOrigin",c,E),yi(a,o,"yOrigin",u,b),yi(a,o,"xOffset",d,o.xOffset),yi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",E+" "+b)},Ps=function(e,n){var i=e._gsap||new Bh(e);if("x"in i&&!n&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=dn(e,Jt)||"0",u=d=h=_=m=p=M=T=E=0,d,h,f=g=1,g,_,m,p,M,T,E,b,R,C,v,x,D,w,L,B,I,k,z,F,j,ee,ie,me,Me,Ze,Ue,q;return i.svg=!!(e.getCTM&&Qh(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),r.scale=r.rotate=r.translate="none"),C=kl(e,i.svg),i.svg&&(i.uncache?(j=e.getBBox(),c=i.xOrigin-j.x+"px "+(i.yOrigin-j.y)+"px",F=""):F=!n&&e.getAttribute("data-svg-origin"),Jo(e,F||c,!!F||i.originIsAbsolute,i.smooth!==!1,C)),b=i.xOrigin||0,R=i.yOrigin||0,C!==Rs&&(w=C[0],L=C[1],B=C[2],I=C[3],u=k=C[4],d=z=C[5],C.length===6?(f=Math.sqrt(w*w+L*L),g=Math.sqrt(I*I+B*B),_=w||L?fr(L,w)*Yi:0,M=B||I?fr(B,I)*Yi+_:0,M&&(g*=Math.abs(Math.cos(M*Fr))),i.svg&&(u-=b-(b*w+R*B),d-=R-(b*L+R*I))):(q=C[6],Ze=C[7],ie=C[8],me=C[9],Me=C[10],Ue=C[11],u=C[12],d=C[13],h=C[14],v=fr(q,Me),m=v*Yi,v&&(x=Math.cos(-v),D=Math.sin(-v),F=k*x+ie*D,j=z*x+me*D,ee=q*x+Me*D,ie=k*-D+ie*x,me=z*-D+me*x,Me=q*-D+Me*x,Ue=Ze*-D+Ue*x,k=F,z=j,q=ee),v=fr(-B,Me),p=v*Yi,v&&(x=Math.cos(-v),D=Math.sin(-v),F=w*x-ie*D,j=L*x-me*D,ee=B*x-Me*D,Ue=I*D+Ue*x,w=F,L=j,B=ee),v=fr(L,w),_=v*Yi,v&&(x=Math.cos(v),D=Math.sin(v),F=w*x+L*D,j=k*x+z*D,L=L*x-w*D,z=z*x-k*D,w=F,k=j),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=Mt(Math.sqrt(w*w+L*L+B*B)),g=Mt(Math.sqrt(z*z+q*q)),v=fr(k,z),M=Math.abs(v)>2e-4?v*Yi:0,E=Ue?1/(Ue<0?-Ue:Ue):0),i.svg&&(F=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!td(dn(e,dt)),F&&e.setAttribute("transform",F))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),n=n||i.uncache,i.x=u-((i.xPercent=u&&(!n&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+a,i.y=d-((i.yPercent=d&&(!n&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+a,i.z=h+a,i.scaleX=Mt(f),i.scaleY=Mt(g),i.rotation=Mt(_)+o,i.rotationX=Mt(m)+o,i.rotationY=Mt(p)+o,i.skewX=M+o,i.skewY=T+o,i.transformPerspective=E+a,(i.zOrigin=parseFloat(c.split(" ")[2])||!n&&i.zOrigin||0)&&(r[Jt]=wa(c)),i.xOffset=i.yOffset=0,i.force3D=pn.force3D,i.renderTransform=i.svg?Bp:Zh?nd:Fp,i.uncache=0,i},wa=function(e){return(e=e.split(" "))[0]+" "+e[1]},eo=function(e,n,i){var r=kt(n);return Mt(parseFloat(n)+parseFloat(Di(e,"x",i+"px",r)))+r},Fp=function(e,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,nd(e,n)},ki="0deg",ns="0px",zi=") ",nd=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.z,c=i.rotation,u=i.rotationY,d=i.rotationX,h=i.skewX,f=i.skewY,g=i.scaleX,_=i.scaleY,m=i.transformPerspective,p=i.force3D,M=i.target,T=i.zOrigin,E="",b=p==="auto"&&e&&e!==1||p===!0;if(T&&(d!==ki||u!==ki)){var R=parseFloat(u)*Fr,C=Math.sin(R),v=Math.cos(R),x;R=parseFloat(d)*Fr,x=Math.cos(R),a=eo(M,a,C*x*-T),o=eo(M,o,-Math.sin(R)*-T),l=eo(M,l,v*x*-T+T)}m!==ns&&(E+="perspective("+m+zi),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(b||a!==ns||o!==ns||l!==ns)&&(E+=l!==ns||b?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+zi),c!==ki&&(E+="rotate("+c+zi),u!==ki&&(E+="rotateY("+u+zi),d!==ki&&(E+="rotateX("+d+zi),(h!==ki||f!==ki)&&(E+="skew("+h+", "+f+zi),(g!==1||_!==1)&&(E+="scale("+g+", "+_+zi),M.style[dt]=E||"translate(0, 0)"},Bp=function(e,n){var i=n||this,r=i.xPercent,s=i.yPercent,a=i.x,o=i.y,l=i.rotation,c=i.skewX,u=i.skewY,d=i.scaleX,h=i.scaleY,f=i.target,g=i.xOrigin,_=i.yOrigin,m=i.xOffset,p=i.yOffset,M=i.forceCSS,T=parseFloat(a),E=parseFloat(o),b,R,C,v,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Fr,c*=Fr,b=Math.cos(l)*d,R=Math.sin(l)*d,C=Math.sin(l-c)*-h,v=Math.cos(l-c)*h,c&&(u*=Fr,x=Math.tan(c-u),x=Math.sqrt(1+x*x),C*=x,v*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),b*=x,R*=x)),b=Mt(b),R=Mt(R),C=Mt(C),v=Mt(v)):(b=d,v=h,R=C=0),(T&&!~(a+"").indexOf("px")||E&&!~(o+"").indexOf("px"))&&(T=Di(f,"x",a,"px"),E=Di(f,"y",o,"px")),(g||_||m||p)&&(T=Mt(T+g-(g*b+_*C)+m),E=Mt(E+_-(g*R+_*v)+p)),(r||s)&&(x=f.getBBox(),T=Mt(T+r/100*x.width),E=Mt(E+s/100*x.height)),x="matrix("+b+","+R+","+C+","+v+","+T+","+E+")",f.setAttribute("transform",x),M&&(f.style[dt]=x)},kp=function(e,n,i,r,s){var a=360,o=Dt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Yi:1)-r,c=r+l+"deg",u,d;return o&&(u=s.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Ec)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Ec)%a-~~(l/a)*a)),e._pt=d=new Zt(e._pt,n,i,r,l,xp),d.e=c,d.u="deg",e._props.push(i),d},Lc=function(e,n){for(var i in n)e[i]=n[i];return e},zp=function(e,n,i){var r=Lc({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=i.style,o,l,c,u,d,h,f,g;r.svg?(c=i.getAttribute("transform"),i.setAttribute("transform",""),a[dt]=n,o=Ps(i,1),Li(i,dt),i.setAttribute("transform",c)):(c=getComputedStyle(i)[dt],a[dt]=n,o=Ps(i,1),a[dt]=c);for(l in oi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=kt(c),g=kt(u),d=f!==g?Di(i,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Zt(e._pt,o,l,d,h-d,jo),e._pt.u=g||0,e._props.push(l));Lc(o,r)};Kt("padding,margin,Width,Radius",function(t,e){var n="Top",i="Right",r="Bottom",s="Left",a=(e<3?[n,i,r,s]:[n+s,n+i,r+i,r+s]).map(function(o){return e<2?t+o:"border"+o+t});Aa[e>1?"border"+t:t]=function(o,l,c,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return ti(o,g,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,f,d)}});var id={name:"css",register:Zo,targetTest:function(e){return e.style&&e.nodeType},init:function(e,n,i,r,s){var a=this._props,o=e.style,l=i.vars.startAt,c,u,d,h,f,g,_,m,p,M,T,E,b,R,C,v,x;Ol||Zo(),this.styles=this.styles||Kh(e),v=this.styles.props,this.tween=i;for(_ in n)if(_!=="autoRound"&&(u=n[_],!(ln[_]&&kh(_,n,i,r,e,s)))){if(f=typeof u,g=Aa[_],f==="function"&&(u=u.call(i,r,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=As(u)),g)g(this,e,_,u,i)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",Ai.lastIndex=0,Ai.test(c)||(m=kt(c),p=kt(u),p?m!==p&&(c=Di(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),v.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],Dt(c)&&~c.indexOf("random(")&&(c=As(c)),kt(c+"")||c==="auto"||(c+=pn.units[_]||kt(ti(e,_))||""),(c+"").charAt(1)==="="&&(c=ti(e,_))):c=ti(e,_),h=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),_ in Hn&&(_==="autoAlpha"&&(h===1&&ti(e,"visibility")==="hidden"&&d&&(h=0),v.push("visibility",0,o.visibility),yi(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Hn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in oi,T){if(this.styles.save(_),x=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=dn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var D=e.style.perspective;e.style.perspective=u,u=dn(e,"perspective"),D?e.style.perspective=D:Li(e,"perspective")}d=parseFloat(u)}if(E||(b=e._gsap,b.renderTransform&&!n.parseTransform||Ps(e,n.parseTransform),R=n.smoothOrigin!==!1&&b.smooth,E=this._pt=new Zt(this._pt,o,dt,0,1,b.renderTransform,b,0,-1),E.dep=1),_==="scale")this._pt=new Zt(this._pt,b,"scaleY",b.scaleY,(M?Nr(b.scaleY,M+d):d)-b.scaleY||0,jo),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){v.push(Jt,0,o[Jt]),u=Np(u),b.svg?Jo(e,u,0,R,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==b.zOrigin&&yi(this,b,"zOrigin",b.zOrigin,p),yi(this,o,_,wa(c),wa(u)));continue}else if(_==="svgOrigin"){Jo(e,u,1,R,0,this);continue}else if(_ in ed){kp(this,b,_,h,M?Nr(h,M+u):u);continue}else if(_==="smoothOrigin"){yi(this,b,"smooth",b.smooth,u);continue}else if(_==="force3D"){b[_]=u;continue}else if(_==="transform"){zp(this,u,e);continue}}else _ in o||(_=Xr(_)||_);if(T||(d||d===0)&&(h||h===0)&&!Sp.test(u)&&_ in o)m=(c+"").substr((h+"").length),d||(d=0),p=kt(u)||(_ in pn.units?pn.units[_]:m),m!==p&&(h=Di(e,_,c,p)),this._pt=new Zt(this._pt,T?b:o,_,h,(M?Nr(h,M+d):d)-h,!T&&(p==="px"||_==="zIndex")&&n.autoRound!==!1?Ep:jo),this._pt.u=p||0,T&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=Tp):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=yp);else if(_ in o)Up.call(this,e,_,c,M?M+u:u);else if(_ in e)this.add(e,_,c||e[_],M?M+u:u,r,s);else if(_!=="parseTransform"){Al(_,u);continue}T||(_ in o?v.push(_,0,o[_]):typeof e[_]=="function"?v.push(_,2,e[_]()):v.push(_,1,c||e[_])),a.push(_)}}C&&Xh(this)},render:function(e,n){if(n.tween._time||!Fl())for(var i=n._pt;i;)i.r(e,i.d),i=i._next;else n.styles.revert()},get:ti,aliases:Hn,getSetter:function(e,n,i){var r=Hn[n];return r&&r.indexOf(",")<0&&(n=r),n in oi&&n!==Jt&&(e._gsap.x||ti(e,"x"))?i&&Tc===i?n==="scale"?Cp:wp:(Tc=i||{})&&(n==="scale"?Rp:Pp):e.style&&!Tl(e.style[n])?bp:~n.indexOf("-")?Ap:Ul(e,n)},core:{_removeProperty:Li,_getMatrix:kl}};en.utils.checkPrefix=Xr;en.core.getStyleSaver=Kh;(function(t,e,n,i){var r=Kt(t+","+e+","+n,function(s){oi[s]=1});Kt(e,function(s){pn.units[s]="deg",ed[s]=1}),Hn[r[13]]=t+","+e,Kt(i,function(s){var a=s.split(":");Hn[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){pn.units[t]="px"});en.registerPlugin(id);var Te=en.registerPlugin(id)||en,YS=Te.core.Tween,rd=["spades","hearts","diamonds","clubs"],sd=[2,3,4,5,6,7,8,9,10,11,12,13,14],Vp={spades:"♠",hearts:"♥",diamonds:"♦",clubs:"♣"},Ca={2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",10:"10",11:"J",12:"Q",13:"K",14:"A"};function Gp(t){return t===14?11:t>=11?10:t}var Hp=0;function ad(t,e){return{id:`c${++Hp}`,suit:t,rank:e,enhancement:"none",seal:"none",edition:"base",baseChips:Gp(e)}}function to(){const t=[];for(const e of rd)for(const n of sd)t.push(ad(e,n));return t}function Wp(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}function Xp(t,e=Math.random){const n=t.slice();for(let i=n.length-1;i>0;i--){const r=Math.floor(e()*(i+1));[n[i],n[r]]=[n[r],n[i]]}return n}var ys={"High Card":{chips:5,mult:1,chipsPerLvl:10,multPerLvl:1},Pair:{chips:10,mult:2,chipsPerLvl:15,multPerLvl:1},"Two Pair":{chips:20,mult:2,chipsPerLvl:20,multPerLvl:1},"Three of a Kind":{chips:30,mult:3,chipsPerLvl:20,multPerLvl:2},Straight:{chips:30,mult:4,chipsPerLvl:30,multPerLvl:3},Flush:{chips:35,mult:4,chipsPerLvl:15,multPerLvl:2},"Full House":{chips:40,mult:4,chipsPerLvl:25,multPerLvl:2},"Four of a Kind":{chips:60,mult:7,chipsPerLvl:30,multPerLvl:3},"Straight Flush":{chips:100,mult:8,chipsPerLvl:40,multPerLvl:4},"Five of a Kind":{chips:120,mult:12,chipsPerLvl:35,multPerLvl:3},"Flush House":{chips:140,mult:14,chipsPerLvl:40,multPerLvl:4},"Flush Five":{chips:160,mult:16,chipsPerLvl:50,multPerLvl:3}};function qp(t){const e=new Map;for(const n of t){const i=e.get(n.rank)??[];i.push(n),e.set(n.rank,i)}return[...e.entries()].map(([n,i])=>({rank:n,cards:i})).sort((n,i)=>i.cards.length-n.cards.length||i.rank-n.rank)}function Yp(t){if(t.length<5)return!1;const e=t.filter(n=>n.enhancement!=="stone");return e.length<5?!1:new Set(e.filter(n=>n.enhancement!=="wild").map(n=>n.suit)).size<=1}function $p(t){if(t.length<5)return{ok:!1,cards:[]};const e=new Map;for(const i of t){if(i.enhancement==="stone")return{ok:!1,cards:[]};e.has(i.rank)||e.set(i.rank,i)}const n=[...e.keys()].sort((i,r)=>i-r);if(e.has(14)&&[2,3,4,5].every(i=>e.has(i)))return{ok:!0,cards:[e.get(14),e.get(2),e.get(3),e.get(4),e.get(5)]};for(let i=n.length-5;i>=0;i--){let r=!0;for(let s=1;s<5;s++)if(n[i+s]!==n[i]+s){r=!1;break}if(r)return{ok:!0,cards:n.slice(i,i+5).map(s=>e.get(s))}}return{ok:!1,cards:[]}}function od(t){const e=qp(t),n=e.map(l=>l.cards.length),i=Yp(t),r=$p(t),s=l=>n.includes(l),a=l=>n.filter(c=>c===l).length;if(s(5)&&i)return{type:"Flush Five",scoringCards:e[0].cards,allPlayed:t};if(s(3)&&s(2)&&i)return{type:"Flush House",scoringCards:t.slice(),allPlayed:t};if(s(5))return{type:"Five of a Kind",scoringCards:e[0].cards,allPlayed:t};if(r.ok&&i)return{type:"Straight Flush",scoringCards:t.slice(),allPlayed:t};if(s(4))return{type:"Four of a Kind",scoringCards:e[0].cards,allPlayed:t};if(s(3)&&s(2))return{type:"Full House",scoringCards:t.slice(),allPlayed:t};if(i)return{type:"Flush",scoringCards:t.slice(),allPlayed:t};if(r.ok)return{type:"Straight",scoringCards:t.slice(),allPlayed:t};if(s(3))return{type:"Three of a Kind",scoringCards:e[0].cards,allPlayed:t};if(a(2)>=2)return{type:"Two Pair",scoringCards:[...e[0].cards,...e[1].cards],allPlayed:t};if(s(2))return{type:"Pair",scoringCards:e[0].cards,allPlayed:t};const o=t.slice().sort((l,c)=>c.rank-l.rank)[0];return{type:"High Card",scoringCards:o?[o]:[],allPlayed:t}}function jp(t,e,n={}){const i=ys[t.type],r=Math.max(1,e.level),s=i.chips+i.chipsPerLvl*(r-1),a=i.mult+i.multPerLvl*(r-1);let o=s,l=a;const c=[{source:`${t.type} (lvl ${r})`,chipsDelta:s,multDelta:a}];for(const d of t.scoringCards){if(d.enhancement==="stone"){o+=50,c.push({source:"Stone +50 chips",chipsDelta:50});continue}o+=d.baseChips,c.push({source:`${Jp(d)} +${d.baseChips} chips`,chipsDelta:d.baseChips}),d.enhancement==="bonus"?(o+=30,c.push({source:"Bonus +30 chips",chipsDelta:30})):d.enhancement==="mult"?(l+=4,c.push({source:"Mult card +4 Mult",multDelta:4})):d.enhancement==="glass"&&(l*=2,c.push({source:"Glass x2 Mult",multMul:2})),d.edition==="foil"?(o+=50,c.push({source:"Foil +50 chips",chipsDelta:50})):d.edition==="holographic"?(l+=10,c.push({source:"Holo +10 Mult",multDelta:10})):d.edition==="polychrome"&&(l*=1.5,c.push({source:"Polychrome x1.5 Mult",multMul:1.5}))}for(const d of n.jokers??[]){const h=Kp(d,t,n);h&&(h.chipsDelta&&(o+=h.chipsDelta),h.multDelta&&(l+=h.multDelta),h.multMul&&(l*=h.multMul),c.push(h))}const u=Math.round(o*l);return{hand:t,baseChips:s,baseMult:a,finalChips:o,finalMult:l,total:u,steps:c}}function Kp(t,e,n){const i=t.effect;return i.kind==="chips"?{source:`${t.name} +${i.amount} chips`,chipsDelta:i.amount,jokerId:t.id}:i.kind==="mult"?{source:`${t.name} +${i.amount} Mult`,multDelta:i.amount,jokerId:t.id}:i.kind==="pair-mult"?Zp(e.type)?{source:`${t.name} +${i.amount} Mult`,multDelta:i.amount,jokerId:t.id}:null:i.kind==="flush-mult-mul"?e.type.includes("Flush")?{source:`${t.name} x${i.amount} Mult`,multMul:i.amount,jokerId:t.id}:null:i.kind==="first-hand-chips"?n.handsLeftBeforePlay!==n.handsPerRound?null:{source:`${t.name} +${i.amount} chips`,chipsDelta:i.amount,jokerId:t.id}:null}function Zp(t){return t==="Pair"||t==="Two Pair"||t==="Three of a Kind"||t==="Full House"||t==="Four of a Kind"||t==="Five of a Kind"||t==="Flush House"||t==="Flush Five"}function Jp(t){return`${t.rank===14?"A":t.rank===13?"K":t.rank===12?"Q":t.rank===11?"J":`${t.rank}`}${t.suit==="spades"?"♠":t.suit==="hearts"?"♥":t.suit==="diamonds"?"♦":"♣"}`}var Qp={seed:Math.floor(Math.random()*1e9),handSize:8,handsPerRound:4,discardsPerRound:3,startingMoney:4},Dc=[300,800,2e3,5e3,11e3,2e4,35e3,5e4];var Ic=5,em=[{key:"chip-magnet",name:"Chip Magnet",description:"+40 chips every hand.",rarity:"common",price:5,effect:{kind:"chips",amount:40}},{key:"red-mult",name:"Red Mult",description:"+6 Mult every hand.",rarity:"common",price:5,effect:{kind:"mult",amount:6}},{key:"pair-trader",name:"Pair Trader",description:"+12 Mult on Pair-family hands.",rarity:"uncommon",price:6,effect:{kind:"pair-mult",amount:12}},{key:"flush-spark",name:"Flush Spark",description:"x1.5 Mult on Flush hands.",rarity:"rare",price:7,effect:{kind:"flush-mult-mul",amount:1.5}},{key:"opening-act",name:"Opening Act",description:"+80 chips on the first hand of a blind.",rarity:"uncommon",price:6,effect:{kind:"first-hand-chips",amount:80}},{key:"cashback",name:"Cashback",description:"+$1 when a blind is cleared.",rarity:"common",price:5,effect:{kind:"economy-clear",amount:1}}],tm=["High Card","Pair","Two Pair","Three of a Kind","Straight","Flush","Full House","Four of a Kind"],Uc=["bonus","mult","wild","glass","steel","gold","lucky"],Nc=["foil","holographic","polychrome"];function Vi(t){return t.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" ")}function zl(t){return{...t}}function $n(t){return t.map(zl)}function Vl(t){return{...t,effect:{...t.effect}}}function Oc(t){return t.map(Vl)}function Gl(t){return{...t,effect:{...t.effect}}}function Fc(t){return t.map(Gl)}function nm(t){return t.kind==="joker"?{kind:"joker",joker:Vl(t.joker)}:t.kind==="consumable"?{kind:"consumable",consumable:Gl(t.consumable)}:{kind:"playing-card",card:zl(t.card),name:t.name,description:t.description,price:t.price,sellValue:t.sellValue}}function Bc(t){return t?{visit:t.visit,rerolls:t.rerolls,rerollCost:t.rerollCost,offers:t.offers.map(e=>({id:e.id,sold:e.sold,item:nm(e.item)}))}:null}function kc(){return Object.fromEntries(Object.keys(ys).map(t=>[t,{level:1,chips:ys[t].chips,mult:ys[t].mult}]))}function zc(t){return Object.fromEntries(Object.keys(t).map(e=>[e,{...t[e]}]))}var im=class ld{config;rng;rngDrawCount=0;phase="play";ante=1;blindIndex=0;money;ownedDeck=[];deck=[];discardPile=[];hand=[];selected=new Set;handsLeft;discardsLeft;roundScore=0;target=0;handLevels;jokers=[];consumables=[];shop=null;shopVisit=0;lastScore=null;listeners=new Set;constructor(e={},n=!0){this.config={...Qp,...e},this.rng=this.createTrackedRng(this.config.seed),this.money=this.config.startingMoney,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.handLevels=kc(),this.ownedDeck=to(),n&&this.startBlind()}static fromSnapshot(e){const n=new ld(e.config,!1);return n.loadSnapshot(e),n}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(){for(const e of this.listeners)e()}getRngDrawCount(){return this.rngDrawCount}targetForCurrentBlind(){const e=this.blindIndex===0?1:this.blindIndex===1?1.5:2;return Math.round(Dc[Math.min(this.ante-1,Dc.length-1)]*e)}startBlind(){this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=this.config.handsPerRound,this.discardsLeft=this.config.discardsPerRound,this.deck=Xp($n(this.ownedDeck),this.rng),this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=null,this.drawToFull(),this.phase="play",this.emit()}drawToFull(){for(;this.hand.length<this.config.handSize&&this.deck.length>0;)this.hand.push(this.deck.pop())}toggleSelect(e){return this.phase!=="play"?!1:this.selected.has(e)?(this.selected.delete(e),this.emit(),!1):this.selected.size>=5?!1:(this.selected.add(e),this.emit(),!0)}selectedCards(){return this.hand.filter(e=>this.selected.has(e.id))}canPlay(){return this.phase==="play"&&this.selected.size>0&&this.handsLeft>0}canDiscard(){return this.phase==="play"&&this.selected.size>0&&this.discardsLeft>0}playSelected(){if(!this.canPlay())return null;const e=this.selectedCards(),n=od(e),i=this.handLevels[n.type],r=this.handsLeft,s=jp(n,i,{jokers:this.jokers,handsLeftBeforePlay:r,handsPerRound:this.config.handsPerRound});return this.roundScore+=s.total,this.handsLeft-=1,this.lastScore=s,this.hand=this.hand.filter(a=>!this.selected.has(a.id)),this.discardPile.push(...e),this.selected.clear(),this.drawToFull(),this.roundScore>=this.target?this.onBlindCleared():this.handsLeft<=0&&(this.phase="game-over"),this.emit(),s}discardSelected(){if(!this.canDiscard())return null;const e=this.selectedCards();return this.hand=this.hand.filter(n=>!this.selected.has(n.id)),this.discardPile.push(...e),this.discardsLeft-=1,this.selected.clear(),this.drawToFull(),this.emit(),e}onBlindCleared(){const e=3+this.blindIndex;if(this.money+=e,this.money+=this.jokers.reduce((n,i)=>i.effect.kind==="economy-clear"?n+i.effect.amount:n,0),this.blindIndex<2)this.blindIndex=this.blindIndex+1;else if(this.blindIndex=0,this.ante+=1,this.ante>8){this.phase="win";return}this.target=this.targetForCurrentBlind(),this.roundScore=0,this.handsLeft=0,this.discardsLeft=0,this.deck=[],this.discardPile=[],this.hand=[],this.selected.clear(),this.shop=this.createShopState(),this.phase="shop"}continueFromShop(){return this.phase!=="shop"?!1:(this.startBlind(),!0)}canBuyOffer(e){const n=this.findOffer(e);if(!n||n.sold)return!1;const i=this.priceForItem(n.item);return this.money<i?!1:n.item.kind==="joker"?this.jokers.length<5:n.item.kind==="consumable"?this.consumables.length<2:!0}buyOffer(e){const n=this.findOffer(e);if(!n||!this.canBuyOffer(e))return!1;const i=this.priceForItem(n.item);return this.money-=i,n.sold=!0,n.item.kind==="joker"?this.jokers.push(Vl(n.item.joker)):n.item.kind==="consumable"?this.consumables.push(Gl(n.item.consumable)):this.ownedDeck.push(zl(n.item.card)),this.emit(),!0}rerollShop(){return this.phase!=="shop"||!this.shop||this.money<this.shop.rerollCost?!1:(this.money-=this.shop.rerollCost,this.shop.rerolls+=1,this.shop.rerollCost=Ic+this.shop.rerolls,this.shop.offers=this.createShopOffers(this.shop.visit,this.shop.rerolls),this.emit(),!0)}sellJoker(e){const n=this.jokers.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.jokers.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}sellConsumable(e){const n=this.consumables.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.consumables.splice(n,1);return this.money+=i.sellValue,this.emit(),!0}useConsumable(e){const n=this.consumables.findIndex(r=>r.id===e);if(n<0)return!1;const[i]=this.consumables.splice(n,1);return this.applyConsumable(i),this.emit(),!0}createShopState(){const e=++this.shopVisit;return{visit:e,offers:this.createShopOffers(e,0),rerolls:0,rerollCost:Ic}}createShopOffers(e,n){return[this.makeShopOffer(e,n,0,this.makeJokerItem()),this.makeShopOffer(e,n,1,this.makeJokerItem()),this.makeShopOffer(e,n,2,this.makeConsumableItem()),this.makeShopOffer(e,n,3,this.makeConsumableItem()),this.makeShopOffer(e,n,4,this.makePlayingCardItem()),this.makeShopOffer(e,n,5,this.makePlayingCardItem())]}makeShopOffer(e,n,i,r){return{id:`shop-${e}-${n}-${i}`,item:r,sold:!1}}makeJokerItem(){const e=this.pick(em);return{kind:"joker",joker:{...e,id:this.makeRunId("joker"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect}}}}makeConsumableItem(){const e=this.makeConsumableTemplate();return{kind:"consumable",consumable:{...e,id:this.makeRunId("consumable"),sellValue:Math.max(1,Math.floor(e.price/2)),effect:{...e.effect}}}}makeConsumableTemplate(){const e=this.rng();if(e<.42){const i=this.pick(tm);return{key:`planet-${i.toLowerCase().replaceAll(" ","-")}`,name:`${i} Planet`,description:`Upgrade ${i} by 1 level.`,type:"planet",price:3,effect:{kind:"planet",handType:i}}}if(e<.82){const i=this.pick(Uc);return{key:`tarot-${i}`,name:`${Vi(i)} Tarot`,description:`Add ${Vi(i)} to a random deck card.`,type:"tarot",price:4,effect:{kind:"enhance-card",enhancement:i}}}const n=this.pick(Nc);return{key:`spectral-${n}`,name:`${Vi(n)} Spectral`,description:`Add ${Vi(n)} to a random deck card.`,type:"spectral",price:5,effect:{kind:"edition-card",edition:n}}}makePlayingCardItem(){const e=this.pick(rd),n=this.pick(sd),i=this.pick(Uc),r=ad(e,n);return r.enhancement=i,i==="stone"&&(r.baseChips=50),this.rng()>.82&&(r.edition=this.pick(Nc)),{kind:"playing-card",card:r,name:`${Ca[n]} of ${Vi(e)}${r.edition!=="base"?` (${Vi(r.edition)})`:""}`,description:`Add a ${Vi(i)} card to your deck.`,price:r.edition==="base"?4:6,sellValue:1}}findOffer(e){return this.shop?.offers.find(n=>n.id===e)??null}priceForItem(e){return e.kind==="joker"?e.joker.price:e.kind==="consumable"?e.consumable.price:e.price}applyConsumable(e){const n=e.effect;if(n.kind==="planet"){this.upgradeHandLevel(n.handType);return}if(n.kind==="enhance-card"){const r=this.pickOwnedDeckCard(s=>s.enhancement==="none")??this.pickOwnedDeckCard();if(!r)return;r.enhancement=n.enhancement,n.enhancement==="stone"&&(r.baseChips=50);return}const i=this.pickOwnedDeckCard(r=>r.edition==="base")??this.pickOwnedDeckCard();i&&(i.edition=n.edition)}upgradeHandLevel(e){const n=ys[e],i=this.handLevels[e].level+1;this.handLevels[e]={level:i,chips:n.chips+n.chipsPerLvl*(i-1),mult:n.mult+n.multPerLvl*(i-1)}}pickOwnedDeckCard(e){const n=e?this.ownedDeck.filter(e):this.ownedDeck;return n.length===0?null:n[Math.floor(this.rng()*n.length)]}pick(e){return e[Math.floor(this.rng()*e.length)]}makeRunId(e){return`${e}-${this.rngDrawCount}-${Math.floor(this.rng()*1e6)}`}reset(e){if(typeof e=="object"&&e!==null){this.loadSnapshot(e),this.emit();return}this.config={...this.config,seed:typeof e=="number"?e:Math.floor(Math.random()*1e9)},this.rng=this.createTrackedRng(this.config.seed),this.ante=1,this.blindIndex=0,this.money=this.config.startingMoney,this.ownedDeck=to(),this.jokers=[],this.consumables=[],this.shop=null,this.shopVisit=0,this.handLevels=kc(),this.lastScore=null,this.startBlind()}toSnapshot(){return{version:2,config:{...this.config},rngDrawCount:this.rngDrawCount,phase:this.phase,ante:this.ante,blindIndex:this.blindIndex,money:this.money,ownedDeck:$n(this.ownedDeck),deck:$n(this.deck),discardPile:$n(this.discardPile),hand:$n(this.hand),selected:[...this.selected],handsLeft:this.handsLeft,discardsLeft:this.discardsLeft,roundScore:this.roundScore,target:this.target,handLevels:zc(this.handLevels),jokers:Oc(this.jokers),consumables:Fc(this.consumables),shop:Bc(this.shop)}}loadSnapshot(e){const n=e.version;if(n!==1&&n!==2)throw new Error(`Unsupported snapshot version: ${n}`);const i=this.normalizeSnapshot(e);this.config={...i.config},this.rng=this.createTrackedRng(i.config.seed,i.rngDrawCount),this.phase=i.phase,this.ante=i.ante,this.blindIndex=i.blindIndex,this.money=i.money,this.ownedDeck=$n(i.ownedDeck),this.deck=$n(i.deck),this.discardPile=$n(i.discardPile),this.hand=$n(i.hand),this.selected=new Set(i.selected),this.handsLeft=i.handsLeft,this.discardsLeft=i.discardsLeft,this.roundScore=i.roundScore,this.target=i.target,this.handLevels=zc(i.handLevels),this.jokers=Oc(i.jokers),this.consumables=Fc(i.consumables),this.shop=Bc(i.shop),this.shopVisit=i.shop?.visit??this.completedShopCount(),this.lastScore=null}normalizeSnapshot(e){if(e.version===2)return e;const n=e,i=[...n.deck,...n.discardPile,...n.hand],r=new Set,s=i.filter(a=>r.has(a.id)?!1:(r.add(a.id),!0));return{...n,version:2,ownedDeck:s.length>0?s:to(),jokers:[],consumables:[],shop:null}}completedShopCount(){return Math.max(0,(this.ante-1)*3+this.blindIndex)}createTrackedRng(e,n=0){const i=Wp(e);for(let r=0;r<n;r++)i();return this.rngDrawCount=n,()=>(this.rngDrawCount+=1,i())}},Ur={spades:0,hearts:1,diamonds:2,clubs:3},Vc=[[14,13,12,11,10],[13,12,11,10,9],[12,11,10,9,8],[11,10,9,8,7],[10,9,8,7,6],[9,8,7,6,5],[8,7,6,5,4],[7,6,5,4,3],[6,5,4,3,2],[5,4,3,2,14]];function cd(t,e,n){return Ur[t.suit]-Ur[e.suit]||(n.get(t.id)??0)-(n.get(e.id)??0)}function rm(t){const e=new Map(t.map((a,o)=>[a.id,o])),n=new Set(t.filter(a=>a.enhancement!=="stone").map(a=>a.rank));let i=Vc[0],r=-1;for(const a of Vc){const o=a.reduce((l,c)=>l+(n.has(c)?1:0),0);o>r&&(r=o,i=a)}const s=new Map(i.map((a,o)=>[a,o]));return t.slice().sort((a,o)=>{const l=a.enhancement==="stone";if(l!==(o.enhancement==="stone"))return l?1:-1;const c=s.get(a.rank),u=s.get(o.rank),d=c!==void 0,h=u!==void 0;return d!==h?d?-1:1:d&&h&&c!==u?c-u:a.rank!==o.rank?o.rank-a.rank:cd(a,o,e)})}function sm(t){const e=new Map(t.map((l,c)=>[l.id,c])),n=t.filter(l=>l.enhancement!=="stone"),i=n.filter(l=>l.enhancement==="wild").length,r=new Map;Object.keys(Ur).forEach(l=>r.set(l,0));for(const l of n)l.enhancement!=="wild"&&r.set(l.suit,(r.get(l.suit)??0)+1);const s=Object.keys(Ur).sort((l,c)=>{const u=(r.get(l)??0)+i;return(r.get(c)??0)+i-u||Ur[l]-Ur[c]}),a=s[0],o=new Map(s.map((l,c)=>[l,c]));return t.slice().sort((l,c)=>{const u=l.enhancement==="stone";if(u!==(c.enhancement==="stone"))return u?1:-1;const d=l.enhancement==="wild"?0:o.get(l.suit)??99,h=c.enhancement==="wild"?0:o.get(c.suit)??99;if(d!==h)return d-h;if(d<=0&&h<=0&&l.enhancement!==c.enhancement){if(l.suit===a&&l.enhancement!=="wild")return-1;if(c.suit===a&&c.enhancement!=="wild")return 1}return l.rank!==c.rank?c.rank-l.rank:cd(l,c,e)})}var Qo=1e3,ni=1001,el=1002,Wt=1003,am=1004,om=1005,fn=1006,lm=1007,Hl=1008,wi=1009,cm=1010,um=1011,ud=1012,hm=1013,sr=1014,za=1015,ar=1016,hd=1017,dd=1018,fd=1020,dm=35902,fm=35899,pm=1021,mm=1022,Ls=1023,Ds=1026,pd=1027,_m=1028,md=1029,Ra=1030,_d=1031,gd=1033,gm=33776,vm=33777,Mm=33778,Sm=33779,xm=35840,ym=35841,Tm=35842,Em=35843,bm=36196,Am=37492,wm=37496,Cm=37488,Rm=37489,Pm=37490,Lm=37491,Dm=37808,Im=37809,Um=37810,Nm=37811,Om=37812,Fm=37813,Bm=37814,km=37815,zm=37816,Vm=37817,Gm=37818,Hm=37819,Wm=37820,Xm=37821,qm=36492,Ym=36494,$m=36495,jm=36283,Km=36284,Zm=36285,Jm=36286,Pa=2300,tl=2301,no=2302,Gc=2303,Hc=2400,Wc=2401,Xc=2402,Qm=3200;var Ht="srgb",nl="srgb-linear",La="linear",Da="srgb",io=7680;var e_=35044;var qr=2e3;function t_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function n_(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Is(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function i_(){const t=Is("canvas");return t.style.display="block",t}var qc={},Yr=null;function Yc(...t){const e="THREE."+t.shift();Yr?Yr("log",e,...t):console.log(e,...t)}function vd(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ce(...t){t=vd(t);const e="THREE."+t.shift();if(Yr)Yr("warn",e,...t);else{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Pe(...t){t=vd(t);const e="THREE."+t.shift();if(Yr)Yr("error",e,...t);else{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function il(...t){const e=t.join(" ");e in qc||(qc[e]=!0,Ce(...t))}function r_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}var s_={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3},lr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ro=Math.PI/180,rl=180/Math.PI;function Os(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function a_(t,e){return(t%e+e)%e}function so(t,e,n){return(1-n)*t+n*e}function is(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var Xe=class Md{static{Md.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},cr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,s,a){let o=n[i+0],l=n[i+1],c=n[i+2],u=n[i+3],d=r[s+0],h=r[s+1],f=r[s+2],g=r[s+3];if(u!==g||o!==d||l!==h||c!==f){let _=o*d+l*h+c*f+u*g;_<0&&(d=-d,h=-h,f=-f,g=-g,_=-_);let m=1-a;if(_<.9995){const p=Math.acos(_),M=Math.sin(p);m=Math.sin(m*p)/M,a=Math.sin(a*p)/M,o=o*m+d*a,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a}else{o=o*m+d*a,l=l*m+h*a,c=c*m+f*a,u=u*m+g*a;const p=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=p,l*=p,c*=p,u*=p}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,s){const a=n[i],o=n[i+1],l=n[i+2],c=n[i+3],u=r[s],d=r[s+1],h=r[s+2],f=r[s+3];return t[e]=a*f+c*u+o*h-l*d,t[e+1]=o*f+c*d+l*u-a*h,t[e+2]=l*f+c*h+a*d-o*u,t[e+3]=c*f-a*u-o*d-l*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(n/2),c=a(i/2),u=a(r/2),d=o(n/2),h=o(i/2),f=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"YXZ":this._x=d*c*u+l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"ZXY":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u-d*h*f;break;case"ZYX":this._x=d*c*u-l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u+d*h*f;break;case"YZX":this._x=d*c*u+l*h*f,this._y=l*h*u+d*c*f,this._z=l*c*f-d*h*u,this._w=l*c*u-d*h*f;break;case"XZY":this._x=d*c*u-l*h*f,this._y=l*h*u-d*c*f,this._z=l*c*f+d*h*u,this._w=l*c*u+d*h*f;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=n+a+u;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-o)*h,this._y=(r-l)*h,this._z=(s-i)*h}else if(n>a&&n>u){const h=2*Math.sqrt(1+n-a-u);this._w=(c-o)/h,this._x=.25*h,this._y=(i+s)/h,this._z=(r+l)/h}else if(a>u){const h=2*Math.sqrt(1+a-n-u);this._w=(r-l)/h,this._x=(i+s)/h,this._y=.25*h,this._z=(o+c)/h}else{const h=2*Math.sqrt(1+u-n-a);this._w=(s-i)/h,this._x=(r+l)/h,this._y=(o+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=n*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-n*l,this._z=r*c+s*l+n*o-i*a,this._w=s*c-n*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,s=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,s=-s,a=-a);let o=1-e;if(a<.9995){const l=Math.acos(a),c=Math.sin(l);o=Math.sin(o*l)/c,e=Math.sin(e*l)/c,this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this._onChangeCallback()}else this._x=this._x*o+n*e,this._y=this._y*o+i*e,this._z=this._z*o+r*e,this._w=this._w*o+s*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},W=class Sd{static{Sd.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion($c.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion($c.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ao.copy(this).projectOnVector(e),this.sub(ao)}reflect(e){return this.sub(ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ao=new W,$c=new cr,Fe=class xd{static{xd.prototype.isMatrix3=!0}constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],M=r[1],T=r[4],E=r[7],b=r[2],R=r[5],C=r[8];return s[0]=a*_+o*M+l*b,s[3]=a*m+o*T+l*R,s[6]=a*p+o*E+l*C,s[1]=c*_+u*M+d*b,s[4]=c*m+u*T+d*R,s[7]=c*p+u*E+d*C,s[2]=h*_+f*M+g*b,s[5]=h*m+f*T+g*R,s[8]=h*p+f*E+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=n*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=f*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(oo.makeScale(e,n)),this}rotate(e){return this.premultiply(oo.makeRotation(-e)),this}translate(e,n){return this.premultiply(oo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},oo=new Fe,jc=new Fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function o_(){const t={enabled:!0,workingColorSpace:nl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer==="srgb"&&(r.r=ii(r.r),r.g=ii(r.g),r.b=ii(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer==="srgb"&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===""?La:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return il("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return il("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[nl]:{primaries:e,whitePoint:i,transfer:La,toXYZ:jc,fromXYZ:Kc,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:Da,toXYZ:jc,fromXYZ:Kc,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),t}var $e=o_();function ii(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Br(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var pr,l_=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{pr===void 0&&(pr=Is("canvas")),pr.width=t.width,pr.height=t.height;const i=pr.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=pr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Is("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ii(r[s]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ii(e[n]/255)*255):e[n]=ii(e[n]);return{data:e,width:t.width,height:t.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},c_=0,Wl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=Os(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(lo(i[s].image)):r.push(lo(i[s]))}else r=lo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function lo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?l_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}var u_=0,co=new W,Sn=class va extends lr{constructor(e=va.DEFAULT_IMAGE,n=va.DEFAULT_MAPPING,i=ni,r=ni,s=fn,a=Hl,o=Ls,l=wi,c=va.DEFAULT_ANISOTROPY,u=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Os(),this.name="",this.source=new Wl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ce(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qo:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case el:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qo:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case el:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Sn.DEFAULT_IMAGE=null;Sn.DEFAULT_MAPPING=300;Sn.DEFAULT_ANISOTROPY=1;var At=class yd{static{yd.prototype.isVector4=!0}constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,E=(f+1)/2,b=(p+1)/2,R=(u+h)/4,C=(d+_)/4,v=(g+m)/4;return T>E&&T>b?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=R/i,s=C/i):E>b?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=R/r,s=v/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=C/s,r=v/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},h_=class extends lr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new At(0,0,t,e),this.scissorTest=!1,this.viewport=new At(0,0,t,e),this.textures=[];const i=new Sn({width:t,height:e,depth:n.depth}),r=n.count;for(let s=0;s<r;s++)this.textures[s]=i.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Wl(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}},Xn=class extends h_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Td=class extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},d_=class extends Sn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},St=class sl{static{sl.prototype.isMatrix4=!0}constructor(e,n,i,r,s,a,o,l,c,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,h,f,g,_,m)}set(e,n,i,r,s,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),a=1/mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=f+g*c,n[5]=h-_*c,n[9]=-o*l,n[2]=_-h*c,n[6]=g+f*c,n[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;n[0]=h+_*o,n[4]=g*o-f,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=f*o-g,n[6]=_+h*o,n[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;n[0]=h-_*o,n[4]=-a*d,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*u,n[9]=_-h*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;n[0]=l*u,n[4]=g*c-f,n[8]=h*c+_,n[1]=l*d,n[5]=_*c+h,n[9]=f*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-h*d,n[8]=g*d+f,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=f*d+g,n[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=h*d+_,n[5]=a*u,n[9]=f*d-g,n[2]=g*d-f,n[6]=o*u,n[10]=_*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(f_,e,p_)}lookAt(e,n,i){const r=this.elements;return an.subVectors(e,n),an.lengthSq()===0&&(an.z=1),an.normalize(),hi.crossVectors(i,an),hi.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),hi.crossVectors(i,an)),hi.normalize(),Ws.crossVectors(an,hi),r[0]=hi.x,r[4]=Ws.x,r[8]=an.x,r[1]=hi.y,r[5]=Ws.y,r[9]=an.y,r[2]=hi.z,r[6]=Ws.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],M=i[3],T=i[7],E=i[11],b=i[15],R=r[0],C=r[4],v=r[8],x=r[12],D=r[1],w=r[5],L=r[9],B=r[13],I=r[2],k=r[6],z=r[10],F=r[14],j=r[3],ee=r[7],ie=r[11],me=r[15];return s[0]=a*R+o*D+l*I+c*j,s[4]=a*C+o*w+l*k+c*ee,s[8]=a*v+o*L+l*z+c*ie,s[12]=a*x+o*B+l*F+c*me,s[1]=u*R+d*D+h*I+f*j,s[5]=u*C+d*w+h*k+f*ee,s[9]=u*v+d*L+h*z+f*ie,s[13]=u*x+d*B+h*F+f*me,s[2]=g*R+_*D+m*I+p*j,s[6]=g*C+_*w+m*k+p*ee,s[10]=g*v+_*L+m*z+p*ie,s[14]=g*x+_*B+m*F+p*me,s[3]=M*R+T*D+E*I+b*j,s[7]=M*C+T*w+E*k+b*ee,s[11]=M*v+T*L+E*z+b*ie,s[15]=M*x+T*B+E*F+b*me,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=l*f-c*h,T=o*f-c*d,E=o*h-l*d,b=a*f-c*u,R=a*h-l*u,C=a*d-o*u;return n*(_*M-m*T+p*E)-i*(g*M-m*b+p*R)+r*(g*T-_*b+p*C)-s*(g*E-_*R+m*C)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=n*o-i*a,T=n*l-r*a,E=n*c-s*a,b=i*l-r*o,R=i*c-s*o,C=r*c-s*l,v=u*_-d*g,x=u*m-h*g,D=u*p-f*g,w=d*m-h*_,L=d*p-f*_,B=h*p-f*m,I=M*B-T*L+E*w+b*D-R*x+C*v;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/I;return e[0]=(o*B-l*L+c*w)*k,e[1]=(r*L-i*B-s*w)*k,e[2]=(_*C-m*R+p*b)*k,e[3]=(h*R-d*C-f*b)*k,e[4]=(l*D-a*B-c*x)*k,e[5]=(n*B-r*D+s*x)*k,e[6]=(m*E-g*C-p*T)*k,e[7]=(u*C-h*E+f*T)*k,e[8]=(a*L-o*D+c*v)*k,e[9]=(i*D-n*L-s*v)*k,e[10]=(g*R-_*E+p*M)*k,e[11]=(d*E-u*R-f*M)*k,e[12]=(o*x-a*w-l*v)*k,e[13]=(n*w-i*x+r*v)*k,e[14]=(_*T-g*b-m*M)*k,e[15]=(u*b-d*T+h*M)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,M=l*c,T=l*u,E=l*d,b=i.x,R=i.y,C=i.z;return r[0]=(1-(_+p))*b,r[1]=(f+E)*b,r[2]=(g-T)*b,r[3]=0,r[4]=(f-E)*R,r[5]=(1-(h+p))*R,r[6]=(m+M)*R,r[7]=0,r[8]=(g+T)*C,r[9]=(m-M)*C,r[10]=(1-(h+_))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),l=mr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Ln.copy(this);const c=1/a,u=1/o,d=1/l;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,n.setFromRotationMatrix(Ln),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=qr,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===2e3)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===2001)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=qr,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),h=-(n+e)/(n-e),f=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===2e3)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===2001)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},mr=new W,Ln=new St,f_=new W(0,0,0),p_=new W(1,1,1),hi=new W,Ws=new W,an=new W,Zc=new St,Jc=new cr,$r=class Ed{constructor(e=0,n=0,i=0,r=Ed.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zc,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$r.DEFAULT_ORDER="XYZ";var Xl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},m_=0,Qc=new W,_r=new cr,jn=new St,Xs=new W,rs=new W,__=new W,g_=new cr,eu=new W(1,0,0),tu=new W(0,1,0),nu=new W(0,0,1),iu={type:"added"},v_={type:"removed"},gr={type:"childadded",child:null},uo={type:"childremoved",child:null},Mn=class Ma extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=Os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ma.DEFAULT_UP.clone();const e=new W,n=new $r,i=new cr,r=new W(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new St},normalMatrix:{value:new Fe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=Ma.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ma.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.multiply(_r),this}rotateOnWorldAxis(e,n){return _r.setFromAxisAngle(e,n),this.quaternion.premultiply(_r),this}rotateX(e){return this.rotateOnAxis(eu,e)}rotateY(e){return this.rotateOnAxis(tu,e)}rotateZ(e){return this.rotateOnAxis(nu,e)}translateOnAxis(e,n){return Qc.copy(e).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(eu,e)}translateY(e){return this.translateOnAxis(tu,e)}translateZ(e){return this.translateOnAxis(nu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xs.copy(e):Xs.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),rs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(rs,Xs,this.up):jn.lookAt(Xs,rs,this.up),this.quaternion.setFromRotationMatrix(jn),r&&(jn.extractRotation(r.matrixWorld),_r.setFromRotationMatrix(jn),this.quaternion.premultiply(_r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(iu),gr.child=e,this.dispatchEvent(gr),gr.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(v_),uo.child=e,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(jn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(iu),gr.child=e,this.dispatchEvent(gr),gr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,n);if(s!==void 0)return s}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,e,__),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rs,g_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}};Mn.DEFAULT_UP=new W(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ti=class extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}},M_={type:"move"},ho=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ti,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ti,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ti,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const g of t.hand.values()){const _=e.getJointPose(g,n),m=this._getHandJoint(l,g);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),h=.02,f=.005;l.inputState.pinching&&d>h+f?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=h-f&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,o.eventsEnabled&&o.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M_)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ti;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},qs={h:0,s:0,l:0};function fo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var Ge=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ht){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,$e.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=$e.workingColorSpace){return this.r=t,this.g=e,this.b=n,$e.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=$e.workingColorSpace){if(t=a_(t,1),e=je(e,0,1),n=je(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,s=2*n-r;this.r=fo(s,r,t+1/3),this.g=fo(s,r,t),this.b=fo(s,r,t-1/3)}return $e.colorSpaceToWorking(this,i),this}setStyle(t,e=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ce("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);Ce("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ht){const n=bd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ce("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ht){return $e.workingToColorSpace(Bt.copy(this),t),Math.round(je(Bt.r*255,0,255))*65536+Math.round(je(Bt.g*255,0,255))*256+Math.round(je(Bt.b*255,0,255))}getHexString(t=Ht){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=$e.workingColorSpace){$e.workingToColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b,s=Math.max(n,i,r),a=Math.min(n,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case n:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-n)/u+2;break;case r:o=(n-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=$e.workingColorSpace){return $e.workingToColorSpace(Bt.copy(this),e),t.r=Bt.r,t.g=Bt.g,t.b=Bt.b,t}getStyle(t=Ht){$e.workingToColorSpace(Bt.copy(this),t);const e=Bt.r,n=Bt.g,i=Bt.b;return t!=="srgb"?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(di),this.setHSL(di.h+t,di.s+e,di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(di),t.getHSL(qs);const n=so(di.h,qs.h,e),i=so(di.s,qs.s,e),r=so(di.l,qs.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Bt=new Ge;Ge.NAMES=bd;var S_=class extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Dn=new W,Kn=new W,po=new W,Zn=new W,vr=new W,Mr=new W,ru=new W,mo=new W,_o=new W,go=new W,vo=new At,Mo=new At,So=new At,ss=class Rr{constructor(e=new W,n=new W,i=new W){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Dn.subVectors(e,n),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Dn.subVectors(r,n),Kn.subVectors(i,n),po.subVectors(e,n);const a=Dn.dot(Dn),o=Dn.dot(Kn),l=Dn.dot(po),c=Kn.dot(Kn),u=Kn.dot(po),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(a,Zn.y),l.addScaledVector(o,Zn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return vo.setScalar(0),Mo.setScalar(0),So.setScalar(0),vo.fromBufferAttribute(e,n),Mo.fromBufferAttribute(e,i),So.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(vo,s.x),a.addScaledVector(Mo,s.y),a.addScaledVector(So,s.z),a}static isFrontFacing(e,n,i,r){return Dn.subVectors(i,n),Kn.subVectors(e,n),Dn.cross(Kn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),Kn.subVectors(this.a,this.b),Dn.cross(Kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Rr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Rr.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Rr.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Rr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Rr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;vr.subVectors(r,i),Mr.subVectors(s,i),mo.subVectors(e,i);const l=vr.dot(mo),c=Mr.dot(mo);if(l<=0&&c<=0)return n.copy(i);_o.subVectors(e,r);const u=vr.dot(_o),d=Mr.dot(_o);if(u>=0&&d<=u)return n.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(vr,a);go.subVectors(e,s);const f=vr.dot(go),g=Mr.dot(go);if(g>=0&&f<=g)return n.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Mr,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return ru.subVectors(s,r),o=(d-u)/(d-u+(f-g)),n.copy(r).addScaledVector(ru,o);const p=1/(m+_+h);return a=_*p,o=h*p,n.copy(i).addScaledVector(vr,a).addScaledVector(Mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Fs=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,In):In.fromBufferAttribute(r,s),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),$s.subVectors(this.max,as),Sr.subVectors(t.a,as),xr.subVectors(t.b,as),yr.subVectors(t.c,as),fi.subVectors(xr,Sr),pi.subVectors(yr,xr),Gi.subVectors(Sr,yr);let e=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Gi.z,Gi.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Gi.z,0,-Gi.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Gi.y,Gi.x,0];return!xo(e,Sr,xr,yr,$s)||(e=[1,0,0,0,1,0,0,0,1],!xo(e,Sr,xr,yr,$s))?!1:(js.crossVectors(fi,pi),e=[js.x,js.y,js.z],xo(e,Sr,xr,yr,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Jn=[new W,new W,new W,new W,new W,new W,new W,new W],In=new W,Ys=new Fs,Sr=new W,xr=new W,yr=new W,fi=new W,pi=new W,Gi=new W,as=new W,$s=new W,js=new W,Hi=new W;function xo(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Hi.fromArray(t,s);const o=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),c=n.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Tt=new W,Ks=new Xe,x_=0,mn=class extends lr{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:x_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=e_,this.updateRanges=[],this.gpuType=za,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ks.fromBufferAttribute(this,e),Ks.applyMatrix3(t),this.setXY(e,Ks.x,Ks.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix3(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyMatrix4(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.applyNormalMatrix(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Tt.fromBufferAttribute(this,e),Tt.transformDirection(t),this.setXYZ(e,Tt.x,Tt.y,Tt.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=is(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=is(e,this.array)),e}setX(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=is(e,this.array)),e}setY(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=is(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=is(e,this.array)),e}setW(t,e){return this.normalized&&(e=Yt(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Yt(e,this.array),n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}},Ad=class extends mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}},wd=class extends mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}},ri=class extends mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},y_=new Fs,os=new W,yo=new W,Va=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):y_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(os,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(yo)),this.expandByPoint(os.copy(t.center).sub(yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},T_=0,Tn=new St,To=new Mn,Tr=new W,on=new Fs,ls=new Fs,Lt=new W,li=class Cd extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T_++}),this.uuid=Os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?wd:Ad)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Fe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ri(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Va);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ls.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(on.min,ls.min),on.expandByPoint(Lt),Lt.addVectors(on.max,ls.max),on.expandByPoint(Lt)):(on.expandByPoint(ls.min),on.expandByPoint(ls.max))}on.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Tr.fromBufferAttribute(e,c),Lt.add(Tr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let v=0;v<i.count;v++)o[v]=new W,l[v]=new W;const c=new W,u=new W,d=new W,h=new Xe,f=new Xe,g=new Xe,_=new W,m=new W;function p(v,x,D){c.fromBufferAttribute(i,v),u.fromBufferAttribute(i,x),d.fromBufferAttribute(i,D),h.fromBufferAttribute(s,v),f.fromBufferAttribute(s,x),g.fromBufferAttribute(s,D),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(w),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(w),o[v].add(_),o[x].add(_),o[D].add(_),l[v].add(m),l[x].add(m),l[D].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let v=0,x=M.length;v<x;++v){const D=M[v],w=D.start,L=D.count;for(let B=w,I=w+L;B<I;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const T=new W,E=new W,b=new W,R=new W;function C(v){b.fromBufferAttribute(r,v),R.copy(b);const x=o[v];T.copy(x),T.sub(b.multiplyScalar(b.dot(x))).normalize(),E.crossVectors(R,x);const D=E.dot(l[v])<0?-1:1;a.setXYZW(v,T.x,T.y,T.z,D)}for(let v=0,x=M.length;v<x;++v){const D=M[v],w=D.start,L=D.count;for(let B=w,I=w+L;B<I;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,d=new W;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=n.count;h<f;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new mn(h,u,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Cd,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},E_=0,Jr=class extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:E_++}),this.uuid=Os(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=io,this.stencilZFail=io,this.stencilZPass=io,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){Ce(`Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){Ce(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Qn=new W,Eo=new W,Zs=new W,mi=new W,bo=new W,Js=new W,Ao=new W,ql=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Eo.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Eo);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Zs),a=mi.dot(this.direction),o=-mi.dot(Zs),l=mi.lengthSq(),c=Math.abs(1-s*s);let u,d,h,f;if(c>0)if(u=s*o-a,d=s*a-o,f=r*c,u>=0)if(d>=-f)if(d<=f){const g=1/c;u*=g,d*=g,h=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;else d<=-f?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l):d<=f?(u=0,d=Math.min(Math.max(-r,-o),r),h=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),h=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),h=-u*u+d*(d+2*o)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Eo).addScaledVector(Zs,d),h}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);const n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=n-s,o=n+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),n>s||r>i||((r>n||isNaN(n))&&(n=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),n>o||a>i)||((a>n||n!==n)&&(n=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,i,r){bo.subVectors(e,t),Js.subVectors(n,t),Ao.crossVectors(bo,Js);let s=this.direction.dot(Ao),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;mi.subVectors(this.origin,t);const o=a*this.direction.dot(Js.crossVectors(mi,Js));if(o<0)return null;const l=a*this.direction.dot(bo.cross(mi));if(l<0||o+l>s)return null;const c=-a*mi.dot(Ao);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rd=class extends Jr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},su=new St,Wi=new ql,Qs=new Va,au=new W,ea=new W,ta=new W,na=new W,wo=new W,ia=new W,ou=new W,ra=new W,Xt=class extends Mn{constructor(t=new li,e=new Rd){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ia.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(wo.fromBufferAttribute(u,t),s?ia.addScaledVector(wo,c):ia.addScaledVector(wo.sub(e),c))}e.add(ia)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Wi.copy(t.ray).recast(t.near),!(Qs.containsPoint(Wi.origin)===!1&&(Wi.intersectSphere(Qs,au)===null||Wi.origin.distanceToSquared(au)>(t.far-t.near)**2))&&(su.copy(r).invert(),Wi.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wi)))}_computeIntersections(t,e,n){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,h=r.drawRange;if(a!==null)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,h.start),M=Math.min(a.count,Math.min(_.start+_.count,h.start+h.count));for(let T=p,E=M;T<E;T+=3){const b=a.getX(T),R=a.getX(T+1),C=a.getX(T+2);i=sa(this,m,t,n,l,c,u,b,R,C),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const f=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let _=f,m=g;_<m;_+=3){const p=a.getX(_),M=a.getX(_+1),T=a.getX(_+2);i=sa(this,s,t,n,l,c,u,p,M,T),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let f=0,g=d.length;f<g;f++){const _=d[f],m=s[_.materialIndex],p=Math.max(_.start,h.start),M=Math.min(o.count,Math.min(_.start+_.count,h.start+h.count));for(let T=p,E=M;T<E;T+=3){const b=T,R=T+1,C=T+2;i=sa(this,m,t,n,l,c,u,b,R,C),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{const f=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let _=f,m=g;_<m;_+=3){const p=_,M=_+1,T=_+2;i=sa(this,s,t,n,l,c,u,p,M,T),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};function b_(t,e,n,i,r,s,a,o){let l;if(e.side===1?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===0,o),l===null)return null;ra.copy(o),ra.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ra);return c<n.near||c>n.far?null:{distance:c,point:ra.clone(),object:t}}function sa(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,ea),t.getVertexPosition(l,ta),t.getVertexPosition(c,na);const u=b_(t,e,n,i,ea,ta,na,ou);if(u){const d=new W;ss.getBarycoord(ou,ea,ta,na,d),r&&(u.uv=ss.getInterpolatedAttribute(r,o,l,c,d,new Xe)),s&&(u.uv1=ss.getInterpolatedAttribute(s,o,l,c,d,new Xe)),a&&(u.normal=ss.getInterpolatedAttribute(a,o,l,c,d,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};ss.getNormal(ea,ta,na,h.normal),u.face=h,u.barycoord=d}return u}var A_=class extends Sn{constructor(t=null,e=1,n=1,i,r,s,a,o,l=Wt,c=Wt,u,d){super(null,s,a,o,l,c,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Co=new W,w_=new W,C_=new Fe,vi=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Co.subVectors(n,e).cross(w_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){const i=t.delta(Co),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(s<0||s>1)?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||C_.getNormalMatrix(t),i=this.coplanarPoint(Co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Xi=new Va,R_=new Xe(.5,.5),aa=new W,Yl=class{constructor(t=new vi,e=new vi,n=new vi,i=new vi,r=new vi,s=new vi){this.planes=[t,e,n,i,r,s]}set(t,e,n,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qr,n=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],M=r[13],T=r[14],E=r[15];if(i[0].setComponents(l-s,h-c,m-f,E-p).normalize(),i[1].setComponents(l+s,h+c,m+f,E+p).normalize(),i[2].setComponents(l+a,h+u,m+g,E+M).normalize(),i[3].setComponents(l-a,h-u,m-g,E-M).normalize(),n)i[4].setComponents(o,d,_,T).normalize(),i[5].setComponents(l-o,h-d,m-_,E-T).normalize();else if(i[4].setComponents(l-o,h-d,m-_,E-T).normalize(),e===2e3)i[5].setComponents(l+o,h+d,m+_,E+T).normalize();else if(e===2001)i[5].setComponents(o,d,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xi)}intersectsSprite(t){return Xi.center.set(0,0,0),Xi.radius=.7071067811865476+R_.distanceTo(t.center),Xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(aa.x=i.normal.x>0?t.max.x:t.min.x,aa.y=i.normal.y>0?t.max.y:t.min.y,aa.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(aa)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},P_=class extends Jr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},lu=new St,al=new ql,oa=new Va,la=new W,L_=class extends Mn{constructor(t=new li,e=new P_){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=r,t.ray.intersectsSphere(oa)===!1)return;lu.copy(i).invert(),al.copy(t.ray).applyMatrix4(lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=n.index,c=n.attributes.position;if(l!==null){const u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);for(let h=u,f=d;h<f;h++){const g=l.getX(h);la.fromBufferAttribute(c,g),cu(la,g,o,i,t,e,this)}}else{const u=Math.max(0,s.start),d=Math.min(c.count,s.start+s.count);for(let h=u,f=d;h<f;h++)la.fromBufferAttribute(c,h),cu(la,h,o,i,t,e,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,e=Object.keys(t);if(e.length>0){const n=t[e[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=n.length;i<r;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}};function cu(t,e,n,i,r,s,a){const o=al.distanceSqToPoint(t);if(o<n){const l=new W;al.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Pd=class extends Sn{constructor(t=[],e=301,n,i,r,s,a,o,l,c){super(t,e,n,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ld=class extends Sn{constructor(t,e,n,i,r,s,a,o,l){super(t,e,n,i,r,s,a,o,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},jr=class extends Sn{constructor(t,e,n=sr,i,r,s,a=Wt,o=Wt,l,c=Ds,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super({width:t,height:e,depth:u},i,r,s,a,o,c,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},D_=class extends jr{constructor(t,e=sr,n=301,i,r,s=Wt,a=Wt,o,l=Ds){const c={width:t,height:t,depth:1},u=[c,c,c,c,c,c];super(t,t,e,n,i,r,s,a,o,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dd=class extends Sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},$l=class Id extends li{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ri(c,3)),this.setAttribute("normal",new ri(u,3)),this.setAttribute("uv",new ri(d,2));function g(_,m,p,M,T,E,b,R,C,v,x){const D=E/C,w=b/v,L=E/2,B=b/2,I=R/2,k=C+1,z=v+1;let F=0,j=0;const ee=new W;for(let ie=0;ie<z;ie++){const me=ie*w-B;for(let Me=0;Me<k;Me++)ee[_]=(Me*D-L)*M,ee[m]=me*T,ee[p]=I,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=R>0?1:-1,u.push(ee.x,ee.y,ee.z),d.push(Me/C),d.push(1-ie/v),F+=1}for(let ie=0;ie<v;ie++)for(let me=0;me<C;me++){const Me=h+me+k*ie,Ze=h+me+k*(ie+1),Ue=h+(me+1)+k*(ie+1),q=h+(me+1)+k*ie;l.push(Me,Ze,q),l.push(Ze,Ue,q),j+=6}o.addGroup(f,j,x),f+=j,h+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},rr=class Ud extends li{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=n/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const M=p*h-a;for(let T=0;T<c;T++){const E=T*d-s;g.push(E,-M,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){const T=M+c*p,E=M+c*(p+1),b=M+1+c*(p+1),R=M+1+c*p;f.push(T,E,R),f.push(E,b,R)}this.setIndex(f),this.setAttribute("position",new ri(g,3)),this.setAttribute("normal",new ri(_,3)),this.setAttribute("uv",new ri(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ud(e.width,e.height,e.widthSegments,e.heightSegments)}};function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(uu(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(uu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const r in i)e[r]=i[r]}return e}function uu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function I_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Nd(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var U_={clone:Kr,merge:Gt},N_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends Jr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=N_,this.fragmentShader=O_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Kr(t.uniforms),this.uniformsGroups=I_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},F_=class extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ol=class extends Jr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},B_=class extends Jr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},k_=class extends Jr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ca(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}var Bs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],r=e[n-1];n:{e:{let s;t:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break e}s=e.length;break t}if(!(t>=r)){const a=e[1];t<a&&(n=2,r=a);for(let o=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===o)break;if(i=r,r=e[--n-1],t>=r)break e}s=n,n=0;break t}break n}for(;n<s;){const a=n+s>>>1;t<e[a]?s=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let s=0;s!==i;++s)e[s]=n[r+s];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},z_=class extends Bs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Hc,endingEnd:Hc}}intervalChanged_(t,e,n){const i=this.parameterPositions;let r=t-2,s=t+1,a=i[r],o=i[s];if(a===void 0)switch(this.getSettings_().endingStart){case Wc:r=t,a=2*e-n;break;case Xc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(o===void 0)switch(this.getSettings_().endingEnd){case Wc:s=t,o=2*n-e;break;case Xc:s=1,o=n+i[1]-i[0];break;default:s=t-1,o=e}const l=(n-e)*.5,c=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(o-n),this._offsetPrev=r*c,this._offsetNext=s*c}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,h=this._weightNext,f=(n-e)/(i-e),g=f*f,_=g*f,m=-d*_+2*d*g-d*f,p=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*f+1,M=(-1-h)*_+(1.5+h)*g+.5*f,T=h*_-h*g;for(let E=0;E!==a;++E)r[E]=m*s[c+E]+p*s[l+E]+M*s[o+E]+T*s[u+E];return r}},V_=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=(n-e)/(i-e),u=1-c;for(let d=0;d!==a;++d)r[d]=s[l+d]*u+s[o+d]*c;return r}},G_=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},H_=class extends Bs{interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=t*a,l=o-a,c=this.settings||this.DefaultSettings_,u=c.inTangents,d=c.outTangents;if(!u||!d){const g=(n-e)/(i-e),_=1-g;for(let m=0;m!==a;++m)r[m]=s[l+m]*_+s[o+m]*g;return r}const h=a*2,f=t-1;for(let g=0;g!==a;++g){const _=s[l+g],m=s[o+g],p=f*h+g*2,M=d[p],T=d[p+1],E=t*h+g*2,b=u[E],R=u[E+1];let C=(n-e)/(i-e),v,x,D,w,L;for(let B=0;B<8;B++){v=C*C,x=v*C,D=1-C,w=D*D,L=w*D;const I=L*e+3*w*C*M+3*D*v*b+x*i-n;if(Math.abs(I)<1e-10)break;const k=3*w*(M-e)+6*D*C*(b-M)+3*v*(i-b);if(Math.abs(k)<1e-10)break;C=C-I/k,C=Math.max(0,Math.min(1,C))}r[g]=L*_+3*w*C*T+3*D*v*R+x*m}return r}},Yn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new G_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new V_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new z_(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){const e=new H_(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.settings=this.settings),e}setInterpolation(t){let e;switch(t){case Pa:e=this.InterpolantFactoryMethodDiscrete;break;case tl:e=this.InterpolantFactoryMethodLinear;break;case no:e=this.InterpolantFactoryMethodSmooth;break;case Gc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return tl;case this.InterpolantFactoryMethodSmooth:return no;case this.InterpolantFactoryMethodBezier:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let r=0,s=i-1;for(;r!==i&&n[r]<t;)++r;for(;s!==-1&&n[s]>e;)--s;if(++s,r!==0||s!==i){r>=s&&(s=Math.max(s,1),r=s-1);const a=this.getValueSize();this.times=n.slice(r,s),this.values=this.values.slice(r*a,s*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),t=!1);let s=null;for(let a=0;a!==r;a++){const o=n[a];if(typeof o=="number"&&isNaN(o)){Pe("KeyframeTrack: Time is not a valid number.",this,a,o),t=!1;break}if(s!==null&&s>o){Pe("KeyframeTrack: Out of order keys.",this,a,o,s),t=!1;break}s=o}if(i!==void 0&&n_(i))for(let a=0,o=i.length;a!==o;++a){const l=i[a];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===no,r=t.length-1;let s=1;for(let a=1;a<r;++a){let o=!1;const l=t[a];if(l!==t[a+1]&&(a!==1||l!==t[0]))if(i)o=!0;else{const c=a*n,u=c-n,d=c+n;for(let h=0;h!==n;++h){const f=e[c+h];if(f!==e[u+h]||f!==e[d+h]){o=!0;break}}}if(o){if(a!==s){t[s]=t[a];const c=a*n,u=s*n;for(let d=0;d!==n;++d)e[u+d]=e[c+d]}++s}}if(r>0){t[s]=t[r];for(let a=r*n,o=s*n,l=0;l!==n;++l)e[o+l]=e[a+l];++s}return s!==t.length?(this.times=t.slice(0,s),this.values=e.slice(0,s*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=tl;var ks=class extends Yn{constructor(t,e,n){super(t,e,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Pa;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var W_=class extends Yn{constructor(t,e,n,i){super(t,e,n,i)}};W_.prototype.ValueTypeName="color";var X_=class extends Yn{constructor(t,e,n,i){super(t,e,n,i)}};X_.prototype.ValueTypeName="number";var q_=class extends Bs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const r=this.resultBuffer,s=this.sampleValues,a=this.valueSize,o=(n-e)/(i-e);let l=t*a;for(let c=l+a;l!==c;l+=4)cr.slerpFlat(r,0,s,l-a,s,l,o);return r}},Od=class extends Yn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new q_(this.times,this.values,this.getValueSize(),t)}};Od.prototype.ValueTypeName="quaternion";Od.prototype.InterpolantFactoryMethodSmooth=void 0;var zs=class extends Yn{constructor(t,e,n){super(t,e,n)}};zs.prototype.ValueTypeName="string";zs.prototype.ValueBufferType=Array;zs.prototype.DefaultInterpolation=Pa;zs.prototype.InterpolantFactoryMethodLinear=void 0;zs.prototype.InterpolantFactoryMethodSmooth=void 0;var Y_=class extends Yn{constructor(t,e,n,i){super(t,e,n,i)}};Y_.prototype.ValueTypeName="vector";var Ro={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(hu(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!hu(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function hu(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var $_=class{constructor(t,e,n){const i=this;let r=!1,s=0,a=0,o;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(c){a++,r===!1&&i.onStart!==void 0&&i.onStart(c,s,a),r=!0},this.itemEnd=function(c){s++,i.onProgress!==void 0&&i.onProgress(c,s,a),s===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(c){i.onError!==void 0&&i.onError(c)},this.resolveURL=function(c){return o?o(c):c},this.setURLModifier=function(c){return o=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,d=l.length;u<d;u+=2){const h=l[u],f=l[u+1];if(h.global&&(h.lastIndex=0),h.test(c))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},j_=new $_,jl=class{constructor(t){this.manager=t!==void 0?t:j_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Er=new WeakMap,K_=class extends jl{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,s=Ro.get(`image:${t}`);if(s!==void 0){if(s.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(s),r.manager.itemEnd(t)},0);else{let u=Er.get(s);u===void 0&&(u=[],Er.set(s,u)),u.push({onLoad:e,onError:i})}return s}const a=Is("img");function o(){c(),e&&e(this);const u=Er.get(this)||[];for(let d=0;d<u.length;d++){const h=u[d];h.onLoad&&h.onLoad(this)}Er.delete(this),r.manager.itemEnd(t)}function l(u){c(),i&&i(u),Ro.remove(`image:${t}`);const d=Er.get(this)||[];for(let h=0;h<d.length;h++){const f=d[h];f.onError&&f.onError(u)}Er.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){a.removeEventListener("load",o,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",o,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ro.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}},Z_=class extends jl{constructor(t){super(t)}load(t,e,n,i){const r=new Sn,s=new K_(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}},Fd=class extends Mn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Po=new St,du=new W,fu=new W,J_=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=wi,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yl,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;du.setFromMatrixPosition(t.matrixWorld),e.position.copy(du),fu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(fu),e.updateMatrixWorld(),Po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Po,e.coordinateSystem,e.reversedDepth),e.coordinateSystem===2001||e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ua=new W,ha=new cr,Fn=new W,Bd=class extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=qr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,ha,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,Fn.set(1,1,1)).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorld.decompose(ua,ha,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},_i=new W,pu=new Xe,mu=new Xe,bn=class extends Bd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=rl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rl*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,pu,mu),e.subVectors(mu,pu)}setViewOffset(t,e,n,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ro*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*n/l,i*=s.width/o,n*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Kl=class extends Bd{constructor(t=-1,e=1,n=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,s=n+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Q_=class extends J_{constructor(){super(new Kl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_u=class extends Fd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Q_}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},eg=class extends Fd{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}},br=-90,Ar=1,tg=class extends Mn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bn(br,Ar,t,e);i.layers=this.layers,this.add(i);const r=new bn(br,Ar,t,e);r.layers=this.layers,this.add(r);const s=new bn(br,Ar,t,e);s.layers=this.layers,this.add(s);const a=new bn(br,Ar,t,e);a.layers=this.layers,this.add(a);const o=new bn(br,Ar,t,e);o.layers=this.layers,this.add(o);const l=new bn(br,Ar,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,2,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,4,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),_&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(u,d,h),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ng=class extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Zl="\\[\\]\\.:\\/",ig=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",rg="[^"+Zl.replace("\\.","")+"]",sg=/((?:WC+[\/:])*)/.source.replace("WC",Jl),ag=/(WCOD+)?/.source.replace("WCOD",rg),og=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),lg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),cg=new RegExp("^"+sg+ag+og+lg+"$"),ug=["material","materials","bones","map"],hg=class{constructor(t,e,n){const i=n||mt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},mt=class Pr{constructor(e,n,i){this.path=n,this.parsedPath=i||Pr.parseTrackName(n),this.node=Pr.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new Pr.Composite(e,n,i):new Pr(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ig,"")}static parseTrackName(e){const n=cg.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);ug.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===n||o.uuid===n)return o;const l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=Pr.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=n.nodeName;Pe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=hg;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var gu=new St,dg=class{constructor(t,e,n=0,i=1/0){this.ray=new ql(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Xl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Pe("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gu),this}intersectObject(t,e=!0,n=[]){return ll(t,this,n,e),n.sort(vu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)ll(t[i],this,n,e);return n.sort(vu),n}};function vu(t,e){return t.distance-e.distance}function ll(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)ll(s[a],e,n,!0)}}var fg=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}},$S=class kd{static{kd.prototype.isMatrix2=!0}constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};function Mu(t,e,n,i){const r=pg(i);switch(n){case pm:return t*e;case _m:return t*e/r.components*r.byteLength;case md:return t*e/r.components*r.byteLength;case Ra:return t*e*2/r.components*r.byteLength;case _d:return t*e*2/r.components*r.byteLength;case mm:return t*e*3/r.components*r.byteLength;case Ls:return t*e*4/r.components*r.byteLength;case gd:return t*e*4/r.components*r.byteLength;case gm:case vm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mm:case Sm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ym:case Em:return Math.max(t,16)*Math.max(e,8)/4;case xm:case Tm:return Math.max(t,8)*Math.max(e,8)/2;case bm:case Am:case Cm:case Rm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wm:case Pm:case Lm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dm:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Im:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Um:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Nm:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Om:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Fm:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bm:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case km:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case zm:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vm:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Gm:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hm:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wm:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Xm:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qm:case Ym:case $m:return Math.ceil(t/4)*Math.ceil(e/4)*16;case jm:case Km:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Zm:case Jm:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function pg(t){switch(t){case wi:case cm:return{byteLength:1,components:1};case ud:case um:case ar:return{byteLength:2,components:1};case hd:case dd:return{byteLength:2,components:4};case sr:case hm:case za:return{byteLength:4,components:1};case dm:case fm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"184"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="184");function zd(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function mg(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ke={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},ue={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},envMapRotation:{value:new Fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Vn={basic:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ge(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([ue.points,ue.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([ue.common,ue.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([ue.sprite,ue.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Fe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Gt([ue.common,ue.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Gt([ue.lights,ue.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Vn.physical={uniforms:Gt([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var da={r:0,b:0,g:0},_g=new St,Vd=new Fe;Vd.set(-1,0,0,0,1,0,0,0,1);function gg(t,e,n,i,r,s){const a=new Ge(0);let o=r===!0?0:1,l,c,u=null,d=0,h=null;function f(M){let T=M.isScene===!0?M.background:null;if(T&&T.isTexture){const E=M.backgroundBlurriness>0;T=e.get(T,E)}return T}function g(M){let T=!1;const E=f(M);E===null?m(a,o):E&&E.isColor&&(m(E,1),T=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(M,T){const E=f(T);E&&(E.isCubeTexture||E.mapping===306)?(c===void 0&&(c=new Xt(new $l(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Kr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=E,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_g.makeRotationFromEuler(T.backgroundRotation)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Vd),c.material.toneMapped=$e.getTransfer(E.colorSpace)!==Da,(u!==E||d!==E.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,h=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new Xt(new rr(2,2),new tn({name:"BackgroundMaterial",uniforms:Kr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=$e.getTransfer(E.colorSpace)!==Da,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||h!==t.toneMapping)&&(l.material.needsUpdate=!0,u=E,d=E.version,h=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function m(M,T){M.getRGB(da,Nd(t)),n.buffers.color.setClear(da.r,da.g,da.b,T,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,T=1){a.set(M),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function vg(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(w,L,B,I,k){let z=!1;const F=d(w,I,B,L);s!==F&&(s=F,c(s.object)),z=f(w,I,B,k),z&&g(w,I,B,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,E(w,L,B,I),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function c(w){return t.bindVertexArray(w)}function u(w){return t.deleteVertexArray(w)}function d(w,L,B,I){const k=I.wireframe===!0;let z=i[L.id];z===void 0&&(z={},i[L.id]=z);const F=w.isInstancedMesh===!0?w.id:0;let j=z[F];j===void 0&&(j={},z[F]=j);let ee=j[B.id];ee===void 0&&(ee={},j[B.id]=ee);let ie=ee[k];return ie===void 0&&(ie=h(l()),ee[k]=ie),ie}function h(w){const L=[],B=[],I=[];for(let k=0;k<n;k++)L[k]=0,B[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:I,object:w,attributes:{},index:null}}function f(w,L,B,I){const k=s.attributes,z=L.attributes;let F=0;const j=B.getAttributes();for(const ee in j)if(j[ee].location>=0){const ie=k[ee];let me=z[ee];if(me===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(me=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(me=w.instanceColor)),ie===void 0||ie.attribute!==me||me&&ie.data!==me.data)return!0;F++}return s.attributesNum!==F||s.index!==I}function g(w,L,B,I){const k={},z=L.attributes;let F=0;const j=B.getAttributes();for(const ee in j)if(j[ee].location>=0){let ie=z[ee];ie===void 0&&(ee==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),ee==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor));const me={};me.attribute=ie,ie&&ie.data&&(me.data=ie.data),k[ee]=me,F++}s.attributes=k,s.attributesNum=F,s.index=I}function _(){const w=s.newAttributes;for(let L=0,B=w.length;L<B;L++)w[L]=0}function m(w){p(w,0)}function p(w,L){const B=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;B[w]=1,I[w]===0&&(t.enableVertexAttribArray(w),I[w]=1),k[w]!==L&&(t.vertexAttribDivisor(w,L),k[w]=L)}function M(){const w=s.newAttributes,L=s.enabledAttributes;for(let B=0,I=L.length;B<I;B++)L[B]!==w[B]&&(t.disableVertexAttribArray(B),L[B]=0)}function T(w,L,B,I,k,z,F){F===!0?t.vertexAttribIPointer(w,L,B,k,z):t.vertexAttribPointer(w,L,B,I,k,z)}function E(w,L,B,I){_();const k=I.attributes,z=B.getAttributes(),F=L.defaultAttributeValues;for(const j in z){const ee=z[j];if(ee.location>=0){let ie=k[j];if(ie===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const me=ie.normalized,Me=ie.itemSize,Ze=e.get(ie);if(Ze===void 0)continue;const Ue=Ze.buffer,q=Ze.type,oe=Ze.bytesPerElement,Se=q===t.INT||q===t.UNSIGNED_INT||ie.gpuType===1013;if(ie.isInterleavedBufferAttribute){const fe=ie.data,we=fe.stride,Ne=ie.offset;if(fe.isInstancedInterleavedBuffer){for(let Le=0;Le<ee.locationSize;Le++)p(ee.location+Le,fe.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Le=0;Le<ee.locationSize;Le++)m(ee.location+Le);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Le=0;Le<ee.locationSize;Le++)T(ee.location+Le,Me/ee.locationSize,q,me,we*oe,(Ne+Me/ee.locationSize*Le)*oe,Se)}else{if(ie.isInstancedBufferAttribute){for(let fe=0;fe<ee.locationSize;fe++)p(ee.location+fe,ie.meshPerAttribute);w.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let fe=0;fe<ee.locationSize;fe++)m(ee.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let fe=0;fe<ee.locationSize;fe++)T(ee.location+fe,Me/ee.locationSize,q,me,Me*oe,Me/ee.locationSize*fe*oe,Se)}}else if(F!==void 0){const me=F[j];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(ee.location,me);break;case 3:t.vertexAttrib3fv(ee.location,me);break;case 4:t.vertexAttrib4fv(ee.location,me);break;default:t.vertexAttrib1fv(ee.location,me)}}}}M()}function b(){x();for(const w in i){const L=i[w];for(const B in L){const I=L[B];for(const k in I){const z=I[k];for(const F in z)u(z[F].object),delete z[F];delete I[k]}}delete i[w]}}function R(w){if(i[w.id]===void 0)return;const L=i[w.id];for(const B in L){const I=L[B];for(const k in I){const z=I[k];for(const F in z)u(z[F].object),delete z[F];delete I[k]}}delete i[w.id]}function C(w){for(const L in i){const B=i[L];for(const I in B){const k=B[I];if(k[w.id]===void 0)continue;const z=k[w.id];for(const F in z)u(z[F].object),delete z[F];delete k[w.id]}}}function v(w){for(const L in i){const B=i[L],I=w.isInstancedMesh===!0?w.id:0,k=B[I];if(k!==void 0){for(const z in k){const F=k[z];for(const j in F)u(F[j].object),delete F[j];delete k[z]}delete B[I],Object.keys(B).length===0&&delete i[L]}}}function x(){D(),a=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:x,resetDefaultState:D,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfObject:v,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function Mg(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Sg(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==1023&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const v=C===1016&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==1009&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!v)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ce("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&h===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),E=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:T,maxFragmentUniforms:E,maxSamples:b,samples:R}}function xg(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new vi,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){n=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,T=M*4;let E=p.clippingState||null;l.value=E,E=u(g,h,T,f);for(let b=0;b!==T;++b)E[b]=n[b];p.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,E=f;T!==_;++T,E+=4)a.copy(d[T]).applyMatrix4(M,o),a.normal.toArray(m,E),m[E+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}var Ei=4,Su=[.125,.215,.35,.446,.526,.582],$i=20,yg=256,cs=new Kl,xu=new Ge,Lo=null,Do=0,Io=0,Uo=!1,Tg=new W,yu=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){const{size:s=256,position:a=Tg}=r;Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Do,Io),this._renderer.xr.enabled=Uo,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),Io=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:ar,format:Ls,colorSpace:nl,depthBuffer:!1},i=Tu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tu(t,e,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Eg(r)),this._blurMaterial=Ag(r,t,e),this._ggxMaterial=bg(r,t,e)}return i}_compileMaterial(t){const e=new Xt(new li,t);this._renderer.compile(e,cs)}_sceneToCubeUV(t,e,n,i,r){const s=new bn(90,1,e,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,u=l.toneMapping;l.getClearColor(xu),l.toneMapping=0,l.autoClear=!1,l.state.buffers.depth.getReversed()&&(l.setRenderTarget(i),l.clearDepth(),l.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new $l,new Rd({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1})));const d=this._backgroundBox,h=d.material;let f=!1;const g=t.background;g?g.isColor&&(h.color.copy(g),t.background=null,f=!0):(h.color.copy(xu),f=!0);for(let _=0;_<6;_++){const m=_%3;m===0?(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x+o[_],r.y,r.z)):m===1?(s.up.set(0,0,a[_]),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y+o[_],r.z)):(s.up.set(0,a[_],0),s.position.set(r.x,r.y,r.z),s.lookAt(r.x,r.y,r.z+o[_]));const p=this._cubeSize;wr(i,m*p,_>2?p:0,p,p),l.setRenderTarget(i),f&&l.render(d,s),l.render(t,s)}l.toneMapping=u,l.autoClear=c,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());const r=i?this._cubemapMaterial:this._equirectMaterial,s=this._lodMeshes[0];s.material=r;const a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;wr(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(s,cs)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){const i=this._renderer,r=this._pingPongRenderTarget,s=this._ggxMaterial,a=this._lodMeshes[n];a.material=s;const o=s.uniforms,l=n/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),u=Math.sqrt(l*l-c*c)*(0+l*1.25),{_lodMax:d}=this,h=this._sizeLods[n],f=3*h*(n>d-Ei?n-d+Ei:0),g=4*(this._cubeSize-h);o.envMap.value=t.texture,o.roughness.value=u,o.mipInt.value=d-e,wr(r,f,g,3*h,2*h),i.setRenderTarget(r),i.render(a,cs),o.envMap.value=r.texture,o.roughness.value=0,o.mipInt.value=d-n,wr(t,f,g,3*h,2*h),i.setRenderTarget(t),i.render(a,cs)}_blur(t,e,n,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,n,i,"latitudinal",r),this._halfBlur(s,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&Pe("blur direction must be either latitudinal or longitudinal!");const c=3,u=this._lodMeshes[i];u.material=l;const d=l.uniforms,h=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*h):2*Math.PI/(2*$i-1),g=r/f,_=isFinite(r)?1+Math.floor(c*g):$i;_>$i&&Ce(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${$i}`);const m=[];let p=0;for(let E=0;E<$i;++E){const b=E/g,R=Math.exp(-b*b/2);m.push(R),E===0?p+=R:E<_&&(p+=2*R)}for(let E=0;E<m.length;E++)m[E]=m[E]/p;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=m,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=f,d.mipInt.value=M-n;const T=this._sizeLods[i];wr(e,3*T*(i>M-Ei?i-M+Ei:0),4*(this._cubeSize-T),3*T,2*T),o.setRenderTarget(e),o.render(u,cs)}};function Eg(t){const e=[],n=[],i=[];let r=t;const s=t-Ei+1+Su.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ei?l=Su[a-t+Ei-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,M=new Float32Array(_*g*f),T=new Float32Array(m*g*f),E=new Float32Array(p*g*f);for(let R=0;R<f;R++){const C=R%3*2/3-1,v=R>2?0:-1,x=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(x,_*g*R),T.set(h,m*g*R);const D=[R,R,R,R,R,R];E.set(D,p*g*R)}const b=new li;b.setAttribute("position",new mn(M,_)),b.setAttribute("uv",new mn(T,m)),b.setAttribute("faceIndex",new mn(E,p)),i.push(new Xt(b,null)),r>Ei&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Tu(t,e,n){const i=new Xn(t,e,n);return i.texture.mapping=306,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wr(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function bg(t,e,n){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ag(t,e,n){const i=new Float32Array($i),r=new W(0,1,0);return new tn({name:"SphericalGaussianBlur",defines:{n:$i,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Eu(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ga(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function bu(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ga(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ga(){return`

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
	`}var Gd=class extends Xn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pd(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new $l(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Kr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Xt(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=fn),new tg(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,n,i);t.setRenderTarget(r)}};function wg(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){const f=h.mapping;if(f===303||f===304)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new Gd(g.height);return _.fromEquirectangularTexture(t,h),e.set(h,_),h.addEventListener("dispose",c),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===303||f===304,_=f===301||f===302;if(g||_){let m=n.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new yu(t)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new yu(t)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,n.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===303?h.mapping=301:f===304&&(h.mapping=302),h}function l(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function c(h){const f=h.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Cg(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&il("WebGLRenderer: "+i+" extension not supported."),r}}}function Rg(t,e,n,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const M=f.array;_=f.version;for(let T=0,E=M.length;T<E;T+=3){const b=M[T+0],R=M[T+1],C=M[T+2];h.push(b,R,R,C,C,b)}}else{const M=g.array;_=g.version;for(let T=0,E=M.length/3-1;T<E;T+=3){const b=T+0,R=T+1,C=T+2;h.push(b,R,R,C,C,b)}}const m=new(g.count>=65535?wd:Ad)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Pg(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,f){f!==0&&(t.drawElementsInstanced(i,h,s,d*a,f),n.update(h,i,f))}function u(d,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];n.update(g,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Lg(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Dg(t,e,n){const i=new WeakMap,r=new At;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let x=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",x)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let T=0;f===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let E=o.attributes.position.count*T,b=1;E>e.maxTextureSize&&(b=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const R=new Float32Array(E*b*4*d),C=new Td(R,E,b,d);C.type=za,C.needsUpdate=!0;const v=T*4;for(let D=0;D<d;D++){const w=m[D],L=p[D],B=M[D],I=E*b*4*D;for(let k=0;k<w.count;k++){const z=k*v;f===!0&&(r.fromBufferAttribute(w,k),R[I+z+0]=r.x,R[I+z+1]=r.y,R[I+z+2]=r.z,R[I+z+3]=0),g===!0&&(r.fromBufferAttribute(L,k),R[I+z+4]=r.x,R[I+z+5]=r.y,R[I+z+6]=r.z,R[I+z+7]=0),_===!0&&(r.fromBufferAttribute(B,k),R[I+z+8]=r.x,R[I+z+9]=r.y,R[I+z+10]=r.z,R[I+z+11]=B.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new Xe(E,b)},i.set(o,h),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Ig(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,h=e.get(c,d);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}var Ug={1:"LINEAR_TONE_MAPPING",2:"REINHARD_TONE_MAPPING",3:"CINEON_TONE_MAPPING",4:"ACES_FILMIC_TONE_MAPPING",6:"AGX_TONE_MAPPING",7:"NEUTRAL_TONE_MAPPING",5:"CUSTOM_TONE_MAPPING"};function Ng(t,e,n,i,r){const s=new Xn(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new jr(e,n):void 0}),a=new Xn(e,n,{type:ar,depthBuffer:!1,stencilBuffer:!1}),o=new li;o.setAttribute("position",new ri([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new ri([0,2,0,0,2,0],2));const l=new F_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Xt(o,l),u=new Kl(-1,1,1,-1,0,1);let d=null,h=null,f=!1,g,_=null,m=[],p=!1;this.setSize=function(M,T){s.setSize(M,T),a.setSize(M,T);for(let E=0;E<m.length;E++){const b=m[E];b.setSize&&b.setSize(M,T)}},this.setEffects=function(M){m=M,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,E=s.height;for(let b=0;b<m.length;b++){const R=m[b];R.setSize&&R.setSize(T,E)}},this.begin=function(M,T){if(f||M.toneMapping===0&&m.length===0)return!1;if(_=T,T!==null){const E=T.width,b=T.height;(s.width!==E||s.height!==b)&&this.setSize(E,b)}return p===!1&&M.setRenderTarget(s),g=M.toneMapping,M.toneMapping=0,!0},this.hasRenderPass=function(){return p},this.end=function(M,T){M.toneMapping=g,f=!0;let E=s,b=a;for(let R=0;R<m.length;R++){const C=m[R];if(C.enabled!==!1&&(C.render(M,b,E,T),C.needsSwap!==!1)){const v=E;E=b,b=v}}if(d!==M.outputColorSpace||h!==M.toneMapping){d=M.outputColorSpace,h=M.toneMapping,l.defines={},$e.getTransfer(d)==="srgb"&&(l.defines.SRGB_TRANSFER="");const R=Ug[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(_),M.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}var Hd=new Sn,cl=new jr(1,1),Wd=new Td,Xd=new d_,qd=new Pd,Au=[],wu=[],Cu=new Float32Array(16),Ru=new Float32Array(9),Pu=new Float32Array(4);function Qr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Au[r];if(s===void 0&&(s=new Float32Array(r),Au[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Rt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ha(t,e){let n=wu[e];n===void 0&&(n=new Int32Array(e),wu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Og(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Fg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Rt(n,e)}}function Bg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Rt(n,e)}}function kg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Rt(n,e)}}function zg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Pu.set(i),t.uniformMatrix2fv(this.addr,!1,Pu),Rt(n,i)}}function Vg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Ru.set(i),t.uniformMatrix3fv(this.addr,!1,Ru),Rt(n,i)}}function Gg(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Rt(n,e)}else{if(Ct(n,i))return;Cu.set(i),t.uniformMatrix4fv(this.addr,!1,Cu),Rt(n,i)}}function Hg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Wg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Rt(n,e)}}function Xg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Rt(n,e)}}function qg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Rt(n,e)}}function Yg(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function $g(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Rt(n,e)}}function jg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Rt(n,e)}}function Kg(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Rt(n,e)}}function Zg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cl.compareFunction=n.isReversedDepthBuffer()?518:515,s=cl):s=Hd,n.setTexture2D(e||s,r)}function Jg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Xd,r)}function Qg(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||qd,r)}function ev(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Wd,r)}function tv(t){switch(t){case 5126:return Og;case 35664:return Fg;case 35665:return Bg;case 35666:return kg;case 35674:return zg;case 35675:return Vg;case 35676:return Gg;case 5124:case 35670:return Hg;case 35667:case 35671:return Wg;case 35668:case 35672:return Xg;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return $g;case 36295:return jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Zg;case 35679:case 36299:case 36307:return Jg;case 35680:case 36300:case 36308:case 36293:return Qg;case 36289:case 36303:case 36311:case 36292:return ev}}function nv(t,e){t.uniform1fv(this.addr,e)}function iv(t,e){const n=Qr(e,this.size,2);t.uniform2fv(this.addr,n)}function rv(t,e){const n=Qr(e,this.size,3);t.uniform3fv(this.addr,n)}function sv(t,e){const n=Qr(e,this.size,4);t.uniform4fv(this.addr,n)}function av(t,e){const n=Qr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ov(t,e){const n=Qr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function lv(t,e){const n=Qr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function cv(t,e){t.uniform1iv(this.addr,e)}function uv(t,e){t.uniform2iv(this.addr,e)}function hv(t,e){t.uniform3iv(this.addr,e)}function dv(t,e){t.uniform4iv(this.addr,e)}function fv(t,e){t.uniform1uiv(this.addr,e)}function pv(t,e){t.uniform2uiv(this.addr,e)}function mv(t,e){t.uniform3uiv(this.addr,e)}function _v(t,e){t.uniform4uiv(this.addr,e)}function gv(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=cl:a=Hd;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function vv(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Xd,s[a])}function Mv(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||qd,s[a])}function Sv(t,e,n){const i=this.cache,r=e.length,s=Ha(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Rt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Wd,s[a])}function xv(t){switch(t){case 5126:return nv;case 35664:return iv;case 35665:return rv;case 35666:return sv;case 35674:return av;case 35675:return ov;case 35676:return lv;case 5124:case 35670:return cv;case 35667:case 35671:return uv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return fv;case 36294:return pv;case 36295:return mv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return vv;case 35680:case 36300:case 36308:case 36293:return Mv;case 36289:case 36303:case 36311:case 36292:return Sv}}var yv=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=tv(e.type)}},Tv=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xv(e.type)}},Ev=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],n)}}},No=/(\w+)(\])?(\[|\.)?/g;function Lu(t,e){t.seq.push(e),t.map[e.id]=e}function bv(t,e,n){const i=t.name,r=i.length;for(No.lastIndex=0;;){const s=No.exec(i),a=No.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Lu(n,c===void 0?new yv(o,t,e):new Tv(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new Ev(o),Lu(n,u)),n=u}}}var Sa=class{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s);bv(a,t.getUniformLocation(e,a.name),this)}const i=[],r=[];for(const s of this.seq)s.type===t.SAMPLER_2D_SHADOW||s.type===t.SAMPLER_CUBE_SHADOW||s.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(s):r.push(s);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=n[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&n.push(s)}return n}};function Du(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Av=37297,wv=0;function Cv(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}var Iu=new Fe;function Rv(t){$e._getMatrix(Iu,$e.workingColorSpace,t);const e=`mat3( ${Iu.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case La:return[e,"LinearTransferOETF"];case Da:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Uu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Cv(t.getShaderSource(e),a)}else return r}function Pv(t,e){const n=Rv(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}var Lv={1:"Linear",2:"Reinhard",3:"Cineon",4:"ACESFilmic",6:"AgX",7:"Neutral",5:"Custom"};function Dv(t,e){const n=Lv[e];return n===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var fa=new W;function Iv(){return $e.getLuminanceCoefficients(fa),["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${fa.x.toFixed(4)}, ${fa.y.toFixed(4)}, ${fa.z.toFixed(4)} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_s).join(`
`)}function Nv(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Ov(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function _s(t){return t!==""}function Nu(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(t){return t.replace(Fv,kv)}var Bv=new Map;function kv(t,e){let n=ke[e];if(n===void 0){const i=Bv.get(e);if(i!==void 0)n=ke[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ul(n)}var zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(t){return t.replace(zv,Vv)}function Vv(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bu(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}var Gv={1:"SHADOWMAP_TYPE_PCF",3:"SHADOWMAP_TYPE_VSM"};function Hv(t){return Gv[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wv={301:"ENVMAP_TYPE_CUBE",302:"ENVMAP_TYPE_CUBE",306:"ENVMAP_TYPE_CUBE_UV"};function Xv(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Wv[t.envMapMode]||"ENVMAP_TYPE_CUBE"}var qv={302:"ENVMAP_MODE_REFRACTION"};function Yv(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":qv[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $v={0:"ENVMAP_BLENDING_MULTIPLY",1:"ENVMAP_BLENDING_MIX",2:"ENVMAP_BLENDING_ADD"};function jv(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":$v[t.combine]||"ENVMAP_BLENDING_NONE"}function Kv(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Zv(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Hv(n),c=Xv(n),u=Yv(n),d=jv(n),h=Kv(n),f=Uv(n),g=Nv(s),_=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_s).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(_s).join(`
`),p.length>0&&(p+=`
`)):(m=[Bu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_s).join(`
`),p=[Bu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==0?"#define TONE_MAPPING":"",n.toneMapping!==0?ke.tonemapping_pars_fragment:"",n.toneMapping!==0?Dv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Pv("linearToOutputTexel",n.outputColorSpace),Iv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(_s).join(`
`)),a=ul(a),a=Nu(a,n),a=Ou(a,n),o=ul(o),o=Nu(o,n),o=Ou(o,n),a=Fu(a),o=Fu(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion==="300 es"?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion==="300 es"?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=M+m+a,E=M+p+o,b=Du(r,r.VERTEX_SHADER,T),R=Du(r,r.FRAGMENT_SHADER,E);r.attachShader(_,b),r.attachShader(_,R),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function C(w){if(t.debug.checkShaderErrors){const L=r.getProgramInfoLog(_)||"",B=r.getShaderInfoLog(b)||"",I=r.getShaderInfoLog(R)||"",k=L.trim(),z=B.trim(),F=I.trim();let j=!0,ee=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,b,R);else{const ie=Uu(r,b,"vertex"),me=Uu(r,R,"fragment");Pe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+k+`
`+ie+`
`+me)}else k!==""?Ce("WebGLProgram: Program Info Log:",k):(z===""||F==="")&&(ee=!1);ee&&(w.diagnostics={runnable:j,programLog:k,vertexShader:{log:z,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(b),r.deleteShader(R),v=new Sa(r,_),x=Ov(r,_)}let v;this.getUniforms=function(){return v===void 0&&C(this),v};let x;this.getAttributes=function(){return x===void 0&&C(this),x};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(_,Av)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=R,this}var Jv=0,Qv=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new e0(t),e.set(t,n)),n}},e0=class{constructor(t){this.id=Jv++,this.code=t,this.usedTimes=0}};function t0(t){return t===1030||t===37490||t===36285}function n0(t,e,n,i,r,s){const a=new Xl,o=new Qv,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function _(v,x,D,w,L,B){const I=w.fog,k=L.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?w.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||z,F),ee=j&&j.mapping===306?j.image.height:null,ie=f[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&Ce("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const me=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Me=me!==void 0?me.length:0;let Ze=0;k.morphAttributes.position!==void 0&&(Ze=1),k.morphAttributes.normal!==void 0&&(Ze=2),k.morphAttributes.color!==void 0&&(Ze=3);let Ue,q,oe,Se;if(ie){const De=Vn[ie];Ue=De.vertexShader,q=De.fragmentShader}else Ue=v.vertexShader,q=v.fragmentShader,o.update(v),oe=o.getVertexShaderID(v),Se=o.getFragmentShaderID(v);const fe=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Ne=L.isInstancedMesh===!0,Le=L.isBatchedMesh===!0,tt=!!v.map,We=!!v.matcap,wt=!!j,gt=!!v.aoMap,sn=!!v.lightMap,Nt=!!v.bumpMap,yt=!!v.normalMap,U=!!v.displacementMap,Vt=!!v.emissiveMap,qe=!!v.metalnessMap,Je=!!v.roughnessMap,he=v.anisotropy>0,ct=v.clearcoat>0,be=v.dispersion>0,A=v.iridescence>0,S=v.sheen>0,V=v.transmission>0,$=he&&!!v.anisotropyMap,Z=ct&&!!v.clearcoatMap,ne=ct&&!!v.clearcoatNormalMap,le=ct&&!!v.clearcoatRoughnessMap,N=A&&!!v.iridescenceMap,se=A&&!!v.iridescenceThicknessMap,ce=S&&!!v.sheenColorMap,pe=S&&!!v.sheenRoughnessMap,K=!!v.specularMap,Re=!!v.specularColorMap,Oe=!!v.specularIntensityMap,Ye=V&&!!v.transmissionMap,ze=V&&!!v.thicknessMap,P=!!v.gradientMap,Y=!!v.alphaMap,te=v.alphaTest>0,ae=!!v.alphaHash,xe=!!v.extensions;let Q=0;v.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Q=t.toneMapping);const ye={shaderID:ie,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:q,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:Se,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Le,batchingColor:Le&&L._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&L.instanceColor!==null,instancingMorph:Ne&&L.morphTexture!==null,outputColorSpace:fe===null?t.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:tt,matcap:We,envMap:wt,envMapMode:wt&&j.mapping,envMapCubeUVHeight:ee,aoMap:gt,lightMap:sn,bumpMap:Nt,normalMap:yt,displacementMap:U,emissiveMap:Vt,normalMapObjectSpace:yt&&v.normalMapType===1,normalMapTangentSpace:yt&&v.normalMapType===0,packedNormalMap:yt&&v.normalMapType===0&&t0(v.normalMap.format),metalnessMap:qe,roughnessMap:Je,anisotropy:he,anisotropyMap:$,clearcoat:ct,clearcoatMap:Z,clearcoatNormalMap:ne,clearcoatRoughnessMap:le,dispersion:be,iridescence:A,iridescenceMap:N,iridescenceThicknessMap:se,sheen:S,sheenColorMap:ce,sheenRoughnessMap:pe,specularMap:K,specularColorMap:Re,specularIntensityMap:Oe,transmission:V,transmissionMap:Ye,thicknessMap:ze,gradientMap:P,opaque:v.transparent===!1&&v.blending===1&&v.alphaToCoverage===!1,alphaMap:Y,alphaTest:te,alphaHash:ae,combine:v.combine,mapUv:tt&&g(v.map.channel),aoMapUv:gt&&g(v.aoMap.channel),lightMapUv:sn&&g(v.lightMap.channel),bumpMapUv:Nt&&g(v.bumpMap.channel),normalMapUv:yt&&g(v.normalMap.channel),displacementMapUv:U&&g(v.displacementMap.channel),emissiveMapUv:Vt&&g(v.emissiveMap.channel),metalnessMapUv:qe&&g(v.metalnessMap.channel),roughnessMapUv:Je&&g(v.roughnessMap.channel),anisotropyMapUv:$&&g(v.anisotropyMap.channel),clearcoatMapUv:Z&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:le&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:N&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(v.sheenRoughnessMap.channel),specularMapUv:K&&g(v.specularMap.channel),specularColorMapUv:Re&&g(v.specularColorMap.channel),specularIntensityMapUv:Oe&&g(v.specularIntensityMap.channel),transmissionMapUv:Ye&&g(v.transmissionMap.channel),thicknessMapUv:ze&&g(v.thicknessMap.channel),alphaMapUv:Y&&g(v.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(yt||he),vertexNormals:!!k.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!k.attributes.uv&&(tt||Y),fog:!!I,useFog:v.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||k.attributes.normal===void 0&&yt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:L.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Q,decodeVideoTexture:tt&&v.map.isVideoTexture===!0&&$e.getTransfer(v.map.colorSpace)==="srgb",decodeVideoTextureEmissive:Vt&&v.emissiveMap.isVideoTexture===!0&&$e.getTransfer(v.emissiveMap.colorSpace)==="srgb",premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===2,flipSided:v.side===1,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:xe&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&v.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ye.vertexUv1s=l.has(1),ye.vertexUv2s=l.has(2),ye.vertexUv3s=l.has(3),l.clear(),ye}function m(v){const x=[];if(v.shaderID?x.push(v.shaderID):(x.push(v.customVertexShaderID),x.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)x.push(D),x.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(p(x,v),M(x,v),x.push(t.outputColorSpace)),x.push(v.customProgramCacheKey),x.join()}function p(v,x){v.push(x.precision),v.push(x.outputColorSpace),v.push(x.envMapMode),v.push(x.envMapCubeUVHeight),v.push(x.mapUv),v.push(x.alphaMapUv),v.push(x.lightMapUv),v.push(x.aoMapUv),v.push(x.bumpMapUv),v.push(x.normalMapUv),v.push(x.displacementMapUv),v.push(x.emissiveMapUv),v.push(x.metalnessMapUv),v.push(x.roughnessMapUv),v.push(x.anisotropyMapUv),v.push(x.clearcoatMapUv),v.push(x.clearcoatNormalMapUv),v.push(x.clearcoatRoughnessMapUv),v.push(x.iridescenceMapUv),v.push(x.iridescenceThicknessMapUv),v.push(x.sheenColorMapUv),v.push(x.sheenRoughnessMapUv),v.push(x.specularMapUv),v.push(x.specularColorMapUv),v.push(x.specularIntensityMapUv),v.push(x.transmissionMapUv),v.push(x.thicknessMapUv),v.push(x.combine),v.push(x.fogExp2),v.push(x.sizeAttenuation),v.push(x.morphTargetsCount),v.push(x.morphAttributeCount),v.push(x.numDirLights),v.push(x.numPointLights),v.push(x.numSpotLights),v.push(x.numSpotLightMaps),v.push(x.numHemiLights),v.push(x.numRectAreaLights),v.push(x.numDirLightShadows),v.push(x.numPointLightShadows),v.push(x.numSpotLightShadows),v.push(x.numSpotLightShadowsWithMaps),v.push(x.numLightProbes),v.push(x.shadowMapType),v.push(x.toneMapping),v.push(x.numClippingPlanes),v.push(x.numClipIntersection),v.push(x.depthPacking)}function M(v,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),v.push(a.mask)}function T(v){const x=f[v.type];let D;if(x){const w=Vn[x];D=U_.clone(w.uniforms)}else D=v.uniforms;return D}function E(v,x){let D=u.get(x);return D!==void 0?++D.usedTimes:(D=new Zv(t,x,v,r),c.push(D),u.set(x,D)),D}function b(v){if(--v.usedTimes===0){const x=c.indexOf(v);c[x]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){o.remove(v)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:T,acquireProgram:E,releaseProgram:b,releaseShaderCache:R,programs:c,dispose:C}}function i0(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function r0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ku(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function zu(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let M=t[e];return M===void 0?(M={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},t[e]=M):(M.id=h.id,M.object=h,M.geometry=f,M.material=g,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function l(h,f,g,_,m,p){const M=o(h,f,g,_,m,p);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(h,f,g,_,m,p){const M=o(h,f,g,_,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?r.unshift(M):n.unshift(M)}function u(h,f){n.length>1&&n.sort(h||r0),i.length>1&&i.sort(f||ku),r.length>1&&r.sort(f||ku)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function s0(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new zu,t.set(i,[a])):r>=s.length?(a=new zu,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function a0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new W,color:new Ge};break;case"SpotLight":n={position:new W,direction:new W,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new W,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new W,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new W,halfWidth:new W,halfHeight:new W};break}return t[e.id]=n,n}}}function o0(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var l0=0;function c0(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function u0(t){const e=new a0,n=o0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new St,a=new St;function o(c){let u=0,d=0,h=0;for(let x=0;x<9;x++)i.probe[x].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,M=0,T=0,E=0,b=0,R=0,C=0;c.sort(c0);for(let x=0,D=c.length;x<D;x++){const w=c[x],L=w.color,B=w.intensity,I=w.distance;let k=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===1030?k=w.shadow.map.texture:k=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=L.r*B,d+=L.g*B,h+=L.b*B;else if(w.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(w.sh.coefficients[z],B);C++}else if(w.isDirectionalLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const F=w.shadow,j=n.get(w);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,i.directionalShadow[f]=j,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=w.shadow.matrix,M++}i.directional[f]=z,f++}else if(w.isSpotLight){const z=e.get(w);z.position.setFromMatrixPosition(w.matrixWorld),z.color.copy(L).multiplyScalar(B),z.distance=I,z.coneCos=Math.cos(w.angle),z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),z.decay=w.decay,i.spot[_]=z;const F=w.shadow;if(w.map&&(i.spotLightMap[b]=w.map,b++,F.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[_]=F.matrix,w.castShadow){const j=n.get(w);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=k,E++}_++}else if(w.isRectAreaLight){const z=e.get(w);z.color.copy(L).multiplyScalar(B),z.halfWidth.set(w.width*.5,0,0),z.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=z,m++}else if(w.isPointLight){const z=e.get(w);if(z.color.copy(w.color).multiplyScalar(w.intensity),z.distance=w.distance,z.decay=w.decay,w.castShadow){const F=w.shadow,j=n.get(w);j.shadowIntensity=F.intensity,j.shadowBias=F.bias,j.shadowNormalBias=F.normalBias,j.shadowRadius=F.radius,j.shadowMapSize=F.mapSize,j.shadowCameraNear=F.camera.near,j.shadowCameraFar=F.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=w.shadow.matrix,T++}i.point[g]=z,g++}else if(w.isHemisphereLight){const z=e.get(w);z.skyColor.copy(w.color).multiplyScalar(B),z.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[p]=z,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const v=i.hash;(v.directionalLength!==f||v.pointLength!==g||v.spotLength!==_||v.rectAreaLength!==m||v.hemiLength!==p||v.numDirectionalShadows!==M||v.numPointShadows!==T||v.numSpotShadows!==E||v.numSpotMaps!==b||v.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=E+b-R,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,v.directionalLength=f,v.pointLength=g,v.spotLength=_,v.rectAreaLength=m,v.hemiLength=p,v.numDirectionalShadows=M,v.numPointShadows=T,v.numSpotShadows=E,v.numSpotMaps=b,v.numLightProbes=C,i.version=l0++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){const T=c[p];if(T.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),d++}else if(T.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),f++}else if(T.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const E=i.point[h];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(m),h++}else if(T.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Vu(t){const e=new u0(t),n=[],i=[],r=[];function s(h){d.camera=h,n.length=0,i.length=0,r.length=0}function a(h){n.push(h)}function o(h){i.push(h)}function l(h){r.push(h)}function c(){e.setup(n)}function u(h){e.setupView(n,h)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function h0(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vu(t),e.set(r,[o])):s>=a.length?(o=new Vu(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var d0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,f0=`uniform sampler2D shadow_pass;
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
}`,p0=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],m0=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Gu=new St,us=new W,Oo=new W;function _0(t,e,n){let i=new Yl;const r=new Xe,s=new Xe,a=new At,o=new B_,l=new k_,c={},u=n.maxTextureSize,d={0:1,1:0,2:2},h=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:d0,fragmentShader:f0}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new li;g.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let p=this.type;this.render=function(R,C,v){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;this.type===2&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=1);const x=t.getRenderTarget(),D=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),L=t.state;L.setBlending(0),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const B=p!==this.type;B&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=R.length;I<k;I++){const z=R[I],F=z.shadow;if(F===void 0){Ce("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const j=F.getFrameExtents();r.multiply(j),s.copy(F.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,F.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,F.mapSize.y=s.y));const ee=t.state.buffers.depth.getReversed();if(F.camera._reversedDepth=ee,F.map===null||B===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===3){if(z.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Xn(r.x,r.y,{format:Ra,type:ar,minFilter:fn,magFilter:fn,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new jr(r.x,r.y,za),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=Ds,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt}else z.isPointLight?(F.map=new Gd(r.x),F.map.depthTexture=new D_(r.x,sr)):(F.map=new Xn(r.x,r.y),F.map.depthTexture=new jr(r.x,r.y,sr)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=Ds,this.type===1?(F.map.depthTexture.compareFunction=ee?518:515,F.map.depthTexture.minFilter=fn,F.map.depthTexture.magFilter=fn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=Wt,F.map.depthTexture.magFilter=Wt);F.camera.updateProjectionMatrix()}const ie=F.map.isWebGLCubeRenderTarget?6:1;for(let me=0;me<ie;me++){if(F.map.isWebGLCubeRenderTarget)t.setRenderTarget(F.map,me),t.clear();else{me===0&&(t.setRenderTarget(F.map),t.clear());const Me=F.getViewport(me);a.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),L.viewport(a)}if(z.isPointLight){const Me=F.camera,Ze=F.matrix,Ue=z.distance||Me.far;Ue!==Me.far&&(Me.far=Ue,Me.updateProjectionMatrix()),us.setFromMatrixPosition(z.matrixWorld),Me.position.copy(us),Oo.copy(Me.position),Oo.add(p0[me]),Me.up.copy(m0[me]),Me.lookAt(Oo),Me.updateMatrixWorld(),Ze.makeTranslation(-us.x,-us.y,-us.z),Gu.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Gu,Me.coordinateSystem,Me.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),E(C,v,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===3&&M(F,v),F.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(x,D,w)};function M(R,C){const v=e.update(_);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Xn(r.x,r.y,{format:Ra,type:ar})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(C,null,v,h,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(C,null,v,f,_,null)}function T(R,C,v,x){let D=null;const w=v.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(w!==void 0)D=w;else if(D=v.isPointLight===!0?l:o,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const L=D.uuid,B=C.uuid;let I=c[L];I===void 0&&(I={},c[L]=I);let k=I[B];k===void 0&&(k=D.clone(),I[B]=k,C.addEventListener("dispose",b)),D=k}if(D.visible=C.visible,D.wireframe=C.wireframe,x===3?D.side=C.shadowSide!==null?C.shadowSide:C.side:D.side=C.shadowSide!==null?C.shadowSide:d[C.side],D.alphaMap=C.alphaMap,D.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,D.map=C.map,D.clipShadows=C.clipShadows,D.clippingPlanes=C.clippingPlanes,D.clipIntersection=C.clipIntersection,D.displacementMap=C.displacementMap,D.displacementScale=C.displacementScale,D.displacementBias=C.displacementBias,D.wireframeLinewidth=C.wireframeLinewidth,D.linewidth=C.linewidth,v.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const L=t.properties.get(D);L.light=v}return D}function E(R,C,v,x,D){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&D===3)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,R.matrixWorld);const L=e.update(R),B=R.material;if(Array.isArray(B)){const I=L.groups;for(let k=0,z=I.length;k<z;k++){const F=I[k],j=B[F.materialIndex];if(j&&j.visible){const ee=T(R,j,x,D);R.onBeforeShadow(t,R,C,v,L,ee,F),t.renderBufferDirect(v,null,L,ee,R,F),R.onAfterShadow(t,R,C,v,L,ee,F)}}}else if(B.visible){const I=T(R,B,x,D);R.onBeforeShadow(t,R,C,v,L,I,null),t.renderBufferDirect(v,null,L,I,R,null),R.onAfterShadow(t,R,C,v,L,I,null)}}const w=R.children;for(let L=0,B=w.length;L<B;L++)E(w[L],C,v,x,D)}function b(R){R.target.removeEventListener("dispose",b);for(const C in c){const v=c[C],x=R.target.uuid;x in v&&(v[x].dispose(),delete v[x])}}}function g0(t,e){function n(){let P=!1;const Y=new At;let te=null;const ae=new At(0,0,0,0);return{setMask:function(xe){te!==xe&&!P&&(t.colorMask(xe,xe,xe,xe),te=xe)},setLocked:function(xe){P=xe},setClear:function(xe,Q,ye,De,qt){qt===!0&&(xe*=De,Q*=De,ye*=De),Y.set(xe,Q,ye,De),ae.equals(Y)===!1&&(t.clearColor(xe,Q,ye,De),ae.copy(Y))},reset:function(){P=!1,te=null,ae.set(-1,0,0,0)}}}function i(){let P=!1,Y=!1,te=null,ae=null,xe=null;return{setReversed:function(Q){if(Y!==Q){const ye=e.get("EXT_clip_control");Q?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),Y=Q;const De=xe;xe=null,this.setClear(De)}},getReversed:function(){return Y},setTest:function(Q){Q?fe(t.DEPTH_TEST):we(t.DEPTH_TEST)},setMask:function(Q){te!==Q&&!P&&(t.depthMask(Q),te=Q)},setFunc:function(Q){if(Y&&(Q=s_[Q]),ae!==Q){switch(Q){case 0:t.depthFunc(t.NEVER);break;case 1:t.depthFunc(t.ALWAYS);break;case 2:t.depthFunc(t.LESS);break;case 3:t.depthFunc(t.LEQUAL);break;case 4:t.depthFunc(t.EQUAL);break;case 5:t.depthFunc(t.GEQUAL);break;case 6:t.depthFunc(t.GREATER);break;case 7:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ae=Q}},setLocked:function(Q){P=Q},setClear:function(Q){xe!==Q&&(xe=Q,Y&&(Q=1-Q),t.clearDepth(Q))},reset:function(){P=!1,te=null,ae=null,xe=null,Y=!1}}}function r(){let P=!1,Y=null,te=null,ae=null,xe=null,Q=null,ye=null,De=null,qt=null;return{setTest:function(ot){P||(ot?fe(t.STENCIL_TEST):we(t.STENCIL_TEST))},setMask:function(ot){Y!==ot&&!P&&(t.stencilMask(ot),Y=ot)},setFunc:function(ot,Nn,Rn){(te!==ot||ae!==Nn||xe!==Rn)&&(t.stencilFunc(ot,Nn,Rn),te=ot,ae=Nn,xe=Rn)},setOp:function(ot,Nn,Rn){(Q!==ot||ye!==Nn||De!==Rn)&&(t.stencilOp(ot,Nn,Rn),Q=ot,ye=Nn,De=Rn)},setLocked:function(ot){P=ot},setClear:function(ot){qt!==ot&&(t.clearStencil(ot),qt=ot)},reset:function(){P=!1,Y=null,te=null,ae=null,xe=null,Q=null,ye=null,De=null,qt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,T=null,E=null,b=null,R=null,C=null,v=new Ge(0,0,0),x=0,D=!1,w=null,L=null,B=null,I=null,k=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,j=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ee)[1]),F=j>=1):ee.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),F=j>=2);let ie=null,me={};const Me=t.getParameter(t.SCISSOR_BOX),Ze=t.getParameter(t.VIEWPORT),Ue=new At().fromArray(Me),q=new At().fromArray(Ze);function oe(P,Y,te,ae){const xe=new Uint8Array(4),Q=t.createTexture();t.bindTexture(P,Q),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<te;ye++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(Y,0,t.RGBA,1,1,ae,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(Y+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Q}const Se={};Se[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),Se[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Se[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),fe(t.DEPTH_TEST),a.setFunc(3),Nt(!1),yt(1),fe(t.CULL_FACE),gt(0);function fe(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function we(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function Ne(P,Y){return h[P]!==Y?(t.bindFramebuffer(P,Y),h[P]=Y,P===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Y),P===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Y),!0):!1}function Le(P,Y){let te=g,ae=!1;if(P){te=f.get(Y),te===void 0&&(te=[],f.set(Y,te));const xe=P.textures;if(te.length!==xe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,ye=xe.length;Q<ye;Q++)te[Q]=t.COLOR_ATTACHMENT0+Q;te.length=xe.length,ae=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ae=!0);ae&&t.drawBuffers(te)}function tt(P){return _!==P?(t.useProgram(P),_=P,!0):!1}const We={100:t.FUNC_ADD,101:t.FUNC_SUBTRACT,102:t.FUNC_REVERSE_SUBTRACT};We[103]=t.MIN,We[104]=t.MAX;const wt={200:t.ZERO,201:t.ONE,202:t.SRC_COLOR,204:t.SRC_ALPHA,210:t.SRC_ALPHA_SATURATE,208:t.DST_COLOR,206:t.DST_ALPHA,203:t.ONE_MINUS_SRC_COLOR,205:t.ONE_MINUS_SRC_ALPHA,209:t.ONE_MINUS_DST_COLOR,207:t.ONE_MINUS_DST_ALPHA,211:t.CONSTANT_COLOR,212:t.ONE_MINUS_CONSTANT_COLOR,213:t.CONSTANT_ALPHA,214:t.ONE_MINUS_CONSTANT_ALPHA};function gt(P,Y,te,ae,xe,Q,ye,De,qt,ot){if(P===0){m===!0&&(we(t.BLEND),m=!1);return}if(m===!1&&(fe(t.BLEND),m=!0),P!==5){if(P!==p||ot!==D){if((M!==100||b!==100)&&(t.blendEquation(t.FUNC_ADD),M=100,b=100),ot)switch(P){case 1:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFunc(t.ONE,t.ONE);break;case 3:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case 4:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Pe("WebGLState: Invalid blending: ",P);break}else switch(P){case 1:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case 2:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case 3:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",P);break}T=null,E=null,R=null,C=null,v.set(0,0,0),x=0,p=P,D=ot}return}xe=xe||Y,Q=Q||te,ye=ye||ae,(Y!==M||xe!==b)&&(t.blendEquationSeparate(We[Y],We[xe]),M=Y,b=xe),(te!==T||ae!==E||Q!==R||ye!==C)&&(t.blendFuncSeparate(wt[te],wt[ae],wt[Q],wt[ye]),T=te,E=ae,R=Q,C=ye),(De.equals(v)===!1||qt!==x)&&(t.blendColor(De.r,De.g,De.b,qt),v.copy(De),x=qt),p=P,D=!1}function sn(P,Y){P.side===2?we(t.CULL_FACE):fe(t.CULL_FACE);let te=P.side===1;Y&&(te=!te),Nt(te),P.blending===1&&P.transparent===!1?gt(0):gt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const ae=P.stencilWrite;o.setTest(ae),ae&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Vt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):we(t.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(P){w!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),w=P)}function yt(P){P!==0?(fe(t.CULL_FACE),P!==L&&(P===1?t.cullFace(t.BACK):P===2?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):we(t.CULL_FACE),L=P}function U(P){P!==B&&(F&&t.lineWidth(P),B=P)}function Vt(P,Y,te){P?(fe(t.POLYGON_OFFSET_FILL),(I!==Y||k!==te)&&(I=Y,k=te,a.getReversed()&&(Y=-Y),t.polygonOffset(Y,te))):we(t.POLYGON_OFFSET_FILL)}function qe(P){P?fe(t.SCISSOR_TEST):we(t.SCISSOR_TEST)}function Je(P){P===void 0&&(P=t.TEXTURE0+z-1),ie!==P&&(t.activeTexture(P),ie=P)}function he(P,Y,te){te===void 0&&(ie===null?te=t.TEXTURE0+z-1:te=ie);let ae=me[te];ae===void 0&&(ae={type:void 0,texture:void 0},me[te]=ae),(ae.type!==P||ae.texture!==Y)&&(ie!==te&&(t.activeTexture(te),ie=te),t.bindTexture(P,Y||Se[P]),ae.type=P,ae.texture=Y)}function ct(){const P=me[ie];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function be(){try{t.compressedTexImage2D(...arguments)}catch(P){Pe("WebGLState:",P)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(P){Pe("WebGLState:",P)}}function S(){try{t.texSubImage2D(...arguments)}catch(P){Pe("WebGLState:",P)}}function V(){try{t.texSubImage3D(...arguments)}catch(P){Pe("WebGLState:",P)}}function $(){try{t.compressedTexSubImage2D(...arguments)}catch(P){Pe("WebGLState:",P)}}function Z(){try{t.compressedTexSubImage3D(...arguments)}catch(P){Pe("WebGLState:",P)}}function ne(){try{t.texStorage2D(...arguments)}catch(P){Pe("WebGLState:",P)}}function le(){try{t.texStorage3D(...arguments)}catch(P){Pe("WebGLState:",P)}}function N(){try{t.texImage2D(...arguments)}catch(P){Pe("WebGLState:",P)}}function se(){try{t.texImage3D(...arguments)}catch(P){Pe("WebGLState:",P)}}function ce(P){return d[P]!==void 0?d[P]:t.getParameter(P)}function pe(P,Y){d[P]!==Y&&(t.pixelStorei(P,Y),d[P]=Y)}function K(P){Ue.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),Ue.copy(P))}function Re(P){q.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),q.copy(P))}function Oe(P,Y){let te=c.get(Y);te===void 0&&(te=new WeakMap,c.set(Y,te));let ae=te.get(P);ae===void 0&&(ae=t.getUniformBlockIndex(Y,P.name),te.set(P,ae))}function Ye(P,Y){const te=c.get(Y).get(P);l.get(Y)!==te&&(t.uniformBlockBinding(Y,te,P.__bindingPointIndex),l.set(Y,te))}function ze(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ie=null,me={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,M=null,T=null,E=null,b=null,R=null,C=null,v=new Ge(0,0,0),x=0,D=!1,w=null,L=null,B=null,I=null,k=null,Ue.set(0,0,t.canvas.width,t.canvas.height),q.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:fe,disable:we,bindFramebuffer:Ne,drawBuffers:Le,useProgram:tt,setBlending:gt,setMaterial:sn,setFlipSided:Nt,setCullFace:yt,setLineWidth:U,setPolygonOffset:Vt,setScissorTest:qe,activeTexture:Je,bindTexture:he,unbindTexture:ct,compressedTexImage2D:be,compressedTexImage3D:A,texImage2D:N,texImage3D:se,pixelStorei:pe,getParameter:ce,updateUBOMapping:Oe,uniformBlockBinding:Ye,texStorage2D:ne,texStorage3D:le,texSubImage2D:S,texSubImage3D:V,compressedTexSubImage2D:$,compressedTexSubImage3D:Z,scissor:K,viewport:Re,reset:ze}}function v0(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return g?new OffscreenCanvas(A,S):Is("canvas")}function m(A,S,V){let $=1;const Z=be(A);if((Z.width>V||Z.height>V)&&($=V/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ne=Math.floor($*Z.width),le=Math.floor($*Z.height);h===void 0&&(h=_(ne,le));const N=S?_(ne,le):h;return N.width=ne,N.height=le,N.getContext("2d").drawImage(A,0,0,ne,le),Ce("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ne+"x"+le+")."),N}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){t.generateMipmap(A)}function T(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(A,S,V,$,Z,ne=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let le;$&&(le=e.get("EXT_texture_norm16"),le||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let N=S;if(S===t.RED&&(V===t.FLOAT&&(N=t.R32F),V===t.HALF_FLOAT&&(N=t.R16F),V===t.UNSIGNED_BYTE&&(N=t.R8),V===t.UNSIGNED_SHORT&&le&&(N=le.R16_EXT),V===t.SHORT&&le&&(N=le.R16_SNORM_EXT)),S===t.RED_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.R8UI),V===t.UNSIGNED_SHORT&&(N=t.R16UI),V===t.UNSIGNED_INT&&(N=t.R32UI),V===t.BYTE&&(N=t.R8I),V===t.SHORT&&(N=t.R16I),V===t.INT&&(N=t.R32I)),S===t.RG&&(V===t.FLOAT&&(N=t.RG32F),V===t.HALF_FLOAT&&(N=t.RG16F),V===t.UNSIGNED_BYTE&&(N=t.RG8),V===t.UNSIGNED_SHORT&&le&&(N=le.RG16_EXT),V===t.SHORT&&le&&(N=le.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.RG8UI),V===t.UNSIGNED_SHORT&&(N=t.RG16UI),V===t.UNSIGNED_INT&&(N=t.RG32UI),V===t.BYTE&&(N=t.RG8I),V===t.SHORT&&(N=t.RG16I),V===t.INT&&(N=t.RG32I)),S===t.RGB_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.RGB8UI),V===t.UNSIGNED_SHORT&&(N=t.RGB16UI),V===t.UNSIGNED_INT&&(N=t.RGB32UI),V===t.BYTE&&(N=t.RGB8I),V===t.SHORT&&(N=t.RGB16I),V===t.INT&&(N=t.RGB32I)),S===t.RGBA_INTEGER&&(V===t.UNSIGNED_BYTE&&(N=t.RGBA8UI),V===t.UNSIGNED_SHORT&&(N=t.RGBA16UI),V===t.UNSIGNED_INT&&(N=t.RGBA32UI),V===t.BYTE&&(N=t.RGBA8I),V===t.SHORT&&(N=t.RGBA16I),V===t.INT&&(N=t.RGBA32I)),S===t.RGB&&(V===t.UNSIGNED_SHORT&&le&&(N=le.RGB16_EXT),V===t.SHORT&&le&&(N=le.RGB16_SNORM_EXT),V===t.UNSIGNED_INT_5_9_9_9_REV&&(N=t.RGB9_E5),V===t.UNSIGNED_INT_10F_11F_11F_REV&&(N=t.R11F_G11F_B10F)),S===t.RGBA){const se=ne?La:$e.getTransfer(Z);V===t.FLOAT&&(N=t.RGBA32F),V===t.HALF_FLOAT&&(N=t.RGBA16F),V===t.UNSIGNED_BYTE&&(N=se==="srgb"?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT&&le&&(N=le.RGBA16_EXT),V===t.SHORT&&le&&(N=le.RGBA16_SNORM_EXT),V===t.UNSIGNED_SHORT_4_4_4_4&&(N=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(N=t.RGB5_A1)}return(N===t.R16F||N===t.R32F||N===t.RG16F||N===t.RG32F||N===t.RGBA16F||N===t.RGBA32F)&&e.get("EXT_color_buffer_float"),N}function b(A,S){let V;return A?S===null||S===1014||S===1020?V=t.DEPTH24_STENCIL8:S===1015?V=t.DEPTH32F_STENCIL8:S===1012&&(V=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===1014||S===1020?V=t.DEPTH_COMPONENT24:S===1015?V=t.DEPTH_COMPONENT32F:S===1012&&(V=t.DEPTH_COMPONENT16),V}function R(A,S){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==1003&&A.minFilter!==1006?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),x(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&d.delete(S)}function v(A){const S=A.target;S.removeEventListener("dispose",v),w(S)}function x(A){const S=i.get(A);if(S.__webglInit===void 0)return;const V=A.source,$=f.get(V);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&D(A),Object.keys($).length===0&&f.delete(V)}i.remove(A)}function D(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const V=A.source,$=f.get(V);delete $[S.__cacheKey],a.memory.textures--}function w(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)t.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else t.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)t.deleteFramebuffer(S.__webglFramebuffer[$]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const V=A.textures;for(let $=0,Z=V.length;$<Z;$++){const ne=i.get(V[$]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(V[$])}i.remove(A)}let L=0;function B(){L=0}function I(){return L}function k(A){L=A}function z(){const A=L;return A>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function F(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function j(A,S){const V=i.get(A);if(A.isVideoTexture&&he(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&V.__version!==A.version){const $=A.image;if($===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{we(V,A,S);return}}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+S)}function ee(A,S){const V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){we(V,A,S);return}else A.isExternalTexture&&(V.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+S)}function ie(A,S){const V=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){we(V,A,S);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+S)}function me(A,S){const V=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&V.__version!==A.version){Ne(V,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+S)}const Me={[Qo]:t.REPEAT,[ni]:t.CLAMP_TO_EDGE,[el]:t.MIRRORED_REPEAT},Ze={[Wt]:t.NEAREST,[am]:t.NEAREST_MIPMAP_NEAREST,[om]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[lm]:t.LINEAR_MIPMAP_NEAREST,[Hl]:t.LINEAR_MIPMAP_LINEAR},Ue={512:t.NEVER,519:t.ALWAYS,513:t.LESS,515:t.LEQUAL,514:t.EQUAL,518:t.GEQUAL,516:t.GREATER,517:t.NOTEQUAL};function q(A,S){if(S.type===1015&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===1006||S.magFilter===1007||S.magFilter===1005||S.magFilter===1008||S.minFilter===1006||S.minFilter===1007||S.minFilter===1005||S.minFilter===1008)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,Me[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Me[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Me[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Ze[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Ze[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===1003||S.minFilter!==1005&&S.minFilter!==1008||S.type===1015&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function oe(A,S){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const $=S.source;let Z=f.get($);Z===void 0&&(Z={},f.set($,Z));const ne=F(S);if(ne!==A.__cacheKey){Z[ne]===void 0&&(Z[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Z[ne].usedTimes++;const le=Z[A.__cacheKey];le!==void 0&&(Z[A.__cacheKey].usedTimes--,le.usedTimes===0&&D(S)),A.__cacheKey=ne,A.__webglTexture=Z[ne].texture}return V}function Se(A,S,V){return Math.floor(Math.floor(A/V)/S)}function fe(A,S,V,$){const ne=A.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,V,$,S.data);else{ne.sort((pe,K)=>pe.start-K.start);let le=0;for(let pe=1;pe<ne.length;pe++){const K=ne[le],Re=ne[pe],Oe=K.start+K.count,Ye=Se(Re.start,S.width,4),ze=Se(K.start,S.width,4);Re.start<=Oe+1&&Ye===ze&&Se(Re.start+Re.count-1,S.width,4)===Ye?K.count=Math.max(K.count,Re.start+Re.count-K.start):(++le,ne[le]=Re)}ne.length=le+1;const N=n.getParameter(t.UNPACK_ROW_LENGTH),se=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let pe=0,K=ne.length;pe<K;pe++){const Re=ne[pe],Oe=Math.floor(Re.start/4),Ye=Math.ceil(Re.count/4),ze=Oe%S.width,P=Math.floor(Oe/S.width),Y=Ye,te=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ze),n.pixelStorei(t.UNPACK_SKIP_ROWS,P),n.texSubImage2D(t.TEXTURE_2D,0,ze,P,Y,te,V,$,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,N),n.pixelStorei(t.UNPACK_SKIP_PIXELS,se),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function we(A,S,V){let $=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=t.TEXTURE_3D);const Z=oe(A,S),ne=S.source;n.bindTexture($,A.__webglTexture,t.TEXTURE0+V);const le=i.get(ne);if(ne.version!==le.__version||Z===!0){if(n.activeTexture(t.TEXTURE0+V),!(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)){const Y=$e.getPrimaries($e.workingColorSpace),te=S.colorSpace===""?null:$e.getPrimaries(S.colorSpace),ae=S.colorSpace===""||Y===te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let N=m(S.image,!1,r.maxTextureSize);N=ct(S,N);const se=s.convert(S.format,S.colorSpace),ce=s.convert(S.type);let pe=E(S.internalFormat,se,ce,S.normalized,S.colorSpace,S.isVideoTexture);q($,S);let K;const Re=S.mipmaps,Oe=S.isVideoTexture!==!0,Ye=le.__version===void 0||Z===!0,ze=ne.dataReady,P=R(S,N);if(S.isDepthTexture)pe=b(S.format===pd,S.type),Ye&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,pe,N.width,N.height):n.texImage2D(t.TEXTURE_2D,0,pe,N.width,N.height,0,se,ce,null));else if(S.isDataTexture)if(Re.length>0){Oe&&Ye&&n.texStorage2D(t.TEXTURE_2D,P,pe,Re[0].width,Re[0].height);for(let Y=0,te=Re.length;Y<te;Y++)K=Re[Y],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,K.width,K.height,se,ce,K.data):n.texImage2D(t.TEXTURE_2D,Y,pe,K.width,K.height,0,se,ce,K.data);S.generateMipmaps=!1}else Oe?(Ye&&n.texStorage2D(t.TEXTURE_2D,P,pe,N.width,N.height),ze&&fe(S,N,se,ce)):n.texImage2D(t.TEXTURE_2D,0,pe,N.width,N.height,0,se,ce,N.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Oe&&Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,pe,Re[0].width,Re[0].height,N.depth);for(let Y=0,te=Re.length;Y<te;Y++)if(K=Re[Y],S.format!==1023)if(se!==null)if(Oe){if(ze)if(S.layerUpdates.size>0){const ae=Mu(K.width,K.height,S.format,S.type);for(const xe of S.layerUpdates){const Q=K.data.subarray(xe*ae/K.data.BYTES_PER_ELEMENT,(xe+1)*ae/K.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,xe,K.width,K.height,1,se,Q)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,K.width,K.height,N.depth,se,K.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,pe,K.width,K.height,N.depth,0,K.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?ze&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,K.width,K.height,N.depth,se,ce,K.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,pe,K.width,K.height,N.depth,0,se,ce,K.data)}else{Oe&&Ye&&n.texStorage2D(t.TEXTURE_2D,P,pe,Re[0].width,Re[0].height);for(let Y=0,te=Re.length;Y<te;Y++)K=Re[Y],S.format!==1023?se!==null?Oe?ze&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,K.width,K.height,se,K.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,pe,K.width,K.height,0,K.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,K.width,K.height,se,ce,K.data):n.texImage2D(t.TEXTURE_2D,Y,pe,K.width,K.height,0,se,ce,K.data)}else if(S.isDataArrayTexture)if(Oe){if(Ye&&n.texStorage3D(t.TEXTURE_2D_ARRAY,P,pe,N.width,N.height,N.depth),ze)if(S.layerUpdates.size>0){const Y=Mu(N.width,N.height,S.format,S.type);for(const te of S.layerUpdates){const ae=N.data.subarray(te*Y/N.data.BYTES_PER_ELEMENT,(te+1)*Y/N.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,te,N.width,N.height,1,se,ce,ae)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,se,ce,N.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,N.width,N.height,N.depth,0,se,ce,N.data);else if(S.isData3DTexture)Oe?(Ye&&n.texStorage3D(t.TEXTURE_3D,P,pe,N.width,N.height,N.depth),ze&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,se,ce,N.data)):n.texImage3D(t.TEXTURE_3D,0,pe,N.width,N.height,N.depth,0,se,ce,N.data);else if(S.isFramebufferTexture){if(Ye)if(Oe)n.texStorage2D(t.TEXTURE_2D,P,pe,N.width,N.height);else{let Y=N.width,te=N.height;for(let ae=0;ae<P;ae++)n.texImage2D(t.TEXTURE_2D,ae,pe,Y,te,0,se,ce,null),Y>>=1,te>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),N.parentNode!==Y){Y.appendChild(N),d.add(S),Y.onpaint=ye=>{const De=ye.changedElements;for(const qt of d)De.includes(qt.image)&&(qt.needsUpdate=!0)},Y.requestPaint();return}const te=0,ae=t.RGBA,xe=t.RGBA,Q=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,te,ae,xe,Q,N),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Oe&&Ye){const Y=be(Re[0]);n.texStorage2D(t.TEXTURE_2D,P,pe,Y.width,Y.height)}for(let Y=0,te=Re.length;Y<te;Y++)K=Re[Y],Oe?ze&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,se,ce,K):n.texImage2D(t.TEXTURE_2D,Y,pe,se,ce,K);S.generateMipmaps=!1}else if(Oe){if(Ye){const Y=be(N);n.texStorage2D(t.TEXTURE_2D,P,pe,Y.width,Y.height)}ze&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se,ce,N)}else n.texImage2D(t.TEXTURE_2D,0,pe,se,ce,N);p(S)&&M($),le.__version=ne.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Ne(A,S,V){if(S.image.length!==6)return;const $=oe(A,S),Z=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const ne=i.get(Z);if(Z.version!==ne.__version||$===!0){n.activeTexture(t.TEXTURE0+V);const le=$e.getPrimaries($e.workingColorSpace),N=S.colorSpace===""?null:$e.getPrimaries(S.colorSpace),se=S.colorSpace===""||le===N?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ce=S.isCompressedTexture||S.image[0].isCompressedTexture,pe=S.image[0]&&S.image[0].isDataTexture,K=[];for(let Q=0;Q<6;Q++)!ce&&!pe?K[Q]=m(S.image[Q],!0,r.maxCubemapSize):K[Q]=pe?S.image[Q].image:S.image[Q],K[Q]=ct(S,K[Q]);const Re=K[0],Oe=s.convert(S.format,S.colorSpace),Ye=s.convert(S.type),ze=E(S.internalFormat,Oe,Ye,S.normalized,S.colorSpace),P=S.isVideoTexture!==!0,Y=ne.__version===void 0||$===!0,te=Z.dataReady;let ae=R(S,Re);q(t.TEXTURE_CUBE_MAP,S);let xe;if(ce){P&&Y&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,ze,Re.width,Re.height);for(let Q=0;Q<6;Q++){xe=K[Q].mipmaps;for(let ye=0;ye<xe.length;ye++){const De=xe[ye];S.format!==1023?Oe!==null?P?te&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,De.width,De.height,Oe,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,ze,De.width,De.height,0,De.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,0,0,De.width,De.height,Oe,Ye,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye,ze,De.width,De.height,0,Oe,Ye,De.data)}}}else{if(xe=S.mipmaps,P&&Y){xe.length>0&&ae++;const Q=be(K[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,ze,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(pe){P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,K[Q].width,K[Q].height,Oe,Ye,K[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,K[Q].width,K[Q].height,0,Oe,Ye,K[Q].data);for(let ye=0;ye<xe.length;ye++){const De=xe[ye].image[Q].image;P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,De.width,De.height,Oe,Ye,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,ze,De.width,De.height,0,Oe,Ye,De.data)}}else{P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Oe,Ye,K[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ze,Oe,Ye,K[Q]);for(let ye=0;ye<xe.length;ye++){const De=xe[ye];P?te&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,0,0,Oe,Ye,De.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ye+1,ze,Oe,Ye,De.image[Q])}}}p(S)&&M(t.TEXTURE_CUBE_MAP),ne.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Le(A,S,V,$,Z,ne){const le=s.convert(V.format,V.colorSpace),N=s.convert(V.type),se=E(V.internalFormat,le,N,V.normalized,V.colorSpace),ce=i.get(S),pe=i.get(V);if(pe.__renderTarget=S,!ce.__hasExternalTextures){const K=Math.max(1,S.width>>ne),Re=Math.max(1,S.height>>ne);Z===t.TEXTURE_3D||Z===t.TEXTURE_2D_ARRAY?n.texImage3D(Z,ne,se,K,Re,S.depth,0,le,N,null):n.texImage2D(Z,ne,se,K,Re,0,le,N,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,Z,pe.__webglTexture,0,qe(S)):(Z===t.TEXTURE_2D||Z>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,Z,pe.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function tt(A,S,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,ne=b(S.stencilBuffer,Z),le=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Je(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe(S),ne,S.width,S.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe(S),ne,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ne,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,A)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const ne=$[Z],le=s.convert(ne.format,ne.colorSpace),N=s.convert(ne.type),se=E(ne.internalFormat,le,N,ne.normalized,ne.colorSpace);Je(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe(S),se,S.width,S.height):V?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe(S),se,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,se,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function We(A,S,V){const $=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=i.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),q(t.TEXTURE_CUBE_MAP,S.depthTexture);const ce=s.convert(S.depthTexture.format),pe=s.convert(S.depthTexture.type);let K;S.depthTexture.format===1026?K=t.DEPTH_COMPONENT24:S.depthTexture.format===1027&&(K=t.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,K,S.width,S.height,0,ce,pe,null)}}else j(S.depthTexture,0);const ne=Z.__webglTexture,le=qe(S),N=$?t.TEXTURE_CUBE_MAP_POSITIVE_X+V:t.TEXTURE_2D,se=S.depthTexture.format===1027?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===1026)Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,N,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,se,N,ne,0);else if(S.depthTexture.format===1027)Je(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,se,N,ne,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,se,N,ne,0);else throw new Error("Unknown depthTexture format")}function wt(A){const S=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(V)for(let $=0;$<6;$++)We(S.__webglFramebuffer[$],A,$);else{const $=A.texture.mipmaps;$&&$.length>0?We(S.__webglFramebuffer[0],A,0):We(S.__webglFramebuffer,A,0)}else if(V){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=t.createRenderbuffer(),tt(S.__webglDepthbuffer[$],A,!1);else{const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ne)}}else{const $=A.texture.mipmaps;if($&&$.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),tt(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,ne)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(A,S,V){const $=i.get(A);S!==void 0&&Le($.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),V!==void 0&&wt(A)}function sn(A){const S=A.texture,V=i.get(A),$=i.get(S);A.addEventListener("dispose",v);const Z=A.textures,ne=A.isWebGLCubeRenderTarget===!0,le=Z.length>1;if(le||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=S.version,a.memory.textures++),ne){V.__webglFramebuffer=[];for(let N=0;N<6;N++)if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer[N]=[];for(let se=0;se<S.mipmaps.length;se++)V.__webglFramebuffer[N][se]=t.createFramebuffer()}else V.__webglFramebuffer[N]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){V.__webglFramebuffer=[];for(let N=0;N<S.mipmaps.length;N++)V.__webglFramebuffer[N]=t.createFramebuffer()}else V.__webglFramebuffer=t.createFramebuffer();if(le)for(let N=0,se=Z.length;N<se;N++){const ce=i.get(Z[N]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&Je(A)===!1){V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let N=0;N<Z.length;N++){const se=Z[N];V.__webglColorRenderbuffer[N]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[N]);const ce=s.convert(se.format,se.colorSpace),pe=s.convert(se.type),K=E(se.internalFormat,ce,pe,se.normalized,se.colorSpace,A.isXRRenderTarget===!0),Re=qe(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Re,K,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+N,t.RENDERBUFFER,V.__webglColorRenderbuffer[N])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),tt(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),q(t.TEXTURE_CUBE_MAP,S);for(let N=0;N<6;N++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)Le(V.__webglFramebuffer[N][se],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,se);else Le(V.__webglFramebuffer[N],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+N,0);p(S)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let N=0,se=Z.length;N<se;N++){const ce=Z[N],pe=i.get(ce);let K=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(K=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,pe.__webglTexture),q(K,ce),Le(V.__webglFramebuffer,A,ce,t.COLOR_ATTACHMENT0+N,K,0),p(ce)&&M(K)}n.unbindTexture()}else{let N=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(N=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(N,$.__webglTexture),q(N,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)Le(V.__webglFramebuffer[se],A,S,t.COLOR_ATTACHMENT0,N,se);else Le(V.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,N,0);p(S)&&M(N),n.unbindTexture()}A.depthBuffer&&wt(A)}function Nt(A){const S=A.textures;for(let V=0,$=S.length;V<$;V++){const Z=S[V];if(p(Z)){const ne=T(A),le=i.get(Z).__webglTexture;n.bindTexture(ne,le),M(ne),n.unbindTexture()}}}const yt=[],U=[];function Vt(A){if(A.samples>0){if(Je(A)===!1){const S=A.textures,V=A.width,$=A.height;let Z=t.COLOR_BUFFER_BIT;const ne=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),N=S.length>1;if(N)for(let ce=0;ce<S.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);const se=A.texture.mipmaps;se&&se.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=t.STENCIL_BUFFER_BIT)),N){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const pe=i.get(S[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,V,$,0,0,V,$,Z,t.NEAREST),l===!0&&(yt.length=0,U.length=0,yt.push(t.COLOR_ATTACHMENT0+ce),A.depthBuffer&&A.resolveDepthBuffer===!1&&(yt.push(ne),U.push(ne),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,yt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),N)for(let ce=0;ce<S.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,le.__webglColorRenderbuffer[ce]);const pe=i.get(S[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function qe(A){return Math.min(r.maxSamples,A.samples)}function Je(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function he(A){const S=a.render.frame;u.get(A)!==S&&(u.set(A,S),A.update())}function ct(A,S){const V=A.colorSpace,$=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!=="srgb-linear"&&V!==""&&($e.getTransfer(V)==="srgb"?($!==1023||Z!==1009)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",V)),S}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=B,this.getTextureUnits=I,this.setTextureUnits=k,this.setTexture2D=j,this.setTexture2DArray=ee,this.setTexture3D=ie,this.setTextureCube=me,this.rebindTextures=gt,this.setupRenderTarget=sn,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function M0(t,e){function n(i,r=""){let s;const a=$e.getTransfer(r);if(i===1009)return t.UNSIGNED_BYTE;if(i===1017)return t.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return t.UNSIGNED_SHORT_5_5_5_1;if(i===35902)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===35899)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===1010)return t.BYTE;if(i===1011)return t.SHORT;if(i===1012)return t.UNSIGNED_SHORT;if(i===1013)return t.INT;if(i===1014)return t.UNSIGNED_INT;if(i===1015)return t.FLOAT;if(i===1016)return t.HALF_FLOAT;if(i===1021)return t.ALPHA;if(i===1022)return t.RGB;if(i===1023)return t.RGBA;if(i===1026)return t.DEPTH_COMPONENT;if(i===1027)return t.DEPTH_STENCIL;if(i===1028)return t.RED;if(i===1029)return t.RED_INTEGER;if(i===1030)return t.RG;if(i===1031)return t.RG_INTEGER;if(i===1033)return t.RGBA_INTEGER;if(i===33776||i===33777||i===33778||i===33779)if(a==="srgb")if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===33776)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===33776)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===33777)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===33778)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===33779)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===35840||i===35841||i===35842||i===35843)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===36196||i===37492||i===37496||i===37488||i===37489||i===37490||i===37491)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===36196||i===37492)return a==="srgb"?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===37488)return s.COMPRESSED_R11_EAC;if(i===37489)return s.COMPRESSED_SIGNED_R11_EAC;if(i===37490)return s.COMPRESSED_RG11_EAC;if(i===37491)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===37808)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return a==="srgb"?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===36492||i===36494||i===36495)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===36492)return a==="srgb"?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===36283||i===36284||i===36285||i===36286)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===36283)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===1020?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,x0=`
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

}`,y0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Dd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new tn({vertexShader:S0,fragmentShader:x0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},T0=class extends lr{constructor(t,e){super();const n=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,h=null,f=null;const g=typeof XRWebGLBinding<"u",_=new y0,m={},p=e.getContextAttributes();let M=null,T=null;const E=[],b=[],R=new Xe;let C=null;const v=new bn;v.viewport=new At;const x=new bn;x.viewport=new At;const D=[v,x],w=new ng;let L=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let oe=E[q];return oe===void 0&&(oe=new ho,E[q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(q){let oe=E[q];return oe===void 0&&(oe=new ho,E[q]=oe),oe.getGripSpace()},this.getHand=function(q){let oe=E[q];return oe===void 0&&(oe=new ho,E[q]=oe),oe.getHandSpace()};function I(q){const oe=b.indexOf(q.inputSource);if(oe===-1)return;const Se=E[oe];Se!==void 0&&(Se.update(q.inputSource,q.frame,l||s),Se.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",z);for(let q=0;q<E.length;q++){const oe=b[q];oe!==null&&(b[q]=null,E[q].disconnect(oe))}L=null,B=null,_.reset();for(const q in m)delete m[q];t.setRenderTarget(M),h=null,d=null,u=null,i=null,T=null,Ue.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(M=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(R),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Se=null,fe=null;p.depth&&(fe=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,oe=p.stencil?pd:Ds,Se=p.stencil?fd:sr);const we={colorFormat:e.RGBA8,depthFormat:fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(we),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),T=new Xn(d.textureWidth,d.textureHeight,{format:Ls,type:wi,depthTexture:new jr(d.textureWidth,d.textureHeight,Se,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(i,e,oe),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Xn(h.framebufferWidth,h.framebufferHeight,{format:Ls,type:wi,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z(q){for(let oe=0;oe<q.removed.length;oe++){const Se=q.removed[oe],fe=b.indexOf(Se);fe>=0&&(b[fe]=null,E[fe].disconnect(Se))}for(let oe=0;oe<q.added.length;oe++){const Se=q.added[oe];let fe=b.indexOf(Se);if(fe===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=b.length){b.push(Se),fe=Ne;break}else if(b[Ne]===null){b[Ne]=Se,fe=Ne;break}if(fe===-1)break}const we=E[fe];we&&we.connect(Se)}}const F=new W,j=new W;function ee(q,oe,Se){F.setFromMatrixPosition(oe.matrixWorld),j.setFromMatrixPosition(Se.matrixWorld);const fe=F.distanceTo(j),we=oe.projectionMatrix.elements,Ne=Se.projectionMatrix.elements,Le=we[14]/(we[10]-1),tt=we[14]/(we[10]+1),We=(we[9]+1)/we[5],wt=(we[9]-1)/we[5],gt=(we[8]-1)/we[0],sn=(Ne[8]+1)/Ne[0],Nt=Le*gt,yt=Le*sn,U=fe/(-gt+sn),Vt=U*-gt;if(oe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Vt),q.translateZ(U),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),we[10]===-1)q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const qe=Le+U,Je=tt+U,he=Nt-Vt,ct=yt+(fe-Vt),be=We*tt/Je*qe,A=wt*tt/Je*qe;q.projectionMatrix.makePerspective(he,ct,be,A,qe,Je),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,oe){oe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(oe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let oe=q.near,Se=q.far;_.texture!==null&&(_.depthNear>0&&(oe=_.depthNear),_.depthFar>0&&(Se=_.depthFar)),w.near=x.near=v.near=oe,w.far=x.far=v.far=Se,(L!==w.near||B!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),L=w.near,B=w.far),w.layers.mask=q.layers.mask|6,v.layers.mask=w.layers.mask&-5,x.layers.mask=w.layers.mask&-3;const fe=q.parent,we=w.cameras;ie(w,fe);for(let Ne=0;Ne<we.length;Ne++)ie(we[Ne],fe);we.length===2?ee(w,v,x):w.projectionMatrix.copy(v.projectionMatrix),me(q,w,fe)};function me(q,oe,Se){Se===null?q.matrix.copy(oe.matrixWorld):(q.matrix.copy(Se.matrixWorld),q.matrix.invert(),q.matrix.multiply(oe.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(oe.projectionMatrix),q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rl*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&h===null))return o},this.setFoveation=function(q){o=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(w)},this.getCameraTexture=function(q){return m[q]};let Me=null;function Ze(q,oe){if(c=oe.getViewerPose(l||s),f=oe,c!==null){const Se=c.views;h!==null&&(t.setRenderTargetFramebuffer(T,h.framebuffer),t.setRenderTarget(T));let fe=!1;Se.length!==w.cameras.length&&(w.cameras.length=0,fe=!0);for(let Ne=0;Ne<Se.length;Ne++){const Le=Se[Ne];let tt=null;if(h!==null)tt=h.getViewport(Le);else{const wt=u.getViewSubImage(d,Le);tt=wt.viewport,Ne===0&&(t.setRenderTargetTextures(T,wt.colorTexture,wt.depthStencilTexture),t.setRenderTarget(T))}let We=D[Ne];We===void 0&&(We=new bn,We.layers.enable(Ne),We.viewport=new At,D[Ne]=We),We.matrix.fromArray(Le.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Le.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(tt.x,tt.y,tt.width,tt.height),Ne===0&&(w.matrix.copy(We.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),fe===!0&&w.cameras.push(We)}const we=i.enabledFeatures;if(we&&we.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();const Ne=u.getDepthInformation(Se[0]);Ne&&Ne.isValid&&Ne.texture&&_.init(Ne,i.renderState)}if(we&&we.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let Ne=0;Ne<Se.length;Ne++){const Le=Se[Ne].camera;if(Le){let tt=m[Le];tt||(tt=new Dd,m[Le]=tt);const We=u.getCameraImage(Le);tt.sourceTexture=We}}}}for(let Se=0;Se<E.length;Se++){const fe=b[Se],we=E[Se];fe!==null&&we!==void 0&&we.update(fe,oe,l||s)}Me&&Me(q,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),f=null}const Ue=new zd;Ue.setAnimationLoop(Ze),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}},E0=new St,Yd=new Fe;Yd.set(-1,0,0,0,1,0,0,0,1);function b0(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Nd(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,T,E){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,E)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===1&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===1&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),T=M.envMap,E=M.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(E0.makeRotationFromEuler(E)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Yd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===1&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A0(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,T){const E=T.program;i.uniformBlockBinding(M,E)}function c(M,T){let E=r[M.id];E===void 0&&(g(M),E=u(M),r[M.id]=E,M.addEventListener("dispose",m));const b=T.program;i.updateUBOMapping(M,b);const R=e.render.frame;s[M.id]!==R&&(h(M),s[M.id]=R)}function u(M){const T=d();M.__bindingPointIndex=T;const E=t.createBuffer(),b=M.__size,R=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,b,R),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const T=r[M.id],E=M.uniforms,b=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let R=0,C=E.length;R<C;R++){const v=Array.isArray(E[R])?E[R]:[E[R]];for(let x=0,D=v.length;x<D;x++){const w=v[x];if(f(w,R,x,b)===!0){const L=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let k=0;k<B.length;k++){const z=B[k],F=_(z);typeof z=="number"||typeof z=="boolean"?(w.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,L+I,w.__data)):z.isMatrix3?(w.__data[0]=z.elements[0],w.__data[1]=z.elements[1],w.__data[2]=z.elements[2],w.__data[3]=0,w.__data[4]=z.elements[3],w.__data[5]=z.elements[4],w.__data[6]=z.elements[5],w.__data[7]=0,w.__data[8]=z.elements[6],w.__data[9]=z.elements[7],w.__data[10]=z.elements[8],w.__data[11]=0):ArrayBuffer.isView(z)?w.__data.set(new z.constructor(z.buffer,z.byteOffset,w.__data.length)):(z.toArray(w.__data,I),I+=F.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,L,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(M,T,E,b){const R=M.value,C=T+"_"+E;if(b[C]===void 0)return typeof R=="number"||typeof R=="boolean"?b[C]=R:ArrayBuffer.isView(R)?b[C]=R.slice():b[C]=R.clone(),!0;{const v=b[C];if(typeof R=="number"||typeof R=="boolean"){if(v!==R)return b[C]=R,!0}else{if(ArrayBuffer.isView(R))return!0;if(v.equals(R)===!1)return v.copy(R),!0}}return!1}function g(M){const T=M.uniforms;let E=0;const b=16;for(let C=0,v=T.length;C<v;C++){const x=Array.isArray(T[C])?T[C]:[T[C]];for(let D=0,w=x.length;D<w;D++){const L=x[D],B=Array.isArray(L.value)?L.value:[L.value];for(let I=0,k=B.length;I<k;I++){const z=B[I],F=_(z),j=E%b,ee=j%F.boundary,ie=j+ee;E+=ee,ie!==0&&b-ie<F.storage&&(E+=b-ie),L.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=E,E+=F.storage}}}const R=E%b;return R>0&&(E+=b-R),M.__size=E,M.__cache={},this}function _(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),T}function m(M){const T=M.target;T.removeEventListener("dispose",m);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var w0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Bn=null;function C0(){return Bn===null&&(Bn=new A_(w0,16,16,Ra,ar),Bn.name="DFG_LUT",Bn.minFilter=fn,Bn.magFilter=fn,Bn.wrapS=ni,Bn.wrapT=ni,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}var R0=class{constructor(t={}){const{canvas:e=i_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:h=wi}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=s;const g=h,_=new Set([gd,_d,md]),m=new Set([wi,sr,ud,fd,hd,dd]),p=new Uint32Array(4),M=new Int32Array(4),T=new W;let E=null,b=null;const R=[],C=[];let v=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const x=this;let D=!1,w=null;this._outputColorSpace=Ht;let L=0,B=0,I=null,k=-1,z=null;const F=new At,j=new At;let ee=null;const ie=new Ge(0);let me=0,Me=e.width,Ze=e.height,Ue=1,q=null,oe=null;const Se=new At(0,0,Me,Ze),fe=new At(0,0,Me,Ze);let we=!1;const Ne=new Yl;let Le=!1,tt=!1;const We=new St,wt=new W,gt=new At,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function yt(){return I===null?Ue:1}let U=n;function Vt(y,O){return e.getContext(y,O)}try{const y={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r184"),e.addEventListener("webglcontextlost",xe,!1),e.addEventListener("webglcontextrestored",Q,!1),e.addEventListener("webglcontextcreationerror",ye,!1),U===null){const O="webgl2";if(U=Vt(O,y),U===null)throw Vt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw Pe("WebGLRenderer: "+y.message),y}let qe,Je,he,ct,be,A,S,V,$,Z,ne,le,N,se,ce,pe,K,Re,Oe,Ye,ze,P,Y;function te(){qe=new Cg(U),qe.init(),ze=new M0(U,qe),Je=new Sg(U,qe,t,ze),he=new g0(U,qe),Je.reversedDepthBuffer&&d&&he.buffers.depth.setReversed(!0),ct=new Lg(U),be=new i0,A=new v0(U,qe,he,be,Je,ze,ct),S=new wg(x),V=new mg(U),P=new vg(U,V),$=new Rg(U,V,ct,P),Z=new Ig(U,$,V,P,ct),Re=new Dg(U,Je,A),ce=new xg(be),ne=new n0(x,S,qe,Je,P,ce),le=new b0(x,be),N=new s0,se=new h0(qe),K=new gg(x,S,he,Z,f,o),pe=new _0(x,Z,Je),Y=new A0(U,ct,Je,he),Oe=new Mg(U,qe,ct),Ye=new Pg(U,qe,ct),ct.programs=ne.programs,x.capabilities=Je,x.extensions=qe,x.properties=be,x.renderLists=N,x.shadowMap=pe,x.state=he,x.info=ct}te(),g!==1009&&(v=new Ng(g,e.width,e.height,i,r));const ae=new T0(x,U);this.xr=ae,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const y=qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Ue},this.setPixelRatio=function(y){y!==void 0&&(Ue=y,this.setSize(Me,Ze,!1))},this.getSize=function(y){return y.set(Me,Ze)},this.setSize=function(y,O,X=!0){if(ae.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=y,Ze=O,e.width=Math.floor(y*Ue),e.height=Math.floor(O*Ue),X===!0&&(e.style.width=y+"px",e.style.height=O+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(Me*Ue,Ze*Ue).floor()},this.setDrawingBufferSize=function(y,O,X){Me=y,Ze=O,Ue=X,e.width=Math.floor(y*X),e.height=Math.floor(O*X),this.setViewport(0,0,y,O)},this.setEffects=function(y){if(g===1009){Pe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let O=0;O<y.length;O++)if(y[O].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(F)},this.getViewport=function(y){return y.copy(Se)},this.setViewport=function(y,O,X,H){y.isVector4?Se.set(y.x,y.y,y.z,y.w):Se.set(y,O,X,H),he.viewport(F.copy(Se).multiplyScalar(Ue).round())},this.getScissor=function(y){return y.copy(fe)},this.setScissor=function(y,O,X,H){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,O,X,H),he.scissor(j.copy(fe).multiplyScalar(Ue).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(y){he.setScissorTest(we=y)},this.setOpaqueSort=function(y){q=y},this.setTransparentSort=function(y){oe=y},this.getClearColor=function(y){return y.copy(K.getClearColor())},this.setClearColor=function(){K.setClearColor(...arguments)},this.getClearAlpha=function(){return K.getClearAlpha()},this.setClearAlpha=function(){K.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,X=!0){let H=0;if(y){let G=!1;if(I!==null){const re=I.texture.format;G=_.has(re)}if(G){const re=I.texture.type,de=m.has(re),_e=K.getClearColor(),ge=K.getClearAlpha(),Ie=_e.r,Ve=_e.g,He=_e.b;de?(p[0]=Ie,p[1]=Ve,p[2]=He,p[3]=ge,U.clearBufferuiv(U.COLOR,0,p)):(M[0]=Ie,M[1]=Ve,M[2]=He,M[3]=ge,U.clearBufferiv(U.COLOR,0,M))}else H|=U.COLOR_BUFFER_BIT}O&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),w=y},this.dispose=function(){e.removeEventListener("webglcontextlost",xe,!1),e.removeEventListener("webglcontextrestored",Q,!1),e.removeEventListener("webglcontextcreationerror",ye,!1),K.dispose(),N.dispose(),se.dispose(),be.dispose(),S.dispose(),Z.dispose(),P.dispose(),Y.dispose(),ne.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ac),ae.removeEventListener("sessionend",oc),Bi.stop()};function xe(y){y.preventDefault(),Yc("WebGLRenderer: Context Lost."),D=!0}function Q(){Yc("WebGLRenderer: Context Restored."),D=!1;const y=ct.autoReset,O=pe.enabled,X=pe.autoUpdate,H=pe.needsUpdate,G=pe.type;te(),ct.autoReset=y,pe.enabled=O,pe.autoUpdate=X,pe.needsUpdate=H,pe.type=G}function ye(y){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function De(y){const O=y.target;O.removeEventListener("dispose",De),qt(O)}function qt(y){ot(y),be.remove(y)}function ot(y){const O=be.get(y).programs;O!==void 0&&(O.forEach(function(X){ne.releaseProgram(X)}),y.isShaderMaterial&&ne.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,X,H,G,re){O===null&&(O=sn);const de=G.isMesh&&G.matrixWorld.determinant()<0,_e=_f(y,O,X,H,G);he.setMaterial(H,de);let ge=X.index,Ie=1;if(H.wireframe===!0){if(ge=$.getWireframeAttribute(X),ge===void 0)return;Ie=2}const Ve=X.drawRange,He=X.attributes.position;let Ae=Ve.start*Ie,at=(Ve.start+Ve.count)*Ie;re!==null&&(Ae=Math.max(Ae,re.start*Ie),at=Math.min(at,(re.start+re.count)*Ie)),ge!==null?(Ae=Math.max(Ae,0),at=Math.min(at,ge.count)):He!=null&&(Ae=Math.max(Ae,0),at=Math.min(at,He.count));const ft=at-Ae;if(ft<0||ft===1/0)return;P.setup(G,H,_e,X,ge);let pt,Qe=Oe;if(ge!==null&&(pt=V.get(ge),Qe=Ye,Qe.setIndex(pt)),G.isMesh)H.wireframe===!0?(he.setLineWidth(H.wireframeLinewidth*yt()),Qe.setMode(U.LINES)):Qe.setMode(U.TRIANGLES);else if(G.isLine){let Ot=H.linewidth;Ot===void 0&&(Ot=1),he.setLineWidth(Ot*yt()),G.isLineSegments?Qe.setMode(U.LINES):G.isLineLoop?Qe.setMode(U.LINE_LOOP):Qe.setMode(U.LINE_STRIP)}else G.isPoints?Qe.setMode(U.POINTS):G.isSprite&&Qe.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(qe.get("WEBGL_multi_draw"))Qe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ot=G._multiDrawStarts,ve=G._multiDrawCounts,Pn=G._multiDrawCount,et=ge?V.get(ge).bytesPerElement:1,yn=be.get(H).currentProgram.getUniforms();for(let On=0;On<Pn;On++)yn.setValue(U,"_gl_DrawID",On),Qe.render(Ot[On]/et,ve[On])}else if(G.isInstancedMesh)Qe.renderInstances(Ae,ft,G.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ve=Math.min(X.instanceCount,Ot);Qe.renderInstances(Ae,ft,ve)}else Qe.render(Ae,ft)};function Nn(y,O,X){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=1,y.needsUpdate=!0,Gs(y,O,X),y.side=0,y.needsUpdate=!0,Gs(y,O,X),y.side=2):Gs(y,O,X)}this.compile=function(y,O,X=null){X===null&&(X=y),b=se.get(X),b.init(O),C.push(b),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),y!==X&&y.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights();const H=new Set;return y.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const re=G.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){const _e=re[de];Nn(_e,X,G),H.add(_e)}else Nn(re,X,G),H.add(re)}),b=C.pop(),H},this.compileAsync=function(y,O,X=null){const H=this.compile(y,O,X);return new Promise(G=>{function re(){if(H.forEach(function(de){be.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){G(y);return}setTimeout(re,10)}qe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Rn=null;function pf(y){Rn&&Rn(y)}function ac(){Bi.stop()}function oc(){Bi.start()}const Bi=new zd;Bi.setAnimationLoop(pf),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(y){Rn=y,ae.setAnimationLoop(y),y===null?Bi.stop():Bi.start()},ae.addEventListener("sessionstart",ac),ae.addEventListener("sessionend",oc),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;w!==null&&w.renderStart(y,O);const X=ae.enabled===!0&&ae.isPresenting===!0,H=v!==null&&(I===null||X)&&v.begin(x,I);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),y.isScene===!0&&y.onBeforeRender(x,y,O,I),b=se.get(y,C.length),b.init(O),b.state.textureUnits=A.getTextureUnits(),C.push(b),We.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ne.setFromProjectionMatrix(We,qr,O.reversedDepth),tt=this.localClippingEnabled,Le=ce.init(this.clippingPlanes,tt),E=N.get(y,R.length),E.init(),R.push(E),ae.enabled===!0&&ae.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&qa(re,O,-1/0,x.sortObjects)}qa(y,O,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(q,oe),Nt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Nt&&K.addToRenderList(E,y),this.info.render.frame++,Le===!0&&ce.beginShadows();const G=b.state.shadowsArray;if(pe.render(G,y,O),Le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(H&&v.hasRenderPass())===!1){const re=E.opaque,de=E.transmissive;if(b.setupLights(),O.isArrayCamera){const _e=O.cameras;if(de.length>0)for(let ge=0,Ie=_e.length;ge<Ie;ge++){const Ve=_e[ge];cc(re,de,y,Ve)}Nt&&K.render(y);for(let ge=0,Ie=_e.length;ge<Ie;ge++){const Ve=_e[ge];lc(E,y,Ve,Ve.viewport)}}else de.length>0&&cc(re,de,y,O),Nt&&K.render(y),lc(E,y,O)}I!==null&&B===0&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),H&&v.end(x),y.isScene===!0&&y.onAfterRender(x,y,O),P.resetDefaultState(),k=-1,z=null,C.pop(),C.length>0?(b=C[C.length-1],A.setTextureUnits(b.state.textureUnits),Le===!0&&ce.setGlobalState(x.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?E=R[R.length-1]:E=null,w!==null&&w.renderEnd()};function qa(y,O,X,H){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLightProbeGrid)b.pushLightProbeGrid(y);else if(y.isLight)b.pushLight(y),y.castShadow&&b.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Ne.intersectsSprite(y)){H&&gt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(We);const re=Z.update(y),de=y.material;de.visible&&E.push(y,re,de,X,gt.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Ne.intersectsObject(y))){const re=Z.update(y),de=y.material;if(H&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),gt.copy(y.boundingSphere.center)):(re.boundingSphere===null&&re.computeBoundingSphere(),gt.copy(re.boundingSphere.center)),gt.applyMatrix4(y.matrixWorld).applyMatrix4(We)),Array.isArray(de)){const _e=re.groups;for(let ge=0,Ie=_e.length;ge<Ie;ge++){const Ve=_e[ge],He=de[Ve.materialIndex];He&&He.visible&&E.push(y,re,He,X,gt.z,Ve)}}else de.visible&&E.push(y,re,de,X,gt.z,null)}}const G=y.children;for(let re=0,de=G.length;re<de;re++)qa(G[re],O,X,H)}function lc(y,O,X,H){const{opaque:G,transmissive:re,transparent:de}=y;b.setupLightsView(X),Le===!0&&ce.setGlobalState(x.clippingPlanes,X),H&&he.viewport(F.copy(H)),G.length>0&&Vs(G,O,X),re.length>0&&Vs(re,O,X),de.length>0&&Vs(de,O,X),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function cc(y,O,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){const He=qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new Xn(1,1,{generateMipmaps:!0,type:He?ar:wi,minFilter:Hl,samples:Math.max(4,Je.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const G=b.state.transmissionRenderTarget[H.id],re=H.viewport||F;G.setSize(re.z*x.transmissionResolutionScale,re.w*x.transmissionResolutionScale);const de=x.getRenderTarget(),_e=x.getActiveCubeFace(),ge=x.getActiveMipmapLevel();x.setRenderTarget(G),x.getClearColor(ie),me=x.getClearAlpha(),me<1&&x.setClearColor(16777215,.5),x.clear(),Nt&&K.render(X);const Ie=x.toneMapping;x.toneMapping=0;const Ve=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),Le===!0&&ce.setGlobalState(x.clippingPlanes,H),Vs(y,X,H),A.updateMultisampleRenderTarget(G),A.updateRenderTargetMipmap(G),qe.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ae=0,at=O.length;Ae<at;Ae++){const{object:ft,geometry:pt,material:Qe,group:Ot}=O[Ae];if(Qe.side===2&&ft.layers.test(H.layers)){const ve=Qe.side;Qe.side=1,Qe.needsUpdate=!0,uc(ft,X,H,pt,Qe,Ot),Qe.side=ve,Qe.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(G),A.updateRenderTargetMipmap(G))}x.setRenderTarget(de,_e,ge),x.setClearColor(ie,me),Ve!==void 0&&(H.viewport=Ve),x.toneMapping=Ie}function Vs(y,O,X){const H=O.isScene===!0?O.overrideMaterial:null;for(let G=0,re=y.length;G<re;G++){const de=y[G],{object:_e,geometry:ge,group:Ie}=de;let Ve=de.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),_e.layers.test(X.layers)&&uc(_e,O,X,ge,Ve,Ie)}}function uc(y,O,X,H,G,re){y.onBeforeRender(x,O,X,H,G,re),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),G.onBeforeRender(x,O,X,H,y,re),G.transparent===!0&&G.side===2&&G.forceSinglePass===!1?(G.side=1,G.needsUpdate=!0,x.renderBufferDirect(X,O,H,G,y,re),G.side=0,G.needsUpdate=!0,x.renderBufferDirect(X,O,H,G,y,re),G.side=2):x.renderBufferDirect(X,O,H,G,y,re),y.onAfterRender(x,O,X,H,G,re)}function Gs(y,O,X){O.isScene!==!0&&(O=sn);const H=be.get(y),G=b.state.lights,re=b.state.shadowsArray,de=G.state.version,_e=ne.getParameters(y,G.state,re,O,X,b.state.lightProbeGridArray),ge=ne.getProgramCacheKey(_e);let Ie=H.programs;H.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?O.environment:null,H.fog=O.fog;const Ve=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;H.envMap=S.get(y.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",De),Ie=new Map,H.programs=Ie);let He=Ie.get(ge);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===de)return dc(y,_e),He}else _e.uniforms=ne.getUniforms(y),w!==null&&y.isNodeMaterial&&w.build(y,X,_e),y.onBeforeCompile(_e,x),He=ne.acquireProgram(_e,ge),Ie.set(ge,He),H.uniforms=_e.uniforms;const Ae=H.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ae.clippingPlanes=ce.uniform),dc(y,_e),H.needsLights=vf(y),H.lightsStateVersion=de,H.needsLights&&(Ae.ambientLightColor.value=G.state.ambient,Ae.lightProbe.value=G.state.probe,Ae.directionalLights.value=G.state.directional,Ae.directionalLightShadows.value=G.state.directionalShadow,Ae.spotLights.value=G.state.spot,Ae.spotLightShadows.value=G.state.spotShadow,Ae.rectAreaLights.value=G.state.rectArea,Ae.ltc_1.value=G.state.rectAreaLTC1,Ae.ltc_2.value=G.state.rectAreaLTC2,Ae.pointLights.value=G.state.point,Ae.pointLightShadows.value=G.state.pointShadow,Ae.hemisphereLights.value=G.state.hemi,Ae.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ae.spotLightMatrix.value=G.state.spotLightMatrix,Ae.spotLightMap.value=G.state.spotLightMap,Ae.pointShadowMatrix.value=G.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=He,H.uniformsList=null,He}function hc(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Sa.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function dc(y,O){const X=be.get(y);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.batchingColor=O.batchingColor,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function mf(y,O){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;T.setFromMatrixPosition(O.matrixWorld);for(let X=0,H=y.length;X<H;X++){const G=y[X];if(G.texture!==null&&G.boundingBox.containsPoint(T))return G}return null}function _f(y,O,X,H,G){O.isScene!==!0&&(O=sn),A.resetTextureUnits();const re=O.fog,de=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?O.environment:null,_e=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:$e.workingColorSpace,ge=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ie=S.get(H.envMap||de,ge),Ve=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,He=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,ft=!!X.morphAttributes.color;let pt=0;H.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(pt=x.toneMapping);const Qe=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ot=Qe!==void 0?Qe.length:0,ve=be.get(H),Pn=b.state.lights;if(Le===!0&&(tt===!0||y!==z)){const nt=y===z&&H.id===k;ce.setState(H,y,nt)}let et=!1;H.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Pn.state.version||ve.outputColorSpace!==_e||G.isBatchedMesh&&ve.batching===!1||!G.isBatchedMesh&&ve.batching===!0||G.isBatchedMesh&&ve.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ve.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ve.instancing===!1||!G.isInstancedMesh&&ve.instancing===!0||G.isSkinnedMesh&&ve.skinning===!1||!G.isSkinnedMesh&&ve.skinning===!0||G.isInstancedMesh&&ve.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ve.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ve.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ve.instancingMorph===!1&&G.morphTexture!==null||ve.envMap!==Ie||H.fog===!0&&ve.fog!==re||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==ce.numPlanes||ve.numIntersection!==ce.numIntersection)||ve.vertexAlphas!==Ve||ve.vertexTangents!==He||ve.morphTargets!==Ae||ve.morphNormals!==at||ve.morphColors!==ft||ve.toneMapping!==pt||ve.morphTargetsCount!==Ot||!!ve.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(et=!0):(et=!0,ve.__version=H.version);let yn=ve.currentProgram;et===!0&&(yn=Gs(H,O,G),w&&H.isNodeMaterial&&w.onUpdateProgram(H,yn,ve));let On=!1,ci=!1,hr=!1;const it=yn.getUniforms(),vt=ve.uniforms;if(he.useProgram(yn.program)&&(On=!0,ci=!0,hr=!0),H.id!==k&&(k=H.id,ci=!0),ve.needsLights){const nt=mf(b.state.lightProbeGridArray,G);ve.lightProbeGrid!==nt&&(ve.lightProbeGrid=nt,ci=!0)}if(On||z!==y){he.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),it.setValue(U,"projectionMatrix",y.projectionMatrix),it.setValue(U,"viewMatrix",y.matrixWorldInverse);const nt=it.map.cameraPosition;nt!==void 0&&nt.setValue(U,wt.setFromMatrixPosition(y.matrixWorld)),Je.logarithmicDepthBuffer&&it.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),z!==y&&(z=y,ci=!0,hr=!0)}if(ve.needsLights&&(Pn.state.directionalShadowMap.length>0&&it.setValue(U,"directionalShadowMap",Pn.state.directionalShadowMap,A),Pn.state.spotShadowMap.length>0&&it.setValue(U,"spotShadowMap",Pn.state.spotShadowMap,A),Pn.state.pointShadowMap.length>0&&it.setValue(U,"pointShadowMap",Pn.state.pointShadowMap,A)),G.isSkinnedMesh){it.setOptional(U,G,"bindMatrix"),it.setOptional(U,G,"bindMatrixInverse");const nt=G.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),it.setValue(U,"boneTexture",nt.boneTexture,A))}G.isBatchedMesh&&(it.setOptional(U,G,"batchingTexture"),it.setValue(U,"batchingTexture",G._matricesTexture,A),it.setOptional(U,G,"batchingIdTexture"),it.setValue(U,"batchingIdTexture",G._indirectTexture,A),it.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(U,"batchingColorTexture",G._colorsTexture,A));const ui=X.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&Re.update(G,X,yn),(ci||ve.receiveShadow!==G.receiveShadow)&&(ve.receiveShadow=G.receiveShadow,it.setValue(U,"receiveShadow",G.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&O.environment!==null&&(vt.envMapIntensity.value=O.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=C0()),ci){if(it.setValue(U,"toneMappingExposure",x.toneMappingExposure),ve.needsLights&&gf(vt,hr),re&&H.fog===!0&&le.refreshFogUniforms(vt,re),le.refreshMaterialUniforms(vt,H,Ue,Ze,b.state.transmissionRenderTarget[y.id]),ve.needsLights&&ve.lightProbeGrid){const nt=ve.lightProbeGrid;vt.probesSH.value=nt.texture,vt.probesMin.value.copy(nt.boundingBox.min),vt.probesMax.value.copy(nt.boundingBox.max),vt.probesResolution.value.copy(nt.resolution)}Sa.upload(U,hc(ve),vt,A)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Sa.upload(U,hc(ve),vt,A),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(U,"center",G.center),it.setValue(U,"modelViewMatrix",G.modelViewMatrix),it.setValue(U,"normalMatrix",G.normalMatrix),it.setValue(U,"modelMatrix",G.matrixWorld),H.uniformsGroups!==void 0){const nt=H.uniformsGroups;for(let ts=0,dr=nt.length;ts<dr;ts++){const fc=nt[ts];Y.update(fc,yn),Y.bind(fc,yn)}}return yn}function gf(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function vf(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return B},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,O,X){const H=be.get(y);H.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),be.get(y.texture).__webglTexture=O,be.get(y.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const X=be.get(y);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0};const Mf=U.createFramebuffer();this.setRenderTarget=function(y,O=0,X=0){I=y,L=O,B=X;let H=null,G=!1,re=!1;if(y){const de=be.get(y);if(de.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),F.copy(y.viewport),j.copy(y.scissor),ee=y.scissorTest,he.viewport(F),he.scissor(j),he.setScissorTest(ee),k=-1;return}else if(de.__webglFramebuffer===void 0)A.setupRenderTarget(y);else if(de.__hasExternalTextures)A.rebindTextures(y,be.get(y.texture).__webglTexture,be.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ie=y.depthTexture;if(de.__boundDepthTexture!==Ie){if(Ie!==null&&be.has(Ie)&&(y.width!==Ie.image.width||y.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(y)}}const _e=y.texture;(_e.isData3DTexture||_e.isDataArrayTexture||_e.isCompressedArrayTexture)&&(re=!0);const ge=be.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(ge[O])?H=ge[O][X]:H=ge[O],G=!0):y.samples>0&&A.useMultisampledRTT(y)===!1?H=be.get(y).__webglMultisampledFramebuffer:Array.isArray(ge)?H=ge[X]:H=ge,F.copy(y.viewport),j.copy(y.scissor),ee=y.scissorTest}else F.copy(Se).multiplyScalar(Ue).floor(),j.copy(fe).multiplyScalar(Ue).floor(),ee=we;if(X!==0&&(H=Mf),he.bindFramebuffer(U.FRAMEBUFFER,H)&&he.drawBuffers(y,H),he.viewport(F),he.scissor(j),he.setScissorTest(ee),G){const de=be.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,X)}else if(re){const de=O;for(let _e=0;_e<y.textures.length;_e++){const ge=be.get(y.textures[_e]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+_e,ge.__webglTexture,X,de)}}else if(y!==null&&X!==0){const de=be.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,X)}k=-1},this.readRenderTargetPixels=function(y,O,X,H,G,re,de,_e=0){if(!(y&&y.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge){he.bindFramebuffer(U.FRAMEBUFFER,ge);try{const Ie=y.textures[_e],Ve=Ie.format,He=Ie.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(He)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-H&&X>=0&&X<=y.height-G&&U.readPixels(O,X,H,G,ze.convert(Ve),ze.convert(He),re)}finally{const Ie=I!==null?be.get(I).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,O,X,H,G,re,de,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=be.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&de!==void 0&&(ge=ge[de]),ge)if(O>=0&&O<=y.width-H&&X>=0&&X<=y.height-G){he.bindFramebuffer(U.FRAMEBUFFER,ge);const Ie=y.textures[_e],Ve=Ie.format,He=Ie.type;if(y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+_e),!Je.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(O,X,H,G,ze.convert(Ve),ze.convert(He),0);const at=I!==null?be.get(I).__webglFramebuffer:null;he.bindFramebuffer(U.FRAMEBUFFER,at);const ft=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await r_(U,ft,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ae),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Ae),U.deleteSync(ft),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,X=0){const H=Math.pow(2,-X),G=Math.floor(y.image.width*H),re=Math.floor(y.image.height*H),de=O!==null?O.x:0,_e=O!==null?O.y:0;A.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,de,_e,G,re),he.unbindTexture()};const Sf=U.createFramebuffer(),xf=U.createFramebuffer();this.copyTextureToTexture=function(y,O,X=null,H=null,G=0,re=0){let de,_e,ge,Ie,Ve,He,Ae,at,ft;const pt=y.isCompressedTexture?y.mipmaps[re]:y.image;if(X!==null)de=X.max.x-X.min.x,_e=X.max.y-X.min.y,ge=X.isBox3?X.max.z-X.min.z:1,Ie=X.min.x,Ve=X.min.y,He=X.isBox3?X.min.z:0;else{const vt=Math.pow(2,-G);de=Math.floor(pt.width*vt),_e=Math.floor(pt.height*vt),y.isDataArrayTexture?ge=pt.depth:y.isData3DTexture?ge=Math.floor(pt.depth*vt):ge=1,Ie=0,Ve=0,He=0}H!==null?(Ae=H.x,at=H.y,ft=H.z):(Ae=0,at=0,ft=0);const Qe=ze.convert(O.format),Ot=ze.convert(O.type);let ve;O.isData3DTexture?(A.setTexture3D(O,0),ve=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(A.setTexture2DArray(O,0),ve=U.TEXTURE_2D_ARRAY):(A.setTexture2D(O,0),ve=U.TEXTURE_2D),he.activeTexture(U.TEXTURE0),he.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),he.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),he.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const Pn=he.getParameter(U.UNPACK_ROW_LENGTH),et=he.getParameter(U.UNPACK_IMAGE_HEIGHT),yn=he.getParameter(U.UNPACK_SKIP_PIXELS),On=he.getParameter(U.UNPACK_SKIP_ROWS),ci=he.getParameter(U.UNPACK_SKIP_IMAGES);he.pixelStorei(U.UNPACK_ROW_LENGTH,pt.width),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pt.height),he.pixelStorei(U.UNPACK_SKIP_PIXELS,Ie),he.pixelStorei(U.UNPACK_SKIP_ROWS,Ve),he.pixelStorei(U.UNPACK_SKIP_IMAGES,He);const hr=y.isDataArrayTexture||y.isData3DTexture,it=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const vt=be.get(y),ui=be.get(O),nt=be.get(vt.__renderTarget),ts=be.get(ui.__renderTarget);he.bindFramebuffer(U.READ_FRAMEBUFFER,nt.__webglFramebuffer),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let dr=0;dr<ge;dr++)hr&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.get(y).__webglTexture,G,He+dr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,be.get(O).__webglTexture,re,ft+dr)),U.blitFramebuffer(Ie,Ve,de,_e,Ae,at,de,_e,U.DEPTH_BUFFER_BIT,U.NEAREST);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(G!==0||y.isRenderTargetTexture||be.has(y)){const vt=be.get(y),ui=be.get(O);he.bindFramebuffer(U.READ_FRAMEBUFFER,Sf),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,xf);for(let nt=0;nt<ge;nt++)hr?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,vt.__webglTexture,G,He+nt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,vt.__webglTexture,G),it?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ui.__webglTexture,re,ft+nt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ui.__webglTexture,re),G!==0?U.blitFramebuffer(Ie,Ve,de,_e,Ae,at,de,_e,U.COLOR_BUFFER_BIT,U.NEAREST):it?U.copyTexSubImage3D(ve,re,Ae,at,ft+nt,Ie,Ve,de,_e):U.copyTexSubImage2D(ve,re,Ae,at,Ie,Ve,de,_e);he.bindFramebuffer(U.READ_FRAMEBUFFER,null),he.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else it?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(ve,re,Ae,at,ft,de,_e,ge,Qe,Ot,pt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(ve,re,Ae,at,ft,de,_e,ge,Qe,pt.data):U.texSubImage3D(ve,re,Ae,at,ft,de,_e,ge,Qe,Ot,pt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,re,Ae,at,de,_e,Qe,Ot,pt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,re,Ae,at,pt.width,pt.height,Qe,pt.data):U.texSubImage2D(U.TEXTURE_2D,re,Ae,at,de,_e,Qe,Ot,pt);he.pixelStorei(U.UNPACK_ROW_LENGTH,Pn),he.pixelStorei(U.UNPACK_IMAGE_HEIGHT,et),he.pixelStorei(U.UNPACK_SKIP_PIXELS,yn),he.pixelStorei(U.UNPACK_SKIP_ROWS,On),he.pixelStorei(U.UNPACK_SKIP_IMAGES,ci),re===0&&O.generateMipmaps&&U.generateMipmap(ve),he.unbindTexture()},this.initRenderTarget=function(y){be.get(y).__webglFramebuffer===void 0&&A.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?A.setTextureCube(y,0):y.isData3DTexture?A.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?A.setTexture2DArray(y,0):A.setTexture2D(y,0),he.unbindTexture()},this.resetState=function(){L=0,B=0,I=null,he.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(t),e.unpackColorSpace=$e._getUnpackColorSpace()}},P0={hearts:"#e23b3b",diamonds:"#e23b3b",spades:"#1a1a1a",clubs:"#1a1a1a"},cn=256,It=360,Hu=new Map,qi=null;function L0(t){return`${t.rank}-${t.suit}-${t.enhancement}-${t.edition}-${t.seal}`}var Wu=new Map,hs=new Map;function D0(t,e){const n=Wu.get(t);if(n){e(n);return}const i=hs.get(t);if(i){i.push(e);return}hs.set(t,[e]);const r=new Image;r.crossOrigin="anonymous",r.onload=()=>{Wu.set(t,r),hs.get(t)?.forEach(s=>s(r)),hs.delete(t)},r.onerror=()=>{hs.delete(t)},r.src=t}var I0={bonus:"rgba( 60, 120, 255, 0.28)",mult:"rgba(220,  55,  55, 0.28)",wild:"rgba(160,  70, 255, 0.28)",glass:"rgba(100, 210, 255, 0.28)",steel:"rgba(180, 192, 208, 0.38)",stone:"rgba(120, 120, 120, 0.50)",gold:"rgba(245, 195,  40, 0.38)",lucky:"rgba( 60, 200,  80, 0.28)"},U0={foil:"rgba(180, 220, 255, 0.30)",holographic:"rgba(200, 100, 255, 0.28)",polychrome:"rgba(255, 180,  60, 0.25)",negative:"rgba( 20,  20,  20, 0.55)"};function Xu(t,e,n,i){t.save(),Ci(t,6,6,n-12,i-12,22),t.clip(),t.fillStyle=e,t.fillRect(0,0,n,i),t.restore()}function N0(t,e,n,i,r,s){const a=e.getContext("2d");if(!a)return;a.clearRect(0,0,e.width,e.height),a.save(),Ci(a,6,6,e.width-12,e.height-12,22),a.clip(),a.drawImage(t,0,0,e.width,e.height),a.restore();const o=I0[i];o&&Xu(a,o,e.width,e.height);const l=U0[r];l&&Xu(a,l,e.width,e.height),a.lineWidth=4,a.strokeStyle="rgba(0,0,0,0.85)",Ci(a,6,6,e.width-12,e.height-12,22),a.stroke(),a.lineWidth=1,a.strokeStyle="rgba(255,255,255,0.18)",Ci(a,9,9,e.width-18,e.height-18,19),a.stroke(),s!=="none"&&(a.fillStyle=s==="gold"?"#ffd24a":s==="red"?"#ff5a5a":s==="blue"?"#54a8ff":"#c084ff",a.beginPath(),a.arc(e.width/2,e.height-50,22,0,Math.PI*2),a.fill(),a.lineWidth=3,a.strokeStyle="rgba(0,0,0,0.4)",a.stroke()),n.needsUpdate=!0}function $d(t,e,n,i,r,s){for(const a of["svg","png","webp","jpg"])D0(`${t}.${a}`,o=>N0(o,e,n,i,r,s))}function Ci(t,e,n,i,r,s){t.beginPath(),t.moveTo(e+s,n),t.arcTo(e+i,n,e+i,n+r,s),t.arcTo(e+i,n+r,e,n+r,s),t.arcTo(e,n+r,e,n,s),t.arcTo(e,n,e+i,n,s),t.closePath()}function qu(t){const e=L0(t),n=Hu.get(e);if(n)return n;const i=document.createElement("canvas");i.width=cn,i.height=It;const r=i.getContext("2d");if(r.fillStyle="#fdfdfd",Ci(r,6,6,cn-12,It-12,22),r.fill(),r.lineWidth=4,r.strokeStyle="#222",Ci(r,6,6,cn-12,It-12,22),r.stroke(),t.enhancement==="stone")r.fillStyle="#555",r.font="bold 56px serif",r.textAlign="center",r.fillText("STONE",cn/2,It/2+18);else{const o=P0[t.suit],l=Ca[t.rank],c=Vp[t.suit];r.fillStyle=o,r.textAlign="center",r.textBaseline="middle";const u=l==="10"?78:98,d=l==="10"?64:55;r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.save(),r.translate(cn,It),r.rotate(Math.PI),r.textAlign="center",r.textBaseline="middle",r.font=`900 ${u}px "Trebuchet MS", sans-serif`,r.fillText(l,d,68),r.font="bold 34px serif",r.fillText(c,48,116),r.restore(),r.textAlign="center",r.font="bold 160px serif",r.fillText(c,cn/2,It/2+32)}(o=>{t.seal!=="none"&&(o.fillStyle=t.seal==="gold"?"#ffd24a":t.seal==="red"?"#ff5a5a":t.seal==="blue"?"#54a8ff":"#c084ff",o.beginPath(),o.arc(cn/2,It-50,22,0,Math.PI*2),o.fill(),o.lineWidth=3,o.strokeStyle="rgba(0,0,0,0.4)",o.stroke())})(r);const a=new Ld(i);return a.colorSpace=Ht,a.anisotropy=4,Hu.set(e,a),t.enhancement!=="stone"&&$d(`/art/cards/${Ca[t.rank]}_${t.suit}`,i,a,t.enhancement,t.edition,t.seal),a}function jd(){if(qi)return qi;const t=document.createElement("canvas");t.width=cn,t.height=It;const e=t.getContext("2d"),n=e.createLinearGradient(0,0,cn,It);n.addColorStop(0,"#7a1622"),n.addColorStop(1,"#3a0a12"),e.fillStyle=n,Ci(e,6,6,cn-12,It-12,22),e.fill(),e.strokeStyle="#f0c060",e.lineWidth=3,Ci(e,18,18,cn-36,It-36,16),e.stroke(),e.strokeStyle="rgba(240,192,96,0.25)",e.lineWidth=1;for(let i=-It;i<cn;i+=14)e.beginPath(),e.moveTo(i,0),e.lineTo(i+It,It),e.stroke(),e.beginPath(),e.moveTo(i,It),e.lineTo(i+It,0),e.stroke();return e.fillStyle="#f0c060",e.textAlign="center",e.font="bold 96px serif",e.fillText("♠",cn/2,It/2+36),qi=new Ld(t),qi.colorSpace=Ht,qi.anisotropy=4,$d("/art/back/default",t,qi,"none","base","none"),qi}var zn=1.2,gi=1.68,gs=.04,Kd={value:0};function O0(t){Kd.value+=t}var F0=class extends Ti{card;selected=!1;hovered=!1;baseY=0;baseZ=0;baseRotZ=0;handIndex=0;faceMesh;backMesh;glowMesh;shadowMesh;glowMaterial;shadowMaterial;constructor(t){super(),this.card=t;const e=new rr(zn,gi),n=.5,i=new Xe(.06,-.08),r=new rr(zn+n,gi+n);this.shadowMaterial=new tn({transparent:!0,depthWrite:!1,uniforms:{uSize:{value:new Xe(zn+n,gi+n)},uInner:{value:new Xe(zn,gi)},uRadius:{value:.18},uOffset:{value:i},uOpacity:{value:.55}},vertexShader:`
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
      `}),this.shadowMesh=new Xt(r,this.shadowMaterial),this.shadowMesh.position.z=-gs*.5,this.shadowMesh.renderOrder=-2;const s=.35,a=new rr(zn+s,gi+s);this.glowMaterial=new tn({transparent:!0,depthWrite:!1,blending:2,uniforms:{uOpacity:{value:0},uTime:Kd,uColor:{value:new Ge(6994175)},uSize:{value:new Xe(zn+s,gi+s)},uInner:{value:new Xe(zn,gi)},uRadius:{value:.18}},vertexShader:`
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
      `}),this.glowMesh=new Xt(a,this.glowMaterial),this.glowMesh.position.z=-gs*.25,this.glowMesh.renderOrder=-1,this.glowMesh.visible=!1;const o=new ol({map:qu(t),roughness:.55,metalness:.05,alphaTest:.5,emissive:new Ge(0),emissiveIntensity:0}),l=new ol({map:jd(),roughness:.55,metalness:.05,alphaTest:.5});this.faceMesh=new Xt(e,o),this.faceMesh.position.z=gs/2,this.backMesh=new Xt(e,l),this.backMesh.position.z=-gs/2,this.backMesh.rotation.y=Math.PI,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this,this.add(this.shadowMesh,this.faceMesh,this.backMesh,this.glowMesh)}resetForCard(t){Te.killTweensOf(this.position),Te.killTweensOf(this.rotation),Te.killTweensOf(this.scale),this.card=t,this.selected=!1,this.hovered=!1,this.baseY=0,this.baseZ=0,this.baseRotZ=0,this.handIndex=0,delete this.userData.keepAlive,this.position.set(0,0,0),this.rotation.set(0,0,0),this.scale.set(1,1,1),this.glowMesh.visible=!1,this.glowMaterial.uniforms.uOpacity.value=0;const e=this.faceMesh.material;e.map=qu(t),e.emissive.setHex(0),e.emissiveIntensity=0,e.needsUpdate=!0,this.faceMesh.userData.cardObject=this,this.backMesh.userData.cardObject=this}moveTo(t,e=.45,n=0){this.baseY=t.y,this.baseZ=t.z??0,this.baseRotZ=t.rotZ??0,Te.to(this.position,{x:t.x,y:this.baseY+(this.selected?.45:0)+(this.hovered?.2:0),z:this.baseZ+(this.selected?.6:0)+(this.hovered?.5:0),duration:e,delay:n,ease:"power3.out"}),Te.to(this.rotation,{x:0,y:0,z:this.baseRotZ,duration:e,delay:n,ease:"power3.out"})}setHover(t){this.hovered!==t&&(this.hovered=t,Te.to(this.position,{y:this.baseY+(this.selected?.45:0)+(t?.2:0),z:this.baseZ+(this.selected?.6:0)+(t?.5:0),duration:.18,ease:"power2.out"}),Te.to(this.rotation,{x:t?-.05:0,duration:.18,ease:"power2.out"}))}setSelected(t){if(this.selected===t)return;this.selected=t,Te.to(this.position,{y:this.baseY+(t?.45:0)+(this.hovered?.2:0),z:this.baseZ+(t?.6:0)+(this.hovered?.5:0),duration:.22,ease:"back.out(2)"});const e=this.glowMaterial.uniforms.uOpacity;t&&(this.glowMesh.visible=!0),Te.to(e,{value:t?1:0,duration:t?.28:.22,ease:t?"power2.out":"power2.in",onComplete:()=>{this.selected||(this.glowMesh.visible=!1)}})}pulse(t=1.18,e=.35){const n=Te.timeline();n.to(this.scale,{x:t*1.08,y:t*.92,z:t,duration:e*.25,ease:"power2.out"}),n.to(this.scale,{x:t*.95,y:t*1.05,z:t,duration:e*.25,ease:"sine.inOut"}),n.to(this.scale,{x:1,y:1,z:1,duration:e*.5,ease:"elastic.out(1, 0.5)"})}flash(t=16765514,e=.5){const n=this.faceMesh.material;n.emissive.setHex(t),Te.fromTo(n,{emissiveIntensity:0},{emissiveIntensity:.9,duration:e*.3,ease:"power2.out",yoyo:!0,repeat:1})}dispose(){this.faceMesh.geometry.dispose(),this.faceMesh.material.dispose(),this.backMesh.material.dispose(),this.glowMesh.geometry.dispose(),this.glowMaterial.dispose(),this.shadowMesh.geometry.dispose(),this.shadowMaterial.dispose()}},Cr=400,B0=class{points;positions;colors;sizes;data=[];cursor=0;constructor(){const t=new li;this.positions=new Float32Array(Cr*3),this.colors=new Float32Array(Cr*3),this.sizes=new Float32Array(Cr),t.setAttribute("position",new mn(this.positions,3)),t.setAttribute("color",new mn(this.colors,3)),t.setAttribute("size",new mn(this.sizes,1));const e=new tn({uniforms:{uPixel:{value:window.devicePixelRatio||1}},transparent:!0,depthWrite:!1,blending:2,vertexColors:!0,vertexShader:`
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
      `});this.points=new L_(t,e),this.points.frustumCulled=!1,this.points.renderOrder=10;for(let n=0;n<Cr;n++)this.data[n]={active:!1,age:0,life:1,vx:0,vy:0,vz:0,gravity:0,startSize:1},this.sizes[n]=0}emit(t,e={}){const n=e.count??12,i=e.color??new Ge("#ffd24a"),r=e.spread??.8,s=e.speed??2.2,a=e.life??.9,o=e.size??14,l=e.gravity??-4.5,c=t.clone();this.points.parent&&this.points.parent.worldToLocal(c);for(let u=0;u<n;u++){const d=this.cursor;this.cursor=(this.cursor+1)%Cr;const h=this.data[d];h.active=!0,h.age=0,h.life=a*(.7+Math.random()*.6);const f=Math.random()*Math.PI*2,g=Math.random()*r;h.vx=Math.cos(f)*g*s*.5,h.vy=s*(.6+Math.random()*.8),h.vz=(Math.random()-.5)*r,h.gravity=l,h.startSize=o*(.7+Math.random()*.6),this.positions[d*3+0]=c.x,this.positions[d*3+1]=c.y,this.positions[d*3+2]=c.z,this.colors[d*3+0]=i.r,this.colors[d*3+1]=i.g,this.colors[d*3+2]=i.b,this.sizes[d]=h.startSize}}update(t){let e=!1;for(let n=0;n<Cr;n++){const i=this.data[n];if(!i.active)continue;if(i.age+=t,i.age>=i.life){i.active=!1,this.sizes[n]=0;continue}e=!0,i.vy+=i.gravity*t,this.positions[n*3+0]+=i.vx*t,this.positions[n*3+1]+=i.vy*t,this.positions[n*3+2]+=i.vz*t;const r=i.age/i.life;this.sizes[n]=i.startSize*(1-r)}(e||this.cursor!==0)&&(this.points.geometry.getAttribute("position").needsUpdate=!0,this.points.geometry.getAttribute("size").needsUpdate=!0,this.points.geometry.getAttribute("color").needsUpdate=!0)}dispose(){this.points.geometry.dispose(),this.points.material.dispose()}},ds="./";function Zd(t){const e=t.replace(/^\/+/,"");return ds===""||ds==="./"?`./${e}`:`${ds.endsWith("/")?ds:`${ds}/`}${e}`}var k0=["2","3","4","5","6","7","8","9","10","J","Q","K","A"],z0=["clubs","diamonds","hearts","spades"],Jd="art/ui/background.png",V0="art/back/default.svg",G0=k0.flatMap(t=>z0.map(e=>`art/cards/${t}_${e}.svg`)),H0=["art/ui/open-poker-logo.png",Jd,"art/ui/background.svg","art/ui/chip.svg","art/ui/coin.svg","art/ui/btn_discard.svg","art/ui/btn_new_run.svg","art/ui/btn_options.svg","art/ui/btn_play.svg","art/ui/btn_run_info.svg",V0,"art/back/default.png","art/blinds/small.svg","art/blinds/big.svg","art/blinds/boss.svg","art/jokers/joker_01.svg","art/jokers/joker_02.svg","art/jokers/joker_03.svg","art/jokers/joker_04.svg","art/jokers/joker_05.svg","art/consumables/planet.svg","art/consumables/spectral.svg","art/consumables/tarot.svg",...G0];function W0(t){return`art/cards/${Ca[t.rank]}_${t.suit}.svg`}function X0(t){return[...new Set(t)]}function Yu(t,e,n){return Math.max(e,Math.min(n,t))}function q0(){const t=new rr(2,2),e=new tn({uniforms:{uTime:{value:0},uColorA:{value:new Ge("#107052")},uColorB:{value:new Ge("#063329")},uColorC:{value:new Ge("#29a36d")},uMap:{value:null},uUseMap:{value:0}},vertexShader:`
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
    `,depthTest:!1,depthWrite:!1}),n=new Xt(t,e);return n.renderOrder=-1,n.frustumCulled=!1,n}function Y0(t){const e=new Z_;let n=null,i=!1;const r=t.material;return(()=>{if(i)return;const a=Zd(Jd);e.load(a,o=>{if(i){o.dispose();return}o.colorSpace=Ht,n=o,r.uniforms.uMap.value=o,r.uniforms.uUseMap.value=1},void 0,()=>{})})(),{dispose:()=>{i=!0,r.uniforms.uMap.value=null,r.uniforms.uUseMap.value=0,n?.dispose()}}}function $0(t){const e=new S_,n=new bn(28,t.clientWidth/t.clientHeight,.1,100);n.position.set(0,1.2,12),n.lookAt(0,.6,0);const i=new R0({antialias:!0,alpha:!1});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(t.clientWidth,t.clientHeight),i.outputColorSpace=Ht,t.appendChild(i.domElement);const r=q0();e.add(r);const s=Y0(r);e.add(new eg(16777215,.55));const a=new _u(16777215,1.1);a.position.set(2,4,5),e.add(a);const o=new _u(8964351,.4);o.position.set(-3,2,-2),e.add(o);const l=new Ti;l.position.set(0,-.9,0),l.scale.setScalar(.7),e.add(l);const c=new Ti;c.position.set(0,.4,0),c.scale.setScalar(.78),e.add(c);const u=new Ti;u.position.set(4.6,-1.75,0),u.scale.setScalar(.68),u.rotation.z=-.04,e.add(u);const d=new rr(zn,gi),h=new ol({map:jd(),roughness:.85,metalness:.05,alphaTest:.5}),f=12,g=[];for(let L=0;L<f;L++){const B=new Xt(d,h);B.position.set(L*.012,L*.018,L*gs*.5),u.add(B),g.push(B)}const _=L=>{const B=Math.max(0,Math.min(f,Math.ceil(L/52*f)));for(let I=0;I<g.length;I++)g[I].visible=I<B};_(52);const m=new B0;e.add(m.points);const p=(L,B)=>{m.emit(L,B)},M=()=>new W,T=L=>new Ge(L),E=()=>{const L=Math.max(1,t.clientWidth),B=Math.max(1,t.clientHeight),I=Yu(Math.min(L/1440,B/900),.78,1),k=Yu((1920-L)/1920,0,.5)*1.15+(1-I)*.35,z=-.9+(1-I)*1.35,F=.4+(1-I)*.28,j=4.6-(1-I)*.85,ee=-1.75+(1-I)*.45;l.position.set(k,z,0),l.scale.setScalar(.7*I),c.position.set(k,F,0),c.scale.setScalar(.78*I),u.position.set(j,ee,0),u.scale.setScalar(.68*I)};E();const b=()=>{const L=t.clientWidth,B=t.clientHeight;i.setSize(L,B),n.aspect=L/B,n.updateProjectionMatrix(),E()};window.addEventListener("resize",b);const R=new fg;let C=0;const v=()=>{const L=R.getDelta(),B=R.elapsedTime;r.material.uniforms.uTime.value=B,O0(L),m.update(L),i.render(e,n),C=requestAnimationFrame(v)};return C=requestAnimationFrame(v),{scene:e,camera:n,renderer:i,handGroup:l,playGroup:c,deckGroup:u,setDeckCount:_,particles:m,emitBurst:p,createVector3:M,createColor:T,getMetrics:()=>({frame:i.info.render.frame,calls:i.info.render.calls,triangles:i.info.render.triangles,points:i.info.render.points,lines:i.info.render.lines}),dispose:()=>{cancelAnimationFrame(C),window.removeEventListener("resize",b),s.dispose(),r.geometry.dispose(),r.material.dispose(),d.dispose(),h.dispose(),m.dispose(),i.dispose(),i.domElement.remove()},shake:(L=.15,B=.35)=>{const I={x:n.position.x,y:n.position.y},k=Te.timeline({onComplete:()=>{n.position.x=I.x,n.position.y=I.y}}),z=6;for(let F=0;F<z;F++)k.to(n.position,{x:I.x+(Math.random()-.5)*L*2,y:I.y+(Math.random()-.5)*L*2,duration:B/z,ease:"sine.inOut"});k.to(n.position,{x:I.x,y:I.y,duration:.1,ease:"power2.out"})}}}function hl(t){if(t===0)return[];const e=Math.min(zn*1.05,9/Math.max(t,1)),n=-((t-1)*e)/2,i=.04,r=.05;return Array.from({length:t},(s,a)=>{const o=n+a*e,l=a-(t-1)/2,c=-l*i;return{x:o,y:-Math.abs(l)*r*.5,z:a*.02,rotZ:c}})}function j0(t){const e=zn*1.1,n=-((t-1)*e)/2;return Array.from({length:t},(i,r)=>({x:n+r*e,y:.7,z:0,rotZ:0}))}var Ki=1e-4;function K0(t,e,n){return Math.max(e,Math.min(n,t))}function rn(t,e,n={}){const i=K0(n.pan??0,-1,1);if(Math.abs(i)<.001)return e;const r=t.createStereoPanner();return r.pan.value=i,r.connect(e),r}function xt(t,e,n,i,r,s=t.currentTime){const a=t.createGain();return a.gain.setValueAtTime(Ki,s),a.gain.exponentialRampToValueAtTime(Math.max(Ki,r),s+n),a.gain.exponentialRampToValueAtTime(Ki,s+n+i),a.connect(e),a}function es(t,e,n,i,r,s,a=t.currentTime){const o=t.createGain();return o.gain.setValueAtTime(Ki,a),o.gain.exponentialRampToValueAtTime(Math.max(Ki,s),a+n),o.gain.setValueAtTime(Math.max(Ki,s),a+n+i),o.gain.exponentialRampToValueAtTime(Ki,a+n+i+r),o.connect(e),o}function nn(t,e,n,i,r,s=0,a=t.currentTime){const o=t.createOscillator();return o.type=n,o.frequency.setValueAtTime(i,a),o.detune.setValueAtTime(s,a),o.connect(e),o.start(a),o.stop(a+r+.05),o}function Z0(t,e){const n=Math.max(1,Math.floor(t.sampleRate*e)),i=t.createBuffer(1,n,t.sampleRate),r=i.getChannelData(0);for(let s=0;s<n;s++)r[s]=Math.random()*2-1;return i}function xn(t,e,n,i=t.currentTime){const r=t.createBufferSource();return r.buffer=Z0(t,n),r.connect(e),r.start(i),r.stop(i+n+.05),r}function Pt(t,e,n,i,r=1){const s=t.createBiquadFilter();return s.type=n,s.frequency.value=i,s.Q.value=r,s.connect(e),s}function Ri(t,e,n,i,r,s,a=0){nn(t,xt(t,e,.002,r,i,s),"triangle",n,r,a,s).frequency.exponentialRampToValueAtTime(n*.985,s+r)}function J0(t,e,n={}){const i=n.volume??.07,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;xn(t,Pt(t,Pt(t,xt(t,s,.0015,.045,i,a),"highpass",550*r,.7),"lowpass",2100*r,.45),.055,a),nn(t,xt(t,s,.002,.035,i*.28,a),"sine",180*r,.04,n.detune??0,a)}function Q0(t,e,n={}){const i=n.volume??.18,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;nn(t,Pt(t,es(t,s,.008,.018,.16,i,a),"lowpass",900*r,.65),"sine",138*r,.2,n.detune??0,a).frequency.exponentialRampToValueAtTime(220*r,a+.09),xn(t,Pt(t,xt(t,s,.003,.11,i*.42,a+.006),"bandpass",760*r,.9),.13,a+.006)}function eM(t,e,n={}){const i=n.volume??.14,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;nn(t,Pt(t,es(t,s,.007,.01,.15,i,a),"lowpass",760*r,.55),"sine",250*r,.18,n.detune??0,a).frequency.exponentialRampToValueAtTime(120*r,a+.12),xn(t,Pt(t,xt(t,s,.003,.08,i*.34,a+.01),"bandpass",560*r,.8),.1,a+.01)}function tM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime,o=Pt(t,xt(t,s,.001,.095,i,a),"bandpass",2600*r,1.15);o.frequency.exponentialRampToValueAtTime(930*r,a+.11),xn(t,o,.12,a),nn(t,xt(t,s,.002,.06,i*.16,a+.045),"triangle",92*r,.075,n.detune??0,a+.045)}function nM(t,e,n={}){const i=n.volume??.28,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime,o=Pt(t,xt(t,s,.004,.13,i,a),"bandpass",2900*r,1.8);o.frequency.exponentialRampToValueAtTime(760*r,a+.14),xn(t,o,.15,a),nn(t,xt(t,s,.001,.05,i*.34,a+.035),"triangle",820*r,.06,(n.detune??0)+7,a+.035)}function iM(t,e,n={}){const i=n.volume??.36,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime,o=Pt(t,es(t,s,.012,.03,.29,i,a),"lowpass",420*r,1.2);o.frequency.exponentialRampToValueAtTime(2600*r,a+.18),o.frequency.exponentialRampToValueAtTime(420*r,a+.34),xn(t,o,.36,a),nn(t,xt(t,s,.015,.22,i*.18,a+.02),"sine",86*r,.26,n.detune??0,a+.02).frequency.exponentialRampToValueAtTime(118*r,a+.2)}function rM(t,e,n={}){const i=n.volume??.32,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime,o=Pt(t,Pt(t,es(t,s,.004,.015,.25,i,a),"highpass",180*r,.7),"lowpass",4200*r,.9);o.frequency.exponentialRampToValueAtTime(380*r,a+.28),xn(t,o,.31,a),nn(t,xt(t,s,.006,.18,i*.2,a+.04),"triangle",160*r,.22,n.detune??0,a+.04).frequency.exponentialRampToValueAtTime(78*r,a+.22)}function sM(t,e,n={}){const i=n.volume??.16,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;Ri(t,s,930*r,i,.055,a,(n.detune??0)-5),Ri(t,s,1570*r,i*.42,.04,a+.002,(n.detune??0)+8),xn(t,Pt(t,xt(t,s,.001,.025,i*.42,a),"highpass",1700*r,.5),.032,a)}function aM(t,e,n={}){const i=n.volume??.17,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;Ri(t,s,720*r,i*.65,.07,a,n.detune??0),Ri(t,s,1440*r,i*.54,.06,a+.004,(n.detune??0)+11),Ri(t,s,2160*r,i*.28,.05,a+.008,(n.detune??0)-9)}function oM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;[330,440,660].forEach((o,l)=>{const c=a+l*.045;nn(t,xt(t,s,.004,.22-l*.035,i*(1-l*.16),c),l===0?"triangle":"sine",o*r,.24,n.detune??0,c).frequency.exponentialRampToValueAtTime(o*1.08*r,c+.14)}),xn(t,Pt(t,xt(t,s,.003,.16,i*.34,a+.035),"highpass",2400*r,.45),.18,a+.035)}function lM(t,e,n={}){const i=n.volume??.42,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;[0,.09].forEach((o,l)=>{const c=a+o,u=(l===0?1040:1320)*r;Ri(t,s,u,i*.8,.32,c,(n.detune??0)+l*6),Ri(t,s,u*1.52,i*.38,.24,c+.006,(n.detune??0)-l*8),xn(t,Pt(t,xt(t,s,.001,.055,i*.34,c),"highpass",2600*r,.7),.07,c)}),[523.25,659.25,783.99,1046.5].forEach((o,l)=>{const c=a+.16+l*.055;Ri(t,s,o*r,i*.42,.28,c,n.detune??0)})}function cM(t,e,n={}){const i=n.volume??.48,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime,o=[392,523.25,659.25,783.99,1046.5];o.forEach((l,c)=>{const u=a+c*.095,d=c===o.length-1?.65:.42;nn(t,Pt(t,es(t,s,.01,.04,d,i*(c===o.length-1?.9:.62),u),"lowpass",3600*r,.8),"triangle",l*r,d+.04,n.detune??0,u),nn(t,xt(t,s,.002,.2,i*.18,u+.012),"sine",l*2.01*r,.22,(n.detune??0)+4,u+.012)}),xn(t,Pt(t,xt(t,s,.02,.6,i*.18,a+.32),"highpass",3200*r,.4),.7,a+.32)}function uM(t,e,n={}){const i=n.volume??.34,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime,o=Pt(t,s,"lowpass",850*r,.45),l=[196,174.61,155.56,130.81];l.forEach((c,u)=>{const d=a+u*.22,h=u===l.length-1?1:.62,f=es(t,o,.045,.02,h,i*(1-u*.08),d);nn(t,f,"triangle",c*r,h+.04,(n.detune??0)-5,d).frequency.exponentialRampToValueAtTime(c*.96*r,d+h),nn(t,xt(t,f,.05,h*.82,i*.24,d+.01),"sine",c/2*r,h,n.detune??0,d+.01)}),xn(t,Pt(t,xt(t,s,.03,.55,i*.18,a+.12),"lowpass",260*r,.8),.65,a+.12)}function hM(t,e,n={}){const i=n.volume??.24,r=n.pitch??1,s=rn(t,e,n),a=t.currentTime;nn(t,xt(t,s,.0015,.055,i,a),"triangle",360*r,.07,n.detune??0,a).frequency.exponentialRampToValueAtTime(170*r,a+.055),xn(t,Pt(t,xt(t,s,.001,.025,i*.5,a+.002),"highpass",1600*r,.6),.032,a+.002)}var dM=""+new URL("Veludo No Copo-CQSci05v.mp3",import.meta.url).href,fM=class{ctx;dest;buffer=null;source=null;pendingStart=!1;constructor(t,e){this.ctx=t,this.dest=e,this.load()}async load(){try{const t=await(await fetch(dM)).arrayBuffer();this.buffer=await this.ctx.decodeAudioData(t),this.pendingStart&&(this.pendingStart=!1,this.playBuffer())}catch(t){console.warn("[BackgroundMusic] Failed to load music file:",t)}}start(){this.buffer?this.playBuffer():this.pendingStart=!0}stop(){if(this.pendingStart=!1,this.source){try{this.source.stop()}catch{}this.source=null}}playBuffer(){if(this.stop(),!this.buffer)return;const t=this.ctx.createBufferSource();t.buffer=this.buffer,t.loop=!0,t.connect(this.dest),t.start(),this.source=t}},$u="open-poker:muted",ju="open-poker:volume",Ku="open-poker:music-muted",pM=class{ctx=null;master=null;sfxLimiter=null;musicGain=null;music=null;musicLoadPending=!1;voices=new Map;unlocked=!1;muted=!1;volume=.7;mutedListeners=new Set;musicMuted=!1;musicVolume=.06;musicMutedListeners=new Set;constructor(){try{this.muted=localStorage.getItem($u)==="1",this.musicMuted=localStorage.getItem(Ku)==="1";const t=localStorage.getItem(ju);t&&(this.volume=Math.max(0,Math.min(1,parseFloat(t))))}catch{}}registerDefaults(){const t=(e,n)=>this.register(e,{synth:n});t("click",J0),t("select",Q0),t("deselect",eM),t("deal",tM),t("flip",nM),t("whoosh",iM),t("sweep",rM),t("chipTick",sM),t("multTick",aM),t("scorePop",oM),t("chaching",lM),t("win",cM),t("lose",uM),t("buttonClick",hM)}register(t,e){this.voices.set(t,e)}installUnlockListener(){const t=()=>{this.unlock(),window.removeEventListener("pointerdown",t),window.removeEventListener("keydown",t)};window.addEventListener("pointerdown",t,{once:!1}),window.addEventListener("keydown",t,{once:!1})}ensureContext(){if(this.ctx)return this.ctx;try{const t=window.AudioContext||window.webkitAudioContext;if(!t)return null;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.muted?0:this.volume,this.sfxLimiter=this.ctx.createDynamicsCompressor(),this.sfxLimiter.threshold.value=-13,this.sfxLimiter.knee.value=8,this.sfxLimiter.ratio.value=5,this.sfxLimiter.attack.value=.003,this.sfxLimiter.release.value=.16,this.master.connect(this.sfxLimiter),this.sfxLimiter.connect(this.ctx.destination),this.musicGain=this.ctx.createGain(),this.musicGain.gain.value=this.musicMuted?0:this.musicVolume,this.musicGain.connect(this.ctx.destination)}catch{return null}return this.ctx}unlock(){const t=this.ensureContext();t&&(t.state==="suspended"&&t.resume(),this.unlocked=!0,this.startMusicWhenReady(t))}startMusicWhenReady(t){if(!(this.musicMuted||this.music||this.musicLoadPending||!this.musicGain)){if(this.musicLoadPending=!0,this.music||!this.musicGain||this.ctx!==t){this.musicLoadPending=!1;return}this.music=new fM(t,this.musicGain),this.music.start(),this.musicLoadPending=!1}}play(t,e={}){if(this.muted||!this.unlocked)return;const n=this.ensureContext();if(!n||!this.master)return;const i=this.voices.get(t);if(i){if(i.buffer){this.playBuffer(n,i.buffer,e);return}i.url&&!i.buffer&&this.loadBuffer(n,i),i.synth&&i.synth(n,this.master,e)}}playBuffer(t,e,n){if(!this.master)return;const i=t.createBufferSource();i.buffer=e,n.detune&&(i.detune.value=n.detune),n.pitch&&(i.playbackRate.value=n.pitch);const r=t.createGain();r.gain.value=n.volume??1,i.connect(r).connect(this.master),i.start()}loadBuffer(t,e){!e.url||e.buffer||fetch(e.url).then(n=>n.arrayBuffer()).then(n=>t.decodeAudioData(n)).then(n=>{e.buffer=n}).catch(()=>{})}setMuted(t){this.muted=t;try{localStorage.setItem($u,t?"1":"0")}catch{}this.master&&(this.master.gain.value=t?0:this.volume);for(const e of this.mutedListeners)e(t)}toggleMute(){return this.setMuted(!this.muted),this.muted}isMuted(){return this.muted}setVolume(t){this.volume=Math.max(0,Math.min(1,t));try{localStorage.setItem(ju,String(this.volume))}catch{}this.master&&!this.muted&&(this.master.gain.value=this.volume)}onMutedChange(t){return this.mutedListeners.add(t),()=>this.mutedListeners.delete(t)}setMusicMuted(t){this.musicMuted=t;try{localStorage.setItem(Ku,t?"1":"0")}catch{}this.musicGain&&(this.musicGain.gain.value=t?0:this.musicVolume),!t&&this.unlocked&&this.ctx&&this.startMusicWhenReady(this.ctx);for(const e of this.musicMutedListeners)e(t)}toggleMusicMute(){return this.setMusicMuted(!this.musicMuted),this.musicMuted}isMusicMuted(){return this.musicMuted}onMusicMutedChange(t){return this.musicMutedListeners.add(t),()=>this.musicMutedListeners.delete(t)}dispose(){this.music?.stop(),this.music=null;try{this.ctx?.close()}catch{}this.ctx=null,this.master=null,this.sfxLimiter=null,this.musicGain=null,this.musicLoadPending=!1,this.unlocked=!1}},Be=new pM;Be.registerDefaults();Be.installUnlockListener();function mM(t){const{renderer:e,camera:n,handGroup:i,getHandObjects:r,onToggleSelect:s,onReorder:a}=t,o=e.domElement,l=new dg,c=new Xe;let u=null,d=null,h=new Xe,f=null,g=0;const _=.012;function m(x){return Math.max(-.7,Math.min(.7,x.position.x/4.5))}function p(x){const D=o.getBoundingClientRect();c.x=(x.clientX-D.left)/D.width*2-1,c.y=-((x.clientY-D.top)/D.height)*2+1}function M(){const x=r();if(x.length===0)return null;l.setFromCamera(c,n);const D=x.flatMap(L=>[L.faceMesh,L.backMesh]),w=l.intersectObjects(D,!1);return w.length===0?null:w[0].object.userData.cardObject??null}function T(x){l.setFromCamera(c,n);const D=new vi(new W(0,0,1),-x),w=new W;return l.ray.intersectPlane(D,w)?w.x:null}function E(x){if(p(x),d&&!f){const w=c.x-h.x,L=c.y-h.y;if(w*w+L*L>_*_){f=d,f.position.x;const B=T(i.position.z+f.position.z);B!==null?g=B-(f.position.x+i.position.x):g=0,Be.play("flip",{volume:.24,pan:m(f)}),Te.to(f.position,{y:f.baseY+.6,z:f.baseZ+.4,duration:.15})}}if(f){const w=T(i.position.z+f.baseZ+.4);w!==null&&(f.position.x=w-i.position.x-g),b();return}const D=M();D!==u&&(u?.setHover(!1),u=D,u?.setHover(!0),D&&Be.play("click",{volume:.1,detune:(Math.random()-.5)*160,pan:m(D)}),o.style.cursor=D?"pointer":"default")}function b(){const x=r().slice().sort((w,L)=>w.position.x-L.position.x),D=hl(x.length);x.forEach((w,L)=>{w.handIndex=L,w!==f&&w.moveTo(D[L],.18)})}function R(x){p(x);const D=M();D&&(d=D,h.set(c.x,c.y),o.setPointerCapture(x.pointerId))}function C(x){if(o.hasPointerCapture(x.pointerId)&&o.releasePointerCapture(x.pointerId),f){const D=r().slice().sort((L,B)=>L.position.x-B.position.x),w=hl(D.length);D.forEach((L,B)=>{L.handIndex=B,L.moveTo(w[B],.25)}),a(D.map(L=>L.card.id)),f=null,d=null;return}if(d){const D=s(d.card.id);d.setSelected(D),Be.play(D?"select":"deselect",{detune:(Math.random()-.5)*70,pan:m(d)}),d=null}}function v(){u?.setHover(!1),u=null,o.style.cursor="default"}return o.addEventListener("pointermove",E),o.addEventListener("pointerdown",R),o.addEventListener("pointerup",C),o.addEventListener("pointerleave",v),()=>{o.removeEventListener("pointermove",E),o.removeEventListener("pointerdown",R),o.removeEventListener("pointerup",C),o.removeEventListener("pointerleave",v)}}var _M=[{action:"play_hand",description:"Play selected cards",keys:["Enter"]},{action:"discard",description:"Discard selected cards",keys:["Backspace","Delete"]},{action:"restart_run",description:"Start a new run",keys:["KeyR"]},{action:"toggle_mute",description:"Mute/unmute audio",keys:["KeyM"]}],gM={"btn-play":"play_hand","btn-discard":"discard","overlay-restart":"restart_run","btn-mute":"toggle_mute"},vM=new Map(_M.flatMap(t=>t.keys.map(e=>[e,t.action])));function MM(t){return t.ctrlKey||t.metaKey||t.altKey?null:vM.get(t.code)??null}var SM=15e3;function xM(t={}){return X0([...H0,...(t.cards??[]).map(W0)]).map(e=>({url:Zd(e),label:e}))}function yM(t){return new Promise((e,n)=>{const i=window.setTimeout(()=>n(new Error(`Timed out loading image: ${t}`)),SM),r=new Image;r.decoding="async",r.onload=()=>{if(window.clearTimeout(i),!r.decode){e();return}r.decode().catch(()=>{}).then(()=>e())},r.onerror=()=>{window.clearTimeout(i),n(new Error(`Failed to load image: ${t}`))},r.src=t})}async function TM(t,e={}){const n=xM(e),i=n.length,r=[];let s=0;return t?.({loaded:s,total:i,label:"Preparing assets",failed:0}),await Promise.all(n.map(async a=>{try{await yM(a.url)}catch(o){r.push(a.label),console.warn(`[preload] ${a.label}`,o)}finally{s+=1,t?.({loaded:s,total:i,label:a.label,failed:r.length})}})),{total:i,failed:r}}var Ee=t=>document.getElementById(t),ur=t=>document.getElementById(t),Fo=ur("splash-screen"),Zu=ur("splash-progress-bar"),Bo=ur("splash-status"),Ju=ur("splash-percent"),dl=Ee("canvas-host"),EM=Ee("blind-name"),Qu=Ee("blind-badge"),bM=Ee("blind-target"),AM=Ee("blind-reward"),fl=Ee("round-score"),eh=Ee("hand-type"),Zi=Ee("chips"),Ji=Ee("mult"),wM=Ee("ante"),CM=Ee("round"),RM=Ee("money"),PM=Ee("hands-left"),LM=Ee("discards-left"),DM=Ee("seed"),IM=Ee("hand-counter"),UM=Ee("deck-counter"),pl=Ee("joker-slots"),NM=Ee("joker-count"),th=Ee("consumable-slots"),OM=Ee("consumable-count"),FM=Ee("btn-play"),BM=Ee("btn-discard"),Ql=Ee("btn-sort-straight"),ec=Ee("btn-sort-flush"),kM=Ee("btn-runinfo"),zM=Ee("btn-options"),ml=Ee("run-info-overlay"),nh=Ee("run-info-list"),VM=Ee("btn-run-info-back"),_l=Ee("options-overlay"),GM=Ee("btn-options-back"),Qd=Ee("btn-option-sfx"),ef=Ee("btn-option-music"),HM=Ee("btn-option-new-run"),WM=Ee("btn-option-return"),XM=Ee("kanban-close-game"),Ia=Ee("score-popup"),ih=Ee("popup-hand"),gl=Ee("popup-total"),vs=Ee("overlay"),qM=Ee("overlay-title"),YM=Ee("overlay-sub"),Un=Ee("shop-overlay"),vl=Ee("shop-panel"),Ml=Ee("shop-offers"),$M=Ee("shop-inventory"),jM=Ee("shop-money"),KM=Ee("shop-next-blind"),ZM=Ee("shop-reroll-cost"),tc=Ee("btn-shop-reroll"),Sl=Ee("btn-shop-next");function JM(t,e,n){return Math.max(e,Math.min(n,t))}function nc(){const t=window.innerWidth||1280,e=window.innerHeight||720,n=JM(Math.min(t/1280,e/900),.72,1),i=Math.round(14*n),r=260,s=16*n,a=i+r*n+s,o=Math.max(320,(t-a-i)/n),l=Math.max(360,(e-i*2)/n),c=document.documentElement;c.style.setProperty("--ui-scale",n.toFixed(3)),c.style.setProperty("--ui-edge",`${i}px`),c.style.setProperty("--sidebar-layout-height",`${l}px`),c.style.setProperty("--hud-top-left",`${a}px`),c.style.setProperty("--hud-top-layout-width",`${o}px`)}nc();function QM(t){const e=t.total===0?1:t.loaded/t.total,n=Math.round(e*100);if(Zu&&(Zu.style.transform=`scaleX(${e})`),Ju&&(Ju.textContent=`${n}%`),!!Bo){if(t.loaded>=t.total){Bo.textContent=t.failed>0?`Loaded with ${t.failed} fallback${t.failed===1?"":"s"}`:"Ready";return}Bo.textContent=`Loading ${t.label}`}}function eS(){Fo&&window.setTimeout(()=>{Fo.classList.add("is-complete"),window.setTimeout(()=>Fo.remove(),650)},220)}var tf="kanban-open-poker:run-v1";function tS(){try{const t=localStorage.getItem(tf);if(!t)return null;const e=JSON.parse(t);return e?.version===1&&e.snapshot?e:null}catch{return null}}var Us=tS(),J=new im;if(Us?.snapshot)try{J.reset(Us.snapshot)}catch(t){console.warn("[save] Could not restore Open Poker run:",t)}var Ii=Object.fromEntries(Object.keys(J.handLevels).map(t=>[t,0]));if(Us?.handPlayCounts)for(const t of Object.keys(Ii))Ii[t]=Math.max(0,Number(Us.handPlayCounts[t]??0)||0);var Zr=null;function nS(){for(const t of Object.keys(Ii))Ii[t]=0}var rh=await TM(QM,{cards:J.hand});rh.failed.length>0&&console.warn("[preload] Assets loaded with fallbacks:",rh.failed);eS();var bt=$0(dl),Qt=new Map,Ua=[],Mi=!1,Qi=!1,kr=!1,zr=null,Cn=!1,Na=[];function nf(t){return Math.max(-.7,Math.min(.7,t/4.5))}function rf(t){const e=Na.pop()??document.createElement("div");return e.removeAttribute("style"),e.className="card-score-float",e.textContent="",t.appendChild(e),e}function sf(t){t.remove(),t.removeAttribute("style"),t.className="card-score-float",t.textContent="",Na.push(t)}function iS(t){let e=Qt.get(t.id);return e||(e=Ua.pop()??new F0(t),e.resetForCard(t),bt.handGroup.add(e),e.position.set(6,-2,1),e.rotation.y=Math.PI,Qt.set(t.id,e),Be.play("deal",{volume:.27,detune:(Math.random()-.5)*180,pitch:.94+Math.random()*.12,pan:(Math.random()-.5)*.5}),Te.to(e.rotation,{y:0,duration:.5,delay:.05,ease:"power3.out"})),e}function Wa(t,e){bt.handGroup.remove(e),bt.playGroup.remove(e),Qt.delete(t),e.resetForCard(e.card),Ua.push(e)}function sh(t){bt.handGroup.remove(t),bt.playGroup.remove(t),t.dispose()}var Wn=[],Ui=Us?.activeHandSort??null;function Fi(){try{const t={version:1,snapshot:J.toSnapshot(),activeHandSort:Ui,handPlayCounts:{...Ii},savedAt:Date.now()};localStorage.setItem(tf,JSON.stringify(t))}catch(t){console.warn("[save] Could not persist Open Poker run:",t)}}function ic(){Fi(),window.parent!==window&&window.parent.postMessage({type:"open-poker-close"},"*")}function rS(){const t=J.hand.map(e=>e.id);Wn=Wn.filter(e=>t.includes(e));for(const e of t)Wn.includes(e)||Wn.push(e)}function sS(){return Wn.map(t=>Qt.get(t)).filter(Boolean)}function rc(){Ql.classList.toggle("is-active",Ui==="straight"),ec.classList.toggle("is-active",Ui==="flush")}function af(){!Ui||J.hand.length<2||(Wn=(Ui==="straight"?rm(J.hand):sm(J.hand)).map(t=>t.id))}function Oa(t){Cn||J.phase!=="play"||J.hand.length<2||(Ui=t,af(),rc(),Fi(),Be.play("buttonClick"),Ni(.28))}function Ni(t=.4){af(),rS();const e={};for(const r of J.hand)e[r.id]=r;const n=Wn.map(r=>e[r]).filter(Boolean),i=hl(n.length);n.forEach((r,s)=>{const a=iS(r);a.handIndex=s,a.setSelected(J.selected.has(r.id)),a.moveTo(i[s],t,s*.04)});for(const[r,s]of Qt)!e[r]&&!s.userData.keepAlive&&Wa(r,s)}function ah(t){return t.split(" ").map(e=>e.charAt(0)).join("").slice(0,3).toUpperCase()}function of(){pl.replaceChildren();for(let t=0;t<5;t++){const e=document.createElement("div"),n=J.jokers[t];e.className=`joker-slot${n?" filled":""}`,n&&(e.dataset.jokerId=n.id,e.textContent=ah(n.name),e.title=`${n.name} - ${n.description}`),pl.appendChild(e)}th.replaceChildren();for(let t=0;t<2;t++){const e=document.createElement("div"),n=J.consumables[t];e.className=`consumable-slot${n?" filled":""}`,n&&(e.dataset.consumableId=n.id,e.textContent=ah(n.name),e.title=`${n.name} - ${n.description}`),th.appendChild(e)}}of();var xl=["Small Blind","Big Blind","Boss Blind"],aS=[["SMALL","BLIND"],["BIG","BLIND"],["BOSS"]],oS=["small","big","boss"],lS=["$","$$","$$$$$"];function cS(t){return t.kind==="joker"?t.joker.name:t.kind==="consumable"?t.consumable.name:t.name}function uS(t){return t.kind==="joker"?t.joker.description:t.kind==="consumable"?t.consumable.description:t.description}function hS(t){return t.kind==="joker"?t.joker.price:t.kind==="consumable"?t.consumable.price:t.price}function dS(t){return t.kind==="playing-card"?"Deck Card":t.kind}function oh(t,e,n){const i=document.createElement("div");i.className="shop-inventory-group";const r=document.createElement("div");r.className="shop-inventory-title",r.textContent=`${n==="joker"?"Jokers":"Consumables"} ${t.length}/${e}`,i.appendChild(r);const s=document.createElement("div");s.className="shop-inventory-list";for(let a=0;a<e;a++){const o=t[a],l=document.createElement("div");if(l.className=`shop-inventory-row${o?" filled":""}`,!o){l.textContent="Empty slot",s.appendChild(l);continue}const c=document.createElement("div");c.className="shop-inventory-copy";const u=document.createElement("strong");u.textContent=o.name;const d=document.createElement("span");if(d.textContent=o.description,c.append(u,d),l.appendChild(c),n==="consumable"){const f=document.createElement("button");f.className="shop-mini-btn use",f.textContent="Use",f.addEventListener("click",()=>{J.useConsumable(o.id)&&(Be.play("chaching"),_n())}),l.appendChild(f)}const h=document.createElement("button");h.className="shop-mini-btn",h.textContent=`Sell $${o.sellValue}`,h.addEventListener("click",()=>{(n==="joker"?J.sellJoker(o.id):J.sellConsumable(o.id))&&(Be.play("buttonClick"),_n())}),l.appendChild(h),s.appendChild(l)}return i.appendChild(s),i}function fS(t){const e=Un.classList.contains("hidden");t?(Un.classList.remove("hidden"),e&&(Un.style.opacity="1",Te.fromTo(Un,{opacity:0},{opacity:1,duration:.25,ease:"power2.out"}),Te.fromTo(vl,{y:24,scale:.96},{y:0,scale:1,duration:.38,ease:"back.out(1.4)"}),Be.play("chaching",{volume:.35}))):Un.classList.add("hidden")}function pS(){const t=J.phase==="shop"&&!!J.shop&&!Qi;fS(t),!(!t||!J.shop)&&(jM.textContent=`$${J.money}`,KM.textContent=xl[J.blindIndex],ZM.textContent=`$${J.shop.rerollCost}`,tc.disabled=J.money<J.shop.rerollCost,Ml.replaceChildren(),J.shop.offers.forEach((e,n)=>{const i=document.createElement("article"),r=J.canBuyOffer(e.id);i.className=`shop-offer ${e.item.kind}${e.sold?" sold":""}`;const s=document.createElement("div");s.className="shop-offer-kind",s.textContent=dS(e.item),i.appendChild(s);const a=document.createElement("h3");a.textContent=cS(e.item),i.appendChild(a);const o=document.createElement("p");o.textContent=uS(e.item),i.appendChild(o);const l=document.createElement("button");l.className="shop-buy-btn",l.dataset.testid=`shop-buy-${n}`,l.disabled=e.sold||!r,l.textContent=e.sold?"Sold":`Buy $${hS(e.item)}`,l.addEventListener("click",()=>{J.buyOffer(e.id)&&(Be.play("chaching"),Te.fromTo(i,{scale:1},{scale:1.04,duration:.14,yoyo:!0,repeat:1,ease:"power2.out"}),_n())}),i.appendChild(l),Ml.appendChild(i)}),$M.replaceChildren(oh(J.jokers,5,"joker"),oh(J.consumables,2,"consumable")))}function mS(t,e){t.replaceChildren(),e.forEach((n,i)=>{i>0&&t.appendChild(document.createElement("br")),t.append(document.createTextNode(n))})}function _S(t){const e=document.createElement("span");e.className="counter-total",e.textContent="/8",wM.replaceChildren(document.createTextNode(String(t)),e)}function _n(){of();const t=J.blindIndex;EM.textContent=xl[t],Qu.className=`blind-badge ${oS[t]}`;const e=Qu.querySelector("span");e&&mS(e,aS[t]),bM.textContent=J.target.toLocaleString(),AM.textContent=lS[t],fl.textContent=(kr?zr??J.roundScore:J.roundScore).toLocaleString(),_S(J.ante);const n=(J.ante-1)*3+J.blindIndex+1;CM.textContent=String(n),RM.textContent=`$${J.money}`,PM.textContent=`${J.handsLeft}`,LM.textContent=`${J.discardsLeft}`,DM.textContent=String(J.config.seed),IM.textContent=`${J.hand.length}/${J.config.handSize}`,UM.textContent=`${J.deck.length}/${J.ownedDeck.length}`,bt.setDeckCount(J.deck.length),NM.textContent=`${J.jokers.length}/5`,OM.textContent=`${J.consumables.length}/2`;const i=J.selectedCards();if(i.length===0)eh.textContent="-",Zi.textContent="0",Ji.textContent="0";else{const s=od(i),a=J.handLevels[s.type];eh.textContent=`${s.type} (lvl ${a.level})`,Zi.textContent=`${a.chips}`,Ji.textContent=`${a.mult}`}FM.disabled=Cn||!J.canPlay(),BM.disabled=Cn||!J.canDiscard();const r=Cn||J.phase!=="play"||J.hand.length<2;if(Ql.disabled=r,ec.disabled=r,rc(),(J.phase==="game-over"||J.phase==="win")&&!Mi){const s=vs.classList.contains("hidden");vs.classList.remove("hidden"),qM.textContent=J.phase==="win"?"You Win!":"Game Over",YM.textContent=J.phase==="win"?`Ante ${J.ante-1} cleared on seed ${J.config.seed}`:`Could not beat ${xl[t]} - score ${J.roundScore.toLocaleString()} / ${J.target.toLocaleString()}`,s&&(Be.play(J.phase==="win"?"win":"lose"),Te.fromTo(vs.querySelector(".overlay-card"),{scale:.7,opacity:0},{scale:1,opacity:1,duration:.5,ease:"back.out(1.7)"}))}else vs.classList.add("hidden");pS()}function Lr(t,e,n,i,r){const s={v:e};let a=e;const o=Math.max(1,Math.floor((n-e)/18));Te.to(s,{v:n,duration:i,ease:"power2.out",onUpdate:()=>{const l=s.v;t.textContent=Math.round(l).toLocaleString(),r&&l-a>=o&&(a=l,Be.play(r,{volume:.12,detune:(Math.random()-.5)*250}))}})}function gS(t){Ia.classList.remove("hidden"),ih.textContent=`${t.hand.type}`,Zi.textContent=Math.round(t.baseChips).toLocaleString(),Ji.textContent=Math.round(t.baseMult).toLocaleString(),gl.textContent="0",Te.fromTo(Ia,{scale:.7,opacity:0},{scale:1,opacity:1,duration:.3,ease:"back.out(2)"}),Te.fromTo(ih,{scale:.7},{scale:1,duration:.3,ease:"back.out(2)"}),Be.play("scorePop")}function vS(t){Lr(gl,0,t.total,.8),Te.fromTo(gl,{scale:.6},{scale:1.2,duration:.3,yoyo:!0,repeat:1,ease:"power2.out"}),Be.play("chaching");const e=Math.max(.08,Math.min(.6,t.total/Math.max(1,J.target)*.5));bt.shake(e,.45),Te.delayedCall(1.5,()=>{Te.to(Ia,{opacity:0,duration:.4,onComplete:()=>Ia.classList.add("hidden")})})}function MS(t){if(t.enhancement==="stone")return{chipsDelta:50,multDelta:0,multMul:1};let e=t.baseChips,n=0,i=1;return t.enhancement==="bonus"?e+=30:t.enhancement==="mult"?n+=4:t.enhancement==="glass"&&(i*=2),t.edition==="foil"?e+=50:t.edition==="holographic"?n+=10:t.edition==="polychrome"&&(i*=1.5),{chipsDelta:e,multDelta:n,multMul:i}}function SS(t,e){const n=[];if(e.chipsDelta!==0&&n.push({text:`+${Math.round(e.chipsDelta)}`,cls:"is-chips"}),e.multDelta!==0&&n.push({text:`+${Math.round(e.multDelta)} Mult`,cls:"is-mult-add"}),e.multMul!==1){const l=Number.isInteger(e.multMul)?e.multMul.toString():e.multMul.toFixed(1);n.push({text:`×${l} Mult`,cls:"is-mult-mul"})}if(n.length===0)return;const i=bt.createVector3();t.getWorldPosition(i),i.y+=1.1;const r=i.project(bt.camera),s=dl.getBoundingClientRect(),a=(r.x+1)/2*s.width,o=(1-r.y)/2*s.height;n.forEach((l,c)=>{const u=rf(dl);u.className=`card-score-float ${l.cls}`,u.textContent=l.text,u.style.left=`${a}px`,u.style.top=`${o}px`,u.style.opacity="0";const d=c*.08,h=28+c*6;Te.fromTo(u,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:d,ease:"back.out(2.2)"}),Te.to(u,{y:-h,scale:1,duration:.9,delay:d+.22,ease:"sine.out"}),Te.to(u,{opacity:0,duration:.45,delay:d+.7,ease:"power1.in",onComplete:()=>sf(u)})})}function xS(t,e){if(e.length===0)return;const n=t.getBoundingClientRect(),i=n.left+n.width/2,r=n.top+n.height*.25;e.forEach((s,a)=>{const o=rf(document.body);o.className=`card-score-float ${s.cls}`,o.textContent=s.text,o.style.position="fixed",o.style.left=`${i}px`,o.style.top=`${r}px`,o.style.opacity="0",o.style.zIndex="60";const l=a*.08,c=32+a*6;Te.fromTo(o,{opacity:0,y:6,scale:.6},{opacity:1,y:0,scale:1.1,duration:.22,delay:l,ease:"back.out(2.2)"}),Te.to(o,{y:-c,scale:1,duration:.9,delay:l+.22,ease:"sine.out"}),Te.to(o,{opacity:0,duration:.45,delay:l+.7,ease:"power1.in",onComplete:()=>sf(o)})})}function yS(t){const e=[];if(t.chipsDelta&&e.push({text:`+${Math.round(t.chipsDelta)}`,cls:"is-chips"}),t.multDelta&&e.push({text:`+${Math.round(t.multDelta)} Mult`,cls:"is-mult-add"}),t.multMul&&t.multMul!==1){const n=Number.isInteger(t.multMul)?t.multMul.toString():t.multMul.toFixed(1);e.push({text:`×${n} Mult`,cls:"is-mult-mul"})}return e}function si(t,e){if(t==="select_card")return Cn||!e?.cardId?!1:J.toggleSelect(e.cardId);if(t==="play_hand"){if(Cn||!J.canPlay())return;Be.play("buttonClick"),TS();return}if(t==="discard"){if(Cn||!J.canDiscard())return;Be.play("buttonClick"),ES();return}if(t==="continue_shop"){bS();return}if(t==="restart_run"){uf();return}if(t==="toggle_mute"){Be.toggleMute(),Be.isMuted()||Be.play("buttonClick");return}}async function TS(){if(!J.canPlay())return;const t=J.selectedCards();if(t.length===0)return;Cn=!0,kr=!0,zr=J.roundScore;const e=j0(t.length);Be.play("whoosh");const n=bt.createVector3();t.forEach((p,M)=>{const T=Qt.get(p.id);T&&(T.userData.keepAlive=!0,T.getWorldPosition(n),bt.handGroup.remove(T),bt.playGroup.add(T),bt.playGroup.worldToLocal(n),T.position.copy(n),T.setSelected(!1),T.moveTo(e[M],.55,M*.07))}),await new Promise(p=>setTimeout(p,650)),Mi=!0,Qi=!0;const i=J.playSelected();if(!i){Mi=!1,Qi=!1,kr=!1,zr=null,Cn=!1;return}Ii[i.hand.type]=(Ii[i.hand.type]??0)+1,Fi();const r=J.phase==="game-over"||J.phase==="win",s=J.phase==="shop";r?vs.classList.add("hidden"):s?(Un.classList.add("hidden"),Mi=!1):(Mi=!1,Qi=!1),gS(i);const a=new Set(i.hand.scoringCards.map(p=>p.id));let o=0,l=i.baseChips,c=i.baseMult;const u=.28,d=.15;for(const p of t){const M=Qt.get(p.id);if(M)if(a.has(p.id)){const T=o++,E=d+T*u,b=MS(p),R=l,C=c;l+=b.chipsDelta,c=(c+b.multDelta)*b.multMul;const v=l,x=c;Te.delayedCall(E,()=>{M.pulse(1.22,.4),M.flash(16765514,.5);const D=bt.createVector3();M.getWorldPosition(D),bt.emitBurst(D,{count:14,color:bt.createColor("#ffd24a"),speed:2.4,spread:.9,life:1,size:16}),SS(M,b),Be.play("chipTick",{volume:.24,pitch:1+T*.08,pan:nf(M.position.x)}),b.chipsDelta!==0&&(Lr(Zi,R,v,.25,"chipTick"),Te.fromTo(Zi,{scale:1},{scale:1.18,duration:.16,yoyo:!0,repeat:1,ease:"power2.out"})),(b.multDelta!==0||b.multMul!==1)&&(Lr(Ji,Math.round(C),Math.round(x),.25,"multTick"),Te.fromTo(Ji,{scale:1},{scale:1.22,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"}))})}else{const T=M.faceMesh.material;T.transparent=!0,Te.to(T,{opacity:.5,duration:.2})}}const h=d+Math.max(0,o-1)*u+.4,f=i.steps.filter(p=>p.jokerId),g=.34;f.forEach((p,M)=>{const T=pl.querySelector(`[data-joker-id="${p.jokerId}"]`),E=h+M*g,b=l,R=c;p.chipsDelta&&(l+=p.chipsDelta),p.multDelta&&(c+=p.multDelta),p.multMul&&(c*=p.multMul);const C=l,v=c;Te.delayedCall(E,()=>{T&&(Te.fromTo(T,{scale:1,y:0},{scale:1.18,y:-8,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"}),xS(T,yS(p))),Be.play("chipTick",{volume:.28,pitch:1.1+M*.08}),p.chipsDelta&&(Lr(Zi,b,C,.28,"chipTick"),Te.fromTo(Zi,{scale:1},{scale:1.2,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})),(p.multDelta||p.multMul)&&(Lr(Ji,Math.round(R),Math.round(v),.28,"multTick"),Te.fromTo(Ji,{scale:1},{scale:1.25,duration:.2,yoyo:!0,repeat:1,ease:"power2.out"}))})});const _=f.length>0?h+(f.length-1)*g+.4:h+.15;Te.delayedCall(_,()=>vS(i));const m=J.roundScore-i.total;Te.delayedCall(_+.05,()=>{Lr(fl,m,J.roundScore,1,"chipTick"),Te.fromTo(fl,{scale:1},{scale:1.25,duration:.18,yoyo:!0,repeat:1,ease:"power2.out"})}),Te.delayedCall(_+1.2,()=>{kr=!1,zr=null;for(const p of t){const M=Qt.get(p.id);M&&(Te.to(M.position,{y:-6,duration:.5,ease:"power2.in"}),Te.to(M.rotation,{z:(Math.random()-.5)*1.5,duration:.5}),Te.delayedCall(.55,()=>{Wa(p.id,M)}))}Cn=!1,Ni(.5),_n(),r?(Mi=!1,_n()):s&&(Qi=!1,_n())})}async function ES(){if(!J.canDiscard())return;Cn=!0;const t=J.selectedCards(),e=t.reduce((n,i)=>n+(Qt.get(i.id)?.position.x??0),0)/Math.max(1,t.length);Be.play("sweep",{pan:nf(e)});for(const n of t){const i=Qt.get(n.id);i&&(i.userData.keepAlive=!0,Te.to(i.position,{y:-5,x:i.position.x+(Math.random()-.5)*1.5,duration:.45,ease:"power2.in"}),Te.to(i.rotation,{z:(Math.random()-.5)*1.2,duration:.45}),Te.delayedCall(.5,()=>{Wa(n.id,i)}))}J.discardSelected(),Te.delayedCall(.55,()=>{Cn=!1,Ni(.45)})}function bS(){return J.phase!=="shop"?!1:(Be.play("buttonClick"),Sl.disabled=!0,tc.disabled=!0,Te.to(vl,{y:-18,scale:.97,duration:.2,ease:"power2.in"}),Te.to(Un,{opacity:0,duration:.28,ease:"power2.inOut",onComplete:()=>{Un.classList.add("hidden"),Un.style.opacity="",vl.style.transform="",J.continueFromShop(),Ni(.65),_n(),Sl.disabled=!1}}),!0)}var AS=["Flush Five","Flush House","Five of a Kind","Straight Flush","Four of a Kind","Full House","Flush","Straight","Three of a Kind","Two Pair","Pair","High Card"];function lf(){nh.replaceChildren();for(const t of AS){const e=J.handLevels[t],n=document.createElement("div");n.className="run-info-row";const i=document.createElement("span");i.className="run-info-level",i.textContent=`lvl.${e.level}`;const r=document.createElement("strong");r.className="run-info-name",r.textContent=t;const s=document.createElement("span");s.className="run-info-score";const a=document.createElement("span");a.className="run-info-chips",a.textContent=e.chips.toLocaleString();const o=document.createElement("span");o.className="run-info-x",o.textContent="×";const l=document.createElement("span");l.className="run-info-mult",l.textContent=e.mult.toLocaleString(),s.append(a,o,l);const c=document.createElement("span");c.className="run-info-count",c.textContent=`# ${Ii[t]??0}`,n.append(i,r,s,c),nh.appendChild(n)}}function sc(){Qd.textContent=`Sound Effects: ${Be.isMuted()?"Off":"On"}`,ef.textContent=`Music: ${Be.isMusicMuted()?"Off":"On"}`}function cf(t){Zr=t,t==="run-info"?(lf(),ml.classList.remove("hidden"),_l.classList.add("hidden")):(sc(),_l.classList.remove("hidden"),ml.classList.add("hidden")),Be.play("buttonClick")}function Xa(){Zr&&(ml.classList.add("hidden"),_l.classList.add("hidden"),Zr=null,Be.play("buttonClick"))}function uf(){Be.play("buttonClick"),kr=!1,zr=null,Qi=!1,Mi=!1,Un.classList.add("hidden"),Un.style.opacity="";for(const[,t]of[...Qt])Wa(t.card.id,t);Qt.clear(),Wn=[],Ui=null,nS(),Xa(),J.reset(),Ni(.6),_n()}for(const[t,e]of Object.entries(gM)){const n=ur(t);n&&n.addEventListener("click",()=>{si(e)})}Ql.addEventListener("click",()=>Oa("straight"));ec.addEventListener("click",()=>Oa("flush"));kM.addEventListener("click",()=>cf("run-info"));zM.addEventListener("click",()=>cf("options"));VM.addEventListener("click",Xa);GM.addEventListener("click",Xa);XM.addEventListener("click",ic);WM.addEventListener("click",ic);Qd.addEventListener("click",()=>{Be.toggleMute(),Be.isMuted()||Be.play("buttonClick"),sc()});ef.addEventListener("click",()=>{Be.toggleMusicMute(),sc()});HM.addEventListener("click",()=>{uf()});tc.addEventListener("click",()=>{J.rerollShop()&&(Be.play("sweep"),Te.fromTo(Ml,{opacity:.55,y:8},{opacity:1,y:0,duration:.22,ease:"power2.out"}),_n())});Sl.addEventListener("click",()=>{si("continue_shop")});var pa=ur("btn-mute"),hf=null;if(pa){const t=e=>{pa.textContent=e?"🔇":"🔊",pa.setAttribute("aria-label",e?"Unmute SFX":"Mute SFX"),pa.title=e?"Unmute SFX":"Mute SFX"};t(Be.isMuted()),hf=Be.onMutedChange(t)}var fs=ur("btn-music-mute"),df=null;if(fs){const t=e=>{fs.textContent=e?"🔇":"🎵",fs.setAttribute("aria-label",e?"Unmute Music":"Mute Music"),fs.title=e?"Unmute Music":"Mute Music"};t(Be.isMusicMuted()),fs.addEventListener("click",()=>Be.toggleMusicMute()),df=Be.onMusicMutedChange(t)}var ff=t=>{if(t.code==="Escape"){t.preventDefault(),t.stopPropagation(),Zr?Xa():ic();return}if(Zr)return;if(!t.repeat&&(t.code==="ControlLeft"||t.code==="ControlRight")){t.preventDefault(),si("play_hand");return}if(!t.repeat&&(t.code==="ShiftLeft"||t.code==="ShiftRight")){t.preventDefault(),si("discard");return}if(!t.ctrlKey&&!t.metaKey&&!t.altKey){if(t.code==="KeyS"){t.preventDefault(),Oa("straight");return}if(t.code==="KeyF"){t.preventDefault(),Oa("flush");return}}const e=MM(t);e&&(t.preventDefault(),si(e))};window.addEventListener("keydown",ff);window.addEventListener("resize",nc);window.addEventListener("pagehide",Fi);var wS=mM({renderer:bt.renderer,camera:bt.camera,handGroup:bt.handGroup,getHandObjects:sS,onToggleSelect:t=>!!si("select_card",{cardId:t}),onReorder:t=>{Wn=t,Ui=null,rc(),Fi()}}),CS=J.subscribe(()=>{Fi(),_n(),Zr==="run-info"&&lf()});window.__OPEN_POKER_TEST__={snapshot:()=>J.toSnapshot(),loadSnapshot:t=>{kr=!1,zr=null,Qi=!1,Mi=!1,J.reset(t),Wn=t.hand.map(e=>e.id),Ni(0),_n()},selectFirst:(t=1)=>{const e=[...J.selected];for(const n of e)J.toggleSelect(n);for(const n of J.hand.slice(0,Math.max(0,Math.min(5,t))))J.selected.has(n.id)||J.toggleSelect(n.id)},play:()=>{si("play_hand")},discard:()=>{si("discard")},buyOffer:(t=0)=>{const e=J.shop?.offers[t];return e?J.buyOffer(e.id):!1},rerollShop:()=>J.rerollShop(),continueShop:()=>{const t=J.continueFromShop();return t&&(Ni(0),_n()),t},sellJoker:(t=0)=>{const e=J.jokers[t];return e?J.sellJoker(e.id):!1},sellConsumable:(t=0)=>{const e=J.consumables[t];return e?J.sellConsumable(e.id):!1},useConsumable:(t=0)=>{const e=J.consumables[t];return e?J.useConsumable(e.id):!1},restart:()=>{si("restart_run")},dispose:()=>{wS(),CS(),hf?.(),df?.(),window.removeEventListener("keydown",ff),window.removeEventListener("resize",nc),window.removeEventListener("pagehide",Fi),Te.globalTimeline.clear();for(const[,t]of Qt)sh(t);for(Qt.clear();Ua.length>0;){const t=Ua.pop();t&&sh(t)}for(;Na.length>0;)Na.pop()?.remove();bt.dispose(),Be.dispose()}};Ni(.6);_n();Fi();
