(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-00b5864e"],{"057f":function(t,e,n){var r=n("fc6a"),a=n("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return a(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?c(t):a(r(t))}},"0748":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("table",{staticClass:"table"},[t._t("header",[n("thead",[n("tr",t._l(t.columns,(function(e){return n("th",{key:e},[t._v(t._s(e))])})),0)])],{columns:t.columns}),t._t("body",[n("tbody",t._l(t.rows,(function(e,r){return n("tr",{key:r},t._l(e,(function(e,r){return n("td",{key:r},[t._v(t._s(e))])})),0)})),0)],{rows:t.rows})],2),n("div",{staticClass:"pagination",on:{show:function(e){null!==t.prev_page||t.next_page}}},t._l(t.pagination.last_page,(function(e){return n("a",{directives:[{name:"show",rawName:"v-show",value:t.pagination.last_page>1,expression:"pagination.last_page > 1"}],key:e,class:{active:e==t.pagination.page},attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.request(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])},a=[],o={name:"Table",props:["columns","rows","next_page","prev_page","pagination"],methods:{request:function(t){this.pagination.page=t,this.$emit("onRequest")}}},i=o,c=n("2877"),s=Object(c["a"])(i,r,a,!1,null,null,null);e["a"]=s.exports},"159b":function(t,e,n){var r=n("da84"),a=n("fdbc"),o=n("17c2"),i=n("9112");for(var c in a){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==o)try{i(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,n){"use strict";var r=n("b727").forEach,a=n("a640"),o=n("ae40"),i=a("forEach"),c=o("forEach");t.exports=i&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"2a7d":function(t,e,n){"use strict";var r,a,o={name:"Button",props:{tag:{default:"a"},btnClass:{type:Array,default:function(){return[]}},to:{default:!1}},render:function(t){var e=this,n={class:"btn"};return this.to?n.on={click:function(){return e.$router.push(e.to)}}:n.on={click:function(){return e.$emit("click")}},t(this.tag,n,this.$slots.default)}},i=o,c=n("2877"),s=Object(c["a"])(i,r,a,!1,null,null,null);e["a"]=s.exports},4160:function(t,e,n){"use strict";var r=n("23e7"),a=n("17c2");r({target:"Array",proto:!0,forced:[].forEach!=a},{forEach:a})},"47a9":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-header"},[n("h1",{staticClass:"card-title"},[t._v("HHT")]),n("x-btn",{staticClass:"btn-sm btn-icon",attrs:{to:"/"+t.$route.meta.resource+"/create"}},[t._v(" Add HHT"),n("i",{staticClass:"fa fa-plus ml-1"})])],1),n("x-table",{attrs:{columns:t.columns,rows:t.data,pagination:t.pagination},on:{onRequest:t.loadData,"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"header",fn:function(e){var r=e.columns;return[n("thead",[n("tr",t._l(r,(function(e){return n("th",{key:e},[t._v(t._s(e))])})),0)])]}},{key:"body",fn:function(e){var r=e.rows;return[n("tbody",t._l(r,(function(e,r){return n("tr",{key:r},[n("td",[n("router-link",{attrs:{to:"/"+t.$route.meta.resource+"/"+e.id}},[t._v(" "+t._s(e.serial_no||"-")+" ")])],1),n("td",[t._v(t._s(e.pma?e.pma.hhp.serial_no:"-"))]),n("td",[t._v(t._s(e.pma?e.pma.name:"-"))]),n("td",[t._v(t._s(e.pma?e.pma.district.name:"-"))])])})),0)]}}])})],1)},a=[],o=n("2a7d"),i=n("0748"),c=n("92d9"),s={name:"HHT",mixins:[c["b"]],components:{"x-btn":o["a"],"x-table":i["a"]},data:function(){return{columns:["Serial No","HHP","PMA","District"]}}},u=s,f=n("2877"),l=Object(f["a"])(u,r,a,!1,null,null,null);e["default"]=l.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),a=n("b727").filter,o=n("1dde"),i=n("ae40"),c=o("filter"),s=i("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"746f":function(t,e,n){var r=n("428f"),a=n("5135"),o=n("e538"),i=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});a(e,t)||i(e,t,{value:o.f(t)})}},"92d9":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));n("99af");var r=n("5530"),a=n("3d37"),o={data:function(){return{data:[],pagination:{sortBy:"desc",descending:!1,page:1,last_page:1,per_page:3,total:10}}},beforeRouteEnter:function(t,e,n){a["a"].get("".concat(t.meta.resource)).then((function(t){var e=t.data;n((function(t){t.setData(e)}))}))},beforeRouteUpdate:function(t,e,n){var r=this;a["a"].get("".concat(t.meta.resource)).then((function(t){var e=t.data;r.setData(e),n()}))},methods:{setData:function(t){this.$set(this.$data,"data",t.data),this.$set(this.$data,"pagination",{page:t.current_page,last_page:t.last_page,per_page:t.per_page,total:t.total})},loadData:function(){var t=this,e=this.pagination;this.$axios.get(this.$route.meta.resource,{params:Object(r["a"])({},e)}).then((function(e){var n=e.data;t.setData(n)})).catch((function(t){console.log(t)}))}}},i={data:function(){return{form:{},errors:[]}},computed:{mode:function(){return this.$route.meta.mode?"Edit":"Create"}},beforeRouteUpdate:function(t,e,n){var r=this;a["a"].get(Object(a["b"])(t)).then((function(t){var e=t.data;r.setData(e),n()}))},beforeRouteEnter:function(t,e,n){a["a"].get(Object(a["b"])(t)).then((function(t){var e=t.data;n((function(t){t.setData(e)}))}))},methods:{setData:function(t){this.$set(this.$data,"form",t)},cancel:function(){var t=this.$route.meta.resource,e=this.$route.params.id,n="/".concat(t);"Edit"===this.mode&&(n="/".concat(t,"/").concat(e)),this.$router.push(n)},save:function(){var t=this;this.$spinner.show();var e=this.getForm(),n=e.url,a=e.method;this.$axios({url:n,method:a,data:Object(r["a"])({},this.form)}).then((function(e){var n=e.data;t.$alert.success("PUT"===a?"Data saved.":"Data updated.");var r="Edit"===t.mode?t.$route.params.id:n.id;t.$router.push("/".concat(t.redirect,"/").concat(r))})).catch((function(e){var n=e.response;422===n.status&&(t.errors=n.data)}))},getForm:function(){var t=this.$route.meta.resource,e=this.$route.params.id,n="".concat(t),r="POST";return"Edit"===this.mode&&(n="".concat(t,"/").concat(e),r="PUT"),{url:n,method:r}}}}},a4d3:function(t,e,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("d066"),i=n("c430"),c=n("83ab"),s=n("4930"),u=n("fdbf"),f=n("d039"),l=n("5135"),d=n("e8b5"),p=n("861d"),h=n("825a"),b=n("7b0b"),v=n("fc6a"),g=n("c04e"),m=n("5c6c"),y=n("7c73"),O=n("df75"),w=n("241c"),_=n("057f"),S=n("7418"),j=n("06cf"),P=n("9bf2"),L=n("d1e7"),$=n("9112"),E=n("6eeb"),D=n("5692"),k=n("f772"),x=n("d012"),T=n("90e3"),C=n("b622"),H=n("e538"),M=n("746f"),N=n("d44e"),R=n("69f3"),A=n("b727").forEach,V=k("hidden"),F="Symbol",G="prototype",q=C("toPrimitive"),J=R.set,U=R.getterFor(F),B=Object[G],I=a.Symbol,Q=o("JSON","stringify"),W=j.f,z=P.f,K=_.f,X=L.f,Y=D("symbols"),Z=D("op-symbols"),tt=D("string-to-symbol-registry"),et=D("symbol-to-string-registry"),nt=D("wks"),rt=a.QObject,at=!rt||!rt[G]||!rt[G].findChild,ot=c&&f((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=W(B,e);r&&delete B[e],z(t,e,n),r&&t!==B&&z(B,e,r)}:z,it=function(t,e){var n=Y[t]=y(I[G]);return J(n,{type:F,tag:t,description:e}),c||(n.description=e),n},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof I},st=function(t,e,n){t===B&&st(Z,e,n),h(t);var r=g(e,!0);return h(n),l(Y,r)?(n.enumerable?(l(t,V)&&t[V][r]&&(t[V][r]=!1),n=y(n,{enumerable:m(0,!1)})):(l(t,V)||z(t,V,m(1,{})),t[V][r]=!0),ot(t,r,n)):z(t,r,n)},ut=function(t,e){h(t);var n=v(e),r=O(n).concat(ht(n));return A(r,(function(e){c&&!lt.call(n,e)||st(t,e,n[e])})),t},ft=function(t,e){return void 0===e?y(t):ut(y(t),e)},lt=function(t){var e=g(t,!0),n=X.call(this,e);return!(this===B&&l(Y,e)&&!l(Z,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,V)&&this[V][e])||n)},dt=function(t,e){var n=v(t),r=g(e,!0);if(n!==B||!l(Y,r)||l(Z,r)){var a=W(n,r);return!a||!l(Y,r)||l(n,V)&&n[V][r]||(a.enumerable=!0),a}},pt=function(t){var e=K(v(t)),n=[];return A(e,(function(t){l(Y,t)||l(x,t)||n.push(t)})),n},ht=function(t){var e=t===B,n=K(e?Z:v(t)),r=[];return A(n,(function(t){!l(Y,t)||e&&!l(B,t)||r.push(Y[t])})),r};if(s||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),n=function(t){this===B&&n.call(Z,t),l(this,V)&&l(this[V],e)&&(this[V][e]=!1),ot(this,e,m(1,t))};return c&&at&&ot(B,e,{configurable:!0,set:n}),it(e,t)},E(I[G],"toString",(function(){return U(this).tag})),E(I,"withoutSetter",(function(t){return it(T(t),t)})),L.f=lt,P.f=st,j.f=dt,w.f=_.f=pt,S.f=ht,H.f=function(t){return it(C(t),t)},c&&(z(I[G],"description",{configurable:!0,get:function(){return U(this).description}}),i||E(B,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:I}),A(O(nt),(function(t){M(t)})),r({target:F,stat:!0,forced:!s},{for:function(t){var e=String(t);if(l(tt,e))return tt[e];var n=I(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(l(et,t))return et[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),r({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),Q){var bt=!s||f((function(){var t=I();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,n){var r,a=[t],o=1;while(arguments.length>o)a.push(arguments[o++]);if(r=e,(p(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),a[1]=e,Q.apply(null,a)}})}I[G][q]||$(I[G],q,I[G].valueOf),N(I,F),x[V]=!0},a640:function(t,e,n){"use strict";var r=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,n){var r=n("23e7"),a=n("7b0b"),o=n("df75"),i=n("d039"),c=i((function(){o(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return o(a(t))}})},b727:function(t,e,n){var r=n("0366"),a=n("44ad"),o=n("7b0b"),i=n("50c4"),c=n("65f0"),s=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,f=4==t,l=6==t,d=5==t||l;return function(p,h,b,v){for(var g,m,y=o(p),O=a(y),w=r(h,b,3),_=i(O.length),S=0,j=v||c,P=e?j(p,_):n?j(p,0):void 0;_>S;S++)if((d||S in O)&&(g=O[S],m=w(g,S,y),t))if(e)P[S]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return S;case 2:s.call(P,g)}else if(f)return!1;return l?-1:u||f?f:P}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},dbb4:function(t,e,n){var r=n("23e7"),a=n("83ab"),o=n("56ef"),i=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!a},{getOwnPropertyDescriptors:function(t){var e,n,r=i(t),a=c.f,u=o(r),f={},l=0;while(u.length>l)n=a(r,e=u[l++]),void 0!==n&&s(f,e,n);return f}})},e439:function(t,e,n){var r=n("23e7"),a=n("d039"),o=n("fc6a"),i=n("06cf").f,c=n("83ab"),s=a((function(){i(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return i(o(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-00b5864e.55cc3e92.js.map