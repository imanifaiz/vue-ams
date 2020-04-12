(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a0452324"],{"0748":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("table",{staticClass:"table"},[t._t("header",[a("thead",[a("tr",t._l(t.columns,(function(e){return a("th",{key:e},[t._v(t._s(e))])})),0)])],{columns:t.columns}),t._t("body",[a("tbody",t._l(t.rows,(function(e,s){return a("tr",{key:s},t._l(e,(function(e,s){return a("td",{key:s},[t._v(t._s(e))])})),0)})),0)],{rows:t.rows})],2),a("div",{staticClass:"pagination",on:{show:function(e){null!==t.prev_page||t.next_page}}},t._l(t.pagination.last_page,(function(e){return a("a",{directives:[{name:"show",rawName:"v-show",value:t.pagination.last_page>1,expression:"pagination.last_page > 1"}],key:e,class:{active:e==t.pagination.page},attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.request(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])},o=[],n={name:"Table",props:["columns","rows","next_page","prev_page","pagination"],methods:{request:function(t){this.pagination.page=t,this.$emit("onRequest")}}},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports},"2a7d":function(t,e,a){"use strict";var s,o,n={name:"Button",props:{tag:{default:"a"},btnClass:{type:Array,default:function(){return[]}},to:{default:!1}},render:function(t){var e=this,a={class:"btn"};return this.to?a.on={click:function(){return e.$router.push(e.to)}}:a.on={click:function(){return e.$emit("click")}},t(this.tag,a,this.$slots.default)}},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports},"714b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("portal",{attrs:{to:"modals"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop"},[a("div",{staticClass:"modal",class:t.modalClass},[a("div",{staticClass:"modal-header"},[t._t("header",[a("h4",{staticClass:"modal-title"},[t._v(t._s(t.title))]),a("span",{staticClass:"modal-close",on:{click:function(e){return t.dismiss()}}},[a("i",{staticClass:"fa fa-times"})])])],2),a("div",{staticClass:"modal-body"},[t._t("default")],2),t._t("footer")],2)])]):t._e()},o=[],n={name:"Modal",props:["show","title","modalClass"],methods:{dismiss:function(){this.$emit("close")}},watch:{show:{immediate:!0,handler:function(t){t?document.body.style.setProperty("overflow","hidden"):document.body.style.removeProperty("overflow")}}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.show&&t.dismiss()};document.addEventListener("keydown",e),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))}},i=n,r=a("2877"),l=Object(r["a"])(i,s,o,!1,null,null,null);e["a"]=l.exports},a0b2:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h1",{staticClass:"card-title"},[t._v("Serial No: "+t._s(t.model.serial_no||"-"))]),a("div",[a("x-btn",{staticClass:"btn-sm",attrs:{to:"/"+t.$route.meta.resource}},[a("i",{staticClass:"fa fa-arrow-left"})]),a("x-btn",{staticClass:"btn-sm",attrs:{to:"/"+t.$route.meta.resource+"/"+t.$route.params.id+"/edit"}},[t._v(" Edit "),a("i",{staticClass:"fa fa-edit ml-2"})]),a("x-delete-btn",{staticClass:"btn-error btn-sm",attrs:{resource:t.$route.meta.resource,"data-id":t.$route.params.id,message:"Deleting this record cannot be undone."},on:{onDeleted:function(e){return t.$router.push("/"+t.$route.meta.resource)}}},[t._v(" Delete "),a("i",{staticClass:"fa fa-trash ml-2"})])],1)]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"grid grid-cols-3 gap-4 border-b py-4"},[a("div",{staticClass:"info-group"},[a("label",{staticClass:"info-label",attrs:{for:""}},[t._v("PMA Name:")]),a("p",[t._v(t._s(t.model.pma?t.model.pma.name:"-"))])]),a("div",{staticClass:"info-group"},[a("label",{staticClass:"info-label",attrs:{for:""}},[t._v("PMA Code:")]),a("p",[t._v(t._s(t.model.pma?t.model.pma.pma_code:"-"))])]),a("div",{staticClass:"info-group"},[a("label",{staticClass:"info-label",attrs:{for:""}},[t._v("PMA ID:")]),a("p",[t._v(t._s(t.model.pma?t.model.pma.pma_id:"-"))])])]),a("div",{staticClass:"grid grid-cols-3 gap-4 py-4"},[a("div",{staticClass:"info-group"},[a("label",{staticClass:"info-label",attrs:{for:""}},[t._v("District:")]),a("p",[t._v(t._s(t.model.pma?t.model.pma.district.name:"-"))])])])])]),a("div",{staticClass:"card"},[t._m(0),a("x-table",{attrs:{columns:["PMA","PMA Code","PMA ID","District"],rows:t.model.histories,pagination:t.pagination},on:{onRequest:t.loadData,"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"header",fn:function(e){var s=e.columns;return[a("thead",[a("tr",t._l(s,(function(e){return a("th",{key:e},[t._v(t._s(e))])})),0)])]}},{key:"body",fn:function(e){var s=e.rows;return[a("tbody",t._l(s,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.pma.name))]),a("td",[t._v(t._s(e.pma.pma_code))]),a("td",[t._v(t._s(e.pma.pma_id))]),a("td",[t._v(t._s(e.pma.district.name))])])})),0)]}}])})],1),a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h1",{staticClass:"card-title"},[t._v("Repair Logs")]),a("div",[a("x-btn",{staticClass:"btn-sm",attrs:{to:"/"+t.$route.meta.resource}},[t._v(" Add Repair Log "),a("i",{staticClass:"fa fa-plus ml-2"})])],1)]),a("x-table",{attrs:{columns:["Repaired At","Returned At","Reason","PMA","District"],rows:t.model.repairs,pagination:t.pagination},on:{onRequest:t.loadData,"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"header",fn:function(e){var s=e.columns;return[a("thead",[a("tr",t._l(s,(function(e){return a("th",{key:e},[t._v(t._s(e))])})),0)])]}},{key:"body",fn:function(e){var s=e.rows;return[a("tbody",t._l(s,(function(e,s){return a("tr",{key:s},[a("td",[t._v(t._s(e.repaired_at||"-"))]),a("td",[t._v(t._s(e.returned_at||"-"))]),a("td",[t._v(t._s(e.reason))]),a("td",[t._v(t._s(e.pma.name))]),a("td",[t._v(t._s(e.pma.district.name))])])})),0)]}}])})],1)])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h1",{staticClass:"card-title"},[t._v("Previous Owner")])])}],n=(a("99af"),a("3d37")),i=a("2a7d"),r=a("ff55"),l=a("0748"),c={name:"ShowHHT",components:{XBtn:i["a"],XDeleteBtn:r["a"],XTable:l["a"]},data:function(){return{columns:["Name","PMA Code","PMA ID","District","Action"],model:{pma:{district:{},hhp:{}},histories:{},repairs:{}},pagination:{sortBy:"desc",descending:!1,page:1,last_page:1,per_page:3,total:10}}},beforeRouteUpdate:function(t,e,a){var s=this;n["a"].get("".concat(t.meta.resource,"/").concat(t.params.id)).then((function(t){var e=t.data;s.setData(e),a()}))},beforeRouteEnter:function(t,e,a){n["a"].get("".concat(t.meta.resource,"/").concat(t.params.id)).then((function(t){var e=t.data;a((function(t){t.setData(e)}))}))},mounted:function(){this.loadData()},methods:{setData:function(t){this.$set(this.$data,"model",t.data)},loadData:function(){var t=this;this.$axios.get("".concat(this.$route.meta.resource,"/").concat(this.$route.params.id)).then((function(e){var a=e.data;t.setData(a)})).catch((function(t){console.log(t)}))},edit:function(t){console.log("edit",t)},remove:function(t){console.log("delete",t)}}},d=c,u=a("2877"),m=Object(u["a"])(d,s,o,!1,null,null,null);e["default"]=m.exports},ff55:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("x-btn",{staticClass:"btn-error btn-sm",on:{click:function(e){t.show=!0}}},[t._t("default"),a("x-confirm-delete-modal",{attrs:{show:t.show,message:t.message,"modal-class":["w-1/3"]},on:{onClose:function(e){t.show=!1},onDelete:t.onDelete}},[t._v(" "+t._s(t.message)+" ")])],2)},o=[],n=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("x-modal",{attrs:{show:t.show,title:"Are you sure?","modal-class":["w-1/3"]},on:{close:function(e){return t.closeModal()}}},[t._t("default"),a("div",{staticClass:"modal-footer flex justify-center",attrs:{slot:"footer"},slot:"footer"},[a("x-btn",{staticClass:"btn-error btn-sm",on:{click:function(e){return t.onDelete()}}},[t._v("Delete")]),a("x-btn",{staticClass:"btn-sm",on:{click:function(e){return t.closeModal()}}},[t._v("Cancel")])],1)],2)}),i=[],r=a("714b"),l=a("2a7d"),c={name:"ConfirmDeleteModal",props:["show"],components:{XModal:r["a"],XBtn:l["a"]},methods:{closeModal:function(){this.$emit("onClose")},onDelete:function(){this.$emit("onDelete")}}},d=c,u=a("2877"),m=Object(u["a"])(d,n,i,!1,null,null,null),f=m.exports,p={name:"ConfirmDeleteButton",props:["message","resource","dataId"],components:{XConfirmDeleteModal:f,XBtn:l["a"]},data:function(){return{show:!1}},methods:{onDelete:function(){var t=this;this.$axios.delete("".concat(this.resource,"/").concat(this.dataId)).then((function(e){var a=e.data;t.$alert.success(a.message),t.$emit("onDeleted")})).catch((function(t){console.log(t)})),this.show=!1}}},_=p,v=Object(u["a"])(_,s,o,!1,null,null,null);e["a"]=v.exports}}]);
//# sourceMappingURL=chunk-a0452324.5b3b17be.js.map