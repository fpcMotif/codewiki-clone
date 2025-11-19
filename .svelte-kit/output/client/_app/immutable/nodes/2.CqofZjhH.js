import{d as yn,a as St,f as on}from"../chunks/DQ1H2tK8.js";import{i as Pi}from"../chunks/CiYeMDee.js";import{o as Jc}from"../chunks/DGdFKC7k.js";import{_ as Xl,b as Js,G as qa,N as fs,h as It,J as Qc,U as eu,g as ct,a4 as tu,W as nu,X as iu,Y as fo,M as ji,f as fr,K as ru,aC as su,am as au,c as ou,e as Ji,i as lu,aF as cu,ae as ho,aA as $l,aI as ql,aJ as uu,r as Yl,p as fu,aK as du,aL as hu,aM as ds,L as pu,aN as mu,aO as xu,az as gu,d as $r,O as jl,aP as _u,aQ as vu,aR as Su,aS as bu,aT as Mu,aU as yu,aV as Eu,aW as Tu,aX as Au,aY as Cu,s as Pn,a as zr,z as Jn,D as fe,B as yi,C as Qn,E as ue,F as Ge,an as qr,l as wu}from"../chunks/8vlFY5QZ.js";import{i as Ru,c as Pu,d as Kl,n as Lu,a as Du,s as ut}from"../chunks/CGw-Ln9w.js";import{p as ei,r as ti,_ as Iu,i as Uu,b as Nu}from"../chunks/B8tyt4ng.js";import{t as Fu}from"../chunks/BAeYs6pc.js";function Ou(i,e){if(e){const t=document.body;i.autofocus=!0,Xl(()=>{document.activeElement===t&&i.focus()})}}let po=!1;function Bu(){po||(po=!0,document.addEventListener("reset",i=>{Promise.resolve().then(()=>{var e;if(!i.defaultPrevented)for(const t of i.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function zu(i,e){return e}function Vu(i,e,t){for(var n=[],r=e.length,s=0;s<r;s++)mu(e[s].e,n,!0);xu(n,()=>{var a=n.length===0&&t!==null;if(a){var o=t,c=o.parentNode;gu(c),c.append(o),i.items.clear(),Jt(i,e[0].prev,e[r-1].next)}for(var l=0;l<r;l++){var u=e[l];a||(i.items.delete(u.k),Jt(i,u.prev,u.next)),$r(u.e,!a)}i.first===e[0]&&(i.first=e[0].prev)})}function ku(i,e,t,n,r,s=null){var a=i,o=new Map,c=null;{var l=i;a=It?fs(Qc(l)):l.appendChild(Js())}It&&eu();var u=null,f=tu(()=>{var h=t();return ql(h)?h:h==null?[]:$l(h)}),d,p=!0;function m(){Hu(x,d,a,e,n),u!==null&&(d.length===0?(u.fragment?(a.before(u.fragment),u.fragment=null):Yl(u.effect),g.first=u.effect):fu(u.effect,()=>{u=null}))}var g=qa(()=>{d=ct(f);var h=d.length;let T=!1;if(It){var y=nu(a)===iu;y!==(h===0)&&(a=fo(),fs(a),ji(!1),T=!0)}for(var A=new Set,P=ou,M=null,C=lu(),U=0;U<h;U+=1){It&&fr.nodeType===ru&&fr.data===su&&(a=fr,T=!0,ji(!1));var b=d[U],v=n(b,U),L=p?null:o.get(v);L?(au(L.v,b),L.i=U,C&&P.skipped_effects.delete(L.e)):(L=Gu(p?a:null,M,b,v,U,r,e,t),p&&(L.o=!0,M===null?c=L:M.next=L,M=L),o.set(v,L)),A.add(v)}if(h===0&&s&&!u)if(p)u={fragment:null,effect:Ji(()=>s(a))};else{var O=document.createDocumentFragment(),B=Js();O.append(B),u={fragment:O,effect:Ji(()=>s(B))}}if(It&&h>0&&fs(fo()),!p)if(C){for(const[H,q]of o)A.has(H)||P.skipped_effects.add(q.e);P.oncommit(m),P.ondiscard(()=>{})}else m();T&&ji(!0),ct(f)}),x={effect:g,items:o,first:c};p=!1,It&&(a=fr)}function Hu(i,e,t,n,r){var s=e.length,a=i.items,o=i.first,c,l=null,u=[],f=[],d,p,m,g;for(g=0;g<s;g+=1){if(d=e[g],p=r(d,g),m=a.get(p),i.first??(i.first=m),!m.o){m.o=!0;var x=l?l.next:o;Jt(i,l,m),Jt(i,m,x),hs(m,x,t),l=m,u=[],f=[],o=l.next;continue}if((m.e.f&ds)!==0&&Yl(m.e),m!==o){if(c!==void 0&&c.has(m)){if(u.length<f.length){var h=f[0],T;l=h.prev;var y=u[0],A=u[u.length-1];for(T=0;T<u.length;T+=1)hs(u[T],h,t);for(T=0;T<f.length;T+=1)c.delete(f[T]);Jt(i,y.prev,A.next),Jt(i,l,y),Jt(i,A,h),o=h,l=A,g-=1,u=[],f=[]}else c.delete(m),hs(m,o,t),Jt(i,m.prev,m.next),Jt(i,m,l===null?i.first:l.next),Jt(i,l,m),l=m;continue}for(u=[],f=[];o!==null&&o.k!==p;)(o.e.f&ds)===0&&(c??(c=new Set)).add(o),f.push(o),o=o.next;if(o===null)continue;m=o}u.push(m),l=m,o=m.next}if(o!==null||c!==void 0){for(var P=c===void 0?[]:$l(c);o!==null;)(o.e.f&ds)===0&&P.push(o),o=o.next;var M=P.length;if(M>0){var C=s===0?t:null;Vu(i,P,C)}}}function Gu(i,e,t,n,r,s,a,o){var c=(a&du)!==0,l=(a&hu)===0,u=c?l?cu(t,!1,!1):ho(t):t,f=(a&uu)===0?r:ho(r),d={i:f,v:u,k:n,a:null,e:null,o:!1,prev:e,next:null};try{if(i===null){var p=document.createDocumentFragment();p.append(i=Js())}return d.e=Ji(()=>s(i,u,f,o)),e!==null&&(e.next=d),d}finally{}}function hs(i,e,t){for(var n=i.next?i.next.e.nodes_start:t,r=e?e.e.nodes_start:t,s=i.e.nodes_start;s!==null&&s!==n;){var a=pu(s);r.before(s),s=a}}function Jt(i,e,t){e===null?(i.first=t,i.effect.first=t&&t.e):(e.e.next&&(e.e.next.prev=null),e.next=t,e.e.next=t&&t.e),t===null?i.effect.last=e&&e.e:(t.e.prev&&(t.e.prev.next=null),t.prev=e,t.e.prev=e&&e.e)}function Wu(i,e){var t=void 0,n;qa(()=>{t!==(t=e())&&(n&&($r(n),n=null),t&&(n=Ji(()=>{jl(()=>t(i))})))})}function Zl(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(t=Zl(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function Xu(){for(var i,e,t=0,n="",r=arguments.length;t<r;t++)(i=arguments[t])&&(e=Zl(i))&&(n&&(n+=" "),n+=e);return n}function $u(i){return typeof i=="object"?Xu(i):i??""}const mo=[...` 	
\r\f \v\uFEFF`];function qu(i,e,t){var n=i==null?"":""+i;if(t){for(var r in t)if(t[r])n=n?n+" "+r:r;else if(n.length)for(var s=r.length,a=0;(a=n.indexOf(r,a))>=0;){var o=a+s;(a===0||mo.includes(n[a-1]))&&(o===n.length||mo.includes(n[o]))?n=(a===0?"":n.substring(0,a))+n.substring(o+1):a=o}}return n===""?null:n}function xo(i,e=!1){var t=e?" !important;":";",n="";for(var r in i){var s=i[r];s!=null&&s!==""&&(n+=" "+r+": "+s+t)}return n}function ps(i){return i[0]!=="-"||i[1]!=="-"?i.toLowerCase():i}function Yu(i,e){if(e){var t="",n,r;if(Array.isArray(e)?(n=e[0],r=e[1]):n=e,i){i=String(i).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var s=!1,a=0,o=!1,c=[];n&&c.push(...Object.keys(n).map(ps)),r&&c.push(...Object.keys(r).map(ps));var l=0,u=-1;const g=i.length;for(var f=0;f<g;f++){var d=i[f];if(o?d==="/"&&i[f-1]==="*"&&(o=!1):s?s===d&&(s=!1):d==="/"&&i[f+1]==="*"?o=!0:d==='"'||d==="'"?s=d:d==="("?a++:d===")"&&a--,!o&&s===!1&&a===0){if(d===":"&&u===-1)u=f;else if(d===";"||f===g-1){if(u!==-1){var p=ps(i.substring(l,u).trim());if(!c.includes(p)){d!==";"&&f++;var m=i.substring(l,f).trim();t+=" "+m+";"}}l=f+1,u=-1}}}}return n&&(t+=xo(n)),r&&(t+=xo(r,!0)),t=t.trim(),t===""?null:t}return i==null?null:String(i)}function ju(i,e,t,n,r,s){var a=i.__className;if(It||a!==t||a===void 0){var o=qu(t,n,s);(!It||o!==i.getAttribute("class"))&&(o==null?i.removeAttribute("class"):e?i.className=o:i.setAttribute("class",o)),i.__className=t}else if(s&&r!==s)for(var c in s){var l=!!s[c];(r==null||l!==!!r[c])&&i.classList.toggle(c,l)}return s}function ms(i,e={},t,n){for(var r in t){var s=t[r];e[r]!==s&&(t[r]==null?i.style.removeProperty(r):i.style.setProperty(r,s,n))}}function Ku(i,e,t,n){var r=i.__style;if(It||r!==e){var s=Yu(e,n);(!It||s!==i.getAttribute("style"))&&(s==null?i.removeAttribute("style"):i.style.cssText=s),i.__style=e}else n&&(Array.isArray(n)?(ms(i,t==null?void 0:t[0],n[0]),ms(i,t==null?void 0:t[1],n[1],"important")):ms(i,t,n));return n}function Qs(i,e,t=!1){if(i.multiple){if(e==null)return;if(!ql(e))return _u();for(var n of i.options)n.selected=e.includes(go(n));return}for(n of i.options){var r=go(n);if(vu(r,e)){n.selected=!0;return}}(!t||e!==void 0)&&(i.selectedIndex=-1)}function Zu(i){var e=new MutationObserver(()=>{Qs(i,i.__value)});e.observe(i,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Su(()=>{e.disconnect()})}function go(i){return"__value"in i?i.__value:i.value}const Oi=Symbol("class"),Bi=Symbol("style"),Jl=Symbol("is custom element"),Ql=Symbol("is html");function Ju(i){if(It){var e=!1,t=()=>{if(!e){if(e=!0,i.hasAttribute("value")){var n=i.value;Un(i,"value",null),i.value=n}if(i.hasAttribute("checked")){var r=i.checked;Un(i,"checked",null),i.checked=r}}};i.__on_r=t,Xl(t),Bu()}}function Qu(i,e){e?i.hasAttribute("selected")||i.setAttribute("selected",""):i.removeAttribute("selected")}function Un(i,e,t,n){var r=ec(i);It&&(r[e]=i.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&i.nodeName==="LINK")||r[e]!==(r[e]=t)&&(e==="loading"&&(i[Mu]=t),t==null?i.removeAttribute(e):typeof t!="string"&&tc(i).includes(e)?i[e]=t:i.setAttribute(e,t))}function ef(i,e,t,n,r=!1,s=!1){if(It&&r&&i.tagName==="INPUT"){var a=i,o=a.type==="checkbox"?"defaultChecked":"defaultValue";o in t||Ju(a)}var c=ec(i),l=c[Jl],u=!c[Ql];let f=It&&l;f&&ji(!1);var d=e||{},p=i.tagName==="OPTION";for(var m in e)m in t||(t[m]=null);t.class?t.class=$u(t.class):t[Oi]&&(t.class=null),t[Bi]&&(t.style??(t.style=null));var g=tc(i);for(const M in t){let C=t[M];if(p&&M==="value"&&C==null){i.value=i.__value="",d[M]=C;continue}if(M==="class"){var x=i.namespaceURI==="http://www.w3.org/1999/xhtml";ju(i,x,C,n,e==null?void 0:e[Oi],t[Oi]),d[M]=C,d[Oi]=t[Oi];continue}if(M==="style"){Ku(i,C,e==null?void 0:e[Bi],t[Bi]),d[M]=C,d[Bi]=t[Bi];continue}var h=d[M];if(!(C===h&&!(C===void 0&&i.hasAttribute(M)))){d[M]=C;var T=M[0]+M[1];if(T!=="$$")if(T==="on"){const U={},b="$$"+M;let v=M.slice(2);var y=Du(v);if(Ru(v)&&(v=v.slice(0,-7),U.capture=!0),!y&&h){if(C!=null)continue;i.removeEventListener(v,d[b],U),d[b]=null}if(C!=null)if(y)i[`__${v}`]=C,Kl([v]);else{let L=function(O){d[M].call(this,O)};d[b]=Pu(v,i,L,U)}else y&&(i[`__${v}`]=void 0)}else if(M==="style")Un(i,M,C);else if(M==="autofocus")Ou(i,!!C);else if(!l&&(M==="__value"||M==="value"&&C!=null))i.value=i.__value=C;else if(M==="selected"&&p)Qu(i,C);else{var A=M;u||(A=Lu(A));var P=A==="defaultValue"||A==="defaultChecked";if(C==null&&!l&&!P)if(c[M]=null,A==="value"||A==="checked"){let U=i;const b=e===void 0;if(A==="value"){let v=U.defaultValue;U.removeAttribute(A),U.defaultValue=v,U.value=U.__value=b?v:null}else{let v=U.defaultChecked;U.removeAttribute(A),U.defaultChecked=v,U.checked=b?v:!1}}else i.removeAttribute(M);else P||g.includes(A)&&(l||typeof C!="string")?(i[A]=C,A in c&&(c[A]=Cu)):typeof C!="function"&&Un(i,A,C)}}}return f&&ji(!0),d}function ni(i,e,t=[],n=[],r=[],s,a=!1,o=!1){bu(r,t,n,c=>{var l=void 0,u={},f=i.nodeName==="SELECT",d=!1;if(qa(()=>{var m=e(...c.map(ct)),g=ef(i,l,m,s,a,o);d&&f&&"value"in m&&Qs(i,m.value);for(let h of Object.getOwnPropertySymbols(u))m[h]||$r(u[h]);for(let h of Object.getOwnPropertySymbols(m)){var x=m[h];h.description===Tu&&(!l||x!==l[h])&&(u[h]&&$r(u[h]),u[h]=Ji(()=>Wu(i,()=>x))),g[h]=x}l=g}),f){var p=i;jl(()=>{Qs(p,l.value,!0),Zu(p)})}d=!0})}function ec(i){return i.__attributes??(i.__attributes={[Jl]:i.nodeName.includes("-"),[Ql]:i.namespaceURI===yu})}var _o=new Map;function tc(i){var e=i.getAttribute("is")||i.nodeName,t=_o.get(e);if(t)return t;_o.set(e,t=[]);for(var n,r=i,s=Element.prototype;s!==r;){n=Au(r);for(var a in n)n[a].set&&t.push(a);r=Eu(r)}return t}var tf=yn('<svg><title>Search</title><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>');function nc(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=tf();ni(r,()=>({"aria-hidden":"true",class:`h-6 w-6 ${t()??""??""}`,...n,fill:"currentColor",viewBox:"0 0 24 24"})),St(i,r)}const Oe=i=>typeof i=="string",zi=()=>{let i,e;const t=new Promise((n,r)=>{i=n,e=r});return t.resolve=i,t.reject=e,t},vo=i=>i==null?"":""+i,nf=(i,e,t)=>{i.forEach(n=>{e[n]&&(t[n]=e[n])})},rf=/###/g,So=i=>i&&i.indexOf("###")>-1?i.replace(rf,"."):i,bo=i=>!i||Oe(i),Ki=(i,e,t)=>{const n=Oe(e)?e.split("."):e;let r=0;for(;r<n.length-1;){if(bo(i))return{};const s=So(n[r]);!i[s]&&t&&(i[s]=new t),Object.prototype.hasOwnProperty.call(i,s)?i=i[s]:i={},++r}return bo(i)?{}:{obj:i,k:So(n[r])}},Mo=(i,e,t)=>{const{obj:n,k:r}=Ki(i,e,Object);if(n!==void 0||e.length===1){n[r]=t;return}let s=e[e.length-1],a=e.slice(0,e.length-1),o=Ki(i,a,Object);for(;o.obj===void 0&&a.length;)s=`${a[a.length-1]}.${s}`,a=a.slice(0,a.length-1),o=Ki(i,a,Object),o!=null&&o.obj&&typeof o.obj[`${o.k}.${s}`]<"u"&&(o.obj=void 0);o.obj[`${o.k}.${s}`]=t},sf=(i,e,t,n)=>{const{obj:r,k:s}=Ki(i,e,Object);r[s]=r[s]||[],r[s].push(t)},Yr=(i,e)=>{const{obj:t,k:n}=Ki(i,e);if(t&&Object.prototype.hasOwnProperty.call(t,n))return t[n]},af=(i,e,t)=>{const n=Yr(i,t);return n!==void 0?n:Yr(e,t)},ic=(i,e,t)=>{for(const n in e)n!=="__proto__"&&n!=="constructor"&&(n in i?Oe(i[n])||i[n]instanceof String||Oe(e[n])||e[n]instanceof String?t&&(i[n]=e[n]):ic(i[n],e[n],t):i[n]=e[n]);return i},ri=i=>i.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var of={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const lf=i=>Oe(i)?i.replace(/[&<>"'\/]/g,e=>of[e]):i;class cf{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(t!==void 0)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}const uf=[" ",",","?","!",";"],ff=new cf(20),df=(i,e,t)=>{e=e||"",t=t||"";const n=uf.filter(a=>e.indexOf(a)<0&&t.indexOf(a)<0);if(n.length===0)return!0;const r=ff.getRegExp(`(${n.map(a=>a==="?"?"\\?":a).join("|")})`);let s=!r.test(i);if(!s){const a=i.indexOf(t);a>0&&!r.test(i.substring(0,a))&&(s=!0)}return s},ea=(i,e,t=".")=>{if(!i)return;if(i[e])return Object.prototype.hasOwnProperty.call(i,e)?i[e]:void 0;const n=e.split(t);let r=i;for(let s=0;s<n.length;){if(!r||typeof r!="object")return;let a,o="";for(let c=s;c<n.length;++c)if(c!==s&&(o+=t),o+=n[c],a=r[o],a!==void 0){if(["string","number","boolean"].indexOf(typeof a)>-1&&c<n.length-1)continue;s+=c-s+1;break}r=a}return r},Qi=i=>i==null?void 0:i.replace("_","-"),hf={type:"logger",log(i){this.output("log",i)},warn(i){this.output("warn",i)},error(i){this.output("error",i)},output(i,e){var t,n;(n=(t=console==null?void 0:console[i])==null?void 0:t.apply)==null||n.call(t,console,e)}};class jr{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||"i18next:",this.logger=e||hf,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,"log","",!0)}warn(...e){return this.forward(e,"warn","",!0)}error(...e){return this.forward(e,"error","")}deprecate(...e){return this.forward(e,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(Oe(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new jr(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new jr(this.logger,e)}}var en=new jr;class is{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(n=>{this.observers[n]||(this.observers[n]=new Map);const r=this.observers[n].get(t)||0;this.observers[n].set(t,r+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([r,s])=>{for(let a=0;a<s;a++)r(...t)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(([r,s])=>{for(let a=0;a<s;a++)r.apply(r,[e,...t])})}}class yo extends is{constructor(e,t={ns:["translation"],defaultNS:"translation"}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){var l,u;const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,a=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let o;e.indexOf(".")>-1?o=e.split("."):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):Oe(n)&&s?o.push(...n.split(s)):o.push(n)));const c=Yr(this.data,o);return!c&&!t&&!n&&e.indexOf(".")>-1&&(e=o[0],t=o[1],n=o.slice(2).join(".")),c||!a||!Oe(n)?c:ea((u=(l=this.data)==null?void 0:l[e])==null?void 0:u[t],n,s)}addResource(e,t,n,r,s={silent:!1}){const a=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.indexOf(".")>-1&&(o=e.split("."),r=t,t=o[1]),this.addNamespaces(t),Mo(this.data,o,r),s.silent||this.emit("added",e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(const s in n)(Oe(n[s])||Array.isArray(n[s]))&&this.addResource(e,t,s,n[s],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,s,a={silent:!1,skipCopy:!1}){let o=[e,t];e.indexOf(".")>-1&&(o=e.split("."),r=n,n=t,t=o[1]),this.addNamespaces(t);let c=Yr(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?ic(c,n,s):c={...c,...n},Mo(this.data,o,c),a.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(r=>t[r]&&Object.keys(t[r]).length>0)}toJSON(){return this.data}}var rc={processors:{},addPostProcessor(i){this.processors[i.name]=i},handle(i,e,t,n,r){return i.forEach(s=>{var a;e=((a=this.processors[s])==null?void 0:a.process(e,t,n,r))??e}),e}};const sc=Symbol("i18next/PATH_KEY");function pf(){const i=[],e=Object.create(null);let t;return e.get=(n,r)=>{var s;return(s=t==null?void 0:t.revoke)==null||s.call(t),r===sc?i:(i.push(r),t=Proxy.revocable(n,e),t.proxy)},Proxy.revocable(Object.create(null),e).proxy}function ta(i,e){const{[sc]:t}=i(pf());return t.join((e==null?void 0:e.keySeparator)??".")}const Eo={},xs=i=>!Oe(i)&&typeof i!="boolean"&&typeof i!="number";class Kr extends is{constructor(e,t={}){super(),nf(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=en.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){const n={...t};if(e==null)return!1;const r=this.resolve(e,n);if((r==null?void 0:r.res)===void 0)return!1;const s=xs(r.res);return!(n.returnObjects===!1&&s)}extractFromKey(e,t){let n=t.nsSeparator!==void 0?t.nsSeparator:this.options.nsSeparator;n===void 0&&(n=":");const r=t.keySeparator!==void 0?t.keySeparator:this.options.keySeparator;let s=t.ns||this.options.defaultNS||[];const a=n&&e.indexOf(n)>-1,o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!df(e,n,r);if(a&&!o){const c=e.match(this.interpolator.nestingRegexp);if(c&&c.length>0)return{key:e,namespaces:Oe(s)?[s]:s};const l=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(l[0])>-1)&&(s=l.shift()),e=l.join(r)}return{key:e,namespaces:Oe(s)?[s]:s}}translate(e,t,n){let r=typeof t=="object"?{...t}:t;if(typeof r!="object"&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),typeof r=="object"&&(r={...r}),r||(r={}),e==null)return"";typeof e=="function"&&(e=ta(e,{...this.options,...r})),Array.isArray(e)||(e=[String(e)]);const s=r.returnDetails!==void 0?r.returnDetails:this.options.returnDetails,a=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,{key:o,namespaces:c}=this.extractFromKey(e[e.length-1],r),l=c[c.length-1];let u=r.nsSeparator!==void 0?r.nsSeparator:this.options.nsSeparator;u===void 0&&(u=":");const f=r.lng||this.language,d=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if((f==null?void 0:f.toLowerCase())==="cimode")return d?s?{res:`${l}${u}${o}`,usedKey:o,exactUsedKey:o,usedLng:f,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:`${l}${u}${o}`:s?{res:o,usedKey:o,exactUsedKey:o,usedLng:f,usedNS:l,usedParams:this.getUsedParamsDetails(r)}:o;const p=this.resolve(e,r);let m=p==null?void 0:p.res;const g=(p==null?void 0:p.usedKey)||o,x=(p==null?void 0:p.exactUsedKey)||o,h=["[object Number]","[object Function]","[object RegExp]"],T=r.joinArrays!==void 0?r.joinArrays:this.options.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,A=r.count!==void 0&&!Oe(r.count),P=Kr.hasDefaultValue(r),M=A?this.pluralResolver.getSuffix(f,r.count,r):"",C=r.ordinal&&A?this.pluralResolver.getSuffix(f,r.count,{ordinal:!1}):"",U=A&&!r.ordinal&&r.count===0,b=U&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${M}`]||r[`defaultValue${C}`]||r.defaultValue;let v=m;y&&!m&&P&&(v=b);const L=xs(v),O=Object.prototype.toString.apply(v);if(y&&v&&L&&h.indexOf(O)<0&&!(Oe(T)&&Array.isArray(v))){if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const B=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,v,{...r,ns:c}):`key '${o} (${this.language})' returned an object instead of string.`;return s?(p.res=B,p.usedParams=this.getUsedParamsDetails(r),p):B}if(a){const B=Array.isArray(v),H=B?[]:{},q=B?x:g;for(const W in v)if(Object.prototype.hasOwnProperty.call(v,W)){const J=`${q}${a}${W}`;P&&!m?H[W]=this.translate(J,{...r,defaultValue:xs(b)?b[W]:void 0,joinArrays:!1,ns:c}):H[W]=this.translate(J,{...r,joinArrays:!1,ns:c}),H[W]===J&&(H[W]=v[W])}m=H}}else if(y&&Oe(T)&&Array.isArray(m))m=m.join(T),m&&(m=this.extendTranslation(m,e,r,n));else{let B=!1,H=!1;!this.isValidLookup(m)&&P&&(B=!0,m=b),this.isValidLookup(m)||(H=!0,m=o);const W=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&H?void 0:m,J=P&&b!==m&&this.options.updateMissing;if(H||B||J){if(this.logger.log(J?"updateKey":"missingKey",f,l,o,J?b:m),a){const de=this.resolve(o,{...r,keySeparator:!1});de&&de.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let G=[];const ee=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if(this.options.saveMissingTo==="fallback"&&ee&&ee[0])for(let de=0;de<ee.length;de++)G.push(ee[de]);else this.options.saveMissingTo==="all"?G=this.languageUtils.toResolveHierarchy(r.lng||this.language):G.push(r.lng||this.language);const te=(de,Le,We)=>{var Ye;const Ze=P&&We!==m?We:W;this.options.missingKeyHandler?this.options.missingKeyHandler(de,l,Le,Ze,J,r):(Ye=this.backendConnector)!=null&&Ye.saveMissing&&this.backendConnector.saveMissing(de,l,Le,Ze,J,r),this.emit("missingKey",de,l,Le,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?G.forEach(de=>{const Le=this.pluralResolver.getSuffixes(de,r);U&&r[`defaultValue${this.options.pluralSeparator}zero`]&&Le.indexOf(`${this.options.pluralSeparator}zero`)<0&&Le.push(`${this.options.pluralSeparator}zero`),Le.forEach(We=>{te([de],o+We,r[`defaultValue${We}`]||b)})}):te(G,o,b))}m=this.extendTranslation(m,e,r,p,n),H&&m===o&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${o}`),(H||B)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${o}`:o,B?m:void 0,r))}return s?(p.res=m,p.usedParams=this.getUsedParamsDetails(r),p):m}extendTranslation(e,t,n,r,s){var c,l;if((c=this.i18nFormat)!=null&&c.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const u=Oe(e)&&(((l=n==null?void 0:n.interpolation)==null?void 0:l.skipOnVariables)!==void 0?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let f;if(u){const p=e.match(this.interpolator.nestingRegexp);f=p&&p.length}let d=n.replace&&!Oe(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(d={...this.options.interpolation.defaultVariables,...d}),e=this.interpolator.interpolate(e,d,n.lng||this.language||r.usedLng,n),u){const p=e.match(this.interpolator.nestingRegexp),m=p&&p.length;f<m&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...p)=>(s==null?void 0:s[0])===p[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${t[0]}`),null):this.translate(...p,t),n)),n.interpolation&&this.interpolator.reset()}const a=n.postProcess||this.options.postProcess,o=Oe(a)?[a]:a;return e!=null&&(o!=null&&o.length)&&n.applyPostProcessor!==!1&&(e=rc.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,s,a,o;return Oe(e)&&(e=[e]),e.forEach(c=>{if(this.isValidLookup(n))return;const l=this.extractFromKey(c,t),u=l.key;r=u;let f=l.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const d=t.count!==void 0&&!Oe(t.count),p=d&&!t.ordinal&&t.count===0,m=t.context!==void 0&&(Oe(t.context)||typeof t.context=="number")&&t.context!=="",g=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);f.forEach(x=>{var h,T;this.isValidLookup(n)||(o=x,!Eo[`${g[0]}-${x}`]&&((h=this.utils)!=null&&h.hasLoadedNamespace)&&!((T=this.utils)!=null&&T.hasLoadedNamespace(o))&&(Eo[`${g[0]}-${x}`]=!0,this.logger.warn(`key "${r}" for languages "${g.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),g.forEach(y=>{var M;if(this.isValidLookup(n))return;a=y;const A=[u];if((M=this.i18nFormat)!=null&&M.addLookupKeys)this.i18nFormat.addLookupKeys(A,u,y,x,t);else{let C;d&&(C=this.pluralResolver.getSuffix(y,t.count,t));const U=`${this.options.pluralSeparator}zero`,b=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(t.ordinal&&C.indexOf(b)===0&&A.push(u+C.replace(b,this.options.pluralSeparator)),A.push(u+C),p&&A.push(u+U)),m){const v=`${u}${this.options.contextSeparator||"_"}${t.context}`;A.push(v),d&&(t.ordinal&&C.indexOf(b)===0&&A.push(v+C.replace(b,this.options.pluralSeparator)),A.push(v+C),p&&A.push(v+U))}}let P;for(;P=A.pop();)this.isValidLookup(n)||(s=P,n=this.getResource(y,x,P,t))}))})}),{res:n,usedKey:r,exactUsedKey:s,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,t,n,r={}){var s;return(s=this.i18nFormat)!=null&&s.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!Oe(e.replace);let r=n?e.replace:e;if(n&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const s of t)delete r[s]}return r}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,t.length)&&e[n]!==void 0)return!0;return!1}}class To{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=en.create("languageUtils")}getScriptPartFromCode(e){if(e=Qi(e),!e||e.indexOf("-")<0)return null;const t=e.split("-");return t.length===2||(t.pop(),t[t.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(t.join("-"))}getLanguagePartFromCode(e){if(e=Qi(e),!e||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(Oe(e)&&e.indexOf("-")>-1){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(n=>{if(t)return;const r=this.formatLanguageCode(n);(!this.options.supportedLngs||this.isSupportedCode(r))&&(t=r)}),!t&&this.options.supportedLngs&&e.forEach(n=>{if(t)return;const r=this.getScriptPartFromCode(n);if(this.isSupportedCode(r))return t=r;const s=this.getLanguagePartFromCode(n);if(this.isSupportedCode(s))return t=s;t=this.options.supportedLngs.find(a=>{if(a===s)return a;if(!(a.indexOf("-")<0&&s.indexOf("-")<0)&&(a.indexOf("-")>0&&s.indexOf("-")<0&&a.substring(0,a.indexOf("-"))===s||a.indexOf(s)===0&&s.length>1))return a})}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if(typeof e=="function"&&(e=e(t)),Oe(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),r=[],s=a=>{a&&(this.isSupportedCode(a)?r.push(a):this.logger.warn(`rejecting language code not found in supportedLngs: ${a}`))};return Oe(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):Oe(e)&&s(this.formatLanguageCode(e)),n.forEach(a=>{r.indexOf(a)<0&&s(this.formatLanguageCode(a))}),r}}const Ao={zero:0,one:1,two:2,few:3,many:4,other:5},Co={select:i=>i===1?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class mf{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=en.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){const n=Qi(e==="dev"?"en":e),r=t.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:n,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),Co;if(!e.match(/-|_/))return Co;const c=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(c,t)}return this.pluralRulesCache[s]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),(n==null?void 0:n.resolvedOptions().pluralCategories.length)>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(r=>`${t}${r}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((r,s)=>Ao[r]-Ao[s]).map(r=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${r}`):[]}getSuffix(e,t,n={}){const r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const wo=(i,e,t,n=".",r=!0)=>{let s=af(i,e,t);return!s&&r&&Oe(t)&&(s=ea(i,t,n),s===void 0&&(s=ea(e,t,n))),s},gs=i=>i.replace(/\$/g,"$$$$");class xf{constructor(e={}){var t;this.logger=en.create("interpolator"),this.options=e,this.format=((t=e==null?void 0:e.interpolation)==null?void 0:t.format)||(n=>n),this.init(e)}init(e={}){e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:s,prefixEscaped:a,suffix:o,suffixEscaped:c,formatSeparator:l,unescapeSuffix:u,unescapePrefix:f,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:m,nestingSuffixEscaped:g,nestingOptionsSeparator:x,maxReplaces:h,alwaysFormat:T}=e.interpolation;this.escape=t!==void 0?t:lf,this.escapeValue=n!==void 0?n:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?ri(s):a||"{{",this.suffix=o?ri(o):c||"}}",this.formatSeparator=l||",",this.unescapePrefix=u?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?ri(d):p||ri("$t("),this.nestingSuffix=m?ri(m):g||ri(")"),this.nestingOptionsSeparator=x||",",this.maxReplaces=h||1e3,this.alwaysFormat=T!==void 0?T:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(t,n)=>(t==null?void 0:t.source)===n?(t.lastIndex=0,t):new RegExp(n,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){var p;let s,a,o;const c=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},l=m=>{if(m.indexOf(this.formatSeparator)<0){const T=wo(t,c,m,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(T,void 0,n,{...r,...t,interpolationkey:m}):T}const g=m.split(this.formatSeparator),x=g.shift().trim(),h=g.join(this.formatSeparator).trim();return this.format(wo(t,c,x,this.options.keySeparator,this.options.ignoreJSONStructure),h,n,{...r,...t,interpolationkey:x})};this.resetRegExp();const u=(r==null?void 0:r.missingInterpolationHandler)||this.options.missingInterpolationHandler,f=((p=r==null?void 0:r.interpolation)==null?void 0:p.skipOnVariables)!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:m=>gs(m)},{regex:this.regexp,safeValue:m=>this.escapeValue?gs(this.escape(m)):gs(m)}].forEach(m=>{for(o=0;s=m.regex.exec(e);){const g=s[1].trim();if(a=l(g),a===void 0)if(typeof u=="function"){const h=u(e,s,r);a=Oe(h)?h:""}else if(r&&Object.prototype.hasOwnProperty.call(r,g))a="";else if(f){a=s[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),a="";else!Oe(a)&&!this.useRawValueToEscape&&(a=vo(a));const x=m.safeValue(a);if(e=e.replace(s[0],x),f?(m.regex.lastIndex+=a.length,m.regex.lastIndex-=s[0].length):m.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,s,a;const o=(c,l)=>{const u=this.nestingOptionsSeparator;if(c.indexOf(u)<0)return c;const f=c.split(new RegExp(`${u}[ ]*{`));let d=`{${f[1]}`;c=f[0],d=this.interpolate(d,a);const p=d.match(/'/g),m=d.match(/"/g);(((p==null?void 0:p.length)??0)%2===0&&!m||m.length%2!==0)&&(d=d.replace(/'/g,'"'));try{a=JSON.parse(d),l&&(a={...l,...a})}catch(g){return this.logger.warn(`failed parsing options string in nesting for key ${c}`,g),`${c}${u}${d}`}return a.defaultValue&&a.defaultValue.indexOf(this.prefix)>-1&&delete a.defaultValue,c};for(;r=this.nestingRegexp.exec(e);){let c=[];a={...n},a=a.replace&&!Oe(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;const l=/{.*}/.test(r[1])?r[1].lastIndexOf("}")+1:r[1].indexOf(this.formatSeparator);if(l!==-1&&(c=r[1].slice(l).split(this.formatSeparator).map(u=>u.trim()).filter(Boolean),r[1]=r[1].slice(0,l)),s=t(o.call(this,r[1].trim(),a),a),s&&r[0]===e&&!Oe(s))return s;Oe(s)||(s=vo(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),c.length&&(s=c.reduce((u,f)=>this.format(u,f,n.lng,{...n,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const gf=i=>{let e=i.toLowerCase().trim();const t={};if(i.indexOf("(")>-1){const n=i.split("(");e=n[0].toLowerCase().trim();const r=n[1].substring(0,n[1].length-1);e==="currency"&&r.indexOf(":")<0?t.currency||(t.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?t.range||(t.range=r.trim()):r.split(";").forEach(a=>{if(a){const[o,...c]=a.split(":"),l=c.join(":").trim().replace(/^'+|'+$/g,""),u=o.trim();t[u]||(t[u]=l),l==="false"&&(t[u]=!1),l==="true"&&(t[u]=!0),isNaN(l)||(t[u]=parseInt(l,10))}})}return{formatName:e,formatOptions:t}},Ro=i=>{const e={};return(t,n,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const a=n+JSON.stringify(s);let o=e[a];return o||(o=i(Qi(n),r),e[a]=o),o(t)}},_f=i=>(e,t,n)=>i(Qi(t),n)(e);class vf{constructor(e={}){this.logger=en.create("formatter"),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?Ro:_f;this.formats={number:n((r,s)=>{const a=new Intl.NumberFormat(r,{...s});return o=>a.format(o)}),currency:n((r,s)=>{const a=new Intl.NumberFormat(r,{...s,style:"currency"});return o=>a.format(o)}),datetime:n((r,s)=>{const a=new Intl.DateTimeFormat(r,{...s});return o=>a.format(o)}),relativetime:n((r,s)=>{const a=new Intl.RelativeTimeFormat(r,{...s});return o=>a.format(o,s.range||"day")}),list:n((r,s)=>{const a=new Intl.ListFormat(r,{...s});return o=>a.format(o)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=Ro(t)}format(e,t,n,r={}){const s=t.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(o=>o.indexOf(")")>-1)){const o=s.findIndex(c=>c.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,o)].join(this.formatSeparator)}return s.reduce((o,c)=>{var f;const{formatName:l,formatOptions:u}=gf(c);if(this.formats[l]){let d=o;try{const p=((f=r==null?void 0:r.formatParams)==null?void 0:f[r.interpolationkey])||{},m=p.locale||p.lng||r.locale||r.lng||n;d=this.formats[l](o,m,{...u,...r,...p})}catch(p){this.logger.warn(p)}return d}else this.logger.warn(`there was no format function for ${l}`);return o},e)}}const Sf=(i,e)=>{i.pending[e]!==void 0&&(delete i.pending[e],i.pendingCount--)};class bf extends is{constructor(e,t,n,r={}){var s,a;super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=en.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],(a=(s=this.backend)==null?void 0:s.init)==null||a.call(s,n,r.backend,r)}queueLoad(e,t,n,r){const s={},a={},o={},c={};return e.forEach(l=>{let u=!0;t.forEach(f=>{const d=`${l}|${f}`;!n.reload&&this.store.hasResourceBundle(l,f)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?a[d]===void 0&&(a[d]=!0):(this.state[d]=1,u=!1,a[d]===void 0&&(a[d]=!0),s[d]===void 0&&(s[d]=!0),c[f]===void 0&&(c[f]=!0)))}),u||(o[l]=!0)}),(Object.keys(s).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(c)}}loaded(e,t,n){const r=e.split("|"),s=r[0],a=r[1];t&&this.emit("failedLoading",s,a,t),!t&&n&&this.store.addResourceBundle(s,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const o={};this.queue.forEach(c=>{sf(c.loaded,[s],a),Sf(c,e),t&&c.errors.push(t),c.pendingCount===0&&!c.done&&(Object.keys(c.loaded).forEach(l=>{o[l]||(o[l]={});const u=c.loaded[l];u.length&&u.forEach(f=>{o[l][f]===void 0&&(o[l][f]=!0)})}),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())}),this.emit("loaded",o),this.queue=this.queue.filter(c=>!c.done)}read(e,t,n,r=0,s=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:s,callback:a});return}this.readingCalls++;const o=(l,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(l&&u&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,t,n,r+1,s*2,a)},s);return}a(l,u)},c=this.backend[n].bind(this.backend);if(c.length===2){try{const l=c(e,t);l&&typeof l.then=="function"?l.then(u=>o(null,u)).catch(o):o(null,l)}catch(l){o(l)}return}return c(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Oe(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Oe(t)&&(t=[t]);const s=this.queueLoad(e,t,n,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(a=>{this.loadOne(a)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=""){const n=e.split("|"),r=n[0],s=n[1];this.read(r,s,"read",void 0,void 0,(a,o)=>{a&&this.logger.warn(`${t}loading namespace ${s} for language ${r} failed`,a),!a&&o&&this.logger.log(`${t}loaded namespace ${s} for language ${r}`,o),this.loaded(e,a,o)})}saveMissing(e,t,n,r,s,a={},o=()=>{}){var c,l,u,f,d;if((l=(c=this.services)==null?void 0:c.utils)!=null&&l.hasLoadedNamespace&&!((f=(u=this.services)==null?void 0:u.utils)!=null&&f.hasLoadedNamespace(t))){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(n==null||n==="")){if((d=this.backend)!=null&&d.create){const p={...a,isUpdate:s},m=this.backend.create.bind(this.backend);if(m.length<6)try{let g;m.length===5?g=m(e,t,n,r,p):g=m(e,t,n,r),g&&typeof g.then=="function"?g.then(x=>o(null,x)).catch(o):o(null,g)}catch(g){o(g)}else m(e,t,n,r,o,p)}!e||!e[0]||this.store.addResource(e[0],t,n,r)}}}const Po=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:i=>{let e={};if(typeof i[1]=="object"&&(e=i[1]),Oe(i[1])&&(e.defaultValue=i[1]),Oe(i[2])&&(e.tDescription=i[2]),typeof i[2]=="object"||typeof i[3]=="object"){const t=i[3]||i[2];Object.keys(t).forEach(n=>{e[n]=t[n]})}return e},interpolation:{escapeValue:!0,format:i=>i,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Lo=i=>{var e,t;return Oe(i.ns)&&(i.ns=[i.ns]),Oe(i.fallbackLng)&&(i.fallbackLng=[i.fallbackLng]),Oe(i.fallbackNS)&&(i.fallbackNS=[i.fallbackNS]),((t=(e=i.supportedLngs)==null?void 0:e.indexOf)==null?void 0:t.call(e,"cimode"))<0&&(i.supportedLngs=i.supportedLngs.concat(["cimode"])),typeof i.initImmediate=="boolean"&&(i.initAsync=i.initImmediate),i},dr=()=>{},Mf=i=>{Object.getOwnPropertyNames(Object.getPrototypeOf(i)).forEach(t=>{typeof i[t]=="function"&&(i[t]=i[t].bind(i))})};class Zi extends is{constructor(e={},t){if(super(),this.options=Lo(e),this.services={},this.logger=en,this.modules={external:[]},Mf(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e=="function"&&(t=e,e={}),e.defaultNS==null&&e.ns&&(Oe(e.ns)?e.defaultNS=e.ns:e.ns.indexOf("translation")<0&&(e.defaultNS=e.ns[0]));const n=Po();this.options={...n,...this.options,...Lo(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator);const r=l=>l?typeof l=="function"?new l:l:null;if(!this.options.isClone){this.modules.logger?en.init(r(this.modules.logger),this.options):en.init(null,this.options);let l;this.modules.formatter?l=this.modules.formatter:l=vf;const u=new To(this.options);this.store=new yo(this.options.resources,this.options);const f=this.services;f.logger=en,f.resourceStore=this.store,f.languageUtils=u,f.pluralResolver=new mf(u,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),this.options.interpolation.format&&this.options.interpolation.format!==n.interpolation.format&&this.logger.deprecate("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),l&&(!this.options.interpolation.format||this.options.interpolation.format===n.interpolation.format)&&(f.formatter=r(l),f.formatter.init&&f.formatter.init(f,this.options),this.options.interpolation.format=f.formatter.format.bind(f.formatter)),f.interpolator=new xf(this.options),f.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},f.backendConnector=new bf(r(this.modules.backend),f.resourceStore,f,this.options),f.backendConnector.on("*",(p,...m)=>{this.emit(p,...m)}),this.modules.languageDetector&&(f.languageDetector=r(this.modules.languageDetector),f.languageDetector.init&&f.languageDetector.init(f,this.options.detection,this.options)),this.modules.i18nFormat&&(f.i18nFormat=r(this.modules.i18nFormat),f.i18nFormat.init&&f.i18nFormat.init(this)),this.translator=new Kr(this.services,this.options),this.translator.on("*",(p,...m)=>{this.emit(p,...m)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,t||(t=dr),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const l=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);l.length>0&&l[0]!=="dev"&&(this.options.lng=l[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(l=>{this[l]=(...u)=>this.store[l](...u)}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(l=>{this[l]=(...u)=>(this.store[l](...u),this)});const o=zi(),c=()=>{const l=(u,f)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),o.resolve(f),t(u,f)};if(this.languages&&!this.isInitialized)return l(null,this.t.bind(this));this.changeLanguage(this.options.lng,l)};return this.options.resources||!this.options.initAsync?c():setTimeout(c,0),o}loadResources(e,t=dr){var s,a;let n=t;const r=Oe(e)?e:this.language;if(typeof e=="function"&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if((r==null?void 0:r.toLowerCase())==="cimode"&&(!this.options.preload||this.options.preload.length===0))return n();const o=[],c=l=>{if(!l||l==="cimode")return;this.services.languageUtils.toResolveHierarchy(l).forEach(f=>{f!=="cimode"&&o.indexOf(f)<0&&o.push(f)})};r?c(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(u=>c(u)),(a=(s=this.options.preload)==null?void 0:s.forEach)==null||a.call(s,l=>c(l)),this.services.backendConnector.load(o,this.options.ns,l=>{!l&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(l)})}else n(null)}reloadResources(e,t,n){const r=zi();return typeof e=="function"&&(n=e,e=void 0),typeof t=="function"&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=dr),this.services.backendConnector.reload(e,t,s=>{r.resolve(),n(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&rc.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1)){for(let t=0;t<this.languages.length;t++){const n=this.languages[t];if(!(["cimode","dev"].indexOf(n)>-1)&&this.store.hasLanguageSomeTranslations(n)){this.resolvedLanguage=n;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;const n=zi();this.emit("languageChanging",e);const r=o=>{this.language=o,this.languages=this.services.languageUtils.toResolveHierarchy(o),this.resolvedLanguage=void 0,this.setResolvedLanguage(o)},s=(o,c)=>{c?this.isLanguageChangingTo===e&&(r(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,n.resolve((...l)=>this.t(...l)),t&&t(o,(...l)=>this.t(...l))},a=o=>{var u,f;!e&&!o&&this.services.languageDetector&&(o=[]);const c=Oe(o)?o:o&&o[0],l=this.store.hasLanguageSomeTranslations(c)?c:this.services.languageUtils.getBestMatchFromCodes(Oe(o)?[o]:o);l&&(this.language||r(l),this.translator.language||this.translator.changeLanguage(l),(f=(u=this.services.languageDetector)==null?void 0:u.cacheUserLanguage)==null||f.call(u,l)),this.loadResources(l,d=>{s(d,l)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n){const r=(s,a,...o)=>{let c;typeof a!="object"?c=this.options.overloadTranslationOptionHandler([s,a].concat(o)):c={...a},c.lng=c.lng||r.lng,c.lngs=c.lngs||r.lngs,c.ns=c.ns||r.ns,c.keyPrefix!==""&&(c.keyPrefix=c.keyPrefix||n||r.keyPrefix);const l=this.options.keySeparator||".";let u;return c.keyPrefix&&Array.isArray(s)?u=s.map(f=>(typeof f=="function"&&(f=ta(f,{...this.options,...a})),`${c.keyPrefix}${l}${f}`)):(typeof s=="function"&&(s=ta(s,{...this.options,...a})),u=c.keyPrefix?`${c.keyPrefix}${l}${s}`:s),this.t(u,c)};return Oe(e)?r.lng=e:r.lngs=e,r.ns=t,r.keyPrefix=n,r}t(...e){var t;return(t=this.translator)==null?void 0:t.translate(...e)}exists(...e){var t;return(t=this.translator)==null?void 0:t.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(n.toLowerCase()==="cimode")return!0;const a=(o,c)=>{const l=this.services.backendConnector.state[`${o}|${c}`];return l===-1||l===0||l===2};if(t.precheck){const o=t.precheck(this,a);if(o!==void 0)return o}return!!(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||a(n,e)&&(!r||a(s,e)))}loadNamespaces(e,t){const n=zi();return this.options.ns?(Oe(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{n.resolve(),t&&t(r)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=zi();Oe(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(a=>r.indexOf(a)<0&&this.services.languageUtils.isSupportedCode(a));return s.length?(this.options.preload=r.concat(s),this.loadResources(a=>{n.resolve(),t&&t(a)}),n):(t&&t(),Promise.resolve())}dir(e){var r,s;if(e||(e=this.resolvedLanguage||(((r=this.languages)==null?void 0:r.length)>0?this.languages[0]:this.language)),!e)return"rtl";try{const a=new Intl.Locale(e);if(a&&a.getTextInfo){const o=a.getTextInfo();if(o&&o.direction)return o.direction}}catch{}const t=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],n=((s=this.services)==null?void 0:s.languageUtils)||new To(Po());return e.toLowerCase().indexOf("-latn")>1?"ltr":t.indexOf(n.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(e={},t){const n=new Zi(e,t);return n.createInstance=Zi.createInstance,n}cloneInstance(e={},t=dr){const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new Zi(r);if((e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(o=>{s[o]=this[o]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},n){const o=Object.keys(this.store.data).reduce((c,l)=>(c[l]={...this.store.data[l]},c[l]=Object.keys(c[l]).reduce((u,f)=>(u[f]={...c[l][f]},u),c[l]),c),{});s.store=new yo(o,r),s.services.resourceStore=s.store}return s.translator=new Kr(s.services,r),s.translator.on("*",(o,...c)=>{s.emit(o,...c)}),s.init(r,t),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const pt=Zi.createInstance();pt.createInstance;pt.dir;pt.init;pt.loadResources;pt.reloadResources;pt.use;pt.changeLanguage;pt.getFixedT;pt.t;pt.exists;pt.setDefaultNamespace;pt.hasLoadedNamespace;pt.loadNamespaces;pt.loadLanguages;const{slice:yf,forEach:Ef}=[];function Tf(i){return Ef.call(yf.call(arguments,1),e=>{if(e)for(const t in e)i[t]===void 0&&(i[t]=e[t])}),i}function Af(i){return typeof i!="string"?!1:[/<\s*script.*?>/i,/<\s*\/\s*script\s*>/i,/<\s*img.*?on\w+\s*=/i,/<\s*\w+\s*on\w+\s*=.*?>/i,/javascript\s*:/i,/vbscript\s*:/i,/expression\s*\(/i,/eval\s*\(/i,/alert\s*\(/i,/document\.cookie/i,/document\.write\s*\(/i,/window\.location/i,/innerHTML/i].some(t=>t.test(i))}const Do=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,Cf=function(i,e){const n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{path:"/"},r=encodeURIComponent(e);let s=`${i}=${r}`;if(n.maxAge>0){const a=n.maxAge-0;if(Number.isNaN(a))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(a)}`}if(n.domain){if(!Do.test(n.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${n.domain}`}if(n.path){if(!Do.test(n.path))throw new TypeError("option path is invalid");s+=`; Path=${n.path}`}if(n.expires){if(typeof n.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${n.expires.toUTCString()}`}if(n.httpOnly&&(s+="; HttpOnly"),n.secure&&(s+="; Secure"),n.sameSite)switch(typeof n.sameSite=="string"?n.sameSite.toLowerCase():n.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return n.partitioned&&(s+="; Partitioned"),s},Io={create(i,e,t,n){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};t&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+t*60*1e3)),n&&(r.domain=n),document.cookie=Cf(i,e,r)},read(i){const e=`${i}=`,t=document.cookie.split(";");for(let n=0;n<t.length;n++){let r=t[n];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(i,e){this.create(i,"",-1,e)}};var wf={name:"cookie",lookup(i){let{lookupCookie:e}=i;if(e&&typeof document<"u")return Io.read(e)||void 0},cacheUserLanguage(i,e){let{lookupCookie:t,cookieMinutes:n,cookieDomain:r,cookieOptions:s}=e;t&&typeof document<"u"&&Io.create(t,i,n,r,s)}},Rf={name:"querystring",lookup(i){var n;let{lookupQuerystring:e}=i,t;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((n=window.location.hash)==null?void 0:n.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const a=r.substring(1).split("&");for(let o=0;o<a.length;o++){const c=a[o].indexOf("=");c>0&&a[o].substring(0,c)===e&&(t=a[o].substring(c+1))}}return t}},Pf={name:"hash",lookup(i){var r;let{lookupHash:e,lookupFromHashIndex:t}=i,n;if(typeof window<"u"){const{hash:s}=window.location;if(s&&s.length>2){const a=s.substring(1);if(e){const o=a.split("&");for(let c=0;c<o.length;c++){const l=o[c].indexOf("=");l>0&&o[c].substring(0,l)===e&&(n=o[c].substring(l+1))}}if(n)return n;if(!n&&t>-1){const o=s.match(/\/([a-zA-Z-]*)/g);return Array.isArray(o)?(r=o[typeof t=="number"?t:0])==null?void 0:r.replace("/",""):void 0}}}return n}};let si=null;const Uo=()=>{if(si!==null)return si;try{if(si=typeof window<"u"&&window.localStorage!==null,!si)return!1;const i="i18next.translate.boo";window.localStorage.setItem(i,"foo"),window.localStorage.removeItem(i)}catch{si=!1}return si};var Lf={name:"localStorage",lookup(i){let{lookupLocalStorage:e}=i;if(e&&Uo())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(i,e){let{lookupLocalStorage:t}=e;t&&Uo()&&window.localStorage.setItem(t,i)}};let ai=null;const No=()=>{if(ai!==null)return ai;try{if(ai=typeof window<"u"&&window.sessionStorage!==null,!ai)return!1;const i="i18next.translate.boo";window.sessionStorage.setItem(i,"foo"),window.sessionStorage.removeItem(i)}catch{ai=!1}return ai};var Df={name:"sessionStorage",lookup(i){let{lookupSessionStorage:e}=i;if(e&&No())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(i,e){let{lookupSessionStorage:t}=e;t&&No()&&window.sessionStorage.setItem(t,i)}},If={name:"navigator",lookup(i){const e=[];if(typeof navigator<"u"){const{languages:t,userLanguage:n,language:r}=navigator;if(t)for(let s=0;s<t.length;s++)e.push(t[s]);n&&e.push(n),r&&e.push(r)}return e.length>0?e:void 0}},Uf={name:"htmlTag",lookup(i){let{htmlTag:e}=i,t;const n=e||(typeof document<"u"?document.documentElement:null);return n&&typeof n.getAttribute=="function"&&(t=n.getAttribute("lang")),t}},Nf={name:"path",lookup(i){var r;let{lookupFromPathIndex:e}=i;if(typeof window>"u")return;const t=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(t)?(r=t[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},Ff={name:"subdomain",lookup(i){var r,s;let{lookupFromSubdomainIndex:e}=i;const t=typeof e=="number"?e+1:1,n=typeof window<"u"&&((s=(r=window.location)==null?void 0:r.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(n)return n[t]}};let ac=!1;try{document.cookie,ac=!0}catch{}const oc=["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"];ac||oc.splice(1,1);const Of=()=>({order:oc,lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:i=>i});class lc{constructor(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,t)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{languageUtils:{}},t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e,this.options=Tf(t,this.options||{},Of()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=n,this.addDetector(wf),this.addDetector(Rf),this.addDetector(Lf),this.addDetector(Df),this.addDetector(If),this.addDetector(Uf),this.addDetector(Nf),this.addDetector(Ff),this.addDetector(Pf)}addDetector(e){return this.detectors[e.name]=e,this}detect(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:this.options.order,t=[];return e.forEach(n=>{if(this.detectors[n]){let r=this.detectors[n].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(t=t.concat(r))}}),t=t.filter(n=>n!=null&&!Af(n)).map(n=>this.options.convertDetectedLanguage(n)),this.services&&this.services.languageUtils&&this.services.languageUtils.getBestMatchFromCodes?t:t.length>0?t[0]:null}cacheUserLanguage(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:this.options.caches;t&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||t.forEach(n=>{this.detectors[n]&&this.detectors[n].cacheUserLanguage(e,this.options)}))}}lc.type="languageDetector";function na(i){"@babel/helpers - typeof";return na=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},na(i)}function cc(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":na(XMLHttpRequest))==="object"}function Bf(i){return!!i&&typeof i.then=="function"}function zf(i){return Bf(i)?i:Promise.resolve(i)}function Fo(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function Oo(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Fo(Object(t),!0).forEach(function(n){Vf(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Fo(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function Vf(i,e,t){return(e=kf(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function kf(i){var e=Hf(i,"string");return jn(e)=="symbol"?e:e+""}function Hf(i,e){if(jn(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(jn(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(i)}function jn(i){"@babel/helpers - typeof";return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jn(i)}var Nn=typeof fetch=="function"?fetch:void 0;typeof global<"u"&&global.fetch?Nn=global.fetch:typeof window<"u"&&window.fetch&&(Nn=window.fetch);var er;cc()&&(typeof global<"u"&&global.XMLHttpRequest?er=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(er=window.XMLHttpRequest));var Zr;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?Zr=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(Zr=window.ActiveXObject));typeof Nn!="function"&&(Nn=void 0);if(!Nn&&!er&&!Zr)try{Iu(()=>import("../chunks/CqvAR-2m.js").then(i=>i.b),[],import.meta.url).then(function(i){Nn=i.default}).catch(function(){})}catch{}var ia=function(e,t){if(t&&jn(t)==="object"){var n="";for(var r in t)n+="&"+encodeURIComponent(r)+"="+encodeURIComponent(t[r]);if(!n)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+n.slice(1)}return e},Bo=function(e,t,n,r){var s=function(c){if(!c.ok)return n(c.statusText||"Error",{status:c.status});c.text().then(function(l){n(null,{status:c.status,data:l})}).catch(n)};if(r){var a=r(e,t);if(a instanceof Promise){a.then(s).catch(n);return}}typeof fetch=="function"?fetch(e,t).then(s).catch(n):Nn(e,t).then(s).catch(n)},zo=!1,Gf=function(e,t,n,r){e.queryStringParams&&(t=ia(t,e.queryStringParams));var s=Oo({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(s["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),n&&(s["Content-Type"]="application/json");var a=typeof e.requestOptions=="function"?e.requestOptions(n):e.requestOptions,o=Oo({method:n?"POST":"GET",body:n?e.stringify(n):void 0,headers:s},zo?{}:a),c=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{Bo(t,o,r,c)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return r(l);try{Object.keys(a).forEach(function(u){delete o[u]}),Bo(t,o,r,c),zo=!0}catch(u){r(u)}}},Wf=function(e,t,n,r){n&&jn(n)==="object"&&(n=ia("",n).slice(1)),e.queryStringParams&&(t=ia(t,e.queryStringParams));try{var s=er?new er:new Zr("MSXML2.XMLHTTP.3.0");s.open(n?"POST":"GET",t,1),e.crossDomain||s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.withCredentials=!!e.withCredentials,n&&s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.overrideMimeType&&s.overrideMimeType("application/json");var a=e.customHeaders;if(a=typeof a=="function"?a():a,a)for(var o in a)s.setRequestHeader(o,a[o]);s.onreadystatechange=function(){s.readyState>3&&r(s.status>=400?s.statusText:null,{status:s.status,data:s.responseText})},s.send(n)}catch(c){console&&console.log(c)}},Xf=function(e,t,n,r){if(typeof n=="function"&&(r=n,n=void 0),r=r||function(){},Nn&&t.indexOf("file:")!==0)return Gf(e,t,n,r);if(cc()||typeof ActiveXObject=="function")return Wf(e,t,n,r);r(new Error("No fetch and no xhr implementation found!"))};function Ei(i){"@babel/helpers - typeof";return Ei=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ei(i)}function Vo(i,e){var t=Object.keys(i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(i);e&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(i,r).enumerable})),t.push.apply(t,n)}return t}function _s(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Vo(Object(t),!0).forEach(function(n){uc(i,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(t)):Vo(Object(t)).forEach(function(n){Object.defineProperty(i,n,Object.getOwnPropertyDescriptor(t,n))})}return i}function $f(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function qf(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,fc(n.key),n)}}function Yf(i,e,t){return e&&qf(i.prototype,e),Object.defineProperty(i,"prototype",{writable:!1}),i}function uc(i,e,t){return(e=fc(e))in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}function fc(i){var e=jf(i,"string");return Ei(e)=="symbol"?e:e+""}function jf(i,e){if(Ei(i)!="object"||!i)return i;var t=i[Symbol.toPrimitive];if(t!==void 0){var n=t.call(i,e);if(Ei(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(i)}var Kf=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,n,r){return uc({},n,r||"")},parseLoadPayload:function(t,n){},request:Xf,reloadInterval:typeof window<"u"?!1:3600*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},dc=(function(){function i(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};$f(this,i),this.services=e,this.options=t,this.allOptions=n,this.type="backend",this.init(e,t,n)}return Yf(i,[{key:"init",value:function(t){var n=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=t,this.options=_s(_s(_s({},Kf()),this.options||{}),r),this.allOptions=s,this.services&&this.options.reloadInterval){var a=setInterval(function(){return n.reload()},this.options.reloadInterval);Ei(a)==="object"&&typeof a.unref=="function"&&a.unref()}}},{key:"readMulti",value:function(t,n,r){this._readAny(t,t,n,n,r)}},{key:"read",value:function(t,n,r){this._readAny([t],t,[n],n,r)}},{key:"_readAny",value:function(t,n,r,s,a){var o=this,c=this.options.loadPath;typeof this.options.loadPath=="function"&&(c=this.options.loadPath(t,r)),c=zf(c),c.then(function(l){if(!l)return a(null,{});var u=o.services.interpolator.interpolate(l,{lng:t.join("+"),ns:r.join("+")});o.loadUrl(u,a,n,s)})}},{key:"loadUrl",value:function(t,n,r,s){var a=this,o=typeof r=="string"?[r]:r,c=typeof s=="string"?[s]:s,l=this.options.parseLoadPayload(o,c);this.options.request(this.options,t,l,function(u,f){if(f&&(f.status>=500&&f.status<600||!f.status))return n("failed loading "+t+"; status code: "+f.status,!0);if(f&&f.status>=400&&f.status<500)return n("failed loading "+t+"; status code: "+f.status,!1);if(!f&&u&&u.message){var d=u.message.toLowerCase(),p=["failed","fetch","network","load"].find(function(x){return d.indexOf(x)>-1});if(p)return n("failed loading "+t+": "+u.message,!0)}if(u)return n(u,!1);var m,g;try{typeof f.data=="string"?m=a.options.parse(f.data,r,s):m=f.data}catch{g="failed parsing "+t+" to json"}if(g)return n(g,!1);n(null,m)})}},{key:"create",value:function(t,n,r,s,a){var o=this;if(this.options.addPath){typeof t=="string"&&(t=[t]);var c=this.options.parsePayload(n,r,s),l=0,u=[],f=[];t.forEach(function(d){var p=o.options.addPath;typeof o.options.addPath=="function"&&(p=o.options.addPath(d,n));var m=o.services.interpolator.interpolate(p,{lng:d,ns:n});o.options.request(o.options,m,c,function(g,x){l+=1,u.push(g),f.push(x),l===t.length&&typeof a=="function"&&a(u,f)})})}}},{key:"reload",value:function(){var t=this,n=this.services,r=n.backendConnector,s=n.languageUtils,a=n.logger,o=r.language;if(!(o&&o.toLowerCase()==="cimode")){var c=[],l=function(f){var d=s.toResolveHierarchy(f);d.forEach(function(p){c.indexOf(p)<0&&c.push(p)})};l(o),this.allOptions.preload&&this.allOptions.preload.forEach(function(u){return l(u)}),c.forEach(function(u){t.allOptions.ns.forEach(function(f){r.read(u,f,"read",null,null,function(d,p){d&&a.warn("loading namespace ".concat(f," for language ").concat(u," failed"),d),!d&&p&&a.log("loaded namespace ".concat(f," for language ").concat(u),p),r.loaded("".concat(u,"|").concat(f),d,p)})})})}}}])})();dc.type="backend";const Zf={en:{name:"English",dir:"ltr"},"zh-CN":{name:"简体中文",dir:"ltr"},"zh-TW":{name:"繁體中文",dir:"ltr"},ja:{name:"日本語",dir:"ltr"},de:{name:"Deutsch",dir:"ltr"},fr:{name:"Français",dir:"ltr"},ko:{name:"한국어",dir:"ltr"},ar:{name:"العربية",dir:"rtl"}};pt.use(dc).use(lc).init({fallbackLng:"en",debug:!0,detection:{order:["localStorage","navigator","htmlTag"],caches:["localStorage"],lookupLocalStorage:"i18nextLng"},load:"languageOnly",backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},interpolation:{escapeValue:!1},ns:["translation"],defaultNS:"translation"}),pt.on("languageChanged",i=>{var t;const e=((t=Zf[i])==null?void 0:t.dir)||"ltr";document.documentElement.dir=e,document.documentElement.lang=i});function Jf(){let i=zr("en"),e=zr(!1),t=zr(0);return pt.on("languageChanged",n=>{Pn(i,n,!0),Pn(t,ct(t)+1)}),pt.on("loaded",()=>{Pn(t,ct(t)+1)}),pt.on("initialized",()=>{Pn(e,!0),Pn(t,ct(t)+1)}),pt.isInitialized&&(Pn(e,!0),Pn(i,pt.language,!0)),{get language(){return ct(i)},get isInitialized(){return ct(e)},t:(n,r)=>(ct(t),ct(e)?pt.t(n,r):n),changeLanguage:n=>{pt.changeLanguage(n)}}}const lt=Jf();var Qf=yn('<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 2c-1.05 0-2.05.16-3 .46 4.06 1.27 7 5.06 7 9.54 0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S14.52 2 9 2z"></path></svg>'),ed=yn('<svg aria-hidden="true" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path></svg>'),td=on('<div class="theme-switcher"><button class="theme-button" tabindex="-1" type="button"><!></button></div>');function nd(i,e){Jn(e,!1);const t=Fu();Pi();var n=td(),r=fe(n);r.__click=()=>t.toggle();var s=fe(r);{var a=c=>{var l=Qf();St(c,l)},o=c=>{var l=ed();St(c,l)};Uu(s,c=>{t.isDark?c(a):c(o,!1)})}ue(r),ue(n),yi((c,l)=>{Un(r,"aria-label",c),Un(r,"title",l)},[()=>lt.t("header.themeToggleLabel"),()=>lt.t("header.themeToggleLabel")]),St(i,n),Qn()}Kl(["click"]);var id=on('<app-bar><header class="header-content small-width"><a aria-label="Home" class="app-title" href="https://codewiki.google/"><img alt="Code Wiki logo" class="logo" data-test-id="product-logo" height="24" src="/JA1YkbZh5pk.svg" width="24"/></a> <div class="header-search shine"><input autocomplete="off" class="header-search-input" data-i18n="header.searchPlaceholder" placeholder="Find open source repositories" tabindex="-1" type="text"/> <button class="header-search-button" disabled tabindex="-1" type="button"><!></button></div> <div class="actions"><!></div></header></app-bar>',2);function rd(i){var e=id(),t=fe(e),n=Ge(fe(t),2),r=Ge(fe(n),2),s=fe(r);nc(s,{}),ue(r),ue(n);var a=Ge(n,2),o=fe(a);nd(o,{}),ue(a),ue(t),ue(e),St(i,e)}var sd=yn('<svg><title>for Developers</title><path d="M119.244 14.0502C118.24 14.0502 117.388 13.8008 116.689 13.302C115.99 12.8032 115.501 12.1859 115.221 11.4502L116.651 10.8329C116.905 11.419 117.261 11.8679 117.719 12.1797C118.189 12.4914 118.698 12.6473 119.244 12.6473C119.854 12.6473 120.356 12.5164 120.75 12.2545C121.157 11.9926 121.36 11.6746 121.36 11.3005C121.36 10.9389 121.208 10.6396 120.903 10.4027C120.611 10.1657 120.102 9.95997 119.378 9.78539L118.081 9.4674C117.369 9.30529 116.759 9.01224 116.251 8.58826C115.755 8.16427 115.507 7.60312 115.507 6.90479C115.507 6.33116 115.672 5.83859 116.003 5.42708C116.346 5.01556 116.797 4.70381 117.357 4.49182C117.916 4.27982 118.526 4.17383 119.187 4.17383C120 4.17383 120.738 4.36088 121.399 4.73498C122.072 5.09662 122.549 5.61413 122.829 6.28752L121.399 6.88608C121.195 6.43716 120.884 6.1067 120.464 5.89471C120.058 5.68272 119.6 5.57672 119.092 5.57672C118.596 5.57672 118.145 5.69519 117.738 5.93212C117.344 6.16905 117.147 6.47457 117.147 6.84867C117.147 7.1729 117.274 7.42854 117.528 7.61559C117.795 7.80264 118.215 7.97099 118.787 8.12063L120.197 8.45732C121.138 8.69425 121.837 9.04965 122.295 9.52352C122.765 9.98491 123 10.5398 123 11.1883C123 11.7245 122.841 12.2108 122.524 12.6473C122.206 13.0837 121.761 13.4267 121.189 13.6761C120.617 13.9255 119.969 14.0502 119.244 14.0502Z" fill="currentColor"></path><path d="M109.297 4.47296H110.842V5.98808H110.918C111.096 5.47681 111.458 5.05282 112.005 4.71613C112.564 4.36696 113.117 4.19238 113.664 4.19238C114.058 4.19238 114.426 4.2485 114.769 4.36073V6.08161C114.426 5.89456 113.981 5.80103 113.435 5.80103C112.99 5.80103 112.57 5.93197 112.176 6.19384C111.795 6.44324 111.49 6.77994 111.261 7.20392C111.032 7.62791 110.918 8.0893 110.918 8.58811V13.7507H109.297V4.47296Z" fill="currentColor"></path><path d="M103.029 14.0502C102.114 14.0502 101.294 13.8382 100.569 13.4142C99.8574 12.9902 99.2981 12.4041 98.8914 11.6559C98.4846 10.9077 98.2812 10.0597 98.2812 9.112C98.2812 8.21415 98.4719 7.39112 98.8532 6.64292C99.2346 5.88224 99.7748 5.28367 100.474 4.84722C101.186 4.39829 101.999 4.17383 102.914 4.17383C103.829 4.17383 104.63 4.37959 105.317 4.7911C106.016 5.19015 106.55 5.75754 106.918 6.49327C107.287 7.22901 107.471 8.07698 107.471 9.03718C107.471 9.21177 107.458 9.33647 107.433 9.41129H99.9209C99.9464 10.1096 100.118 10.7019 100.436 11.1883C100.753 11.6621 101.148 12.0175 101.618 12.2545C102.101 12.4914 102.597 12.6099 103.105 12.6099C104.3 12.6099 105.221 12.0363 105.87 10.889L107.3 11.5624C106.893 12.3106 106.327 12.9154 105.603 13.3768C104.891 13.8257 104.033 14.0502 103.029 14.0502ZM105.755 8.08322C105.73 7.70911 105.622 7.33501 105.431 6.96091C105.24 6.5868 104.929 6.26881 104.497 6.00694C104.077 5.74507 103.537 5.61413 102.876 5.61413C102.164 5.61413 101.548 5.83859 101.027 6.28752C100.506 6.73644 100.175 7.33501 100.035 8.08322H105.755Z" fill="currentColor"></path><path d="M87.5669 4.47311H89.1113V5.83859H89.1875C89.4926 5.36473 89.9311 4.97192 90.5031 4.66016C91.0751 4.33594 91.736 4.17383 92.486 4.17383C93.2995 4.17383 94.0494 4.39206 94.7358 4.82851C95.4222 5.2525 95.9687 5.83859 96.3755 6.5868C96.7822 7.33501 96.9856 8.17674 96.9856 9.112C96.9856 10.0473 96.7822 10.889 96.3755 11.6372C95.9687 12.3854 95.4222 12.9777 94.7358 13.4142C94.0494 13.8382 93.2995 14.0502 92.486 14.0502C91.736 14.0502 91.0687 13.8943 90.484 13.5826C89.912 13.2583 89.4799 12.853 89.1875 12.3667H89.1113L89.1875 13.6574V17.7912H87.5669V4.47311ZM92.2381 12.6099C92.7974 12.6099 93.3122 12.4665 93.7825 12.1797C94.2655 11.8928 94.6468 11.4876 94.9264 10.9638C95.2188 10.4276 95.365 9.81033 95.365 9.112C95.365 8.41368 95.2188 7.80264 94.9264 7.27889C94.6468 6.74268 94.2655 6.33116 93.7825 6.04435C93.3122 5.75754 92.7974 5.61413 92.2381 5.61413C91.6788 5.61413 91.1577 5.75754 90.6747 6.04435C90.2044 6.31869 89.8231 6.72397 89.5307 7.26019C89.2511 7.78394 89.1113 8.40121 89.1113 9.112C89.1113 9.81033 89.2511 10.4276 89.5307 10.9638C89.8231 11.5 90.2044 11.9116 90.6747 12.1984C91.1577 12.4727 91.6788 12.6099 92.2381 12.6099Z" fill="currentColor"></path><path d="M81.0415 14.0502C80.1136 14.0502 79.2811 13.8382 78.5439 13.4142C77.8066 12.9777 77.2283 12.3854 76.8088 11.6372C76.4021 10.8765 76.1987 10.0348 76.1987 9.112C76.1987 8.18921 76.4021 7.35371 76.8088 6.60551C77.2283 5.84483 77.8066 5.2525 78.5439 4.82851C79.2811 4.39206 80.1136 4.17383 81.0415 4.17383C81.9694 4.17383 82.802 4.39206 83.5392 4.82851C84.2891 5.2525 84.8675 5.84483 85.2742 6.60551C85.6937 7.35371 85.9034 8.18921 85.9034 9.112C85.9034 10.0348 85.6937 10.8765 85.2742 11.6372C84.8675 12.3854 84.2891 12.9777 83.5392 13.4142C82.802 13.8382 81.9694 14.0502 81.0415 14.0502ZM81.0415 12.6099C81.6135 12.6099 82.1474 12.4665 82.6431 12.1797C83.1388 11.8928 83.5328 11.4876 83.8252 10.9638C84.1303 10.4276 84.2828 9.81033 84.2828 9.112C84.2828 8.41368 84.1303 7.80264 83.8252 7.27889C83.5328 6.74268 83.1388 6.33116 82.6431 6.04435C82.1474 5.75754 81.6135 5.61413 81.0415 5.61413C80.4823 5.61413 79.9548 5.75754 79.459 6.04435C78.9633 6.33116 78.5629 6.74268 78.2579 7.27889C77.9655 7.80264 77.8194 8.41368 77.8194 9.112C77.8194 9.81033 77.9655 10.4276 78.2579 10.9638C78.5629 11.4876 78.9633 11.8928 79.459 12.1797C79.9548 12.4665 80.4823 12.6099 81.0415 12.6099Z" fill="currentColor"></path><path d="M72.8408 0.357422H74.4614V13.7504H72.8408V0.357422Z" fill="currentColor"></path><path d="M66.5717 14.0502C65.6565 14.0502 64.8367 13.8382 64.1122 13.4142C63.4004 12.9902 62.8411 12.4041 62.4343 11.6559C62.0276 10.9077 61.8242 10.0597 61.8242 9.112C61.8242 8.21415 62.0149 7.39112 62.3962 6.64292C62.7775 5.88224 63.3177 5.28367 64.0168 4.84722C64.7286 4.39829 65.5421 4.17383 66.4573 4.17383C67.3725 4.17383 68.1732 4.37959 68.8596 4.7911C69.5587 5.19015 70.0926 5.75754 70.4612 6.49327C70.8298 7.22901 71.0141 8.07698 71.0141 9.03718C71.0141 9.21177 71.0014 9.33647 70.976 9.41129H63.4639C63.4893 10.1096 63.6609 10.7019 63.9787 11.1883C64.2965 11.6621 64.6905 12.0175 65.1608 12.2545C65.6438 12.4914 66.1395 12.6099 66.648 12.6099C67.8428 12.6099 68.7643 12.0363 69.4125 10.889L70.8425 11.5624C70.4358 12.3106 69.8701 12.9154 69.1456 13.3768C68.4338 13.8257 67.5758 14.0502 66.5717 14.0502ZM69.2981 8.08322C69.2727 7.70911 69.1647 7.33501 68.974 6.96091C68.7834 6.5868 68.4719 6.26881 68.0398 6.00694C67.6203 5.74507 67.0801 5.61413 66.4192 5.61413C65.7074 5.61413 65.0909 5.83859 64.5697 6.28752C64.0486 6.73644 63.7181 7.33501 63.5783 8.08322H69.2981Z" fill="currentColor"></path><path d="M51.9995 4.47266H53.7536L56.6517 11.8799H56.6898L59.626 4.47266H61.3419L57.4715 13.7504H55.8318L51.9995 4.47266Z" fill="currentColor"></path><path d="M45.5275 13.7504H43.9069V0.357422H45.5275V13.7504Z" fill="currentColor"></path><path d="M38.9328 14.0502C38.0176 14.0502 37.1978 13.8382 36.4733 13.4142C35.7615 12.9902 35.2022 12.4041 34.7954 11.6559C34.3887 10.9077 34.1853 10.0597 34.1853 9.112C34.1853 8.21415 34.376 7.39112 34.7573 6.64292C35.1386 5.88224 35.6788 5.28367 36.3779 4.84722C37.0897 4.39829 37.9032 4.17383 38.8184 4.17383C39.7336 4.17383 40.5343 4.37959 41.2207 4.7911C41.9198 5.19015 42.4537 5.75754 42.8223 6.49327C43.1909 7.22901 43.3752 8.07698 43.3752 9.03718C43.3752 9.21177 43.3625 9.33647 43.3371 9.41129H35.825C35.8504 10.1096 36.022 10.7019 36.3398 11.1883C36.6576 11.6621 37.0516 12.0175 37.5219 12.2545C38.0049 12.4914 38.5006 12.6099 39.0091 12.6099C40.2039 12.6099 41.1254 12.0363 41.7736 10.889L43.2036 11.5624C42.7969 12.3106 42.2312 12.9154 41.5067 13.3768C40.7949 13.8257 39.9369 14.0502 38.9328 14.0502ZM41.6592 8.08322C41.6338 7.70911 41.5258 7.33501 41.3351 6.96091C41.1445 6.5868 40.833 6.26881 40.4009 6.00694C39.9814 5.74507 39.4412 5.61413 38.7803 5.61413C38.0685 5.61413 37.452 5.83859 36.9308 6.28752C36.4097 6.73644 36.0792 7.33501 35.9394 8.08322H41.6592Z" fill="currentColor"></path><path d="M28.9185 4.47311H30.4629V5.83859H30.5391C30.8442 5.36473 31.2827 4.97192 31.8547 4.66016C32.4267 4.33594 33.0876 4.17383 33.8376 4.17383C34.6511 4.17383 35.401 4.39206 36.0874 4.82851C36.7738 5.2525 37.3203 5.83859 37.7271 6.5868C38.1338 7.33501 38.3372 8.17674 38.3372 9.112C38.3372 10.0473 38.1338 10.889 37.7271 11.6372C37.3203 12.3854 36.7738 12.9777 36.0874 13.4142C35.401 13.8382 34.6511 14.0502 33.8376 14.0502C33.0876 14.0502 32.4203 13.8943 31.8356 13.5826C31.2636 13.2583 30.8315 12.853 30.5391 12.3667H30.4629L30.5391 13.6574V17.7912H28.9185V4.47311ZM33.5897 12.6099C34.149 12.6099 34.6638 12.4665 35.1341 12.1797C35.6171 11.8928 35.9984 11.4876 36.278 10.9638C36.5704 10.4276 36.7166 9.81033 36.7166 9.112C36.7166 8.41368 36.5704 7.80264 36.278 7.27889C35.9984 6.74268 35.6171 6.33116 35.1341 6.04435C34.6638 5.75754 34.149 5.61413 33.5897 5.61413C33.0304 5.61413 32.5093 5.75754 32.0263 6.04435C31.556 6.31869 31.1747 6.72397 30.8823 7.26019C30.6027 7.78394 30.4629 8.40121 30.4629 9.112C30.4629 9.81033 30.6027 10.4276 30.8823 10.9638C31.1747 11.5 31.556 11.9116 32.0263 12.1984C32.5093 12.4727 33.0304 12.6099 33.5897 12.6099Z" fill="currentColor"></path><path d="M22.3931 14.0502C21.4652 14.0502 20.6327 13.8382 19.8955 13.4142C19.1582 12.9777 18.5799 12.3854 18.1604 11.6372C17.7537 10.8765 17.5503 10.0348 17.5503 9.112C17.5503 8.18921 17.7537 7.35371 18.1604 6.60551C18.5799 5.84483 19.1582 5.2525 19.8955 4.82851C20.6327 4.39206 21.4652 4.17383 22.3931 4.17383C23.321 4.17383 24.1536 4.39206 24.8908 4.82851C25.6407 5.2525 26.2191 5.84483 26.6258 6.60551C27.0453 7.35371 27.255 8.18921 27.255 9.112C27.255 10.0348 27.0453 10.8765 26.6258 11.6372C26.2191 12.3854 25.6407 12.9777 24.8908 13.4142C24.1536 13.8382 23.321 14.0502 22.3931 14.0502ZM22.3931 12.6099C22.9651 12.6099 23.499 12.4665 23.9947 12.1797C24.4904 11.8928 24.8844 11.4876 25.1768 10.9638C25.4819 10.4276 25.6344 9.81033 25.6344 9.112C25.6344 8.41368 25.4819 7.80264 25.1768 7.27889C24.8844 6.74268 24.4904 6.33116 23.9947 6.04435C23.499 5.75754 22.9651 5.61413 22.3931 5.61413C21.8339 5.61413 21.3064 5.75754 20.8106 6.04435C20.3149 6.33116 19.9145 6.74268 19.6095 7.27889C19.3171 7.80264 19.171 8.41368 19.171 9.112C19.171 9.81033 19.3171 10.4276 19.6095 10.9638C19.9145 11.4876 20.3149 11.8928 20.8106 12.1797C21.3064 12.4665 21.8339 12.6099 22.3931 12.6099Z" fill="currentColor"></path><path d="M14.1924 0.357422H15.813V13.7504H14.1924V0.357422Z" fill="currentColor"></path></svg>');function ad(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=sd();ni(r,()=>({"aria-hidden":"true",class:`h-6 w-6 ${t()??""??""}`,...n,viewBox:"0 0 123 18",width:"123",xmlns:"http://www.w3.org/2000/svg"})),St(i,r)}var od=yn('<svg><title>Google</title><path d="M27.3262 10.9769C27.3262 13.9481 24.9677 16.1374 22.0732 16.1374C19.1788 16.1374 16.8203 13.9481 16.8203 10.9769C16.8203 7.98485 19.1788 5.81641 22.0732 5.81641C24.9677 5.81641 27.3262 7.98485 27.3262 10.9769ZM25.0267 10.9769C25.0267 9.12026 23.6598 7.8499 22.0732 7.8499C20.4867 7.8499 19.1198 9.12026 19.1198 10.9769C19.1198 12.815 20.4867 14.1039 22.0732 14.1039C23.6598 14.1039 25.0267 12.8127 25.0267 10.9769Z" fill="currentColor"></path><path d="M38.6621 10.9769C38.6621 13.9481 36.3036 16.1374 33.4092 16.1374C30.5148 16.1374 28.1562 13.9481 28.1562 10.9769C28.1562 7.98717 30.5148 5.81641 33.4092 5.81641C36.3036 5.81641 38.6621 7.98485 38.6621 10.9769ZM36.3626 10.9769C36.3626 9.12026 34.9957 7.8499 33.4092 7.8499C31.8227 7.8499 30.4557 9.12026 30.4557 10.9769C30.4557 12.815 31.8227 14.1039 33.4092 14.1039C34.9957 14.1039 36.3626 12.8127 36.3626 10.9769Z" fill="currentColor"></path><path d="M49.5228 6.12818V15.3929C49.5228 19.204 47.2422 20.7605 44.5461 20.7605C42.0081 20.7605 40.4807 19.0876 39.9046 17.7196L41.9066 16.8983C42.2631 17.7382 43.1366 18.7293 44.5437 18.7293C46.2695 18.7293 47.339 17.68 47.339 15.7047V14.9625H47.2587C46.7441 15.5884 45.7525 16.1351 44.5012 16.1351C41.883 16.1351 39.4844 13.8876 39.4844 10.9955C39.4844 8.08257 41.883 5.8164 44.5012 5.8164C45.7501 5.8164 46.7417 6.36317 47.2587 6.97043H47.339V6.1305H49.5228V6.12818ZM47.5019 10.9955C47.5019 9.17842 46.2719 7.8499 44.7066 7.8499C43.1201 7.8499 41.7909 9.17842 41.7909 10.9955C41.7909 12.794 43.1201 14.104 44.7066 14.104C46.2719 14.104 47.5019 12.794 47.5019 10.9955Z" fill="currentColor"></path><path d="M53.1178 0.697266V15.8205H50.875V0.697266H53.1178Z" fill="currentColor"></path><path d="M61.8603 12.6758L63.6451 13.8484C63.069 14.6883 61.6809 16.1355 59.2822 16.1355C56.3075 16.1355 54.0859 13.8693 54.0859 10.975C54.0859 7.90612 56.3264 5.8144 59.0249 5.8144C61.7422 5.8144 63.0714 7.94567 63.5058 9.09736L63.7443 9.68368L56.7443 12.5408C57.2802 13.5762 58.1136 14.1043 59.2822 14.1043C60.4532 14.1043 61.2653 13.5366 61.8603 12.6758ZM56.3665 10.8191L61.0458 8.90425C60.7885 8.25977 60.0141 7.81072 59.1028 7.81072C57.9342 7.81072 56.3075 8.82747 56.3665 10.8191Z" fill="currentColor"></path><path d="M8.33246 9.63275V7.44337H15.8188C15.892 7.82494 15.9297 8.27631 15.9297 8.7649C15.9297 10.4075 15.4741 12.4387 14.0056 13.8859C12.5773 15.3517 10.7523 16.1334 8.33482 16.1334C3.85389 16.1334 0.0859375 12.5364 0.0859375 8.12042C0.0859375 3.70443 3.85389 0.10742 8.33482 0.10742C10.8137 0.10742 12.5797 1.066 13.9065 2.31542L12.3389 3.86032C11.3874 2.98084 10.0984 2.2968 8.33246 2.2968C5.06029 2.2968 2.50111 4.89568 2.50111 8.12042C2.50111 11.3452 5.06029 13.944 8.33246 13.944C10.4549 13.944 11.6636 13.1041 12.438 12.341C13.066 11.7221 13.4792 10.838 13.6421 9.63042L8.33246 9.63275Z" fill="currentColor"></path></svg>');function ld(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=od();ni(r,()=>({"aria-hidden":"true",class:`h-6 w-6 ${t()??""??""}`,...n,viewBox:"0 0 65 22",width:"65",xmlns:"http://www.w3.org/2000/svg"})),St(i,r)}var cd=on('<app-footer><footer class="footer-content centered"><div aria-label="Google for developers logo" class="google-for-dev" role="img"><!> <!></div> <div class="footer-links"><a data-i18n="footer.privacy" href="https://policies.google.com/privacy" rel="noopener noreferrer" target="_blank">Privacy Policy</a> <a data-i18n="footer.terms" href="https://policies.google.com/terms" rel="noopener noreferrer" target="_blank">Terms</a> <a data-i18n="footer.developers" href="https://developers.google.com/site-terms" rel="noopener noreferrer" target="_blank">Developers</a> <a data-i18n="footer.support" href="https://support.google.com" rel="noopener noreferrer" target="_blank">Support</a> <a data-i18n="footer.developerSite" href="https://developers.google.com/" rel="noopener noreferrer" target="_blank">Developer Site</a> <a href="https://www.google.com/" rel="noopener noreferrer" target="_blank">Google</a></div> <div class="footer-locale"></div></footer></app-footer>',2);function ud(i){var e=cd(),t=fe(e),n=fe(t),r=fe(n);ld(r,{});var s=Ge(r,2);ad(s,{}),ue(n),qr(4),ue(t),ue(e),St(i,e)}var fd=on('<section class="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-(--hero-gap) pt-(--hero-padding-top) pb-0 text-center"><h1 class="hero-title text-center text-on-surface">Code Wiki</h1> <p class="hero-subtitle-gradient mb-[30px] max-w-[600px] text-(--hero-subtitle-size) leading-[1.4] tracking-[-0.01em]" style="text-wrap: balance"> </p> <div class="search-border-gradient search-glow shine relative flex w-full max-w-[700px] overflow-hidden rounded-[99px] p-px transition-[background-color] duration-200 focus-within:bg-accent"><input autocomplete="off" class="glassmorphism-search z-2 flex-1 rounded-[99px] border-0 px-[50px] py-[32px] pr-[82px] text-[21px] text-on-surface tracking-[-0.02em] transition-[background-color] duration-200 placeholder:text-neutral" style="font-family: var(--font-text)" tabindex="-1" type="text"/> <button class="absolute top-0 right-[38px] bottom-0 z-2 my-auto flex h-fit cursor-pointer items-center justify-center border-0 bg-transparent p-[12px] text-on-surface transition-colors duration-200 disabled:pointer-events-none" disabled tabindex="-1" type="button"><!></button></div></section>');function dd(i,e){Jn(e,!1),Pi();var t=fd(),n=Ge(fe(t),2),r=fe(n,!0);ue(n);var s=Ge(n,2),a=fe(s),o=Ge(a,2),c=fe(o);nc(c,{}),ue(o),ue(s),ue(t),yi((l,u)=>{ut(r,l),Un(a,"placeholder",u)},[()=>lt.t("hero.subtitle")||"A new perspective on development for the intelligent agent era. Gemini-generated documentation, always up to date.",()=>lt.t("hero.searchPlaceholder")||"Find open source repositories"]),St(i,t),Qn()}var hd=yn('<svg><title>Star</title><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>');function pd(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=hd();ni(r,()=>({"aria-hidden":"true",class:`h-6 w-6 ${t()??""??""}`,...n,fill:"currentColor",viewBox:"0 0 24 24"})),St(i,r)}var md=on('<a class="repo-card shine"><div class="repo-content"><div class="repo-header"><h3> </h3></div> <p class="repo-description"><span> </span></p> <span class="star-count"><!> </span></div></a>'),xd=on('<section class="featured-section"><h2> </h2> <div class="repositories-grid"></div></section>');function gd(i,e){Jn(e,!1);const t=[{name:"gemini-cli",url:"https://codewiki.google/github.com/google-gemini/gemini-cli",description:"An open-source AI agent that brings Gemini's powerful capabilities directly to your terminal.",descriptionKey:"featured.geminiCli.description",stars:"81.5k"},{name:"go",url:"https://codewiki.google/github.com/golang/go",description:"Go programming language",descriptionKey:"featured.go.description",stars:"130.7k"},{name:"flutter",url:"https://codewiki.google/github.com/flutter/flutter",description:"Flutter makes it simple to build beautiful, fast mobile and cross-platform apps",descriptionKey:"featured.flutter.description",stars:"173.7k"},{name:"kubernetes",url:"https://codewiki.google/github.com/kubernetes/kubernetes",description:"Production-grade container scheduling and management",descriptionKey:"featured.kubernetes.description",stars:"118.4k"},{name:"react",url:"https://codewiki.google/github.com/facebook/react",description:"A library for building user interfaces for web and native",descriptionKey:"featured.react.description",stars:"240.3k"},{name:"python-sdk",url:"https://codewiki.google/github.com/modelcontextprotocol/python-sdk",description:"Official Python SDK for Model Context Protocol servers and clients",descriptionKey:"featured.pythonSdk.description",stars:"19.8k"}];Pi();var n=xd(),r=fe(n),s=fe(r,!0);ue(r);var a=Ge(r,2);ku(a,5,()=>t,zu,(o,c)=>{var l=md(),u=fe(l),f=fe(u),d=fe(f),p=fe(d,!0);ue(d),ue(f);var m=Ge(f,2),g=fe(m),x=fe(g,!0);ue(g),ue(m);var h=Ge(m,2),T=fe(h);pd(T,{});var y=Ge(T);ue(h),ue(u),ue(l),yi(A=>{Un(l,"href",ct(c).url),ut(p,ct(c).name),ut(x,A),ut(y,` ${ct(c).stars??""}`)},[()=>lt.t(ct(c).descriptionKey)||ct(c).description]),St(o,l)}),ue(a),ue(n),yi(o=>ut(s,o),[()=>lt.t("featured.title")||"Featured Repositories"]),St(i,n),Qn()}var _d=yn('<svg><defs><linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"></stop><stop offset="50%" stop-color="#9B72CB"></stop><stop offset="100%" stop-color="#D96570"></stop></linearGradient></defs></svg>');function vd(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=_d();ni(r,()=>({"aria-hidden":"true",class:`h-6 w-6 ${t()??""??""}`,...n,fill:"none",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"})),St(i,r)}var Sd=on(`<section class="sticky-section"><div class="sticky-section-content"><div class="split-sections"><section class="split-section"><h2> <span class="tag shine"><span class="tag-content"> </span></span></h2> <p> </p> <a class="cta-card shine invert-theme" href="https://developers.google.com/profile/badges/community/sdlcagents/gca-agents" rel="noopener" target="_blank"><div class="cta-content"><h3 class="cta-title"><!> <span> </span></h3></div></a></section> <section class="split-section"><h2> </h2> <p> </p> <ul class="icon-grid"><li style="--icon: 'grid_view'"><span> </span> <p><span> </span></p></li> <li style="--icon: 'bolt'"><span> </span> <p><span> </span></p></li> <li style="--icon: 'rotate_left'"><span> </span> <p> </p></li> <li style="--icon: 'code'"><span> </span> <p><span> </span></p></li></ul></section> <section class="split-section"><h2> </h2> <p> </p> <ul class="icon-list"><li style="--icon: 'chat_bubble_outline'"> </li> <li style="--icon: 'search'"> </li> <li style="--icon: 'speed'"> </li></ul></section></div> <div class="sticky-visual"><div class="cube"></div> <div class="scroll-animation-container"><div class="layer" data-layer-index="0"></div> <div class="layer" data-layer-index="1"></div> <div class="layer" data-layer-index="2"></div></div></div></div></section>`);function bd(i,e){Jn(e,!1),Pi();var t=Sd(),n=fe(t),r=fe(n),s=fe(r),a=fe(s),o=fe(a),c=Ge(o),l=fe(c),u=fe(l,!0);ue(l),ue(c),ue(a);var f=Ge(a,2),d=fe(f,!0);ue(f);var p=Ge(f,2),m=fe(p),g=fe(m),x=fe(g);vd(x,{});var h=Ge(x,2),T=fe(h,!0);ue(h),ue(g),ue(m),ue(p),ue(s);var y=Ge(s,2),A=fe(y),P=fe(A,!0);ue(A);var M=Ge(A,2),C=fe(M,!0);ue(M);var U=Ge(M,2),b=fe(U),v=fe(b),L=fe(v,!0);ue(v);var O=Ge(v,2),B=fe(O),H=fe(B,!0);ue(B),ue(O),ue(b);var q=Ge(b,2),W=fe(q),J=fe(W,!0);ue(W);var G=Ge(W,2),ee=fe(G),te=fe(ee,!0);ue(ee),ue(G),ue(q);var de=Ge(q,2),Le=fe(de),We=fe(Le,!0);ue(Le);var Ze=Ge(Le,2),Ye=fe(Ze,!0);ue(Ze),ue(de);var X=Ge(de,2),K=fe(X),ae=fe(K,!0);ue(K);var De=Ge(K,2),ve=fe(De),Ae=fe(ve,!0);ue(ve),ue(De),ue(X),ue(U),ue(y);var Xe=Ge(y,2),ye=fe(Xe),Je=fe(ye,!0);ue(ye);var w=Ge(ye,2),Fe=fe(w,!0);ue(w);var Be=Ge(w,2),$e=fe(Be),me=fe($e,!0);ue($e);var je=Ge($e,2),Me=fe(je,!0);ue(je);var Ie=Ge(je,2),E=fe(Ie,!0);ue(Ie),ue(Be),ue(Xe),ue(r),qr(2),ue(n),ue(t),yi((_,N,$,Y,k,be,oe,Ee,Se,Z,ne,Re,Ce,he,Ue,R,le,re,se)=>{ut(o,`${_??""} `),ut(u,N),ut(d,$),ut(T,Y),ut(P,k),ut(C,be),ut(L,oe),ut(H,Ee),ut(J,Se),ut(te,Z),ut(We,ne),ut(Ye,Re),ut(ae,Ce),ut(Ae,he),ut(Je,Ue),ut(Fe,R),ut(me,le),ut(Me,re),ut(E,se)},[()=>lt.t("privateRepo.title")||"Try with your own private repositories",()=>lt.t("privateRepo.comingSoon")||"Coming Soon",()=>lt.t("privateRepo.description")||"Stop documenting. Start understanding. Connect your repositories to get fully interactive Code Wikis that sync perfectly with every change. No more outdated documentation. Ever.",()=>lt.t("privateRepo.notifyMe")||"Notify me when available",()=>lt.t("appReading.title")||"Read your application for the first time",()=>lt.t("appReading.subtitle")||"Code documentation that works for you, not the other way around.",()=>lt.t("appReading.understandCode.title")||"Understand your code section by section",()=>lt.t("appReading.understandCode.description")||"Focus on the code you care about. Select a section and dive deep into how it works.",()=>lt.t("appReading.autoGenerated.title")||"Automatically generated",()=>lt.t("appReading.autoGenerated.description")||"Our AI agents automatically generate and maintain rich, interactive knowledge bases from your code.",()=>lt.t("appReading.alwaysUpToDate.title")||"Always up to date",()=>lt.t("appReading.alwaysUpToDate.description")||"Every time a pull request is merged, relevant documentation is automatically updated.",()=>lt.t("appReading.linkBack.title")||"Link back to your code",()=>lt.t("appReading.linkBack.description")||"Jump instantly from architecture overview to the exact service, or from function description to the definition in your repository.",()=>lt.t("talkCodebase.title")||"Talk to your codebase",()=>lt.t("talkCodebase.description")||"Ask questions about architecture, find function definitions, and understand complex logic in natural language. Like having an engineer on call 24/7.",()=>lt.t("talkCodebase.chat")||"Chat with your codebase",()=>lt.t("talkCodebase.find")||"Find what you need instantly",()=>lt.t("talkCodebase.quality")||"Low latency, high quality"]),St(i,t),Qn()}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ya="181",Md=0,ko=1,yd=2,hc=1,Ed=2,mn=3,Fn=0,Ut=1,xn=2,vn=0,bi=1,Ho=2,Go=3,Wo=4,Td=5,$n=100,Ad=101,Cd=102,wd=103,Rd=104,Pd=200,Ld=201,Dd=202,Id=203,ra=204,sa=205,Ud=206,Nd=207,Fd=208,Od=209,Bd=210,zd=211,Vd=212,kd=213,Hd=214,aa=0,oa=1,la=2,Ti=3,ca=4,ua=5,fa=6,da=7,pc=0,Gd=1,Wd=2,In=0,Xd=1,$d=2,qd=3,Yd=4,jd=5,Kd=6,Zd=7,mc=300,Ai=301,Ci=302,ha=303,pa=304,rs=306,ma=1e3,gn=1001,xa=1002,Vt=1003,Jd=1004,hr=1005,Xt=1006,vs=1007,Yn=1008,sn=1009,xc=1010,gc=1011,tr=1012,ja=1013,Kn=1014,_n=1015,Li=1016,Ka=1017,Za=1018,nr=1020,_c=35902,vc=35899,Sc=1021,bc=1022,Kt=1023,ir=1026,rr=1027,Mc=1028,Ja=1029,Qa=1030,eo=1031,to=1033,Vr=33776,kr=33777,Hr=33778,Gr=33779,ga=35840,_a=35841,va=35842,Sa=35843,ba=36196,Ma=37492,ya=37496,Ea=37808,Ta=37809,Aa=37810,Ca=37811,wa=37812,Ra=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Ua=37818,Na=37819,Fa=37820,Oa=37821,Ba=36492,za=36494,Va=36495,ka=36283,Ha=36284,Ga=36285,Wa=36286,Qd=3200,eh=3201,yc=0,th=1,Ln="",Gt="srgb",wi="srgb-linear",Jr="linear",st="srgb",oi=7680,Xo=519,nh=512,ih=513,rh=514,Ec=515,sh=516,ah=517,oh=518,lh=519,$o=35044,qo="300 es",tn=2e3,Qr=2001;function Tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){const i=es("canvas");return i.style.display="block",i}const Yo={};function jo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ve(...i){const e="THREE."+i.shift();console.warn(e,...i)}function _t(...i){const e="THREE."+i.shift();console.error(e,...i)}function sr(...i){const e=i.join(" ");e in Yo||(Yo[e]=!0,Ve(...i))}function uh(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wr=Math.PI/180,Xa=180/Math.PI;function ar(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Ke(i,e,t){return Math.max(e,Math.min(t,i))}function fh(i,e){return(i%e+e)%e}function Ss(i,e,t){return(1-t)*i+t*e}function Vi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class or{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3],d=s[a+0],p=s[a+1],m=s[a+2],g=s[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=p,e[t+2]=m,e[t+3]=g;return}if(f!==g||c!==d||l!==p||u!==m){let x=c*d+l*p+u*m+f*g;x<0&&(d=-d,p=-p,m=-m,g=-g,x=-x);let h=1-o;if(x<.9995){const T=Math.acos(x),y=Math.sin(T);h=Math.sin(h*T)/y,o=Math.sin(o*T)/y,c=c*h+d*o,l=l*h+p*o,u=u*h+m*o,f=f*h+g*o}else{c=c*h+d*o,l=l*h+p*o,u=u*h+m*o,f=f*h+g*o;const T=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=T,l*=T,u*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[a],d=s[a+1],p=s[a+2],m=s[a+3];return e[t]=o*m+u*f+c*p-l*d,e[t+1]=c*m+u*d+l*f-o*p,e[t+2]=l*m+u*p+o*d-c*f,e[t+3]=u*m-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(r/2),f=o(s/2),d=c(n/2),p=c(r/2),m=c(s/2);switch(a){case"XYZ":this._x=d*u*f+l*p*m,this._y=l*p*f-d*u*m,this._z=l*u*m+d*p*f,this._w=l*u*f-d*p*m;break;case"YXZ":this._x=d*u*f+l*p*m,this._y=l*p*f-d*u*m,this._z=l*u*m-d*p*f,this._w=l*u*f+d*p*m;break;case"ZXY":this._x=d*u*f-l*p*m,this._y=l*p*f+d*u*m,this._z=l*u*m+d*p*f,this._w=l*u*f-d*p*m;break;case"ZYX":this._x=d*u*f-l*p*m,this._y=l*p*f+d*u*m,this._z=l*u*m-d*p*f,this._w=l*u*f+d*p*m;break;case"YZX":this._x=d*u*f+l*p*m,this._y=l*p*f+d*u*m,this._z=l*u*m-d*p*f,this._w=l*u*f-d*p*m;break;case"XZY":this._x=d*u*f-l*p*m,this._y=l*p*f-d*u*m,this._z=l*u*m+d*p*f,this._w=l*u*f+d*p*m;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-r*o,this._w=a*u-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ko.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ko.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+c*l+a*f-o*u,this.y=n+c*u+o*l-s*f,this.z=r+c*f+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return bs.copy(this).projectOnVector(e),this.sub(bs)}reflect(e){return this.sub(bs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const bs=new F,Ko=new or;class ke{constructor(e,t,n,r,s,a,o,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],m=n[8],g=r[0],x=r[3],h=r[6],T=r[1],y=r[4],A=r[7],P=r[2],M=r[5],C=r[8];return s[0]=a*g+o*T+c*P,s[3]=a*x+o*y+c*M,s[6]=a*h+o*A+c*C,s[1]=l*g+u*T+f*P,s[4]=l*x+u*y+f*M,s[7]=l*h+u*A+f*C,s[2]=d*g+p*T+m*P,s[5]=d*x+p*y+m*M,s[8]=d*h+p*A+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*s*u+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*a-o*l,d=o*c-u*s,p=l*s-a*c,m=t*f+n*d+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(r*l-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=d*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-o*t)*g,e[6]=p*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ms.makeScale(e,t)),this}rotate(e){return this.premultiply(Ms.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ms.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ms=new ke,Zo=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jo=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){const i={enabled:!0,workingColorSpace:wi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===st&&(r.r=Sn(r.r),r.g=Sn(r.g),r.b=Sn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===st&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?Jr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[wi]:{primaries:e,whitePoint:n,transfer:Jr,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:n,transfer:st,toXYZ:Zo,fromXYZ:Jo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),i}const et=dh();function Sn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let li;class hh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{li===void 0&&(li=es("canvas")),li.width=e.width,li.height=e.height;const r=li.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=li}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Sn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Sn(t[n]/255)*255):t[n]=Sn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ph=0;class no{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ar(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ys(r[a].image)):s.push(ys(r[a]))}else s=ys(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let mh=0;const Es=new F;class At extends Di{constructor(e=At.DEFAULT_IMAGE,t=At.DEFAULT_MAPPING,n=gn,r=gn,s=Xt,a=Yn,o=Kt,c=sn,l=At.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ar(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Es).x}get height(){return this.source.getSize(Es).y}get depth(){return this.source.getSize(Es).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case gn:e.x=e.x<0?0:1;break;case xa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case gn:e.y=e.y<0?0:1;break;case xa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}At.DEFAULT_IMAGE=null;At.DEFAULT_MAPPING=mc;At.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,r=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],m=c[9],g=c[2],x=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(m+x)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,A=(p+1)/2,P=(h+1)/2,M=(u+d)/4,C=(f+g)/4,U=(m+x)/4;return y>A&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=M/n,s=C/n):A>P?A<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(A),n=M/r,s=U/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=C/s,r=U/s),this.set(n,r,s,t),this}let T=Math.sqrt((x-m)*(x-m)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(x-m)/T,this.y=(f-g)/T,this.z=(d-u)/T,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ke(this.x,e.x,t.x),this.y=Ke(this.y,e.y,t.y),this.z=Ke(this.z,e.z,t.z),this.w=Ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ke(this.x,e,t),this.y=Ke(this.y,e,t),this.z=Ke(this.z,e,t),this.w=Ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xh extends Di{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new At(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Xt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new no(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends xh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ac extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends At{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=gn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qt):qt.fromBufferAttribute(s,a),qt.applyMatrix4(e.matrixWorld),this.expandByPoint(qt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(e.matrixWorld),this.union(pr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qt),qt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ki),mr.subVectors(this.max,ki),ci.subVectors(e.a,ki),ui.subVectors(e.b,ki),fi.subVectors(e.c,ki),En.subVectors(ui,ci),Tn.subVectors(fi,ui),zn.subVectors(ci,fi);let t=[0,-En.z,En.y,0,-Tn.z,Tn.y,0,-zn.z,zn.y,En.z,0,-En.x,Tn.z,0,-Tn.x,zn.z,0,-zn.x,-En.y,En.x,0,-Tn.y,Tn.x,0,-zn.y,zn.x,0];return!Ts(t,ci,ui,fi,mr)||(t=[1,0,0,0,1,0,0,0,1],!Ts(t,ci,ui,fi,mr))?!1:(xr.crossVectors(En,Tn),t=[xr.x,xr.y,xr.z],Ts(t,ci,ui,fi,mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cn=[new F,new F,new F,new F,new F,new F,new F,new F],qt=new F,pr=new lr,ci=new F,ui=new F,fi=new F,En=new F,Tn=new F,zn=new F,ki=new F,mr=new F,xr=new F,Vn=new F;function Ts(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Vn.fromArray(i,s);const o=r.x*Math.abs(Vn.x)+r.y*Math.abs(Vn.y)+r.z*Math.abs(Vn.z),c=e.dot(Vn),l=t.dot(Vn),u=n.dot(Vn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _h=new lr,Hi=new F,As=new F;class ss{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Hi.subVectors(e,this.center);const t=Hi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Hi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Hi.copy(e.center).add(As)),this.expandByPoint(Hi.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const un=new F,Cs=new F,gr=new F,An=new F,ws=new F,_r=new F,Rs=new F;class Cc{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.origin).addScaledVector(this.direction,t),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Cs.copy(e).add(t).multiplyScalar(.5),gr.copy(t).sub(e).normalize(),An.copy(this.origin).sub(Cs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(gr),o=An.dot(this.direction),c=-An.dot(gr),l=An.lengthSq(),u=Math.abs(1-a*a);let f,d,p,m;if(u>0)if(f=a*c-o,d=a*o-c,m=s*u,f>=0)if(d>=-m)if(d<=m){const g=1/u;f*=g,d*=g,p=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-m?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=m?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cs).addScaledVector(gr,d),p}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),r=un.dot(un)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,r,s){ws.subVectors(t,e),_r.subVectors(n,e),Rs.crossVectors(ws,_r);let a=this.direction.dot(Rs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const c=o*this.direction.dot(_r.crossVectors(An,_r));if(c<0)return null;const l=o*this.direction.dot(ws.cross(An));if(l<0||c+l>a)return null;const u=-o*An.dot(Rs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,r,s,a,o,c,l,u,f,d,p,m,g,x){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,u,f,d,p,m,g,x)}set(e,t,n,r,s,a,o,c,l,u,f,d,p,m,g,x){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=m,h[11]=g,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/di.setFromMatrixColumn(e,0).length(),s=1/di.setFromMatrixColumn(e,1).length(),a=1/di.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,p=a*f,m=o*u,g=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+m*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=m+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,m=l*u,g=l*f;t[0]=d+g*o,t[4]=m*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,m=l*u,g=l*f;t[0]=d-g*o,t[4]=-a*f,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,p=a*f,m=o*u,g=o*f;t[0]=c*u,t[4]=m*l-p,t[8]=d*l+g,t[1]=c*f,t[5]=g*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=g-d*f,t[8]=m*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+m,t[10]=d-g*f}else if(e.order==="XZY"){const d=a*c,p=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+g,t[5]=a*u,t[9]=p*f-m,t[2]=m*f-p,t[6]=o*u,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vh,e,Sh)}lookAt(e,t,n){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Cn.crossVectors(n,Ot),Cn.lengthSq()===0&&(Math.abs(n.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Cn.crossVectors(n,Ot)),Cn.normalize(),vr.crossVectors(Ot,Cn),r[0]=Cn.x,r[4]=vr.x,r[8]=Ot.x,r[1]=Cn.y,r[5]=vr.y,r[9]=Ot.y,r[2]=Cn.z,r[6]=vr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],m=n[2],g=n[6],x=n[10],h=n[14],T=n[3],y=n[7],A=n[11],P=n[15],M=r[0],C=r[4],U=r[8],b=r[12],v=r[1],L=r[5],O=r[9],B=r[13],H=r[2],q=r[6],W=r[10],J=r[14],G=r[3],ee=r[7],te=r[11],de=r[15];return s[0]=a*M+o*v+c*H+l*G,s[4]=a*C+o*L+c*q+l*ee,s[8]=a*U+o*O+c*W+l*te,s[12]=a*b+o*B+c*J+l*de,s[1]=u*M+f*v+d*H+p*G,s[5]=u*C+f*L+d*q+p*ee,s[9]=u*U+f*O+d*W+p*te,s[13]=u*b+f*B+d*J+p*de,s[2]=m*M+g*v+x*H+h*G,s[6]=m*C+g*L+x*q+h*ee,s[10]=m*U+g*O+x*W+h*te,s[14]=m*b+g*B+x*J+h*de,s[3]=T*M+y*v+A*H+P*G,s[7]=T*C+y*L+A*q+P*ee,s[11]=T*U+y*O+A*W+P*te,s[15]=T*b+y*B+A*J+P*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],m=e[3],g=e[7],x=e[11],h=e[15];return m*(+s*c*f-r*l*f-s*o*d+n*l*d+r*o*p-n*c*p)+g*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*u-s*c*u)+x*(+t*l*f-t*o*p-s*a*f+n*a*p+s*o*u-n*l*u)+h*(-r*o*u-t*c*f+t*o*d+r*a*f-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],m=e[12],g=e[13],x=e[14],h=e[15],T=f*x*l-g*d*l+g*c*p-o*x*p-f*c*h+o*d*h,y=m*d*l-u*x*l-m*c*p+a*x*p+u*c*h-a*d*h,A=u*g*l-m*f*l+m*o*p-a*g*p-u*o*h+a*f*h,P=m*f*c-u*g*c-m*o*d+a*g*d+u*o*x-a*f*x,M=t*T+n*y+r*A+s*P;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=T*C,e[1]=(g*d*s-f*x*s-g*r*p+n*x*p+f*r*h-n*d*h)*C,e[2]=(o*x*s-g*c*s+g*r*l-n*x*l-o*r*h+n*c*h)*C,e[3]=(f*c*s-o*d*s-f*r*l+n*d*l+o*r*p-n*c*p)*C,e[4]=y*C,e[5]=(u*x*s-m*d*s+m*r*p-t*x*p-u*r*h+t*d*h)*C,e[6]=(m*c*s-a*x*s-m*r*l+t*x*l+a*r*h-t*c*h)*C,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*p+t*c*p)*C,e[8]=A*C,e[9]=(m*f*s-u*g*s-m*n*p+t*g*p+u*n*h-t*f*h)*C,e[10]=(a*g*s-m*o*s+m*n*l-t*g*l-a*n*h+t*o*h)*C,e[11]=(u*o*s-a*f*s-u*n*l+t*f*l+a*n*p-t*o*p)*C,e[12]=P*C,e[13]=(u*g*r-m*f*r+m*n*d-t*g*d-u*n*x+t*f*x)*C,e[14]=(m*o*r-a*g*r-m*n*c+t*g*c+a*n*x-t*o*x)*C,e[15]=(a*f*r-u*o*r+u*n*c-t*f*c-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+n,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,f=o+o,d=s*l,p=s*u,m=s*f,g=a*u,x=a*f,h=o*f,T=c*l,y=c*u,A=c*f,P=n.x,M=n.y,C=n.z;return r[0]=(1-(g+h))*P,r[1]=(p+A)*P,r[2]=(m-y)*P,r[3]=0,r[4]=(p-A)*M,r[5]=(1-(d+h))*M,r[6]=(x+T)*M,r[7]=0,r[8]=(m+y)*C,r[9]=(x-T)*C,r[10]=(1-(d+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=di.set(r[0],r[1],r[2]).length();const a=di.set(r[4],r[5],r[6]).length(),o=di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Yt.copy(this);const l=1/s,u=1/a,f=1/o;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=u,Yt.elements[5]*=u,Yt.elements[6]*=u,Yt.elements[8]*=f,Yt.elements[9]*=f,Yt.elements[10]*=f,t.setFromRotationMatrix(Yt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=tn,c=!1){const l=this.elements,u=2*s/(t-e),f=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let m,g;if(c)m=s/(a-s),g=a*s/(a-s);else if(o===tn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Qr)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=tn,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let m,g;if(c)m=1/(a-s),g=a/(a-s);else if(o===tn)m=-2/(a-s),g=-(a+s)/(a-s);else if(o===Qr)m=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const di=new F,Yt=new mt,vh=new F(0,0,0),Sh=new F(1,1,1),Cn=new F,vr=new F,Ot=new F,Qo=new mt,el=new or;class an{constructor(e=0,t=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return el.setFromEuler(this),this.setFromQuaternion(el,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bh=0;const tl=new F,hi=new or,fn=new mt,Sr=new F,Gi=new F,Mh=new F,yh=new or,nl=new F(1,0,0),il=new F(0,1,0),rl=new F(0,0,1),sl={type:"added"},Eh={type:"removed"},pi={type:"childadded",child:null},Ps={type:"childremoved",child:null};class Rt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=ar(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new F,t=new an,n=new or,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new ke}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.multiply(hi),this}rotateOnWorldAxis(e,t){return hi.setFromAxisAngle(e,t),this.quaternion.premultiply(hi),this}rotateX(e){return this.rotateOnAxis(nl,e)}rotateY(e){return this.rotateOnAxis(il,e)}rotateZ(e){return this.rotateOnAxis(rl,e)}translateOnAxis(e,t){return tl.copy(e).applyQuaternion(this.quaternion),this.position.add(tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nl,e)}translateY(e){return this.translateOnAxis(il,e)}translateZ(e){return this.translateOnAxis(rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Gi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(Gi,Sr,this.up):fn.lookAt(Sr,Gi,this.up),this.quaternion.setFromRotationMatrix(fn),r&&(fn.extractRotation(r.matrixWorld),hi.setFromRotationMatrix(fn),this.quaternion.premultiply(hi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(_t("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sl),pi.child=e,this.dispatchEvent(pi),pi.child=null):_t("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Eh),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sl),pi.child=e,this.dispatchEvent(pi),pi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gi,yh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=r,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Rt.DEFAULT_UP=new F(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new F,dn=new F,Ls=new F,hn=new F,mi=new F,xi=new F,al=new F,Ds=new F,Is=new F,Us=new F,Ns=new at,Fs=new at,Os=new at;class Wt{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),jt.subVectors(e,t),r.cross(jt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){jt.subVectors(r,t),dn.subVectors(n,t),Ls.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(dn),c=jt.dot(Ls),l=dn.dot(dn),u=dn.dot(Ls),f=a*l-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,m=(a*u-o*c)*d;return s.set(1-p-m,m,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Ns.setScalar(0),Fs.setScalar(0),Os.setScalar(0),Ns.fromBufferAttribute(e,t),Fs.fromBufferAttribute(e,n),Os.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ns,s.x),a.addScaledVector(Fs,s.y),a.addScaledVector(Os,s.z),a}static isFrontFacing(e,t,n,r){return jt.subVectors(n,t),dn.subVectors(e,t),jt.cross(dn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),dn.subVectors(this.a,this.b),jt.cross(dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;mi.subVectors(r,n),xi.subVectors(s,n),Ds.subVectors(e,n);const c=mi.dot(Ds),l=xi.dot(Ds);if(c<=0&&l<=0)return t.copy(n);Is.subVectors(e,r);const u=mi.dot(Is),f=xi.dot(Is);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(mi,a);Us.subVectors(e,s);const p=mi.dot(Us),m=xi.dot(Us);if(m>=0&&p<=m)return t.copy(s);const g=p*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(xi,o);const x=u*m-p*f;if(x<=0&&f-u>=0&&p-m>=0)return al.subVectors(s,r),o=(f-u)/(f-u+(p-m)),t.copy(r).addScaledVector(al,o);const h=1/(x+g+d);return a=g*h,o=d*h,t.copy(n).addScaledVector(mi,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},br={h:0,s:0,l:0};function Bs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class tt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=et.workingColorSpace){if(e=fh(e,1),t=Ke(t,0,1),n=Ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bs(a,s,e+1/3),this.g=Bs(a,s,e),this.b=Bs(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,t=Gt){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=Rc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Sn(e.r),this.g=Sn(e.g),this.b=Sn(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return et.workingToColorSpace(Tt.copy(this),e),Math.round(Ke(Tt.r*255,0,255))*65536+Math.round(Ke(Tt.g*255,0,255))*256+Math.round(Ke(Tt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Tt.copy(this),t);const n=Tt.r,r=Tt.g,s=Tt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const f=a-o;switch(l=u<=.5?f/(a+o):f/(2-a-o),a){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Tt.copy(this),t),e.r=Tt.r,e.g=Tt.g,e.b=Tt.b,e}getStyle(e=Gt){et.workingToColorSpace(Tt.copy(this),e);const t=Tt.r,n=Tt.g,r=Tt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(wn),this.setHSL(wn.h+e,wn.s+t,wn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(wn),e.getHSL(br);const n=Ss(wn.h,br.h,t),r=Ss(wn.s,br.s,t),s=Ss(wn.l,br.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tt=new tt;tt.NAMES=Rc;let Th=0;class Ii extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Th++}),this.uuid=ar(),this.name="",this.type="Material",this.blending=bi,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ra,this.blendDst=sa,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ti,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bi&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ra&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ti&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pc extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=pc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new F,Mr=new nt;let Ah=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ah++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$o,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix3(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),r=Dt(r,this.array),s=Dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$o&&(e.usage=this.usage),e}}class Lc extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dc extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rn extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ch=0;const Ht=new mt,zs=new Rt,gi=new F,Bt=new lr,Wi=new lr,yt=new F;class ln extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=ar(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?Dc:Lc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ke().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,n){return Ht.makeTranslation(e,t,n),this.applyMatrix4(Ht),this}scale(e,t,n){return Ht.makeScale(e,t,n),this.applyMatrix4(Ht),this}lookAt(e){return zs.lookAt(e),zs.updateMatrix(),this.applyMatrix4(zs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new rn(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Bt.setFromBufferAttribute(s),this.morphTargetsRelative?(yt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(yt),yt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(yt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&_t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){_t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Wi.setFromBufferAttribute(o),this.morphTargetsRelative?(yt.addVectors(Bt.min,Wi.min),Bt.expandByPoint(yt),yt.addVectors(Bt.max,Wi.max),Bt.expandByPoint(yt)):(Bt.expandByPoint(Wi.min),Bt.expandByPoint(Wi.max))}Bt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)yt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)yt.fromBufferAttribute(o,l),c&&(gi.fromBufferAttribute(e,l),yt.add(gi)),r=Math.max(r,n.distanceToSquared(yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&_t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){_t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new F,c[U]=new F;const l=new F,u=new F,f=new F,d=new nt,p=new nt,m=new nt,g=new F,x=new F;function h(U,b,v){l.fromBufferAttribute(n,U),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,U),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,v),u.sub(l),f.sub(l),p.sub(d),m.sub(d);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(f,-p.y).multiplyScalar(L),x.copy(f).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(L),o[U].add(g),o[b].add(g),o[v].add(g),c[U].add(x),c[b].add(x),c[v].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let U=0,b=T.length;U<b;++U){const v=T[U],L=v.start,O=v.count;for(let B=L,H=L+O;B<H;B+=3)h(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const y=new F,A=new F,P=new F,M=new F;function C(U){P.fromBufferAttribute(r,U),M.copy(P);const b=o[U];y.copy(b),y.sub(P.multiplyScalar(P.dot(b))).normalize(),A.crossVectors(M,b);const L=A.dot(c[U])<0?-1:1;a.setXYZW(U,y.x,y.y,y.z,L)}for(let U=0,b=T.length;U<b;++U){const v=T[U],L=v.start,O=v.count;for(let B=L,H=L+O;B<H;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,u=new F,f=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yt.fromBufferAttribute(e,t),yt.normalize(),e.setXYZ(t,yt.x,yt.y,yt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,m=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?p=c[g]*o.data.stride+o.offset:p=c[g]*u;for(let h=0;h<u;h++)d[m++]=l[p++]}return new nn(d,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ol=new mt,kn=new Cc,yr=new ss,ll=new F,Er=new F,Tr=new F,Ar=new F,Vs=new F,Cr=new F,cl=new F,wr=new F;class bn extends Rt{constructor(e=new ln,t=new Pc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Cr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],f=s[c];u!==0&&(Vs.fromBufferAttribute(f,e),a?Cr.addScaledVector(Vs,u):Cr.addScaledVector(Vs.sub(t),u))}t.add(Cr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),kn.copy(e.ray).recast(e.near),!(yr.containsPoint(kn.origin)===!1&&(kn.intersectSphere(yr,ll)===null||kn.origin.distanceToSquared(ll)>(e.far-e.near)**2))&&(ol.copy(s).invert(),kn.copy(e.ray).applyMatrix4(ol),!(n.boundingBox!==null&&kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,kn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],h=a[x.materialIndex],T=Math.max(x.start,p.start),y=Math.min(o.count,Math.min(x.start+x.count,p.start+p.count));for(let A=T,P=y;A<P;A+=3){const M=o.getX(A),C=o.getX(A+1),U=o.getX(A+2);r=Rr(this,h,e,n,l,u,f,M,C,U),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let x=m,h=g;x<h;x+=3){const T=o.getX(x),y=o.getX(x+1),A=o.getX(x+2);r=Rr(this,a,e,n,l,u,f,T,y,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],h=a[x.materialIndex],T=Math.max(x.start,p.start),y=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let A=T,P=y;A<P;A+=3){const M=A,C=A+1,U=A+2;r=Rr(this,h,e,n,l,u,f,M,C,U),r&&(r.faceIndex=Math.floor(A/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const m=Math.max(0,p.start),g=Math.min(c.count,p.start+p.count);for(let x=m,h=g;x<h;x+=3){const T=x,y=x+1,A=x+2;r=Rr(this,a,e,n,l,u,f,T,y,A),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function wh(i,e,t,n,r,s,a,o){let c;if(e.side===Ut?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Fn,o),c===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(wr);return l<t.near||l>t.far?null:{distance:l,point:wr.clone(),object:i}}function Rr(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Er),i.getVertexPosition(c,Tr),i.getVertexPosition(l,Ar);const u=wh(i,e,t,n,Er,Tr,Ar,cl);if(u){const f=new F;Wt.getBarycoord(cl,Er,Tr,Ar,f),r&&(u.uv=Wt.getInterpolatedAttribute(r,o,c,l,f,new nt)),s&&(u.uv1=Wt.getInterpolatedAttribute(s,o,c,l,f,new nt)),a&&(u.normal=Wt.getInterpolatedAttribute(a,o,c,l,f,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};Wt.getNormal(Er,Tr,Ar,d.normal),u.face=d,u.barycoord=f}return u}class Ui extends ln{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],f=[];let d=0,p=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,r,a,2),m("x","z","y",1,-1,e,n,-t,r,a,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new rn(l,3)),this.setAttribute("normal",new rn(u,3)),this.setAttribute("uv",new rn(f,2));function m(g,x,h,T,y,A,P,M,C,U,b){const v=A/C,L=P/U,O=A/2,B=P/2,H=M/2,q=C+1,W=U+1;let J=0,G=0;const ee=new F;for(let te=0;te<W;te++){const de=te*L-B;for(let Le=0;Le<q;Le++){const We=Le*v-O;ee[g]=We*T,ee[x]=de*y,ee[h]=H,l.push(ee.x,ee.y,ee.z),ee[g]=0,ee[x]=0,ee[h]=M>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(Le/C),f.push(1-te/U),J+=1}}for(let te=0;te<U;te++)for(let de=0;de<C;de++){const Le=d+de+q*te,We=d+de+q*(te+1),Ze=d+(de+1)+q*(te+1),Ye=d+(de+1)+q*te;c.push(Le,We,Ye),c.push(We,Ze,Ye),G+=6}o.addGroup(p,G,b),p+=G,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ri(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function wt(i){const e={};for(let t=0;t<i.length;t++){const n=Ri(i[t]);for(const r in n)e[r]=n[r]}return e}function Rh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ic(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Ph={clone:Ri,merge:wt};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mn extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Dh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=Rh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Uc extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Rn=new F,ul=new nt,fl=new nt;class zt extends Uc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z),Rn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rn.x,Rn.y).multiplyScalar(-e/Rn.z)}getViewSize(e,t){return this.getViewBounds(e,ul,fl),t.subVectors(fl,ul)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _i=-90,vi=1;class Ih extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zt(_i,vi,e,t);r.layers=this.layers,this.add(r);const s=new zt(_i,vi,e,t);s.layers=this.layers,this.add(s);const a=new zt(_i,vi,e,t);a.layers=this.layers,this.add(a);const o=new zt(_i,vi,e,t);o.layers=this.layers,this.add(o);const c=new zt(_i,vi,e,t);c.layers=this.layers,this.add(c);const l=new zt(_i,vi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===tn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Nc extends At{constructor(e=[],t=Ai,n,r,s,a,o,c,l,u){super(e,t,n,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Uh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Nc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ui(5,5,5),s=new Mn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:vn});s.uniforms.tEquirect.value=t;const a=new bn(r,s),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Xt),new Ih(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class Pr extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nh={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),h=this._getHandJoint(l,g);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Pr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Fh extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Oh extends At{constructor(e=null,t=1,n=1,r,s,a,o,c,l=Vt,u=Vt,f,d){super(null,a,o,c,l,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hs=new F,Bh=new F,zh=new ke;class Xn{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Hs.subVectors(n,t).cross(Bh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Hs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zh.getNormalMatrix(e),r=this.coplanarPoint(Hs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new ss,Vh=new nt(.5,.5),Lr=new F;class io{constructor(e=new Xn,t=new Xn,n=new Xn,r=new Xn,s=new Xn,a=new Xn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=tn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],f=s[5],d=s[6],p=s[7],m=s[8],g=s[9],x=s[10],h=s[11],T=s[12],y=s[13],A=s[14],P=s[15];if(r[0].setComponents(l-a,p-u,h-m,P-T).normalize(),r[1].setComponents(l+a,p+u,h+m,P+T).normalize(),r[2].setComponents(l+o,p+f,h+g,P+y).normalize(),r[3].setComponents(l-o,p-f,h-g,P-y).normalize(),n)r[4].setComponents(c,d,x,A).normalize(),r[5].setComponents(l-c,p-d,h-x,P-A).normalize();else if(r[4].setComponents(l-c,p-d,h-x,P-A).normalize(),t===tn)r[5].setComponents(l+c,p+d,h+x,P+A).normalize();else if(t===Qr)r[5].setComponents(c,d,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(e){Hn.center.set(0,0,0);const t=Vh.distanceTo(e.center);return Hn.radius=.7071067811865476+t,Hn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Lr.x=r.normal.x>0?e.max.x:e.min.x,Lr.y=r.normal.y>0?e.max.y:e.min.y,Lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fc extends Ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ts=new F,ns=new F,dl=new mt,Xi=new Cc,Dr=new ss,Gs=new F,hl=new F;class kh extends Rt{constructor(e=new ln,t=new Fc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)ts.fromBufferAttribute(t,r-1),ns.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=ts.distanceTo(ns);e.setAttribute("lineDistance",new rn(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),Dr.radius+=s,e.ray.intersectsSphere(Dr)===!1)return;dl.copy(r).invert(),Xi.copy(e.ray).applyMatrix4(dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=p,x=m-1;g<x;g+=l){const h=u.getX(g),T=u.getX(g+1),y=Ir(this,e,Xi,c,h,T,g);y&&t.push(y)}if(this.isLineLoop){const g=u.getX(m-1),x=u.getX(p),h=Ir(this,e,Xi,c,g,x,m-1);h&&t.push(h)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=p,x=m-1;g<x;g+=l){const h=Ir(this,e,Xi,c,g,g+1,g);h&&t.push(h)}if(this.isLineLoop){const g=Ir(this,e,Xi,c,m-1,p,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ir(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(ts.fromBufferAttribute(o,r),ns.fromBufferAttribute(o,s),t.distanceSqToSegment(ts,ns,Gs,hl)>n)return;Gs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Gs);if(!(l<e.near||l>e.far))return{distance:l,point:hl.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const pl=new F,ml=new F;class Hh extends kh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)pl.fromBufferAttribute(t,r),ml.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+pl.distanceTo(ml);e.setAttribute("lineDistance",new rn(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class xl extends At{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Oc extends At{constructor(e,t,n=Kn,r,s,a,o=Vt,c=Vt,l,u=ir,f=1){if(u!==ir&&u!==rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,r,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bc extends At{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}const Ur=new F,Nr=new F,Ws=new F,Fr=new Wt;class Gh extends ln{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(Wr*t),a=e.getIndex(),o=e.getAttribute("position"),c=a?a.count:o.count,l=[0,0,0],u=["a","b","c"],f=new Array(3),d={},p=[];for(let m=0;m<c;m+=3){a?(l[0]=a.getX(m),l[1]=a.getX(m+1),l[2]=a.getX(m+2)):(l[0]=m,l[1]=m+1,l[2]=m+2);const{a:g,b:x,c:h}=Fr;if(g.fromBufferAttribute(o,l[0]),x.fromBufferAttribute(o,l[1]),h.fromBufferAttribute(o,l[2]),Fr.getNormal(Ws),f[0]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,f[1]=`${Math.round(x.x*r)},${Math.round(x.y*r)},${Math.round(x.z*r)}`,f[2]=`${Math.round(h.x*r)},${Math.round(h.y*r)},${Math.round(h.z*r)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let T=0;T<3;T++){const y=(T+1)%3,A=f[T],P=f[y],M=Fr[u[T]],C=Fr[u[y]],U=`${A}_${P}`,b=`${P}_${A}`;b in d&&d[b]?(Ws.dot(d[b].normal)<=s&&(p.push(M.x,M.y,M.z),p.push(C.x,C.y,C.z)),d[b]=null):U in d||(d[U]={index0:l[T],index1:l[y],normal:Ws.clone()})}}for(const m in d)if(d[m]){const{index0:g,index1:x}=d[m];Ur.fromBufferAttribute(o,g),Nr.fromBufferAttribute(o,x),p.push(Ur.x,Ur.y,Ur.z),p.push(Nr.x,Nr.y,Nr.z)}this.setAttribute("position",new rn(p,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class as extends ln{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,u=c+1,f=e/o,d=t/c,p=[],m=[],g=[],x=[];for(let h=0;h<u;h++){const T=h*d-a;for(let y=0;y<l;y++){const A=y*f-s;m.push(A,-T,0),g.push(0,0,1),x.push(y/o),x.push(1-h/c)}}for(let h=0;h<c;h++)for(let T=0;T<o;T++){const y=T+l*h,A=T+l*(h+1),P=T+1+l*(h+1),M=T+1+l*h;p.push(y,A,M),p.push(A,P,M)}this.setIndex(p),this.setAttribute("position",new rn(m,3)),this.setAttribute("normal",new rn(g,3)),this.setAttribute("uv",new rn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.widthSegments,e.heightSegments)}}class Wh extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yc,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Xh extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $h extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zc extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Xs=new mt,gl=new F,_l=new F;class qh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;gl.setFromMatrixPosition(e.matrixWorld),t.position.copy(gl),_l.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_l),t.updateMatrixWorld(),Xs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vl=new mt,$i=new F,$s=new F;class Yh extends qh{constructor(){super(new zt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$i.setFromMatrixPosition(e.matrixWorld),n.position.copy($i),$s.copy(n.position),$s.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($s),n.updateMatrixWorld(),r.makeTranslation(-$i.x,-$i.y,-$i.z),vl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vl,n.coordinateSystem,n.reversedDepth)}}class Sl extends zc{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Yh}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jh extends Uc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Kh extends zc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zh extends zt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Jh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bl(i,e,t,n){const r=Qh(n);switch(t){case Sc:return i*e;case Mc:return i*e/r.components*r.byteLength;case Ja:return i*e/r.components*r.byteLength;case Qa:return i*e*2/r.components*r.byteLength;case eo:return i*e*2/r.components*r.byteLength;case bc:return i*e*3/r.components*r.byteLength;case Kt:return i*e*4/r.components*r.byteLength;case to:return i*e*4/r.components*r.byteLength;case Vr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _a:case Sa:return Math.max(i,16)*Math.max(e,8)/4;case ga:case va:return Math.max(i,8)*Math.max(e,8)/2;case ba:case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case za:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ka:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ga:case Wa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Qh(i){switch(i){case sn:case xc:return{byteLength:1,components:1};case tr:case gc:case Li:return{byteLength:2,components:1};case Ka:case Za:return{byteLength:2,components:4};case Kn:case ja:case _n:return{byteLength:4,components:1};case _c:case vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ya}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ya);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function ep(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<f.length;p++){const m=f[d],g=f[p];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,f[d]=g)}f.length=d+1;for(let p=0,m=f.length;p<m;p++){const g=f[p];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var tp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,np=`#ifdef USE_ALPHAHASH
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
#endif`,ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,op=`#ifdef USE_AOMAP
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
#endif`,lp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cp=`#ifdef USE_BATCHING
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
#endif`,up=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pp=`#ifdef USE_IRIDESCENCE
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
#endif`,mp=`#ifdef USE_BUMPMAP
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
#endif`,xp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_p=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,yp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ep=`#define PI 3.141592653589793
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
} // validated`,Tp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ap=`vec3 transformedNormal = objectNormal;
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
#endif`,Cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Dp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ip=`#ifdef USE_ENVMAP
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
#endif`,Up=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Np=`#ifdef USE_ENVMAP
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
#endif`,Fp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Op=`#ifdef USE_ENVMAP
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
#endif`,Bp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hp=`#ifdef USE_GRADIENTMAP
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
}`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$p=`uniform bool receiveShadow;
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
#endif`,qp=`#ifdef USE_ENVMAP
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
#endif`,Yp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jp=`PhysicalMaterial material;
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
#endif`,Qp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,e0=`
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
#endif`,t0=`#if defined( RE_IndirectDiffuse )
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
#endif`,n0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,i0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,r0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,s0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,o0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,u0=`#if defined( USE_POINTS_UV )
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
#endif`,f0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,h0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x0=`#ifdef USE_MORPHTARGETS
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
#endif`,g0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,S0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,y0=`#ifdef USE_NORMALMAP
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
#endif`,E0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,w0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,R0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,P0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,L0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,I0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,U0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,N0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,O0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,B0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,z0=`float getShadowMask() {
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
}`,V0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k0=`#ifdef USE_SKINNING
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
#endif`,H0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G0=`#ifdef USE_SKINNING
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
#endif`,W0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y0=`#ifdef USE_TRANSMISSION
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
#endif`,j0=`#ifdef USE_TRANSMISSION
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
#endif`,K0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,J0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const em=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tm=`uniform sampler2D t2D;
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
}`,nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,im=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`#include <common>
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
}`,om=`#if DEPTH_PACKING == 3200
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
}`,lm=`#define DISTANCE
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
}`,cm=`#define DISTANCE
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
}`,um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dm=`uniform float scale;
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
}`,hm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 diffuse;
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
}`,xm=`#define LAMBERT
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
}`,gm=`#define LAMBERT
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
}`,_m=`#define MATCAP
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
}`,vm=`#define MATCAP
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
}`,Sm=`#define NORMAL
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
}`,bm=`#define NORMAL
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
}`,Mm=`#define PHONG
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
}`,ym=`#define PHONG
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
}`,Em=`#define STANDARD
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
}`,Tm=`#define STANDARD
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
}`,Am=`#define TOON
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
}`,Cm=`#define TOON
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
}`,wm=`uniform float size;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Pm=`#include <common>
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
}`,Lm=`uniform vec3 color;
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
}`,Dm=`uniform float rotation;
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
}`,Im=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:tp,alphahash_pars_fragment:np,alphamap_fragment:ip,alphamap_pars_fragment:rp,alphatest_fragment:sp,alphatest_pars_fragment:ap,aomap_fragment:op,aomap_pars_fragment:lp,batching_pars_vertex:cp,batching_vertex:up,begin_vertex:fp,beginnormal_vertex:dp,bsdfs:hp,iridescence_fragment:pp,bumpmap_pars_fragment:mp,clipping_planes_fragment:xp,clipping_planes_pars_fragment:gp,clipping_planes_pars_vertex:_p,clipping_planes_vertex:vp,color_fragment:Sp,color_pars_fragment:bp,color_pars_vertex:Mp,color_vertex:yp,common:Ep,cube_uv_reflection_fragment:Tp,defaultnormal_vertex:Ap,displacementmap_pars_vertex:Cp,displacementmap_vertex:wp,emissivemap_fragment:Rp,emissivemap_pars_fragment:Pp,colorspace_fragment:Lp,colorspace_pars_fragment:Dp,envmap_fragment:Ip,envmap_common_pars_fragment:Up,envmap_pars_fragment:Np,envmap_pars_vertex:Fp,envmap_physical_pars_fragment:qp,envmap_vertex:Op,fog_vertex:Bp,fog_pars_vertex:zp,fog_fragment:Vp,fog_pars_fragment:kp,gradientmap_pars_fragment:Hp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Wp,lights_lambert_pars_fragment:Xp,lights_pars_begin:$p,lights_toon_fragment:Yp,lights_toon_pars_fragment:jp,lights_phong_fragment:Kp,lights_phong_pars_fragment:Zp,lights_physical_fragment:Jp,lights_physical_pars_fragment:Qp,lights_fragment_begin:e0,lights_fragment_maps:t0,lights_fragment_end:n0,logdepthbuf_fragment:i0,logdepthbuf_pars_fragment:r0,logdepthbuf_pars_vertex:s0,logdepthbuf_vertex:a0,map_fragment:o0,map_pars_fragment:l0,map_particle_fragment:c0,map_particle_pars_fragment:u0,metalnessmap_fragment:f0,metalnessmap_pars_fragment:d0,morphinstance_vertex:h0,morphcolor_vertex:p0,morphnormal_vertex:m0,morphtarget_pars_vertex:x0,morphtarget_vertex:g0,normal_fragment_begin:_0,normal_fragment_maps:v0,normal_pars_fragment:S0,normal_pars_vertex:b0,normal_vertex:M0,normalmap_pars_fragment:y0,clearcoat_normal_fragment_begin:E0,clearcoat_normal_fragment_maps:T0,clearcoat_pars_fragment:A0,iridescence_pars_fragment:C0,opaque_fragment:w0,packing:R0,premultiplied_alpha_fragment:P0,project_vertex:L0,dithering_fragment:D0,dithering_pars_fragment:I0,roughnessmap_fragment:U0,roughnessmap_pars_fragment:N0,shadowmap_pars_fragment:F0,shadowmap_pars_vertex:O0,shadowmap_vertex:B0,shadowmask_pars_fragment:z0,skinbase_vertex:V0,skinning_pars_vertex:k0,skinning_vertex:H0,skinnormal_vertex:G0,specularmap_fragment:W0,specularmap_pars_fragment:X0,tonemapping_fragment:$0,tonemapping_pars_fragment:q0,transmission_fragment:Y0,transmission_pars_fragment:j0,uv_pars_fragment:K0,uv_pars_vertex:Z0,uv_vertex:J0,worldpos_vertex:Q0,background_vert:em,background_frag:tm,backgroundCube_vert:nm,backgroundCube_frag:im,cube_vert:rm,cube_frag:sm,depth_vert:am,depth_frag:om,distanceRGBA_vert:lm,distanceRGBA_frag:cm,equirect_vert:um,equirect_frag:fm,linedashed_vert:dm,linedashed_frag:hm,meshbasic_vert:pm,meshbasic_frag:mm,meshlambert_vert:xm,meshlambert_frag:gm,meshmatcap_vert:_m,meshmatcap_frag:vm,meshnormal_vert:Sm,meshnormal_frag:bm,meshphong_vert:Mm,meshphong_frag:ym,meshphysical_vert:Em,meshphysical_frag:Tm,meshtoon_vert:Am,meshtoon_frag:Cm,points_vert:wm,points_frag:Rm,shadow_vert:Pm,shadow_frag:Lm,sprite_vert:Dm,sprite_frag:Im},ce={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},Qt={basic:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:wt([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:wt([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:wt([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new tt(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:wt([ce.points,ce.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:wt([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:wt([ce.common,ce.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:wt([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:wt([ce.sprite,ce.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distanceRGBA:{uniforms:wt([ce.common,ce.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distanceRGBA_vert,fragmentShader:He.distanceRGBA_frag},shadow:{uniforms:wt([ce.lights,ce.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};Qt.physical={uniforms:wt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Or={r:0,b:0,g:0},Gn=new an,Um=new mt;function Nm(i,e,t,n,r,s,a){const o=new tt(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function m(y){let A=y.isScene===!0?y.background:null;return A&&A.isTexture&&(A=(y.backgroundBlurriness>0?t:e).get(A)),A}function g(y){let A=!1;const P=m(y);P===null?h(o,c):P&&P.isColor&&(h(P,1),A=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,A){const P=m(A);P&&(P.isCubeTexture||P.mapping===rs)?(u===void 0&&(u=new bn(new Ui(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:Ri(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,C,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Gn.copy(A.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Um.makeRotationFromEuler(Gn)),u.material.toneMapped=et.getTransfer(P.colorSpace)!==st,(f!==P||d!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,p=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new bn(new as(2,2),new Mn({name:"BackgroundMaterial",uniforms:Ri(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=et.getTransfer(P.colorSpace)!==st,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function h(y,A){y.getRGB(Or,Ic(i)),n.buffers.color.setClear(Or.r,Or.g,Or.b,A,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,A=1){o.set(y),c=A,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,h(o,c)},render:g,addToRenderList:x,dispose:T}}function Fm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(v,L,O,B,H){let q=!1;const W=f(B,O,L);s!==W&&(s=W,l(s.object)),q=p(v,B,O,H),q&&m(v,B,O,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,A(v,L,O,B),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function u(v){return i.deleteVertexArray(v)}function f(v,L,O){const B=O.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let q=H[L.id];q===void 0&&(q={},H[L.id]=q);let W=q[B];return W===void 0&&(W=d(c()),q[B]=W),W}function d(v){const L=[],O=[],B=[];for(let H=0;H<t;H++)L[H]=0,O[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:O,attributeDivisors:B,object:v,attributes:{},index:null}}function p(v,L,O,B){const H=s.attributes,q=L.attributes;let W=0;const J=O.getAttributes();for(const G in J)if(J[G].location>=0){const te=H[G];let de=q[G];if(de===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),te===void 0||te.attribute!==de||de&&te.data!==de.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function m(v,L,O,B){const H={},q=L.attributes;let W=0;const J=O.getAttributes();for(const G in J)if(J[G].location>=0){let te=q[G];te===void 0&&(G==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),G==="instanceColor"&&v.instanceColor&&(te=v.instanceColor));const de={};de.attribute=te,te&&te.data&&(de.data=te.data),H[G]=de,W++}s.attributes=H,s.attributesNum=W,s.index=B}function g(){const v=s.newAttributes;for(let L=0,O=v.length;L<O;L++)v[L]=0}function x(v){h(v,0)}function h(v,L){const O=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;O[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),H[v]!==L&&(i.vertexAttribDivisor(v,L),H[v]=L)}function T(){const v=s.newAttributes,L=s.enabledAttributes;for(let O=0,B=L.length;O<B;O++)L[O]!==v[O]&&(i.disableVertexAttribArray(O),L[O]=0)}function y(v,L,O,B,H,q,W){W===!0?i.vertexAttribIPointer(v,L,O,H,q):i.vertexAttribPointer(v,L,O,B,H,q)}function A(v,L,O,B){g();const H=B.attributes,q=O.getAttributes(),W=L.defaultAttributeValues;for(const J in q){const G=q[J];if(G.location>=0){let ee=H[J];if(ee===void 0&&(J==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),J==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),ee!==void 0){const te=ee.normalized,de=ee.itemSize,Le=e.get(ee);if(Le===void 0)continue;const We=Le.buffer,Ze=Le.type,Ye=Le.bytesPerElement,X=Ze===i.INT||Ze===i.UNSIGNED_INT||ee.gpuType===ja;if(ee.isInterleavedBufferAttribute){const K=ee.data,ae=K.stride,De=ee.offset;if(K.isInstancedInterleavedBuffer){for(let ve=0;ve<G.locationSize;ve++)h(G.location+ve,K.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let ve=0;ve<G.locationSize;ve++)x(G.location+ve);i.bindBuffer(i.ARRAY_BUFFER,We);for(let ve=0;ve<G.locationSize;ve++)y(G.location+ve,de/G.locationSize,Ze,te,ae*Ye,(De+de/G.locationSize*ve)*Ye,X)}else{if(ee.isInstancedBufferAttribute){for(let K=0;K<G.locationSize;K++)h(G.location+K,ee.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let K=0;K<G.locationSize;K++)x(G.location+K);i.bindBuffer(i.ARRAY_BUFFER,We);for(let K=0;K<G.locationSize;K++)y(G.location+K,de/G.locationSize,Ze,te,de*Ye,de/G.locationSize*K*Ye,X)}}else if(W!==void 0){const te=W[J];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(G.location,te);break;case 3:i.vertexAttrib3fv(G.location,te);break;case 4:i.vertexAttrib4fv(G.location,te);break;default:i.vertexAttrib1fv(G.location,te)}}}}T()}function P(){U();for(const v in n){const L=n[v];for(const O in L){const B=L[O];for(const H in B)u(B[H].object),delete B[H];delete L[O]}delete n[v]}}function M(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const O in L){const B=L[O];for(const H in B)u(B[H].object),delete B[H];delete L[O]}delete n[v.id]}function C(v){for(const L in n){const O=n[L];if(O[v.id]===void 0)continue;const B=O[v.id];for(const H in B)u(B[H].object),delete B[H];delete O[v.id]}}function U(){b(),a=!0,s!==r&&(s=r,l(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:U,resetDefaultState:b,dispose:P,releaseStatesOfGeometry:M,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:x,disableUnusedAttributes:T}}function Om(i,e,t){let n;function r(l){n=l}function s(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let m=0;m<f;m++)p+=u[m];t.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let m=0;for(let g=0;g<f;g++)m+=u[g]*d[g];t.update(m,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Bm(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==Kt&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const U=C===Li&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==_n&&!U)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(Ve("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,M=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:T,maxVaryings:y,maxFragmentUniforms:A,vertexTextures:P,maxSamples:M}}function zm(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Xn,o=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||r;return r=d,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const m=f.clippingPlanes,g=f.clipIntersection,x=f.clipShadows,h=i.get(f);if(!r||m===null||m.length===0||s&&!x)s?u(null):l();else{const T=s?0:n,y=T*4;let A=h.clippingState||null;c.value=A,A=u(m,d,y,p);for(let P=0;P!==y;++P)A[P]=t[P];h.clippingState=A,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,m){const g=f!==null?f.length:0;let x=null;if(g!==0){if(x=c.value,m!==!0||x===null){const h=p+g*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(x===null||x.length<h)&&(x=new Float32Array(h));for(let y=0,A=p;y!==g;++y,A+=4)a.copy(f[y]).applyMatrix4(T,o),a.normal.toArray(x,A),x[A+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function Vm(i){let e=new WeakMap;function t(a,o){return o===ha?a.mapping=Ai:o===pa&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ha||o===pa)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Uh(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Dn=4,Ml=[.125,.215,.35,.446,.526,.582],qn=20,km=256,qi=new jh,yl=new tt;let qs=null,Ys=0,js=0,Ks=!1;const Hm=new F;class El{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Hm}=s;qs=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(qs,Ys,js),this._renderer.xr.enabled=Ks,e.scissorTest=!1,Si(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qs=this._renderer.getRenderTarget(),Ys=this._renderer.getActiveCubeFace(),js=this._renderer.getActiveMipmapLevel(),Ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Li,format:Kt,colorSpace:wi,depthBuffer:!1},r=Tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Gm(s)),this._blurMaterial=Xm(s,e,t),this._ggxMaterial=Wm(s,e,t)}return r}_compileMaterial(e){const t=new bn(new ln,e);this._renderer.compile(t,qi)}_sceneToCubeUV(e,t,n,r,s){const c=new zt(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(yl),f.toneMapping=In,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Ui,new Pc({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let h=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,h=!0):(x.color.copy(yl),h=!0);for(let y=0;y<6;y++){const A=y%3;A===0?(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[y],s.y,s.z)):A===1?(c.up.set(0,0,l[y]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[y],s.z)):(c.up.set(0,l[y],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[y]));const P=this._cubeSize;Si(r,A*P,y>2?P:0,P,P),f.setRenderTarget(r),h&&f.render(g,c),f.render(e,c)}f.toneMapping=p,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ai||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Si(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,qi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),d=.05+l*.95,p=f*d,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-Dn?n-m+Dn:0),h=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=p,c.mipInt.value=m-t,Si(s,x,h,3*g,2*g),r.setRenderTarget(s),r.render(o,qi),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=m-n,Si(e,x,h,3*g,2*g),r.setRenderTarget(e),r.render(o,qi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&_t("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=l;const d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*qn-1),g=s/m,x=isFinite(s)?1+Math.floor(u*g):qn;x>qn&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${qn}`);const h=[];let T=0;for(let C=0;C<qn;++C){const U=C/g,b=Math.exp(-U*U/2);h.push(b),C===0?T+=b:C<x&&(T+=2*b)}for(let C=0;C<h.length;C++)h[C]=h[C]/T;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=h,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const A=this._sizeLods[r],P=3*A*(r>y-Dn?r-y+Dn:0),M=4*(this._cubeSize-A);Si(t,P,M,3*A,2*A),c.setRenderTarget(t),c.render(f,qi)}}function Gm(i){const e=[],t=[],n=[];let r=i;const s=i-Dn+1+Ml.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let c=1/o;a>i-Dn?c=Ml[a-i+Dn-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,m=6,g=3,x=2,h=1,T=new Float32Array(g*m*p),y=new Float32Array(x*m*p),A=new Float32Array(h*m*p);for(let M=0;M<p;M++){const C=M%3*2/3-1,U=M>2?0:-1,b=[C,U,0,C+2/3,U,0,C+2/3,U+1,0,C,U,0,C+2/3,U+1,0,C,U+1,0];T.set(b,g*m*M),y.set(d,x*m*M);const v=[M,M,M,M,M,M];A.set(v,h*m*M)}const P=new ln;P.setAttribute("position",new nn(T,g)),P.setAttribute("uv",new nn(y,x)),P.setAttribute("faceIndex",new nn(A,h)),n.push(new bn(P,null)),r>Dn&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Tl(i,e,t){const n=new Zn(i,e,t);return n.texture.mapping=rs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Si(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Wm(i,e,t){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:km,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:os(),fragmentShader:`

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

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Xm(i,e,t){const n=new Float32Array(qn),r=new F(0,1,0);return new Mn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:os(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Al(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Cl(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function os(){return`

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
	`}function $m(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ha||c===pa,u=c===Ai||c===Ci;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new El(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new El(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function qm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&sr("WebGLRenderer: "+n+" extension not supported."),r}}}function Ym(i,e,t,n){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,m=f.attributes.position;let g=0;if(p!==null){const T=p.array;g=p.version;for(let y=0,A=T.length;y<A;y+=3){const P=T[y+0],M=T[y+1],C=T[y+2];d.push(P,M,M,C,C,P)}}else if(m!==void 0){const T=m.array;g=m.version;for(let y=0,A=T.length/3-1;y<A;y+=3){const P=y+0,M=y+1,C=y+2;d.push(P,M,M,C,C,P)}}else return;const x=new(Tc(d)?Dc:Lc)(d,1);x.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,x)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function jm(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,m){m!==0&&(i.drawElementsInstanced(n,p,s,d*a,m),t.update(p,n,m))}function u(d,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,m);let x=0;for(let h=0;h<m;h++)x+=p[h];t.update(x,n,1)}function f(d,p,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let h=0;h<d.length;h++)l(d[h]/a,p[h],g[h]);else{x.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,g,0,m);let h=0;for(let T=0;T<m;T++)h+=p[T]*g[T];t.update(h,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Km(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:_t("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Zm(i,e,t){const n=new WeakMap,r=new at;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let y=0;p===!0&&(y=1),m===!0&&(y=2),g===!0&&(y=3);let A=o.attributes.position.count*y,P=1;A>e.maxTextureSize&&(P=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const M=new Float32Array(A*P*4*f),C=new Ac(M,A,P,f);C.type=_n,C.needsUpdate=!0;const U=y*4;for(let v=0;v<f;v++){const L=x[v],O=h[v],B=T[v],H=A*P*4*v;for(let q=0;q<L.count;q++){const W=q*U;p===!0&&(r.fromBufferAttribute(L,q),M[H+W+0]=r.x,M[H+W+1]=r.y,M[H+W+2]=r.z,M[H+W+3]=0),m===!0&&(r.fromBufferAttribute(O,q),M[H+W+4]=r.x,M[H+W+5]=r.y,M[H+W+6]=r.z,M[H+W+7]=0),g===!0&&(r.fromBufferAttribute(B,q),M[H+W+8]=r.x,M[H+W+9]=r.y,M[H+W+10]=r.z,M[H+W+11]=B.itemSize===4?r.w:1)}}d={count:f,texture:C,size:new nt(A,P)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let g=0;g<l.length;g++)p+=l[g];const m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Jm(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return f}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const kc=new At,wl=new Oc(1,1),Hc=new Ac,Gc=new gh,Wc=new Nc,Rl=[],Pl=[],Ll=new Float32Array(16),Dl=new Float32Array(9),Il=new Float32Array(4);function Ni(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Rl[r];if(s===void 0&&(s=new Float32Array(r),Rl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ls(i,e){let t=Pl[e];t===void 0&&(t=new Int32Array(e),Pl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Qm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ex(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function tx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function nx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function ix(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Il.set(n),i.uniformMatrix2fv(this.addr,!1,Il),Mt(t,n)}}function rx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Dl.set(n),i.uniformMatrix3fv(this.addr,!1,Dl),Mt(t,n)}}function sx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(bt(t,n))return;Ll.set(n),i.uniformMatrix4fv(this.addr,!1,Ll),Mt(t,n)}}function ax(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function ox(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function lx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function cx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function ux(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function dx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function px(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=Ec,s=wl):s=kc,t.setTexture2D(e||s,r)}function mx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gc,r)}function xx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Wc,r)}function gx(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hc,r)}function _x(i){switch(i){case 5126:return Qm;case 35664:return ex;case 35665:return tx;case 35666:return nx;case 35674:return ix;case 35675:return rx;case 35676:return sx;case 5124:case 35670:return ax;case 35667:case 35671:return ox;case 35668:case 35672:return lx;case 35669:case 35673:return cx;case 5125:return ux;case 36294:return fx;case 36295:return dx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return px;case 35679:case 36299:case 36307:return mx;case 35680:case 36300:case 36308:case 36293:return xx;case 36289:case 36303:case 36311:case 36292:return gx}}function vx(i,e){i.uniform1fv(this.addr,e)}function Sx(i,e){const t=Ni(e,this.size,2);i.uniform2fv(this.addr,t)}function bx(i,e){const t=Ni(e,this.size,3);i.uniform3fv(this.addr,t)}function Mx(i,e){const t=Ni(e,this.size,4);i.uniform4fv(this.addr,t)}function yx(i,e){const t=Ni(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ex(i,e){const t=Ni(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Tx(i,e){const t=Ni(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ax(i,e){i.uniform1iv(this.addr,e)}function Cx(i,e){i.uniform2iv(this.addr,e)}function wx(i,e){i.uniform3iv(this.addr,e)}function Rx(i,e){i.uniform4iv(this.addr,e)}function Px(i,e){i.uniform1uiv(this.addr,e)}function Lx(i,e){i.uniform2uiv(this.addr,e)}function Dx(i,e){i.uniform3uiv(this.addr,e)}function Ix(i,e){i.uniform4uiv(this.addr,e)}function Ux(i,e,t){const n=this.cache,r=e.length,s=ls(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||kc,s[a])}function Nx(i,e,t){const n=this.cache,r=e.length,s=ls(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gc,s[a])}function Fx(i,e,t){const n=this.cache,r=e.length,s=ls(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Wc,s[a])}function Ox(i,e,t){const n=this.cache,r=e.length,s=ls(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hc,s[a])}function Bx(i){switch(i){case 5126:return vx;case 35664:return Sx;case 35665:return bx;case 35666:return Mx;case 35674:return yx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Cx;case 35668:case 35672:return wx;case 35669:case 35673:return Rx;case 5125:return Px;case 36294:return Lx;case 36295:return Dx;case 36296:return Ix;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Nx;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}class zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=_x(t.type)}}class Vx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Bx(t.type)}}class kx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Zs=/(\w+)(\])?(\[|\.)?/g;function Ul(i,e){i.seq.push(e),i.map[e.id]=e}function Hx(i,e,t){const n=i.name,r=n.length;for(Zs.lastIndex=0;;){const s=Zs.exec(n),a=Zs.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Ul(t,l===void 0?new zx(o,i,e):new Vx(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new kx(o),Ul(t,f)),t=f}}}class Xr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Hx(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Gx=37297;let Wx=0;function Xx(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Fl=new ke;function $x(i){et._getMatrix(Fl,et.workingColorSpace,i);const e=`mat3( ${Fl.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Jr:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ol(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Xx(i.getShaderSource(e),o)}else return s}function qx(i,e){const t=$x(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Yx(i,e){let t;switch(e){case Xd:t="Linear";break;case $d:t="Reinhard";break;case qd:t="Cineon";break;case Yd:t="ACESFilmic";break;case Kd:t="AgX";break;case Zd:t="Neutral";break;case jd:t="Custom";break;default:Ve("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Br=new F;function jx(){et.getLuminanceCoefficients(Br);const i=Br.x.toFixed(4),e=Br.y.toFixed(4),t=Br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yi).join(`
`)}function Zx(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Jx(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Yi(i){return i!==""}function Bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function $a(i){return i.replace(Qx,tg)}const eg=new Map;function tg(i,e){let t=He[e];if(t===void 0){const n=eg.get(e);if(n!==void 0)t=He[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return $a(t)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(i){return i.replace(ng,ig)}function ig(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function kl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function sg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case Ci:e="ENVMAP_TYPE_CUBE";break;case rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ag(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function og(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gd:e="ENVMAP_BLENDING_MIX";break;case Wd:e="ENVMAP_BLENDING_ADD";break}return e}function lg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function cg(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=rg(t),l=sg(t),u=ag(t),f=og(t),d=lg(t),p=Kx(t),m=Zx(s),g=r.createProgram();let x,h,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Yi).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Yi).join(`
`),h.length>0&&(h+=`
`)):(x=[kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yi).join(`
`),h=[kl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?He.tonemapping_pars_fragment:"",t.toneMapping!==In?Yx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,qx("linearToOutputTexel",t.outputColorSpace),jx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yi).join(`
`)),a=$a(a),a=Bl(a,t),a=zl(a,t),o=$a(o),o=Bl(o,t),o=zl(o,t),a=Vl(a),o=Vl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",t.glslVersion===qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=T+x+a,A=T+h+o,P=Nl(r,r.VERTEX_SHADER,y),M=Nl(r,r.FRAGMENT_SHADER,A);r.attachShader(g,P),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(L){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(P)||"",H=r.getShaderInfoLog(M)||"",q=O.trim(),W=B.trim(),J=H.trim();let G=!0,ee=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,P,M);else{const te=Ol(r,P,"vertex"),de=Ol(r,M,"fragment");_t("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+q+`
`+te+`
`+de)}else q!==""?Ve("WebGLProgram: Program Info Log:",q):(W===""||J==="")&&(ee=!1);ee&&(L.diagnostics={runnable:G,programLog:q,vertexShader:{log:W,prefix:x},fragmentShader:{log:J,prefix:h}})}r.deleteShader(P),r.deleteShader(M),U=new Xr(r,g),b=Jx(r,g)}let U;this.getUniforms=function(){return U===void 0&&C(this),U};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(g,Gx)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Wx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=P,this.fragmentShader=M,this}let ug=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new dg(e),t.set(e,n)),n}}class dg{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function hg(i,e,t,n,r,s,a){const o=new wc,c=new fg,l=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,v,L,O,B){const H=O.fog,q=B.geometry,W=b.isMeshStandardMaterial?O.environment:null,J=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),G=J&&J.mapping===rs?J.image.height:null,ee=m[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&Ve("WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const te=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,de=te!==void 0?te.length:0;let Le=0;q.morphAttributes.position!==void 0&&(Le=1),q.morphAttributes.normal!==void 0&&(Le=2),q.morphAttributes.color!==void 0&&(Le=3);let We,Ze,Ye,X;if(ee){const it=Qt[ee];We=it.vertexShader,Ze=it.fragmentShader}else We=b.vertexShader,Ze=b.fragmentShader,c.update(b),Ye=c.getVertexShaderID(b),X=c.getFragmentShaderID(b);const K=i.getRenderTarget(),ae=i.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,Ae=!!b.map,Xe=!!b.matcap,ye=!!J,Je=!!b.aoMap,w=!!b.lightMap,Fe=!!b.bumpMap,Be=!!b.normalMap,$e=!!b.displacementMap,me=!!b.emissiveMap,je=!!b.metalnessMap,Me=!!b.roughnessMap,Ie=b.anisotropy>0,E=b.clearcoat>0,_=b.dispersion>0,N=b.iridescence>0,$=b.sheen>0,Y=b.transmission>0,k=Ie&&!!b.anisotropyMap,be=E&&!!b.clearcoatMap,oe=E&&!!b.clearcoatNormalMap,Ee=E&&!!b.clearcoatRoughnessMap,Se=N&&!!b.iridescenceMap,Z=N&&!!b.iridescenceThicknessMap,ne=$&&!!b.sheenColorMap,Re=$&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,he=!!b.specularColorMap,Ue=!!b.specularIntensityMap,R=Y&&!!b.transmissionMap,le=Y&&!!b.thicknessMap,re=!!b.gradientMap,se=!!b.alphaMap,Q=b.alphaTest>0,j=!!b.alphaHash,ge=!!b.extensions;let ze=In;b.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(ze=i.toneMapping);const ft={shaderID:ee,shaderType:b.type,shaderName:b.name,vertexShader:We,fragmentShader:Ze,defines:b.defines,customVertexShaderID:Ye,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:wi,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:Xe,envMap:ye,envMapMode:ye&&J.mapping,envMapCubeUVHeight:G,aoMap:Je,lightMap:w,bumpMap:Fe,normalMap:Be,displacementMap:d&&$e,emissiveMap:me,normalMapObjectSpace:Be&&b.normalMapType===th,normalMapTangentSpace:Be&&b.normalMapType===yc,metalnessMap:je,roughnessMap:Me,anisotropy:Ie,anisotropyMap:k,clearcoat:E,clearcoatMap:be,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:N,iridescenceMap:Se,iridescenceThicknessMap:Z,sheen:$,sheenColorMap:ne,sheenRoughnessMap:Re,specularMap:Ce,specularColorMap:he,specularIntensityMap:Ue,transmission:Y,transmissionMap:R,thicknessMap:le,gradientMap:re,opaque:b.transparent===!1&&b.blending===bi&&b.alphaToCoverage===!1,alphaMap:se,alphaTest:Q,alphaHash:j,combine:b.combine,mapUv:Ae&&g(b.map.channel),aoMapUv:Je&&g(b.aoMap.channel),lightMapUv:w&&g(b.lightMap.channel),bumpMapUv:Fe&&g(b.bumpMap.channel),normalMapUv:Be&&g(b.normalMap.channel),displacementMapUv:$e&&g(b.displacementMap.channel),emissiveMapUv:me&&g(b.emissiveMap.channel),metalnessMapUv:je&&g(b.metalnessMap.channel),roughnessMapUv:Me&&g(b.roughnessMap.channel),anisotropyMapUv:k&&g(b.anisotropyMap.channel),clearcoatMapUv:be&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:ne&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Re&&g(b.sheenRoughnessMap.channel),specularMapUv:Ce&&g(b.specularMap.channel),specularColorMapUv:he&&g(b.specularColorMap.channel),specularIntensityMapUv:Ue&&g(b.specularIntensityMap.channel),transmissionMapUv:R&&g(b.transmissionMap.channel),thicknessMapUv:le&&g(b.thicknessMap.channel),alphaMapUv:se&&g(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Be||Ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(Ae||se),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ae,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Le,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&et.getTransfer(b.map.colorSpace)===st,decodeVideoTextureEmissive:me&&b.emissiveMap.isVideoTexture===!0&&et.getTransfer(b.emissiveMap.colorSpace)===st,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xn,flipSided:b.side===Ut,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ge&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&b.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function h(b){const v=[];if(b.shaderID?v.push(b.shaderID):(v.push(b.customVertexShaderID),v.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)v.push(L),v.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(T(v,b),y(v,b),v.push(i.outputColorSpace)),v.push(b.customProgramCacheKey),v.join()}function T(b,v){b.push(v.precision),b.push(v.outputColorSpace),b.push(v.envMapMode),b.push(v.envMapCubeUVHeight),b.push(v.mapUv),b.push(v.alphaMapUv),b.push(v.lightMapUv),b.push(v.aoMapUv),b.push(v.bumpMapUv),b.push(v.normalMapUv),b.push(v.displacementMapUv),b.push(v.emissiveMapUv),b.push(v.metalnessMapUv),b.push(v.roughnessMapUv),b.push(v.anisotropyMapUv),b.push(v.clearcoatMapUv),b.push(v.clearcoatNormalMapUv),b.push(v.clearcoatRoughnessMapUv),b.push(v.iridescenceMapUv),b.push(v.iridescenceThicknessMapUv),b.push(v.sheenColorMapUv),b.push(v.sheenRoughnessMapUv),b.push(v.specularMapUv),b.push(v.specularColorMapUv),b.push(v.specularIntensityMapUv),b.push(v.transmissionMapUv),b.push(v.thicknessMapUv),b.push(v.combine),b.push(v.fogExp2),b.push(v.sizeAttenuation),b.push(v.morphTargetsCount),b.push(v.morphAttributeCount),b.push(v.numDirLights),b.push(v.numPointLights),b.push(v.numSpotLights),b.push(v.numSpotLightMaps),b.push(v.numHemiLights),b.push(v.numRectAreaLights),b.push(v.numDirLightShadows),b.push(v.numPointLightShadows),b.push(v.numSpotLightShadows),b.push(v.numSpotLightShadowsWithMaps),b.push(v.numLightProbes),b.push(v.shadowMapType),b.push(v.toneMapping),b.push(v.numClippingPlanes),b.push(v.numClipIntersection),b.push(v.depthPacking)}function y(b,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),b.push(o.mask)}function A(b){const v=m[b.type];let L;if(v){const O=Qt[v];L=Ph.clone(O.uniforms)}else L=b.uniforms;return L}function P(b,v){let L;for(let O=0,B=u.length;O<B;O++){const H=u[O];if(H.cacheKey===v){L=H,++L.usedTimes;break}}return L===void 0&&(L=new cg(i,v,b,s),u.push(L)),L}function M(b){if(--b.usedTimes===0){const v=u.indexOf(b);u[v]=u[u.length-1],u.pop(),b.destroy()}}function C(b){c.remove(b)}function U(){c.dispose()}return{getParameters:x,getProgramCacheKey:h,getUniforms:A,acquireProgram:P,releaseProgram:M,releaseShaderCache:C,programs:u,dispose:U}}function pg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function mg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Gl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,d,p,m,g,x){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:m,renderOrder:f.renderOrder,z:g,group:x},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=m,h.renderOrder=f.renderOrder,h.z=g,h.group=x),e++,h}function o(f,d,p,m,g,x){const h=a(f,d,p,m,g,x);p.transmission>0?n.push(h):p.transparent===!0?r.push(h):t.push(h)}function c(f,d,p,m,g,x){const h=a(f,d,p,m,g,x);p.transmission>0?n.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||mg),n.length>1&&n.sort(d||Hl),r.length>1&&r.sort(d||Hl)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function xg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Gl,i.set(n,[a])):r>=s.length?(a=new Gl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function gg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new tt};break;case"SpotLight":t={position:new F,direction:new F,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function _g(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let vg=0;function Sg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bg(i){const e=new gg,t=_g(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new mt,a=new mt;function o(l){let u=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,m=0,g=0,x=0,h=0,T=0,y=0,A=0,P=0,M=0,C=0;l.sort(Sg);for(let b=0,v=l.length;b<v;b++){const L=l[b],O=L.color,B=L.intensity,H=L.distance,q=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=O.r*B,f+=O.g*B,d+=O.b*B;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],B);C++}else if(L.isDirectionalLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=q,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=W,p++}else if(L.isSpotLight){const W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(O).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[g]=W;const J=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,J.updateMatrices(L),L.castShadow&&M++),n.spotLightMatrix[g]=J.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=q,A++}g++}else if(L.isRectAreaLight){const W=e.get(L);W.color.copy(O).multiplyScalar(B),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=W,x++}else if(L.isPointLight){const W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){const J=L.shadow,G=t.get(L);G.shadowIntensity=J.intensity,G.shadowBias=J.bias,G.shadowNormalBias=J.normalBias,G.shadowRadius=J.radius,G.shadowMapSize=J.mapSize,G.shadowCameraNear=J.camera.near,G.shadowCameraFar=J.camera.far,n.pointShadow[m]=G,n.pointShadowMap[m]=q,n.pointShadowMatrix[m]=L.shadow.matrix,y++}n.point[m]=W,m++}else if(L.isHemisphereLight){const W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(B),W.groundColor.copy(L.groundColor).multiplyScalar(B),n.hemi[h]=W,h++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==m||U.spotLength!==g||U.rectAreaLength!==x||U.hemiLength!==h||U.numDirectionalShadows!==T||U.numPointShadows!==y||U.numSpotShadows!==A||U.numSpotMaps!==P||U.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=h,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=A+P-M,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=C,U.directionalLength=p,U.pointLength=m,U.spotLength=g,U.rectAreaLength=x,U.hemiLength=h,U.numDirectionalShadows=T,U.numPointShadows=y,U.numSpotShadows=A,U.numSpotMaps=P,U.numLightProbes=C,n.version=vg++)}function c(l,u){let f=0,d=0,p=0,m=0,g=0;const x=u.matrixWorldInverse;for(let h=0,T=l.length;h<T;h++){const y=l[h];if(y.isDirectionalLight){const A=n.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),f++}else if(y.isSpotLight){const A=n.spot[p];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(x),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(x),p++}else if(y.isRectAreaLight){const A=n.rectArea[m];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(x),a.identity(),s.copy(y.matrixWorld),s.premultiply(x),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(x),d++}else if(y.isHemisphereLight){const A=n.hemi[g];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function Wl(i){const e=new bg(i),t=[],n=[];function r(u){l.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Mg(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wl(i),e.set(r,[o])):s>=a.length?(o=new Wl(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const yg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Eg=`uniform sampler2D shadow_pass;
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
}`;function Tg(i,e,t){let n=new io;const r=new nt,s=new nt,a=new at,o=new Xh({depthPacking:eh}),c=new $h,l={},u=t.maxTextureSize,f={[Fn]:Ut,[Ut]:Fn,[xn]:xn},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:yg,fragmentShader:Eg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new ln;m.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bn(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hc;let h=this.type;this.render=function(M,C,U){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||M.length===0)return;const b=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const B=h!==mn&&this.type===mn,H=h===mn&&this.type!==mn;for(let q=0,W=M.length;q<W;q++){const J=M[q],G=J.shadow;if(G===void 0){Ve("WebGLShadowMap:",J,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ee=G.getFrameExtents();if(r.multiply(ee),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ee.x),r.x=s.x*ee.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ee.y),r.y=s.y*ee.y,G.mapSize.y=s.y)),G.map===null||B===!0||H===!0){const de=this.type!==mn?{minFilter:Vt,magFilter:Vt}:{};G.map!==null&&G.map.dispose(),G.map=new Zn(r.x,r.y,de),G.map.texture.name=J.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const te=G.getViewportCount();for(let de=0;de<te;de++){const Le=G.getViewport(de);a.set(s.x*Le.x,s.y*Le.y,s.x*Le.z,s.y*Le.w),O.viewport(a),G.updateMatrices(J,de),n=G.getFrustum(),A(C,U,G.camera,J,this.type)}G.isPointLightShadow!==!0&&this.type===mn&&T(G,U),G.needsUpdate=!1}h=this.type,x.needsUpdate=!1,i.setRenderTarget(b,v,L)};function T(M,C){const U=e.update(g);d.defines.VSM_SAMPLES!==M.blurSamples&&(d.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Zn(r.x,r.y)),d.uniforms.shadow_pass.value=M.map.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(C,null,U,d,g,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(C,null,U,p,g,null)}function y(M,C,U,b){let v=null;const L=U.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(L!==void 0)v=L;else if(v=U.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const O=v.uuid,B=C.uuid;let H=l[O];H===void 0&&(H={},l[O]=H);let q=H[B];q===void 0&&(q=v.clone(),H[B]=q,C.addEventListener("dispose",P)),v=q}if(v.visible=C.visible,v.wireframe=C.wireframe,b===mn?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:f[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const O=i.properties.get(v);O.light=U}return v}function A(M,C,U,b,v){if(M.visible===!1)return;if(M.layers.test(C.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===mn)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld);const B=e.update(M),H=M.material;if(Array.isArray(H)){const q=B.groups;for(let W=0,J=q.length;W<J;W++){const G=q[W],ee=H[G.materialIndex];if(ee&&ee.visible){const te=y(M,ee,b,v);M.onBeforeShadow(i,M,C,U,B,te,G),i.renderBufferDirect(U,null,B,te,M,G),M.onAfterShadow(i,M,C,U,B,te,G)}}}else if(H.visible){const q=y(M,H,b,v);M.onBeforeShadow(i,M,C,U,B,q,null),i.renderBufferDirect(U,null,B,q,M,null),M.onAfterShadow(i,M,C,U,B,q,null)}}const O=M.children;for(let B=0,H=O.length;B<H;B++)A(O[B],C,U,b,v)}function P(M){M.target.removeEventListener("dispose",P);for(const U in l){const b=l[U],v=M.target.uuid;v in b&&(b[v].dispose(),delete b[v])}}}const Ag={[aa]:oa,[la]:fa,[ca]:da,[Ti]:ua,[oa]:aa,[fa]:la,[da]:ca,[ua]:Ti};function Cg(i,e){function t(){let R=!1;const le=new at;let re=null;const se=new at(0,0,0,0);return{setMask:function(Q){re!==Q&&!R&&(i.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){R=Q},setClear:function(Q,j,ge,ze,ft){ft===!0&&(Q*=ze,j*=ze,ge*=ze),le.set(Q,j,ge,ze),se.equals(le)===!1&&(i.clearColor(Q,j,ge,ze),se.copy(le))},reset:function(){R=!1,re=null,se.set(-1,0,0,0)}}}function n(){let R=!1,le=!1,re=null,se=null,Q=null;return{setReversed:function(j){if(le!==j){const ge=e.get("EXT_clip_control");j?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),le=j;const ze=Q;Q=null,this.setClear(ze)}},getReversed:function(){return le},setTest:function(j){j?K(i.DEPTH_TEST):ae(i.DEPTH_TEST)},setMask:function(j){re!==j&&!R&&(i.depthMask(j),re=j)},setFunc:function(j){if(le&&(j=Ag[j]),se!==j){switch(j){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case Ti:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case fa:i.depthFunc(i.GREATER);break;case da:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}se=j}},setLocked:function(j){R=j},setClear:function(j){Q!==j&&(le&&(j=1-j),i.clearDepth(j),Q=j)},reset:function(){R=!1,re=null,se=null,Q=null,le=!1}}}function r(){let R=!1,le=null,re=null,se=null,Q=null,j=null,ge=null,ze=null,ft=null;return{setTest:function(it){R||(it?K(i.STENCIL_TEST):ae(i.STENCIL_TEST))},setMask:function(it){le!==it&&!R&&(i.stencilMask(it),le=it)},setFunc:function(it,Zt,$t){(re!==it||se!==Zt||Q!==$t)&&(i.stencilFunc(it,Zt,$t),re=it,se=Zt,Q=$t)},setOp:function(it,Zt,$t){(j!==it||ge!==Zt||ze!==$t)&&(i.stencilOp(it,Zt,$t),j=it,ge=Zt,ze=$t)},setLocked:function(it){R=it},setClear:function(it){ft!==it&&(i.clearStencil(it),ft=it)},reset:function(){R=!1,le=null,re=null,se=null,Q=null,j=null,ge=null,ze=null,ft=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],m=null,g=!1,x=null,h=null,T=null,y=null,A=null,P=null,M=null,C=new tt(0,0,0),U=0,b=!1,v=null,L=null,O=null,B=null,H=null;const q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,J=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=J>=1):G.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=J>=2);let ee=null,te={};const de=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),We=new at().fromArray(de),Ze=new at().fromArray(Le);function Ye(R,le,re,se){const Q=new Uint8Array(4),j=i.createTexture();i.bindTexture(R,j),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<re;ge++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,se,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(le+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return j}const X={};X[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(Ti),Fe(!1),Be(ko),K(i.CULL_FACE),Je(vn);function K(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function ae(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function De(R,le){return f[R]!==le?(i.bindFramebuffer(R,le),f[R]=le,R===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=le),R===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ve(R,le){let re=p,se=!1;if(R){re=d.get(le),re===void 0&&(re=[],d.set(le,re));const Q=R.textures;if(re.length!==Q.length||re[0]!==i.COLOR_ATTACHMENT0){for(let j=0,ge=Q.length;j<ge;j++)re[j]=i.COLOR_ATTACHMENT0+j;re.length=Q.length,se=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,se=!0);se&&i.drawBuffers(re)}function Ae(R){return m!==R?(i.useProgram(R),m=R,!0):!1}const Xe={[$n]:i.FUNC_ADD,[Ad]:i.FUNC_SUBTRACT,[Cd]:i.FUNC_REVERSE_SUBTRACT};Xe[wd]=i.MIN,Xe[Rd]=i.MAX;const ye={[Pd]:i.ZERO,[Ld]:i.ONE,[Dd]:i.SRC_COLOR,[ra]:i.SRC_ALPHA,[Bd]:i.SRC_ALPHA_SATURATE,[Fd]:i.DST_COLOR,[Ud]:i.DST_ALPHA,[Id]:i.ONE_MINUS_SRC_COLOR,[sa]:i.ONE_MINUS_SRC_ALPHA,[Od]:i.ONE_MINUS_DST_COLOR,[Nd]:i.ONE_MINUS_DST_ALPHA,[zd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[kd]:i.CONSTANT_ALPHA,[Hd]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(R,le,re,se,Q,j,ge,ze,ft,it){if(R===vn){g===!0&&(ae(i.BLEND),g=!1);return}if(g===!1&&(K(i.BLEND),g=!0),R!==Td){if(R!==x||it!==b){if((h!==$n||A!==$n)&&(i.blendEquation(i.FUNC_ADD),h=$n,A=$n),it)switch(R){case bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFunc(i.ONE,i.ONE);break;case Go:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:_t("WebGLState: Invalid blending: ",R);break}else switch(R){case bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ho:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Go:_t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wo:_t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:_t("WebGLState: Invalid blending: ",R);break}T=null,y=null,P=null,M=null,C.set(0,0,0),U=0,x=R,b=it}return}Q=Q||le,j=j||re,ge=ge||se,(le!==h||Q!==A)&&(i.blendEquationSeparate(Xe[le],Xe[Q]),h=le,A=Q),(re!==T||se!==y||j!==P||ge!==M)&&(i.blendFuncSeparate(ye[re],ye[se],ye[j],ye[ge]),T=re,y=se,P=j,M=ge),(ze.equals(C)===!1||ft!==U)&&(i.blendColor(ze.r,ze.g,ze.b,ft),C.copy(ze),U=ft),x=R,b=!1}function w(R,le){R.side===xn?ae(i.CULL_FACE):K(i.CULL_FACE);let re=R.side===Ut;le&&(re=!re),Fe(re),R.blending===bi&&R.transparent===!1?Je(vn):Je(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const se=R.stencilWrite;o.setTest(se),se&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),me(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):ae(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(R){v!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),v=R)}function Be(R){R!==Md?(K(i.CULL_FACE),R!==L&&(R===ko?i.cullFace(i.BACK):R===yd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ae(i.CULL_FACE),L=R}function $e(R){R!==O&&(W&&i.lineWidth(R),O=R)}function me(R,le,re){R?(K(i.POLYGON_OFFSET_FILL),(B!==le||H!==re)&&(i.polygonOffset(le,re),B=le,H=re)):ae(i.POLYGON_OFFSET_FILL)}function je(R){R?K(i.SCISSOR_TEST):ae(i.SCISSOR_TEST)}function Me(R){R===void 0&&(R=i.TEXTURE0+q-1),ee!==R&&(i.activeTexture(R),ee=R)}function Ie(R,le,re){re===void 0&&(ee===null?re=i.TEXTURE0+q-1:re=ee);let se=te[re];se===void 0&&(se={type:void 0,texture:void 0},te[re]=se),(se.type!==R||se.texture!==le)&&(ee!==re&&(i.activeTexture(re),ee=re),i.bindTexture(R,le||X[R]),se.type=R,se.texture=le)}function E(){const R=te[ee];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function $(){try{i.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Y(){try{i.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function be(){try{i.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function oe(){try{i.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Ee(){try{i.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function Se(){try{i.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Z(){try{i.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ne(R){We.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),We.copy(R))}function Re(R){Ze.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ze.copy(R))}function Ce(R,le){let re=l.get(le);re===void 0&&(re=new WeakMap,l.set(le,re));let se=re.get(R);se===void 0&&(se=i.getUniformBlockIndex(le,R.name),re.set(R,se))}function he(R,le){const se=l.get(le).get(R);c.get(le)!==se&&(i.uniformBlockBinding(le,se,R.__bindingPointIndex),c.set(le,se))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ee=null,te={},f={},d=new WeakMap,p=[],m=null,g=!1,x=null,h=null,T=null,y=null,A=null,P=null,M=null,C=new tt(0,0,0),U=0,b=!1,v=null,L=null,O=null,B=null,H=null,We.set(0,0,i.canvas.width,i.canvas.height),Ze.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:K,disable:ae,bindFramebuffer:De,drawBuffers:ve,useProgram:Ae,setBlending:Je,setMaterial:w,setFlipSided:Fe,setCullFace:Be,setLineWidth:$e,setPolygonOffset:me,setScissorTest:je,activeTexture:Me,bindTexture:Ie,unbindTexture:E,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:Se,texImage3D:Z,updateUBOMapping:Ce,uniformBlockBinding:he,texStorage2D:oe,texStorage3D:Ee,texSubImage2D:$,texSubImage3D:Y,compressedTexSubImage2D:k,compressedTexSubImage3D:be,scissor:ne,viewport:Re,reset:Ue}}function wg(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new nt,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,_){return p?new OffscreenCanvas(E,_):es("canvas")}function g(E,_,N){let $=1;const Y=Ie(E);if((Y.width>N||Y.height>N)&&($=N/Math.max(Y.width,Y.height)),$<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const k=Math.floor($*Y.width),be=Math.floor($*Y.height);f===void 0&&(f=m(k,be));const oe=_?m(k,be):f;return oe.width=k,oe.height=be,oe.getContext("2d").drawImage(E,0,0,k,be),Ve("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+k+"x"+be+")."),oe}else return"data"in E&&Ve("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),E;return E}function x(E){return E.generateMipmaps}function h(E){i.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(E,_,N,$,Y=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let k=_;if(_===i.RED&&(N===i.FLOAT&&(k=i.R32F),N===i.HALF_FLOAT&&(k=i.R16F),N===i.UNSIGNED_BYTE&&(k=i.R8)),_===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.R8UI),N===i.UNSIGNED_SHORT&&(k=i.R16UI),N===i.UNSIGNED_INT&&(k=i.R32UI),N===i.BYTE&&(k=i.R8I),N===i.SHORT&&(k=i.R16I),N===i.INT&&(k=i.R32I)),_===i.RG&&(N===i.FLOAT&&(k=i.RG32F),N===i.HALF_FLOAT&&(k=i.RG16F),N===i.UNSIGNED_BYTE&&(k=i.RG8)),_===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RG8UI),N===i.UNSIGNED_SHORT&&(k=i.RG16UI),N===i.UNSIGNED_INT&&(k=i.RG32UI),N===i.BYTE&&(k=i.RG8I),N===i.SHORT&&(k=i.RG16I),N===i.INT&&(k=i.RG32I)),_===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RGB8UI),N===i.UNSIGNED_SHORT&&(k=i.RGB16UI),N===i.UNSIGNED_INT&&(k=i.RGB32UI),N===i.BYTE&&(k=i.RGB8I),N===i.SHORT&&(k=i.RGB16I),N===i.INT&&(k=i.RGB32I)),_===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(k=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(k=i.RGBA16UI),N===i.UNSIGNED_INT&&(k=i.RGBA32UI),N===i.BYTE&&(k=i.RGBA8I),N===i.SHORT&&(k=i.RGBA16I),N===i.INT&&(k=i.RGBA32I)),_===i.RGB&&(N===i.UNSIGNED_INT_5_9_9_9_REV&&(k=i.RGB9_E5),N===i.UNSIGNED_INT_10F_11F_11F_REV&&(k=i.R11F_G11F_B10F)),_===i.RGBA){const be=Y?Jr:et.getTransfer($);N===i.FLOAT&&(k=i.RGBA32F),N===i.HALF_FLOAT&&(k=i.RGBA16F),N===i.UNSIGNED_BYTE&&(k=be===st?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(k=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(k=i.RGB5_A1)}return(k===i.R16F||k===i.R32F||k===i.RG16F||k===i.RG32F||k===i.RGBA16F||k===i.RGBA32F)&&e.get("EXT_color_buffer_float"),k}function A(E,_){let N;return E?_===null||_===Kn||_===nr?N=i.DEPTH24_STENCIL8:_===_n?N=i.DEPTH32F_STENCIL8:_===tr&&(N=i.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Kn||_===nr?N=i.DEPTH_COMPONENT24:_===_n?N=i.DEPTH_COMPONENT32F:_===tr&&(N=i.DEPTH_COMPONENT16),N}function P(E,_){return x(E)===!0||E.isFramebufferTexture&&E.minFilter!==Vt&&E.minFilter!==Xt?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function M(E){const _=E.target;_.removeEventListener("dispose",M),U(_),_.isVideoTexture&&u.delete(_)}function C(E){const _=E.target;_.removeEventListener("dispose",C),v(_)}function U(E){const _=n.get(E);if(_.__webglInit===void 0)return;const N=E.source,$=d.get(N);if($){const Y=$[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&b(E),Object.keys($).length===0&&d.delete(N)}n.remove(E)}function b(E){const _=n.get(E);i.deleteTexture(_.__webglTexture);const N=E.source,$=d.get(N);delete $[_.__cacheKey],a.memory.textures--}function v(E){const _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let Y=0;Y<_.__webglFramebuffer[$].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[$][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)i.deleteFramebuffer(_.__webglFramebuffer[$]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=E.textures;for(let $=0,Y=N.length;$<Y;$++){const k=n.get(N[$]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(N[$])}n.remove(E)}let L=0;function O(){L=0}function B(){const E=L;return E>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),L+=1,E}function H(E){const _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function q(E,_){const N=n.get(E);if(E.isVideoTexture&&je(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const $=E.image;if($===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{X(N,E,_);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+_)}function W(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){X(N,E,_);return}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+_)}function J(E,_){const N=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){X(N,E,_);return}t.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+_)}function G(E,_){const N=n.get(E);if(E.version>0&&N.__version!==E.version){K(N,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+_)}const ee={[ma]:i.REPEAT,[gn]:i.CLAMP_TO_EDGE,[xa]:i.MIRRORED_REPEAT},te={[Vt]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[hr]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[vs]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},de={[nh]:i.NEVER,[lh]:i.ALWAYS,[ih]:i.LESS,[Ec]:i.LEQUAL,[rh]:i.EQUAL,[oh]:i.GEQUAL,[sh]:i.GREATER,[ah]:i.NOTEQUAL};function Le(E,_){if(_.type===_n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Xt||_.magFilter===vs||_.magFilter===hr||_.magFilter===Yn||_.minFilter===Xt||_.minFilter===vs||_.minFilter===hr||_.minFilter===Yn)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,ee[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,ee[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,ee[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,te[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,te[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==hr&&_.minFilter!==Yn||_.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function We(E,_){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",M));const $=_.source;let Y=d.get($);Y===void 0&&(Y={},d.set($,Y));const k=H(_);if(k!==E.__cacheKey){Y[k]===void 0&&(Y[k]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),Y[k].usedTimes++;const be=Y[E.__cacheKey];be!==void 0&&(Y[E.__cacheKey].usedTimes--,be.usedTimes===0&&b(_)),E.__cacheKey=k,E.__webglTexture=Y[k].texture}return N}function Ze(E,_,N){return Math.floor(Math.floor(E/N)/_)}function Ye(E,_,N,$){const k=E.updateRanges;if(k.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,N,$,_.data);else{k.sort((Z,ne)=>Z.start-ne.start);let be=0;for(let Z=1;Z<k.length;Z++){const ne=k[be],Re=k[Z],Ce=ne.start+ne.count,he=Ze(Re.start,_.width,4),Ue=Ze(ne.start,_.width,4);Re.start<=Ce+1&&he===Ue&&Ze(Re.start+Re.count-1,_.width,4)===he?ne.count=Math.max(ne.count,Re.start+Re.count-ne.start):(++be,k[be]=Re)}k.length=be+1;const oe=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Z=0,ne=k.length;Z<ne;Z++){const Re=k[Z],Ce=Math.floor(Re.start/4),he=Math.ceil(Re.count/4),Ue=Ce%_.width,R=Math.floor(Ce/_.width),le=he,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Ue,R,le,re,N,$,_.data)}E.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function X(E,_,N){let $=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=i.TEXTURE_3D);const Y=We(E,_),k=_.source;t.bindTexture($,E.__webglTexture,i.TEXTURE0+N);const be=n.get(k);if(k.version!==be.__version||Y===!0){t.activeTexture(i.TEXTURE0+N);const oe=et.getPrimaries(et.workingColorSpace),Ee=_.colorSpace===Ln?null:et.getPrimaries(_.colorSpace),Se=_.colorSpace===Ln||oe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let Z=g(_.image,!1,r.maxTextureSize);Z=Me(_,Z);const ne=s.convert(_.format,_.colorSpace),Re=s.convert(_.type);let Ce=y(_.internalFormat,ne,Re,_.colorSpace,_.isVideoTexture);Le($,_);let he;const Ue=_.mipmaps,R=_.isVideoTexture!==!0,le=be.__version===void 0||Y===!0,re=k.dataReady,se=P(_,Z);if(_.isDepthTexture)Ce=A(_.format===rr,_.type),le&&(R?t.texStorage2D(i.TEXTURE_2D,1,Ce,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,Ce,Z.width,Z.height,0,ne,Re,null));else if(_.isDataTexture)if(Ue.length>0){R&&le&&t.texStorage2D(i.TEXTURE_2D,se,Ce,Ue[0].width,Ue[0].height);for(let Q=0,j=Ue.length;Q<j;Q++)he=Ue[Q],R?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ne,Re,he.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,he.width,he.height,0,ne,Re,he.data);_.generateMipmaps=!1}else R?(le&&t.texStorage2D(i.TEXTURE_2D,se,Ce,Z.width,Z.height),re&&Ye(_,Z,ne,Re)):t.texImage2D(i.TEXTURE_2D,0,Ce,Z.width,Z.height,0,ne,Re,Z.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){R&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Ce,Ue[0].width,Ue[0].height,Z.depth);for(let Q=0,j=Ue.length;Q<j;Q++)if(he=Ue[Q],_.format!==Kt)if(ne!==null)if(R){if(re)if(_.layerUpdates.size>0){const ge=bl(he.width,he.height,_.format,_.type);for(const ze of _.layerUpdates){const ft=he.data.subarray(ze*ge/he.data.BYTES_PER_ELEMENT,(ze+1)*ge/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ze,he.width,he.height,1,ne,ft)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,ne,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,he.width,he.height,Z.depth,0,he.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,Z.depth,ne,Re,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,Ce,he.width,he.height,Z.depth,0,ne,Re,he.data)}else{R&&le&&t.texStorage2D(i.TEXTURE_2D,se,Ce,Ue[0].width,Ue[0].height);for(let Q=0,j=Ue.length;Q<j;Q++)he=Ue[Q],_.format!==Kt?ne!==null?R?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ne,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,Ce,he.width,he.height,0,he.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,ne,Re,he.data):t.texImage2D(i.TEXTURE_2D,Q,Ce,he.width,he.height,0,ne,Re,he.data)}else if(_.isDataArrayTexture)if(R){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Ce,Z.width,Z.height,Z.depth),re)if(_.layerUpdates.size>0){const Q=bl(Z.width,Z.height,_.format,_.type);for(const j of _.layerUpdates){const ge=Z.data.subarray(j*Q/Z.data.BYTES_PER_ELEMENT,(j+1)*Q/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,Z.width,Z.height,1,ne,Re,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ne,Re,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,Z.width,Z.height,Z.depth,0,ne,Re,Z.data);else if(_.isData3DTexture)R?(le&&t.texStorage3D(i.TEXTURE_3D,se,Ce,Z.width,Z.height,Z.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ne,Re,Z.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,Z.width,Z.height,Z.depth,0,ne,Re,Z.data);else if(_.isFramebufferTexture){if(le)if(R)t.texStorage2D(i.TEXTURE_2D,se,Ce,Z.width,Z.height);else{let Q=Z.width,j=Z.height;for(let ge=0;ge<se;ge++)t.texImage2D(i.TEXTURE_2D,ge,Ce,Q,j,0,ne,Re,null),Q>>=1,j>>=1}}else if(Ue.length>0){if(R&&le){const Q=Ie(Ue[0]);t.texStorage2D(i.TEXTURE_2D,se,Ce,Q.width,Q.height)}for(let Q=0,j=Ue.length;Q<j;Q++)he=Ue[Q],R?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ne,Re,he):t.texImage2D(i.TEXTURE_2D,Q,Ce,ne,Re,he);_.generateMipmaps=!1}else if(R){if(le){const Q=Ie(Z);t.texStorage2D(i.TEXTURE_2D,se,Ce,Q.width,Q.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ne,Re,Z)}else t.texImage2D(i.TEXTURE_2D,0,Ce,ne,Re,Z);x(_)&&h($),be.__version=k.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function K(E,_,N){if(_.image.length!==6)return;const $=We(E,_),Y=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+N);const k=n.get(Y);if(Y.version!==k.__version||$===!0){t.activeTexture(i.TEXTURE0+N);const be=et.getPrimaries(et.workingColorSpace),oe=_.colorSpace===Ln?null:et.getPrimaries(_.colorSpace),Ee=_.colorSpace===Ln||be===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Se=_.isCompressedTexture||_.image[0].isCompressedTexture,Z=_.image[0]&&_.image[0].isDataTexture,ne=[];for(let j=0;j<6;j++)!Se&&!Z?ne[j]=g(_.image[j],!0,r.maxCubemapSize):ne[j]=Z?_.image[j].image:_.image[j],ne[j]=Me(_,ne[j]);const Re=ne[0],Ce=s.convert(_.format,_.colorSpace),he=s.convert(_.type),Ue=y(_.internalFormat,Ce,he,_.colorSpace),R=_.isVideoTexture!==!0,le=k.__version===void 0||$===!0,re=Y.dataReady;let se=P(_,Re);Le(i.TEXTURE_CUBE_MAP,_);let Q;if(Se){R&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,Re.width,Re.height);for(let j=0;j<6;j++){Q=ne[j].mipmaps;for(let ge=0;ge<Q.length;ge++){const ze=Q[ge];_.format!==Kt?Ce!==null?R?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,0,0,ze.width,ze.height,Ce,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,Ue,ze.width,ze.height,0,ze.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,0,0,ze.width,ze.height,Ce,he,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge,Ue,ze.width,ze.height,0,Ce,he,ze.data)}}}else{if(Q=_.mipmaps,R&&le){Q.length>0&&se++;const j=Ie(ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,Ue,j.width,j.height)}for(let j=0;j<6;j++)if(Z){R?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ne[j].width,ne[j].height,Ce,he,ne[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,ne[j].width,ne[j].height,0,Ce,he,ne[j].data);for(let ge=0;ge<Q.length;ge++){const ft=Q[ge].image[j].image;R?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,0,0,ft.width,ft.height,Ce,he,ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,Ue,ft.width,ft.height,0,Ce,he,ft.data)}}else{R?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ce,he,ne[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ue,Ce,he,ne[j]);for(let ge=0;ge<Q.length;ge++){const ze=Q[ge];R?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,0,0,Ce,he,ze.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ge+1,Ue,Ce,he,ze.image[j])}}}x(_)&&h(i.TEXTURE_CUBE_MAP),k.__version=Y.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ae(E,_,N,$,Y,k){const be=s.convert(N.format,N.colorSpace),oe=s.convert(N.type),Ee=y(N.internalFormat,be,oe,N.colorSpace),Se=n.get(_),Z=n.get(N);if(Z.__renderTarget=_,!Se.__hasExternalTextures){const ne=Math.max(1,_.width>>k),Re=Math.max(1,_.height>>k);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?t.texImage3D(Y,k,Ee,ne,Re,_.depth,0,be,oe,null):t.texImage2D(Y,k,Ee,ne,Re,0,be,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Y,Z.__webglTexture,0,$e(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Y,Z.__webglTexture,k),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(E,_,N){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){const $=_.depthTexture,Y=$&&$.isDepthTexture?$.type:null,k=A(_.stencilBuffer,Y),be=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=$e(_);me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe,k,_.width,_.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,k,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,k,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,E)}else{const $=_.textures;for(let Y=0;Y<$.length;Y++){const k=$[Y],be=s.convert(k.format,k.colorSpace),oe=s.convert(k.type),Ee=y(k.internalFormat,be,oe,k.colorSpace),Se=$e(_);N&&me(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Ee,_.width,_.height):me(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Ee,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),q(_.depthTexture,0);const Y=$.__webglTexture,k=$e(_);if(_.depthTexture.format===ir)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(_.depthTexture.format===rr)me(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ae(E){const _=n.get(E),N=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){const $=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",Y)};$.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=$}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const $=E.texture.mipmaps;$&&$.length>0?ve(_.__webglFramebuffer[0],E):ve(_.__webglFramebuffer,E)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=i.createRenderbuffer(),De(_.__webglDepthbuffer[$],E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,k)}}else{const $=E.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),De(_.__webglDepthbuffer,E,!1);else{const Y=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,k=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,k),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,k)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(E,_,N){const $=n.get(E);_!==void 0&&ae($.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&Ae(E)}function ye(E){const _=E.texture,N=n.get(E),$=n.get(_);E.addEventListener("dispose",C);const Y=E.textures,k=E.isWebGLCubeRenderTarget===!0,be=Y.length>1;if(be||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=_.version,a.memory.textures++),k){N.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[oe]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)N.__webglFramebuffer[oe][Ee]=i.createFramebuffer()}else N.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let oe=0;oe<_.mipmaps.length;oe++)N.__webglFramebuffer[oe]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(be)for(let oe=0,Ee=Y.length;oe<Ee;oe++){const Se=n.get(Y[oe]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&me(E)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let oe=0;oe<Y.length;oe++){const Ee=Y[oe];N.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[oe]);const Se=s.convert(Ee.format,Ee.colorSpace),Z=s.convert(Ee.type),ne=y(Ee.internalFormat,Se,Z,Ee.colorSpace,E.isXRRenderTarget===!0),Re=$e(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,ne,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,N.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),De(N.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(k){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Le(i.TEXTURE_CUBE_MAP,_);for(let oe=0;oe<6;oe++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)ae(N.__webglFramebuffer[oe][Ee],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee);else ae(N.__webglFramebuffer[oe],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(_)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let oe=0,Ee=Y.length;oe<Ee;oe++){const Se=Y[oe],Z=n.get(Se);let ne=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ne=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),Le(ne,Se),ae(N.__webglFramebuffer,E,Se,i.COLOR_ATTACHMENT0+oe,ne,0),x(Se)&&h(ne)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(oe=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,$.__webglTexture),Le(oe,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)ae(N.__webglFramebuffer[Ee],E,_,i.COLOR_ATTACHMENT0,oe,Ee);else ae(N.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,oe,0);x(_)&&h(oe),t.unbindTexture()}E.depthBuffer&&Ae(E)}function Je(E){const _=E.textures;for(let N=0,$=_.length;N<$;N++){const Y=_[N];if(x(Y)){const k=T(E),be=n.get(Y).__webglTexture;t.bindTexture(k,be),h(k),t.unbindTexture()}}}const w=[],Fe=[];function Be(E){if(E.samples>0){if(me(E)===!1){const _=E.textures,N=E.width,$=E.height;let Y=i.COLOR_BUFFER_BIT;const k=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(E),oe=_.length>1;if(oe)for(let Se=0;Se<_.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer);const Ee=E.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let Se=0;Se<_.length;Se++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);const Z=n.get(_[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,N,$,0,0,N,$,Y,i.NEAREST),c===!0&&(w.length=0,Fe.length=0,w.push(i.COLOR_ATTACHMENT0+Se),E.depthBuffer&&E.resolveDepthBuffer===!1&&(w.push(k),Fe.push(k),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Se=0;Se<_.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,be.__webglColorRenderbuffer[Se]);const Z=n.get(_[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,Z,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&c){const _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function $e(E){return Math.min(r.maxSamples,E.samples)}function me(E){const _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function je(E){const _=a.render.frame;u.get(E)!==_&&(u.set(E,_),E.update())}function Me(E,_){const N=E.colorSpace,$=E.format,Y=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==wi&&N!==Ln&&(et.getTransfer(N)===st?($!==Kt||Y!==sn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):_t("WebGLTextures: Unsupported texture color space:",N)),_}function Ie(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=O,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=J,this.setTextureCube=G,this.rebindTextures=Xe,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=me}function Rg(i,e){function t(n,r=Ln){let s;const a=et.getTransfer(r);if(n===sn)return i.UNSIGNED_BYTE;if(n===Ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xc)return i.BYTE;if(n===gc)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Kn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===Li)return i.HALF_FLOAT;if(n===Sc)return i.ALPHA;if(n===bc)return i.RGB;if(n===Kt)return i.RGBA;if(n===ir)return i.DEPTH_COMPONENT;if(n===rr)return i.DEPTH_STENCIL;if(n===Mc)return i.RED;if(n===Ja)return i.RED_INTEGER;if(n===Qa)return i.RG;if(n===eo)return i.RG_INTEGER;if(n===to)return i.RGBA_INTEGER;if(n===Vr||n===kr||n===Hr||n===Gr)if(a===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Gr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ga||n===_a||n===va||n===Sa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ga)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_a)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===va)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Sa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ba||n===Ma||n===ya)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ba||n===Ma)return a===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ya)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ea||n===Ta||n===Aa||n===Ca||n===wa||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ea)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===wa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return a===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===za||n===Va)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ba)return a===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===za)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Va)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ka||n===Ha||n===Ga||n===Wa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ka)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ga)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Lg=`
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

}`;class Dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Bc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Mn({vertexShader:Pg,fragmentShader:Lg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new as(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ig extends Di{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,m=null;const g=typeof XRWebGLBinding<"u",x=new Dg,h={},T=t.getContextAttributes();let y=null,A=null;const P=[],M=[],C=new nt;let U=null;const b=new zt;b.viewport=new at;const v=new zt;v.viewport=new at;const L=[b,v],O=new Zh;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let K=P[X];return K===void 0&&(K=new ks,P[X]=K),K.getTargetRaySpace()},this.getControllerGrip=function(X){let K=P[X];return K===void 0&&(K=new ks,P[X]=K),K.getGripSpace()},this.getHand=function(X){let K=P[X];return K===void 0&&(K=new ks,P[X]=K),K.getHandSpace()};function q(X){const K=M.indexOf(X.inputSource);if(K===-1)return;const ae=P[K];ae!==void 0&&(ae.update(X.inputSource,X.frame,l||a),ae.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",J);for(let X=0;X<P.length;X++){const K=M[X];K!==null&&(M[X]=null,P[X].disconnect(K))}B=null,H=null,x.reset();for(const X in h)delete h[X];e.setRenderTarget(y),p=null,d=null,f=null,r=null,A=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",W),r.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(C),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,De=null,ve=null;T.depth&&(ve=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=T.stencil?rr:ir,De=T.stencil?nr:Kn);const Ae={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ae),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Zn(d.textureWidth,d.textureHeight,{format:Kt,type:sn,depthTexture:new Oc(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ae={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ae),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Kt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ye.setContext(r),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function J(X){for(let K=0;K<X.removed.length;K++){const ae=X.removed[K],De=M.indexOf(ae);De>=0&&(M[De]=null,P[De].disconnect(ae))}for(let K=0;K<X.added.length;K++){const ae=X.added[K];let De=M.indexOf(ae);if(De===-1){for(let Ae=0;Ae<P.length;Ae++)if(Ae>=M.length){M.push(ae),De=Ae;break}else if(M[Ae]===null){M[Ae]=ae,De=Ae;break}if(De===-1)break}const ve=P[De];ve&&ve.connect(ae)}}const G=new F,ee=new F;function te(X,K,ae){G.setFromMatrixPosition(K.matrixWorld),ee.setFromMatrixPosition(ae.matrixWorld);const De=G.distanceTo(ee),ve=K.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,Xe=ve[14]/(ve[10]-1),ye=ve[14]/(ve[10]+1),Je=(ve[9]+1)/ve[5],w=(ve[9]-1)/ve[5],Fe=(ve[8]-1)/ve[0],Be=(Ae[8]+1)/Ae[0],$e=Xe*Fe,me=Xe*Be,je=De/(-Fe+Be),Me=je*-Fe;if(K.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Me),X.translateZ(je),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ve[10]===-1)X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Ie=Xe+je,E=ye+je,_=$e-Me,N=me+(De-Me),$=Je*ye/E*Ie,Y=w*ye/E*Ie;X.projectionMatrix.makePerspective(_,N,$,Y,Ie,E),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function de(X,K){K===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(K.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let K=X.near,ae=X.far;x.texture!==null&&(x.depthNear>0&&(K=x.depthNear),x.depthFar>0&&(ae=x.depthFar)),O.near=v.near=b.near=K,O.far=v.far=b.far=ae,(B!==O.near||H!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),B=O.near,H=O.far),O.layers.mask=X.layers.mask|6,b.layers.mask=O.layers.mask&3,v.layers.mask=O.layers.mask&5;const De=X.parent,ve=O.cameras;de(O,De);for(let Ae=0;Ae<ve.length;Ae++)de(ve[Ae],De);ve.length===2?te(O,b,v):O.projectionMatrix.copy(b.projectionMatrix),Le(X,O,De)};function Le(X,K,ae){ae===null?X.matrix.copy(K.matrixWorld):(X.matrix.copy(ae.matrixWorld),X.matrix.invert(),X.matrix.multiply(K.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(K.projectionMatrix),X.projectionMatrixInverse.copy(K.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Xa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(O)},this.getCameraTexture=function(X){return h[X]};let We=null;function Ze(X,K){if(u=K.getViewerPose(l||a),m=K,u!==null){const ae=u.views;p!==null&&(e.setRenderTargetFramebuffer(A,p.framebuffer),e.setRenderTarget(A));let De=!1;ae.length!==O.cameras.length&&(O.cameras.length=0,De=!0);for(let ye=0;ye<ae.length;ye++){const Je=ae[ye];let w=null;if(p!==null)w=p.getViewport(Je);else{const Be=f.getViewSubImage(d,Je);w=Be.viewport,ye===0&&(e.setRenderTargetTextures(A,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(A))}let Fe=L[ye];Fe===void 0&&(Fe=new zt,Fe.layers.enable(ye),Fe.viewport=new at,L[ye]=Fe),Fe.matrix.fromArray(Je.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Je.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(w.x,w.y,w.width,w.height),ye===0&&(O.matrix.copy(Fe.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),De===!0&&O.cameras.push(Fe)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const ye=f.getDepthInformation(ae[0]);ye&&ye.isValid&&ye.texture&&x.init(ye,r.renderState)}if(ve&&ve.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let ye=0;ye<ae.length;ye++){const Je=ae[ye].camera;if(Je){let w=h[Je];w||(w=new Bc,h[Je]=w);const Fe=f.getCameraImage(Je);w.sourceTexture=Fe}}}}for(let ae=0;ae<P.length;ae++){const De=M[ae],ve=P[ae];De!==null&&ve!==void 0&&ve.update(De,K,l||a)}We&&We(X,K),K.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:K}),m=null}const Ye=new Vc;Ye.setAnimationLoop(Ze),this.setAnimationLoop=function(X){We=X},this.dispose=function(){}}}const Wn=new an,Ug=new mt;function Ng(i,e){function t(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function n(x,h){h.color.getRGB(x.fogColor.value,Ic(i)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,T,y,A){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(x,h):h.isMeshToonMaterial?(s(x,h),f(x,h)):h.isMeshPhongMaterial?(s(x,h),u(x,h)):h.isMeshStandardMaterial?(s(x,h),d(x,h),h.isMeshPhysicalMaterial&&p(x,h,A)):h.isMeshMatcapMaterial?(s(x,h),m(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),g(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(a(x,h),h.isLineDashedMaterial&&o(x,h)):h.isPointsMaterial?c(x,h,T,y):h.isSpriteMaterial?l(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,t(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===Ut&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,t(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===Ut&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,t(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,t(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const T=e.get(h),y=T.envMap,A=T.envMapRotation;y&&(x.envMap.value=y,Wn.copy(A),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),x.envMapRotation.value.setFromMatrix4(Ug.makeRotationFromEuler(Wn)),x.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,x.aoMapTransform))}function a(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform))}function o(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function c(x,h,T,y){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*T,x.scale.value=y*.5,h.map&&(x.map.value=h.map,t(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function l(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function u(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function f(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function d(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function p(x,h,T){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Ut&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,h){h.matcap&&(x.matcap.value=h.matcap)}function g(x,h){const T=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Fg(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,y){const A=y.program;n.uniformBlockBinding(T,A)}function l(T,y){let A=r[T.id];A===void 0&&(m(T),A=u(T),r[T.id]=A,T.addEventListener("dispose",x));const P=y.program;n.updateUBOMapping(T,P);const M=e.render.frame;s[T.id]!==M&&(d(T),s[T.id]=M)}function u(T){const y=f();T.__bindingPointIndex=y;const A=i.createBuffer(),P=T.__size,M=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,P,M),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,A),A}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return _t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const y=r[T.id],A=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let M=0,C=A.length;M<C;M++){const U=Array.isArray(A[M])?A[M]:[A[M]];for(let b=0,v=U.length;b<v;b++){const L=U[b];if(p(L,M,b,P)===!0){const O=L.__offset,B=Array.isArray(L.value)?L.value:[L.value];let H=0;for(let q=0;q<B.length;q++){const W=B[q],J=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,O+H,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,H),H+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,y,A,P){const M=T.value,C=y+"_"+A;if(P[C]===void 0)return typeof M=="number"||typeof M=="boolean"?P[C]=M:P[C]=M.clone(),!0;{const U=P[C];if(typeof M=="number"||typeof M=="boolean"){if(U!==M)return P[C]=M,!0}else if(U.equals(M)===!1)return U.copy(M),!0}return!1}function m(T){const y=T.uniforms;let A=0;const P=16;for(let C=0,U=y.length;C<U;C++){const b=Array.isArray(y[C])?y[C]:[y[C]];for(let v=0,L=b.length;v<L;v++){const O=b[v],B=Array.isArray(O.value)?O.value:[O.value];for(let H=0,q=B.length;H<q;H++){const W=B[H],J=g(W),G=A%P,ee=G%J.boundary,te=G+ee;A+=ee,te!==0&&P-te<J.storage&&(A+=P-te),O.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=A,A+=J.storage}}}const M=A%P;return M>0&&(A+=P-M),T.__size=A,T.__cache={},this}function g(T){const y={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(y.boundary=4,y.storage=4):T.isVector2?(y.boundary=8,y.storage=8):T.isVector3||T.isColor?(y.boundary=16,y.storage=12):T.isVector4?(y.boundary=16,y.storage=16):T.isMatrix3?(y.boundary=48,y.storage=48):T.isMatrix4?(y.boundary=64,y.storage=64):T.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",T),y}function x(T){const y=T.target;y.removeEventListener("dispose",x);const A=a.indexOf(y.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function h(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:h}}const Og=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let pn=null;function Bg(){return pn===null&&(pn=new Oh(Og,32,32,Qa,Li),pn.minFilter=Xt,pn.magFilter=Xt,pn.wrapS=gn,pn.wrapT=gn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class zg{constructor(e={}){const{canvas:t=ch(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Set([to,eo,Ja]),g=new Set([sn,Kn,tr,nr,Ka,Za]),x=new Uint32Array(4),h=new Int32Array(4);let T=null,y=null;const A=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let C=!1;this._outputColorSpace=Gt;let U=0,b=0,v=null,L=-1,O=null;const B=new at,H=new at;let q=null;const W=new tt(0);let J=0,G=t.width,ee=t.height,te=1,de=null,Le=null;const We=new at(0,0,G,ee),Ze=new at(0,0,G,ee);let Ye=!1;const X=new io;let K=!1,ae=!1;const De=new mt,ve=new F,Ae=new at,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ye=!1;function Je(){return v===null?te:1}let w=n;function Fe(S,D){return t.getContext(S,D)}try{const S={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ya}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ge,!1),w===null){const D="webgl2";if(w=Fe(D,S),w===null)throw Fe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw S("WebGLRenderer: "+S.message),S}let Be,$e,me,je,Me,Ie,E,_,N,$,Y,k,be,oe,Ee,Se,Z,ne,Re,Ce,he,Ue,R,le;function re(){Be=new qm(w),Be.init(),Ue=new Rg(w,Be),$e=new Bm(w,Be,e,Ue),me=new Cg(w,Be),$e.reversedDepthBuffer&&d&&me.buffers.depth.setReversed(!0),je=new Km(w),Me=new pg,Ie=new wg(w,Be,me,Me,$e,Ue,je),E=new Vm(M),_=new $m(M),N=new ep(w),R=new Fm(w,N),$=new Ym(w,N,je,R),Y=new Jm(w,$,N,je),Re=new Zm(w,$e,Ie),Se=new zm(Me),k=new hg(M,E,_,Be,$e,R,Se),be=new Ng(M,Me),oe=new xg,Ee=new Mg(Be),ne=new Nm(M,E,_,me,Y,p,c),Z=new Tg(M,Y,$e),le=new Fg(w,je,$e,me),Ce=new Om(w,Be,je),he=new jm(w,Be,je),je.programs=k.programs,M.capabilities=$e,M.extensions=Be,M.properties=Me,M.renderLists=oe,M.shadowMap=Z,M.state=me,M.info=je}re();const se=new Ig(M,w);this.xr=se,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const S=Be.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Be.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize(G,ee,!1))},this.getSize=function(S){return S.set(G,ee)},this.setSize=function(S,D,z=!0){if(se.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}G=S,ee=D,t.width=Math.floor(S*te),t.height=Math.floor(D*te),z===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(G*te,ee*te).floor()},this.setDrawingBufferSize=function(S,D,z){G=S,ee=D,te=z,t.width=Math.floor(S*z),t.height=Math.floor(D*z),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(We)},this.setViewport=function(S,D,z,V){S.isVector4?We.set(S.x,S.y,S.z,S.w):We.set(S,D,z,V),me.viewport(B.copy(We).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(Ze)},this.setScissor=function(S,D,z,V){S.isVector4?Ze.set(S.x,S.y,S.z,S.w):Ze.set(S,D,z,V),me.scissor(H.copy(Ze).multiplyScalar(te).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(S){me.setScissorTest(Ye=S)},this.setOpaqueSort=function(S){de=S},this.setTransparentSort=function(S){Le=S},this.getClearColor=function(S){return S.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(S=!0,D=!0,z=!0){let V=0;if(S){let I=!1;if(v!==null){const ie=v.texture.format;I=m.has(ie)}if(I){const ie=v.texture.type,pe=g.has(ie),_e=ne.getClearColor(),xe=ne.getClearAlpha(),Pe=_e.r,Ne=_e.g,Te=_e.b;pe?(x[0]=Pe,x[1]=Ne,x[2]=Te,x[3]=xe,w.clearBufferuiv(w.COLOR,0,x)):(h[0]=Pe,h[1]=Ne,h[2]=Te,h[3]=xe,w.clearBufferiv(w.COLOR,0,h))}else V|=w.COLOR_BUFFER_BIT}D&&(V|=w.DEPTH_BUFFER_BIT),z&&(V|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ne.dispose(),oe.dispose(),Ee.dispose(),Me.dispose(),E.dispose(),_.dispose(),Y.dispose(),R.dispose(),le.dispose(),k.dispose(),se.dispose(),se.removeEventListener("sessionstart",ro),se.removeEventListener("sessionend",so),On.stop()};function Q(S){S.preventDefault(),jo("WebGLRenderer: Context Lost."),C=!0}function j(){jo("WebGLRenderer: Context Restored."),C=!1;const S=je.autoReset,D=Z.enabled,z=Z.autoUpdate,V=Z.needsUpdate,I=Z.type;re(),je.autoReset=S,Z.enabled=D,Z.autoUpdate=z,Z.needsUpdate=V,Z.type=I}function ge(S){_t("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function ze(S){const D=S.target;D.removeEventListener("dispose",ze),ft(D)}function ft(S){it(S),Me.remove(S)}function it(S){const D=Me.get(S).programs;D!==void 0&&(D.forEach(function(z){k.releaseProgram(z)}),S.isShaderMaterial&&k.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,z,V,I,ie){D===null&&(D=Xe);const pe=I.isMesh&&I.matrixWorld.determinant()<0,_e=$c(S,D,z,V,I);me.setMaterial(V,pe);let xe=z.index,Pe=1;if(V.wireframe===!0){if(xe=$.getWireframeAttribute(z),xe===void 0)return;Pe=2}const Ne=z.drawRange,Te=z.attributes.position;let qe=Ne.start*Pe,rt=(Ne.start+Ne.count)*Pe;ie!==null&&(qe=Math.max(qe,ie.start*Pe),rt=Math.min(rt,(ie.start+ie.count)*Pe)),xe!==null?(qe=Math.max(qe,0),rt=Math.min(rt,xe.count)):Te!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,Te.count));const xt=rt-qe;if(xt<0||xt===1/0)return;R.setup(I,V,_e,z,xe);let gt,ot=Ce;if(xe!==null&&(gt=N.get(xe),ot=he,ot.setIndex(gt)),I.isMesh)V.wireframe===!0?(me.setLineWidth(V.wireframeLinewidth*Je()),ot.setMode(w.LINES)):ot.setMode(w.TRIANGLES);else if(I.isLine){let we=V.linewidth;we===void 0&&(we=1),me.setLineWidth(we*Je()),I.isLineSegments?ot.setMode(w.LINES):I.isLineLoop?ot.setMode(w.LINE_LOOP):ot.setMode(w.LINE_STRIP)}else I.isPoints?ot.setMode(w.POINTS):I.isSprite&&ot.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)sr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))ot.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,dt=I._multiDrawCounts,Qe=I._multiDrawCount,Nt=xe?N.get(xe).bytesPerElement:1,ii=Me.get(V).currentProgram.getUniforms();for(let Ft=0;Ft<Qe;Ft++)ii.setValue(w,"_gl_DrawID",Ft),ot.render(we[Ft]/Nt,dt[Ft])}else if(I.isInstancedMesh)ot.renderInstances(qe,xt,I.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,dt=Math.min(z.instanceCount,we);ot.renderInstances(qe,xt,dt)}else ot.render(qe,xt)};function Zt(S,D,z){S.transparent===!0&&S.side===xn&&S.forceSinglePass===!1?(S.side=Ut,S.needsUpdate=!0,ur(S,D,z),S.side=Fn,S.needsUpdate=!0,ur(S,D,z),S.side=xn):ur(S,D,z)}this.compile=function(S,D,z=null){z===null&&(z=S),y=Ee.get(z),y.init(D),P.push(y),z.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(y.pushLight(I),I.castShadow&&y.pushShadow(I))}),S!==z&&S.traverseVisible(function(I){I.isLight&&I.layers.test(D.layers)&&(y.pushLight(I),I.castShadow&&y.pushShadow(I))}),y.setupLights();const V=new Set;return S.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ie=I.material;if(ie)if(Array.isArray(ie))for(let pe=0;pe<ie.length;pe++){const _e=ie[pe];Zt(_e,z,I),V.add(_e)}else Zt(ie,z,I),V.add(ie)}),y=P.pop(),V},this.compileAsync=function(S,D,z=null){const V=this.compile(S,D,z);return new Promise(I=>{function ie(){if(V.forEach(function(pe){Me.get(pe).currentProgram.isReady()&&V.delete(pe)}),V.size===0){I(S);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let $t=null;function Xc(S){$t&&$t(S)}function ro(){On.stop()}function so(){On.start()}const On=new Vc;On.setAnimationLoop(Xc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(S){$t=S,se.setAnimationLoop(S),S===null?On.stop():On.start()},se.addEventListener("sessionstart",ro),se.addEventListener("sessionend",so),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){_t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(D),D=se.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,D,v),y=Ee.get(S,P.length),y.init(D),P.push(y),De.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),X.setFromProjectionMatrix(De,tn,D.reversedDepth),ae=this.localClippingEnabled,K=Se.init(this.clippingPlanes,ae),T=oe.get(S,A.length),T.init(),A.push(T),se.enabled===!0&&se.isPresenting===!0){const ie=M.xr.getDepthSensingMesh();ie!==null&&cs(ie,D,-1/0,M.sortObjects)}cs(S,D,0,M.sortObjects),T.finish(),M.sortObjects===!0&&T.sort(de,Le),ye=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,ye&&ne.addToRenderList(T,S),this.info.render.frame++,K===!0&&Se.beginShadows();const z=y.state.shadowsArray;Z.render(z,S,D),K===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=T.opaque,I=T.transmissive;if(y.setupLights(),D.isArrayCamera){const ie=D.cameras;if(I.length>0)for(let pe=0,_e=ie.length;pe<_e;pe++){const xe=ie[pe];oo(V,I,S,xe)}ye&&ne.render(S);for(let pe=0,_e=ie.length;pe<_e;pe++){const xe=ie[pe];ao(T,S,xe,xe.viewport)}}else I.length>0&&oo(V,I,S,D),ye&&ne.render(S),ao(T,S,D);v!==null&&b===0&&(Ie.updateMultisampleRenderTarget(v),Ie.updateRenderTargetMipmap(v)),S.isScene===!0&&S.onAfterRender(M,S,D),R.resetDefaultState(),L=-1,O=null,P.pop(),P.length>0?(y=P[P.length-1],K===!0&&Se.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?T=A[A.length-1]:T=null};function cs(S,D,z,V){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)y.pushLight(S),S.castShadow&&y.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||X.intersectsSprite(S)){V&&Ae.setFromMatrixPosition(S.matrixWorld).applyMatrix4(De);const pe=Y.update(S),_e=S.material;_e.visible&&T.push(S,pe,_e,z,Ae.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||X.intersectsObject(S))){const pe=Y.update(S),_e=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Ae.copy(S.boundingSphere.center)):(pe.boundingSphere===null&&pe.computeBoundingSphere(),Ae.copy(pe.boundingSphere.center)),Ae.applyMatrix4(S.matrixWorld).applyMatrix4(De)),Array.isArray(_e)){const xe=pe.groups;for(let Pe=0,Ne=xe.length;Pe<Ne;Pe++){const Te=xe[Pe],qe=_e[Te.materialIndex];qe&&qe.visible&&T.push(S,pe,qe,z,Ae.z,Te)}}else _e.visible&&T.push(S,pe,_e,z,Ae.z,null)}}const ie=S.children;for(let pe=0,_e=ie.length;pe<_e;pe++)cs(ie[pe],D,z,V)}function ao(S,D,z,V){const{opaque:I,transmissive:ie,transparent:pe}=S;y.setupLightsView(z),K===!0&&Se.setGlobalState(M.clippingPlanes,z),V&&me.viewport(B.copy(V)),I.length>0&&cr(I,D,z),ie.length>0&&cr(ie,D,z),pe.length>0&&cr(pe,D,z),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function oo(S,D,z,V){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[V.id]===void 0&&(y.state.transmissionRenderTarget[V.id]=new Zn(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?Li:sn,minFilter:Yn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ie=y.state.transmissionRenderTarget[V.id],pe=V.viewport||B;ie.setSize(pe.z*M.transmissionResolutionScale,pe.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),xe=M.getActiveCubeFace(),Pe=M.getActiveMipmapLevel();M.setRenderTarget(ie),M.getClearColor(W),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),ye&&ne.render(z);const Ne=M.toneMapping;M.toneMapping=In;const Te=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),y.setupLightsView(V),K===!0&&Se.setGlobalState(M.clippingPlanes,V),cr(S,z,V),Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let rt=0,xt=D.length;rt<xt;rt++){const gt=D[rt],{object:ot,geometry:we,material:dt,group:Qe}=gt;if(dt.side===xn&&ot.layers.test(V.layers)){const Nt=dt.side;dt.side=Ut,dt.needsUpdate=!0,lo(ot,z,V,we,dt,Qe),dt.side=Nt,dt.needsUpdate=!0,qe=!0}}qe===!0&&(Ie.updateMultisampleRenderTarget(ie),Ie.updateRenderTargetMipmap(ie))}M.setRenderTarget(_e,xe,Pe),M.setClearColor(W,J),Te!==void 0&&(V.viewport=Te),M.toneMapping=Ne}function cr(S,D,z){const V=D.isScene===!0?D.overrideMaterial:null;for(let I=0,ie=S.length;I<ie;I++){const pe=S[I],{object:_e,geometry:xe,group:Pe}=pe;let Ne=pe.material;Ne.allowOverride===!0&&V!==null&&(Ne=V),_e.layers.test(z.layers)&&lo(_e,D,z,xe,Ne,Pe)}}function lo(S,D,z,V,I,ie){S.onBeforeRender(M,D,z,V,I,ie),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),I.onBeforeRender(M,D,z,V,S,ie),I.transparent===!0&&I.side===xn&&I.forceSinglePass===!1?(I.side=Ut,I.needsUpdate=!0,M.renderBufferDirect(z,D,V,I,S,ie),I.side=Fn,I.needsUpdate=!0,M.renderBufferDirect(z,D,V,I,S,ie),I.side=xn):M.renderBufferDirect(z,D,V,I,S,ie),S.onAfterRender(M,D,z,V,I,ie)}function ur(S,D,z){D.isScene!==!0&&(D=Xe);const V=Me.get(S),I=y.state.lights,ie=y.state.shadowsArray,pe=I.state.version,_e=k.getParameters(S,I.state,ie,D,z),xe=k.getProgramCacheKey(_e);let Pe=V.programs;V.environment=S.isMeshStandardMaterial?D.environment:null,V.fog=D.fog,V.envMap=(S.isMeshStandardMaterial?_:E).get(S.envMap||V.environment),V.envMapRotation=V.environment!==null&&S.envMap===null?D.environmentRotation:S.envMapRotation,Pe===void 0&&(S.addEventListener("dispose",ze),Pe=new Map,V.programs=Pe);let Ne=Pe.get(xe);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===pe)return uo(S,_e),Ne}else _e.uniforms=k.getUniforms(S),S.onBeforeCompile(_e,M),Ne=k.acquireProgram(_e,xe),Pe.set(xe,Ne),V.uniforms=_e.uniforms;const Te=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Te.clippingPlanes=Se.uniform),uo(S,_e),V.needsLights=Yc(S),V.lightsStateVersion=pe,V.needsLights&&(Te.ambientLightColor.value=I.state.ambient,Te.lightProbe.value=I.state.probe,Te.directionalLights.value=I.state.directional,Te.directionalLightShadows.value=I.state.directionalShadow,Te.spotLights.value=I.state.spot,Te.spotLightShadows.value=I.state.spotShadow,Te.rectAreaLights.value=I.state.rectArea,Te.ltc_1.value=I.state.rectAreaLTC1,Te.ltc_2.value=I.state.rectAreaLTC2,Te.pointLights.value=I.state.point,Te.pointLightShadows.value=I.state.pointShadow,Te.hemisphereLights.value=I.state.hemi,Te.directionalShadowMap.value=I.state.directionalShadowMap,Te.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Te.spotShadowMap.value=I.state.spotShadowMap,Te.spotLightMatrix.value=I.state.spotLightMatrix,Te.spotLightMap.value=I.state.spotLightMap,Te.pointShadowMap.value=I.state.pointShadowMap,Te.pointShadowMatrix.value=I.state.pointShadowMatrix),V.currentProgram=Ne,V.uniformsList=null,Ne}function co(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=Xr.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function uo(S,D){const z=Me.get(S);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.batchingColor=D.batchingColor,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.instancingMorph=D.instancingMorph,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function $c(S,D,z,V,I){D.isScene!==!0&&(D=Xe),Ie.resetTextureUnits();const ie=D.fog,pe=V.isMeshStandardMaterial?D.environment:null,_e=v===null?M.outputColorSpace:v.isXRRenderTarget===!0?v.texture.colorSpace:wi,xe=(V.isMeshStandardMaterial?_:E).get(V.envMap||pe),Pe=V.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Te=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,rt=!!z.morphAttributes.color;let xt=In;V.toneMapped&&(v===null||v.isXRRenderTarget===!0)&&(xt=M.toneMapping);const gt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ot=gt!==void 0?gt.length:0,we=Me.get(V),dt=y.state.lights;if(K===!0&&(ae===!0||S!==O)){const Ct=S===O&&V.id===L;Se.setState(V,S,Ct)}let Qe=!1;V.version===we.__version?(we.needsLights&&we.lightsStateVersion!==dt.state.version||we.outputColorSpace!==_e||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==xe||V.fog===!0&&we.fog!==ie||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Se.numPlanes||we.numIntersection!==Se.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Ne||we.morphTargets!==Te||we.morphNormals!==qe||we.morphColors!==rt||we.toneMapping!==xt||we.morphTargetsCount!==ot)&&(Qe=!0):(Qe=!0,we.__version=V.version);let Nt=we.currentProgram;Qe===!0&&(Nt=ur(V,D,I));let ii=!1,Ft=!1,Fi=!1;const ht=Nt.getUniforms(),Pt=we.uniforms;if(me.useProgram(Nt.program)&&(ii=!0,Ft=!0,Fi=!0),V.id!==L&&(L=V.id,Ft=!0),ii||O!==S){me.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ht.setValue(w,"projectionMatrix",S.projectionMatrix),ht.setValue(w,"viewMatrix",S.matrixWorldInverse);const Lt=ht.map.cameraPosition;Lt!==void 0&&Lt.setValue(w,ve.setFromMatrixPosition(S.matrixWorld)),$e.logarithmicDepthBuffer&&ht.setValue(w,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ht.setValue(w,"isOrthographic",S.isOrthographicCamera===!0),O!==S&&(O=S,Ft=!0,Fi=!0)}if(I.isSkinnedMesh){ht.setOptional(w,I,"bindMatrix"),ht.setOptional(w,I,"bindMatrixInverse");const Ct=I.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),ht.setValue(w,"boneTexture",Ct.boneTexture,Ie))}I.isBatchedMesh&&(ht.setOptional(w,I,"batchingTexture"),ht.setValue(w,"batchingTexture",I._matricesTexture,Ie),ht.setOptional(w,I,"batchingIdTexture"),ht.setValue(w,"batchingIdTexture",I._indirectTexture,Ie),ht.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&ht.setValue(w,"batchingColorTexture",I._colorsTexture,Ie));const kt=z.morphAttributes;if((kt.position!==void 0||kt.normal!==void 0||kt.color!==void 0)&&Re.update(I,z,Nt),(Ft||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,ht.setValue(w,"receiveShadow",I.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Pt.envMap.value=xe,Pt.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&D.environment!==null&&(Pt.envMapIntensity.value=D.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=Bg()),Ft&&(ht.setValue(w,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&qc(Pt,Fi),ie&&V.fog===!0&&be.refreshFogUniforms(Pt,ie),be.refreshMaterialUniforms(Pt,V,te,ee,y.state.transmissionRenderTarget[S.id]),Xr.upload(w,co(we),Pt,Ie)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Xr.upload(w,co(we),Pt,Ie),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ht.setValue(w,"center",I.center),ht.setValue(w,"modelViewMatrix",I.modelViewMatrix),ht.setValue(w,"normalMatrix",I.normalMatrix),ht.setValue(w,"modelMatrix",I.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ct=V.uniformsGroups;for(let Lt=0,us=Ct.length;Lt<us;Lt++){const Bn=Ct[Lt];le.update(Bn,Nt),le.bind(Bn,Nt)}}return Nt}function qc(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function Yc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(S,D,z){const V=Me.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Me.get(S.texture).__webglTexture=D,Me.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,D){const z=Me.get(S);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0};const jc=w.createFramebuffer();this.setRenderTarget=function(S,D=0,z=0){v=S,U=D,b=z;let V=!0,I=null,ie=!1,pe=!1;if(S){const xe=Me.get(S);if(xe.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(w.FRAMEBUFFER,null),V=!1;else if(xe.__webglFramebuffer===void 0)Ie.setupRenderTarget(S);else if(xe.__hasExternalTextures)Ie.rebindTextures(S,Me.get(S.texture).__webglTexture,Me.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Te=S.depthTexture;if(xe.__boundDepthTexture!==Te){if(Te!==null&&Me.has(Te)&&(S.width!==Te.image.width||S.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ie.setupDepthRenderbuffer(S)}}const Pe=S.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(pe=!0);const Ne=Me.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?I=Ne[D][z]:I=Ne[D],ie=!0):S.samples>0&&Ie.useMultisampledRTT(S)===!1?I=Me.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?I=Ne[z]:I=Ne,B.copy(S.viewport),H.copy(S.scissor),q=S.scissorTest}else B.copy(We).multiplyScalar(te).floor(),H.copy(Ze).multiplyScalar(te).floor(),q=Ye;if(z!==0&&(I=jc),me.bindFramebuffer(w.FRAMEBUFFER,I)&&V&&me.drawBuffers(S,I),me.viewport(B),me.scissor(H),me.setScissorTest(q),ie){const xe=Me.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,xe.__webglTexture,z)}else if(pe){const xe=D;for(let Pe=0;Pe<S.textures.length;Pe++){const Ne=Me.get(S.textures[Pe]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Pe,Ne.__webglTexture,z,xe)}}else if(S!==null&&z!==0){const xe=Me.get(S.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,xe.__webglTexture,z)}L=-1},this.readRenderTargetPixels=function(S,D,z,V,I,ie,pe,_e=0){if(!(S&&S.isWebGLRenderTarget)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe){me.bindFramebuffer(w.FRAMEBUFFER,xe);try{const Pe=S.textures[_e],Ne=Pe.format,Te=Pe.type;if(!$e.textureFormatReadable(Ne)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$e.textureTypeReadable(Te)){_t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-V&&z>=0&&z<=S.height-I&&(S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_e),w.readPixels(D,z,V,I,Ue.convert(Ne),Ue.convert(Te),ie))}finally{const Pe=v!==null?Me.get(v).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(S,D,z,V,I,ie,pe,_e=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Me.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&pe!==void 0&&(xe=xe[pe]),xe)if(D>=0&&D<=S.width-V&&z>=0&&z<=S.height-I){me.bindFramebuffer(w.FRAMEBUFFER,xe);const Pe=S.textures[_e],Ne=Pe.format,Te=Pe.type;if(!$e.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$e.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.bufferData(w.PIXEL_PACK_BUFFER,ie.byteLength,w.STREAM_READ),S.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+_e),w.readPixels(D,z,V,I,Ue.convert(Ne),Ue.convert(Te),0);const rt=v!==null?Me.get(v).__webglFramebuffer:null;me.bindFramebuffer(w.FRAMEBUFFER,rt);const xt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await uh(w,xt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,qe),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ie),w.deleteBuffer(qe),w.deleteSync(xt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,D=null,z=0){const V=Math.pow(2,-z),I=Math.floor(S.image.width*V),ie=Math.floor(S.image.height*V),pe=D!==null?D.x:0,_e=D!==null?D.y:0;Ie.setTexture2D(S,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,pe,_e,I,ie),me.unbindTexture()};const Kc=w.createFramebuffer(),Zc=w.createFramebuffer();this.copyTextureToTexture=function(S,D,z=null,V=null,I=0,ie=null){ie===null&&(I!==0?(sr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ie=I,I=0):ie=0);let pe,_e,xe,Pe,Ne,Te,qe,rt,xt;const gt=S.isCompressedTexture?S.mipmaps[ie]:S.image;if(z!==null)pe=z.max.x-z.min.x,_e=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,Pe=z.min.x,Ne=z.min.y,Te=z.isBox3?z.min.z:0;else{const kt=Math.pow(2,-I);pe=Math.floor(gt.width*kt),_e=Math.floor(gt.height*kt),S.isDataArrayTexture?xe=gt.depth:S.isData3DTexture?xe=Math.floor(gt.depth*kt):xe=1,Pe=0,Ne=0,Te=0}V!==null?(qe=V.x,rt=V.y,xt=V.z):(qe=0,rt=0,xt=0);const ot=Ue.convert(D.format),we=Ue.convert(D.type);let dt;D.isData3DTexture?(Ie.setTexture3D(D,0),dt=w.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(Ie.setTexture2DArray(D,0),dt=w.TEXTURE_2D_ARRAY):(Ie.setTexture2D(D,0),dt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const Qe=w.getParameter(w.UNPACK_ROW_LENGTH),Nt=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ii=w.getParameter(w.UNPACK_SKIP_PIXELS),Ft=w.getParameter(w.UNPACK_SKIP_ROWS),Fi=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,gt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,gt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ne),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Te);const ht=S.isDataArrayTexture||S.isData3DTexture,Pt=D.isDataArrayTexture||D.isData3DTexture;if(S.isDepthTexture){const kt=Me.get(S),Ct=Me.get(D),Lt=Me.get(kt.__renderTarget),us=Me.get(Ct.__renderTarget);me.bindFramebuffer(w.READ_FRAMEBUFFER,Lt.__webglFramebuffer),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,us.__webglFramebuffer);for(let Bn=0;Bn<xe;Bn++)ht&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(S).__webglTexture,I,Te+Bn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Me.get(D).__webglTexture,ie,xt+Bn)),w.blitFramebuffer(Pe,Ne,pe,_e,qe,rt,pe,_e,w.DEPTH_BUFFER_BIT,w.NEAREST);me.bindFramebuffer(w.READ_FRAMEBUFFER,null),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||S.isRenderTargetTexture||Me.has(S)){const kt=Me.get(S),Ct=Me.get(D);me.bindFramebuffer(w.READ_FRAMEBUFFER,Kc),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,Zc);for(let Lt=0;Lt<xe;Lt++)ht?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,kt.__webglTexture,I,Te+Lt):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,kt.__webglTexture,I),Pt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ct.__webglTexture,ie,xt+Lt):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ct.__webglTexture,ie),I!==0?w.blitFramebuffer(Pe,Ne,pe,_e,qe,rt,pe,_e,w.COLOR_BUFFER_BIT,w.NEAREST):Pt?w.copyTexSubImage3D(dt,ie,qe,rt,xt+Lt,Pe,Ne,pe,_e):w.copyTexSubImage2D(dt,ie,qe,rt,Pe,Ne,pe,_e);me.bindFramebuffer(w.READ_FRAMEBUFFER,null),me.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Pt?S.isDataTexture||S.isData3DTexture?w.texSubImage3D(dt,ie,qe,rt,xt,pe,_e,xe,ot,we,gt.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(dt,ie,qe,rt,xt,pe,_e,xe,ot,gt.data):w.texSubImage3D(dt,ie,qe,rt,xt,pe,_e,xe,ot,we,gt):S.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,ie,qe,rt,pe,_e,ot,we,gt.data):S.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,ie,qe,rt,gt.width,gt.height,ot,gt.data):w.texSubImage2D(w.TEXTURE_2D,ie,qe,rt,pe,_e,ot,we,gt);w.pixelStorei(w.UNPACK_ROW_LENGTH,Qe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Nt),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ii),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ft),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Fi),ie===0&&D.generateMipmaps&&w.generateMipmap(dt),me.unbindTexture()},this.initRenderTarget=function(S){Me.get(S).__webglFramebuffer===void 0&&Ie.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Ie.setTextureCube(S,0):S.isData3DTexture?Ie.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Ie.setTexture2DArray(S,0):Ie.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){U=0,b=0,v=null,me.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}var Vg=on('<div class="h-full w-full"></div>');function kg(i,e){Jn(e,!0);const t=1024,n="#0b57d0",r='bold 24px "Courier New", monospace',s=40,a=24,o=40,c=40,l=40,u=.7,f=.8,d=3,p=5,m=.7,g=15,x=36,h=7,T=3.5,y=.1,A=.15,P=.9,M=.2,C=.1,U="#0b57d0",b=.2,v="#a8c7fa",L=.3,O=45,B=8,H=.5,q=10,W=10,J=10,G=1,ee="#a8c7fa",te=-10,de=-10,Le=-10,We=.5,Ze="#0b57d0",Ye=["#a8c7fa","#6dd58c","#ffb74d","#f28b82","#c4c7c5"],X=["function","const","let","return","if","else","import","from","async","await"],K=()=>{const Ae=document.createElement("canvas");Ae.width=t,Ae.height=t;const Xe=Ae.getContext("2d");if(!Xe)return new xl(Ae);Xe.fillStyle=n,Xe.fillRect(0,0,t,t),Xe.font=r,Xe.textAlign="left",Xe.textBaseline="top";for(let Je=0;Je<s;Je++){const w=c+Je*a;let Fe=o;Math.random()>u&&(Fe+=l),Math.random()>f&&(Fe+=l);const Be=Math.floor(Math.random()*p)+d;for(let $e=0;$e<Be;$e++){const me=Math.random()>m;Xe.fillStyle=me?Ye[0]:Ye[Math.floor(Math.random()*Ye.length)];const je=me?X[Math.floor(Math.random()*X.length)]:Math.random().toString(x).substring(h);Xe.fillText(je,Fe,w),Fe+=Xe.measureText(je).width+g}}const ye=Xe.createLinearGradient(0,0,t,t);return ye.addColorStop(0,"rgba(11, 87, 208, 0.2)"),ye.addColorStop(1,"rgba(0, 0, 0, 0.6)"),Xe.fillStyle=ye,Xe.fillRect(0,0,t,t),new xl(Ae)};let ae=zr(void 0),De;wu(()=>{if(!ct(ae))return;const Ae=new Fh,Xe=new zt(O,ct(ae).clientWidth/ct(ae).clientHeight,.1,1e3);Xe.position.z=B;const ye=new zg({alpha:!0,antialias:!0});ye.setSize(ct(ae).clientWidth,ct(ae).clientHeight),ye.setPixelRatio(window.devicePixelRatio),ct(ae).appendChild(ye.domElement);const Je=new Kh(16777215,H);Ae.add(Je);const w=new Sl(ee,G);w.position.set(q,W,J),Ae.add(w);const Fe=new Sl(Ze,We);Fe.position.set(te,de,Le),Ae.add(Fe);const Be=new Ui(T,T,T),$e=K(),me=new Wh({map:$e,color:16777215,roughness:M,metalness:C,emissive:U,emissiveIntensity:b,transparent:!0,opacity:P}),je=new bn(Be,me);Ae.add(je);const Me=new Gh(Be),Ie=new Fc({color:v,transparent:!0,opacity:L}),E=new Hh(Me,Ie);je.add(E);const _=new Jh,N=()=>{De=requestAnimationFrame(N);const Y=_.getDelta();je.rotation.x+=Y*y,je.rotation.y+=Y*A,ye.render(Ae,Xe)};N();const $=()=>{if(!ct(ae))return;const Y=ct(ae).clientWidth,k=ct(ae).clientHeight;Xe.aspect=Y/k,Xe.updateProjectionMatrix(),ye.setSize(Y,k)};return window.addEventListener("resize",$),()=>{window.removeEventListener("resize",$),cancelAnimationFrame(De),ct(ae)&&ye.domElement&&ct(ae).removeChild(ye.domElement),Be.dispose(),me.dispose(),$e.dispose(),ye.dispose()}});var ve=Vg();Nu(ve,Ae=>Pn(ae,Ae),()=>ct(ae)),St(i,ve),Qn()}var Hg=yn('<svg><defs><linearGradient id="action-gradient" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4285F4"></stop><stop offset="50%" stop-color="#9B72CB"></stop><stop offset="100%" stop-color="#D96570"></stop></linearGradient></defs></svg>');function Gg(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=Hg();ni(r,()=>({fill:"none",height:"57",viewBox:"0 0 57 57",width:"57",xmlns:"http://www.w3.org/2000/svg",class:t()??"",...n})),St(i,r)}var Wg=yn('<svg><title>Arrow</title><path d="M9 5l7 7-7 7"></path></svg>');function Xg(i,e){let t=ei(e,"class",3,""),n=ti(e,["$$slots","$$events","$$legacy","class"]);var r=Wg();ni(r,()=>({"aria-hidden":"true",class:`h-6 w-6 ${t()??""??""}`,...n,fill:"currentColor",viewBox:"0 0 24 24"})),St(i,r)}var $g=on('<section class="browser-section"><div class="browser-section-content"><h2> </h2> <div class="desktop-graphic"><div class="screen shine"><div class="screen-content"><a class="browser-section-cta" href="https://codewiki.google/github.com/google-gemini/gemini-cli" rel="noopener" target="_blank"><div class="browser-section-cta-content"><!> <p> </p> <!></div></a> <!> <div class="browser-bar"><div class="browser-dots"><div class="dot"></div> <div class="dot"></div> <div class="dot"></div></div> <div class="address-bar"></div></div></div></div> <div class="base"></div></div></div></section>');function qg(i,e){Jn(e,!1),Pi();var t=$g(),n=fe(t),r=fe(n),s=fe(r,!0);ue(r);var a=Ge(r,2),o=fe(a),c=fe(o),l=fe(c),u=fe(l),f=fe(u);Gg(f,{});var d=Ge(f,2),p=fe(d,!0);ue(d);var m=Ge(d,2);Xg(m,{}),ue(u),ue(l);var g=Ge(l,2);kg(g,{}),qr(2),ue(c),ue(o),qr(2),ue(a),ue(n),ue(t),yi((x,h)=>{ut(s,x),ut(p,h)},[()=>lt.t("browserSection.title")||"Add the missing dimension to your software",()=>lt.t("browserSection.cta")||"See Code Wiki in action"]),St(i,t),Qn()}function Yg(){const i=document.querySelector(".header-search"),e=document.querySelector(".hero-section");if(!(i&&e))return;new IntersectionObserver(n=>{for(const r of n)i.classList.toggle("visible",!r.isIntersecting)},{threshold:.1,rootMargin:"-100px 0px 0px 0px"}).observe(e)}function jg(){const i=document.querySelector(".sticky-section"),e=document.querySelector(".split-sections"),t=document.querySelector(".scroll-animation-container"),n=document.querySelectorAll(".sticky-visual .layer");if(!(i&&e&&t)||n.length===0)return;const r=n.length,s=document.createElement("div");s.style.willChange="transform",t.innerHTML="";for(const o of n)o.style.height=`${t.offsetHeight}px`,s.appendChild(o);t.appendChild(s);const a=()=>{const o=e.getBoundingClientRect(),c=e.offsetHeight-window.innerHeight,l=-o.top/c,u=Math.max(0,Math.min(1,l));if(Number.isNaN(u))return;const f=(r-1)*t.offsetHeight,d=-u*f;s.style.transform=`translateY(${d}px)`};window.addEventListener("scroll",a,{passive:!0}),a()}function Kg(){typeof window<"u"&&(Yg(),jg())}var Zg=on('<sdlc-agents-root><landing-page><!> <app-home><div class="home-container"><!> <section class="sticky-hero-cube-section"></section> <!> <!> <!></div></app-home></landing-page> <!></sdlc-agents-root>',2);function s_(i,e){Jn(e,!1),Jc(()=>{Kg()}),Pi();var t=Zg(),n=fe(t),r=fe(n);rd(r);var s=Ge(r,2),a=fe(s),o=fe(a);dd(o,{});var c=Ge(o,4);gd(c,{});var l=Ge(c,2);bd(l,{});var u=Ge(l,2);qg(u,{}),ue(a),ue(s),ue(n);var f=Ge(n,2);ud(f),ue(t),St(i,t),Qn()}export{s_ as component};
