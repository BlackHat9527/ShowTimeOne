(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49321e22"],{"90e7":function(t,e,n){"use strict";n.d(e,"f",(function(){return c})),n.d(e,"e",(function(){return a})),n.d(e,"m",(function(){return o})),n.d(e,"E",(function(){return u})),n.d(e,"A",(function(){return i})),n.d(e,"z",(function(){return s})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return f})),n.d(e,"B",(function(){return l})),n.d(e,"C",(function(){return h})),n.d(e,"D",(function(){return m})),n.d(e,"v",(function(){return g})),n.d(e,"w",(function(){return b})),n.d(e,"t",(function(){return p})),n.d(e,"u",(function(){return O})),n.d(e,"r",(function(){return j})),n.d(e,"l",(function(){return v})),n.d(e,"p",(function(){return k})),n.d(e,"o",(function(){return y})),n.d(e,"g",(function(){return w})),n.d(e,"q",(function(){return _})),n.d(e,"i",(function(){return C})),n.d(e,"n",(function(){return D})),n.d(e,"h",(function(){return E})),n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return V})),n.d(e,"d",(function(){return T})),n.d(e,"c",(function(){return x})),n.d(e,"x",(function(){return $})),n.d(e,"y",(function(){return F})),n.d(e,"s",(function(){return W}));var r=n("6b6c");function c(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function a(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function o(t){return Object(r["a"])({url:"chat/kefu/login/".concat(t),method:"get"})}function u(t){return Object(r["a"])({url:"chat/speechcraft",method:"get",params:t})}function i(t){return Object(r["a"])({url:"chat/speechcraft/".concat(t,"/edit"),method:"get"})}function s(){return Object(r["a"])({url:"chat/speechcraft/create",method:"get"})}function d(t){return Object(r["a"])({url:"chat/feedback",method:"get",params:t})}function f(t){return Object(r["a"])({url:"chat/feedback/".concat(t,"/edit"),method:"get"})}function l(){return Object(r["a"])({url:"chat/speechcraftcate",method:"get"})}function h(){return Object(r["a"])({url:"chat/speechcraftcate/create",method:"get"})}function m(t){return Object(r["a"])({url:"chat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function g(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function b(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function p(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function O(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function j(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function v(t){return Object(r["a"])({url:"chat/kefu",method:"get",params:t})}function k(t){return Object(r["a"])({url:"chat/kefu/create",method:"get",params:t})}function y(){return Object(r["a"])({url:"chat/kefu/add",method:"get"})}function w(t){return Object(r["a"])({url:"chat/kefu",method:"post",data:t})}function _(t){return Object(r["a"])({url:"chat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function C(t){return Object(r["a"])({url:"chat/kefu/".concat(t,"/edit"),method:"GET"})}function D(t,e){return Object(r["a"])({url:"chat/kefu/record/".concat(e),method:"GET",params:t})}function E(t){return Object(r["a"])({url:"chat/kefu/chat_list",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"chat/qrcode",method:"get",params:t})}function V(t){return Object(r["a"])({url:"chat/qrcode/".concat(t),method:"get"})}function T(t){return Object(r["a"])({url:"chat/statistics",method:"get",params:t})}function x(t){return Object(r["a"])({url:"chat/record",method:"get",params:t})}function $(t){return Object(r["a"])({url:"setting/verison",method:"get",params:t})}function F(t){return Object(r["a"])({url:"setting/verison/".concat(t),method:"get"})}function W(){return Object(r["a"])({url:"chat/record_kefu",method:"get"})}},e6c5:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"i-layout-page-header"},[n("div",{staticClass:"i-layout-page-header"},[n("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),n("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[n("Row",[n("Col",{attrs:{span:"24"}},[n("Button",{staticClass:"mr10",attrs:{type:"primary",icon:"md-add"},on:{click:function(e){return t.callVersionForm(0)}}},[t._v("添加升级包")])],1)],1),n("Table",{staticClass:"ivu-mt",attrs:{columns:t.columns,data:t.tableData,loading:t.loading,"highlight-row":"","no-userFrom-text":"暂无数据"},scopedSlots:t._u([{key:"action",fn:function(e){var r=e.row,c=e.index;return[n("a",{on:{click:function(e){return t.callVersionForm(r.id)}}},[t._v("编辑")]),n("Divider",{attrs:{type:"vertical"}}),n("a",{on:{click:function(e){return t.deleteVersion(r.id,"删除反馈",c)}}},[t._v("删除")])]}}])}),n("div",{staticClass:"acea-row row-right page"},[n("Page",{attrs:{total:t.total,"page-size":t.limit,"show-elevator":"","show-total":""},on:{"on-change":t.onChange}})],1)],1)],1)},c=[],a=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),o=n("90e7"),u=n("2f62");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={name:"setting_version",data:function(){return{columns:[{title:"ID",key:"id",width:80},{title:"摘要",key:"name",minWidth:120},{title:"版本号",key:"verisons_num",minWidth:120},{title:"详情",key:"info",minWidth:120},{title:"时间",key:"update_time",minWidth:120},{title:"操作",slot:"action",minWidth:150,fixed:"right"}],tableData:[],loading:!1,total:0,limit:15,page:1}},computed:s({},Object(u["e"])("media",["isMobile"])),created:function(){this.settingVerison()},methods:{settingVerison:function(){var t=this;Object(o["x"])({page:this.page,limit:this.limit}).then((function(e){t.total=e.data.count,t.tableData=e.data.list}))},callVersionForm:function(t){var e=this;this.$modalForm(Object(o["y"])(t)).then((function(){return e.settingVerison()}))},deleteVersion:function(t,e,n){var r=this,c={title:e,num:n,url:"setting/verison/".concat(t),method:"DELETE"};this.$modalSure(c).then((function(t){r.$Message.success(t.msg),r.tableData.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},onChange:function(t){this.page=t,this.settingVerison()}}},f=d,l=n("2877"),h=Object(l["a"])(f,r,c,!1,null,"5d134c04",null);e["default"]=h.exports}}]);