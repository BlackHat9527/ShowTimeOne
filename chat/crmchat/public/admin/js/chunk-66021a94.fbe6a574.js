(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66021a94"],{"90e7":function(t,e,n){"use strict";n.d(e,"f",(function(){return a})),n.d(e,"e",(function(){return i})),n.d(e,"o",(function(){return c})),n.d(e,"G",(function(){return o})),n.d(e,"C",(function(){return u})),n.d(e,"B",(function(){return s})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return d})),n.d(e,"D",(function(){return f})),n.d(e,"E",(function(){return h})),n.d(e,"F",(function(){return m})),n.d(e,"x",(function(){return g})),n.d(e,"y",(function(){return b})),n.d(e,"v",(function(){return p})),n.d(e,"w",(function(){return O})),n.d(e,"t",(function(){return j})),n.d(e,"n",(function(){return v})),n.d(e,"r",(function(){return y})),n.d(e,"q",(function(){return k})),n.d(e,"g",(function(){return w})),n.d(e,"s",(function(){return x})),n.d(e,"j",(function(){return C})),n.d(e,"p",(function(){return V})),n.d(e,"h",(function(){return _})),n.d(e,"a",(function(){return P})),n.d(e,"b",(function(){return T})),n.d(e,"d",(function(){return D})),n.d(e,"m",(function(){return E})),n.d(e,"i",(function(){return L})),n.d(e,"c",(function(){return W})),n.d(e,"z",(function(){return F})),n.d(e,"A",(function(){return M})),n.d(e,"u",(function(){return $}));var r=n("6b6c");function a(t){return Object(r["a"])({url:"setting/config/header_basics",method:"get",params:t})}function i(t,e){return Object(r["a"])({url:e,method:"get",params:t})}function c(t){return Object(r["a"])({url:"chat/kefu/login/".concat(t),method:"get"})}function o(t){return Object(r["a"])({url:"chat/speechcraft",method:"get",params:t})}function u(t){return Object(r["a"])({url:"chat/speechcraft/".concat(t,"/edit"),method:"get"})}function s(){return Object(r["a"])({url:"chat/speechcraft/create",method:"get"})}function l(t){return Object(r["a"])({url:"chat/feedback",method:"get",params:t})}function d(t){return Object(r["a"])({url:"chat/feedback/".concat(t,"/edit"),method:"get"})}function f(){return Object(r["a"])({url:"chat/speechcraftcate",method:"get"})}function h(){return Object(r["a"])({url:"chat/speechcraftcate/create",method:"get"})}function m(t){return Object(r["a"])({url:"chat/speechcraftcate/".concat(t,"/edit"),method:"get"})}function g(t){return Object(r["a"])({url:"setting/role",method:"GET",params:t})}function b(t){return Object(r["a"])({url:"setting/role/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function p(t){return Object(r["a"])({url:"setting/role/".concat(t.id),method:"post",data:t})}function O(t){return Object(r["a"])({url:"setting/role/".concat(t,"/edit"),method:"get"})}function j(){return Object(r["a"])({url:"setting/role/create",method:"get"})}function v(t){return Object(r["a"])({url:"chat/kefu",method:"get",params:t})}function y(t){return Object(r["a"])({url:"chat/kefu/create",method:"get",params:t})}function k(){return Object(r["a"])({url:"chat/kefu/add",method:"get"})}function w(t){return Object(r["a"])({url:"chat/kefu",method:"post",data:t})}function x(t){return Object(r["a"])({url:"chat/kefu/set_status/".concat(t.id,"/").concat(t.status),method:"PUT"})}function C(t){return Object(r["a"])({url:"chat/kefu/".concat(t,"/edit"),method:"GET"})}function V(t,e){return Object(r["a"])({url:"chat/kefu/record/".concat(e),method:"GET",params:t})}function _(t){return Object(r["a"])({url:"chat/kefu/chat_list",method:"GET",params:t})}function P(t){return Object(r["a"])({url:"chat/qrcode",method:"get",params:t})}function T(t){return Object(r["a"])({url:"chat/qrcode/".concat(t),method:"get"})}function D(t){return Object(r["a"])({url:"chat/statistics",method:"get",params:t})}function E(){return Object(r["a"])({url:"chat/group",method:"get"})}function L(t){return Object(r["a"])({url:"chat/group/create/"+t,method:"get"})}function W(t){return Object(r["a"])({url:"chat/record",method:"get",params:t})}function F(t){return Object(r["a"])({url:"setting/verison",method:"get",params:t})}function M(t){return Object(r["a"])({url:"setting/verison/".concat(t),method:"get"})}function $(t){return Object(r["a"])({url:"chat/record/list",method:"get",params:t})}},ec44:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"i-layout-page-header"},[e("div",{staticClass:"i-layout-page-header"},[e("span",{staticClass:"ivu-page-header-title"},[t._v(t._s(t.$route.meta.title))])])]),e("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[e("Form",{ref:"formValidate",staticClass:"tabform",attrs:{model:t.formValidate,"label-width":t.labelWidth,"label-position":t.labelPosition},nativeOn:{submit:function(t){t.preventDefault()}}},[e("Row",{attrs:{gutter:24,type:"flex",justify:"end"}},[e("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[e("FormItem",{attrs:{label:"留言信息："}},[e("Input",{staticClass:"mr",staticStyle:{width:"30%",display:"inline-table"},attrs:{search:"","enter-button":"",placeholder:"请输入用户昵称/电话/留言内容搜索","element-id":"name"},on:{"on-search":t.selChange},model:{value:t.formValidate.title,callback:function(e){t.$set(t.formValidate,"title",e)},expression:"formValidate.title"}})],1)],1),e("Col",{staticClass:"ivu-text-left",attrs:{span:"24"}},[e("FormItem",{attrs:{label:"留言时间："}},[e("RadioGroup",{staticClass:"mr",attrs:{type:"button"},on:{"on-change":function(e){return t.selectChange(t.formValidate.time)}},model:{value:t.formValidate.time,callback:function(e){t.$set(t.formValidate,"time",e)},expression:"formValidate.time"}},t._l(t.fromList.fromTxt,(function(n,r){return e("Radio",{key:r,attrs:{label:n.val}},[t._v(t._s(n.text))])})),1),e("DatePicker",{staticStyle:{width:"200px"},attrs:{editable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{"on-change":t.onchangeTime}})],1)],1)],1)],1),e("Table",{attrs:{columns:t.columns1,data:t.list,loading:t.loading,"no-userFrom-text":"暂无数据","no-filtered-userFrom-text":"暂无筛选结果"},scopedSlots:t._u([{key:"status",fn:function(n){var r=n.row;n.index;return[e("div",[t._v(t._s(1===r.status?"已处理":"未处理"))])]}},{key:"action",fn:function(n){var r=n.row,a=n.index;return[e("a",{on:{click:function(e){return t.remarks(r.id)}}},[t._v(t._s(1===r.status?"备注":"处理"))]),e("Divider",{attrs:{type:"vertical"}}),e("a",{on:{click:function(e){return t.del(r,"删除反馈",a)}}},[t._v("删除")])]}}])}),e("div",{staticClass:"acea-row row-right page"},[e("Page",{attrs:{total:t.count,"show-elevator":"","show-total":"","page-size":t.limit},on:{"on-change":t.pageChange}})],1)],1)],1)},a=[],i=(n("8e6e"),n("ac6a"),n("456d"),n("ade3")),c=n("90e7"),o=n("2f62");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l={name:"feedback",data:function(){return{loading:!1,list:[],page:1,limit:15,formValidate:{time:"",title:""},fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]},timeVal:[],count:0,columns1:[{title:"ID",key:"id",width:80},{title:"昵称",key:"rela_name",minWidth:120},{title:"电话",key:"phone",minWidth:120},{title:"内容",key:"content",minWidth:320},{title:"状态",slot:"status",minWidth:120},{title:"时间",key:"add_time",minWidth:120},{title:"操作",slot:"action",fixed:"right",minWidth:150}]}},computed:s(s({},Object(o["e"])("media",["isMobile"])),{},{labelWidth:function(){return this.isMobile?void 0:80},labelPosition:function(){return this.isMobile?"top":"right"}}),created:function(){this.getList()},methods:{remarks:function(t){var e=this;this.$modalForm(Object(c["l"])(t)).then((function(){return e.getList()}))},selChange:function(){this.page=1,this.getList()},selectChange:function(t){this.formValidate.time=t,this.timeVal=[],this.page=1,this.getList()},onchangeTime:function(t){this.timeVal=t,this.formValidate.time=this.timeVal.join("-"),this.page=1,this.getList()},getList:function(){var t=this;Object(c["k"])({page:this.page,limit:this.limit,time:this.formValidate.time,title:this.formValidate.title}).then((function(e){t.list=e.data.data,t.count=e.data.count}))},del:function(t,e,n){var r=this,a={title:e,num:n,url:"/chat/feedback/".concat(t.id),method:"DELETE",ids:""};this.$modalSure(a).then((function(t){r.$Message.success(t.msg),r.list.splice(n,1)})).catch((function(t){r.$Message.error(t.msg)}))},pageChange:function(t){this.page=t,this.getList()}}},d=l,f=n("2877"),h=Object(f["a"])(d,r,a,!1,null,"106247bf",null);e["default"]=h.exports}}]);