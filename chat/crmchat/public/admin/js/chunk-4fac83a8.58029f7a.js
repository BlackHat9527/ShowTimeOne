(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4fac83a8"],{"34ef":function(e,t,i){"use strict";i("53d2")},"3dda":function(e,t){},"433f":function(e,t,i){e.exports=i.p+"img/sw.0608272d.jpg"},"53d2":function(e,t,i){},"87bc":function(e,t,i){},"9d4c":function(e,t,i){"use strict";i("87bc")},d666:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"wrapper-box"},[t("div",{staticClass:"page-account kf"},[t("div",{staticClass:"container",class:[e.fullWidth>768?"containerSamll":"containerBig"]},[t("div",{staticClass:"index_from page-account-container"},[t("div",{style:{display:e.loginType?"none":"block"}},[e._m(0),t("Form",{ref:"formInline",attrs:{model:e.formInline,rules:e.ruleInline},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSubmit("formInline")}}},[t("FormItem",{attrs:{prop:"username"}},[t("Input",{attrs:{type:"text",placeholder:"请输入用户名",size:"large"},model:{value:e.formInline.username,callback:function(t){e.$set(e.formInline,"username",t)},expression:"formInline.username"}})],1),t("FormItem",{attrs:{prop:"password"}},[t("Input",{attrs:{type:"password",placeholder:"请输入密码",size:"large"},model:{value:e.formInline.password,callback:function(t){e.$set(e.formInline,"password",t)},expression:"formInline.password"}})],1),t("FormItem",[t("Button",{staticClass:"btn",attrs:{type:"primary",long:"",size:"large"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("登录\n              ")])],1)],1),e.isMobile?e._e():t("div",{staticClass:"qh_box",on:{click:e.bindScan}},[t("span",{staticClass:"iconfont iconerweima2"})])],1),t("div",{style:{display:e.loginType?"block":"none"}},[e._m(1),t("div",{staticClass:"code-box"},[t("div",{ref:"qrCodeUrl",staticClass:"qrcode"}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.rxpired,expression:"rxpired"}],staticClass:"rxpired-box"},[t("p",[e._v("已过期")]),t("Button",{attrs:{type:"primary"},on:{click:e.bindRefresh}},[e._v("点击刷新")])],1)]),t("div",{staticClass:"qh_box",on:{click:function(t){e.loginType=0}}},[t("span",{staticClass:"iconfont iconzhanghaomima"})])])])])]),t("div",{staticClass:"foot-box"},[e._v("\n    Copyright © 2020 西安众邦网络科技有限公司 | "+e._s(e.version)+" 客服系统\n  ")])])},a=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-account-top"},[t("div",{staticClass:"page-account-top-logo"},[e._v("客服登录")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"page-account-top"},[t("div",{staticClass:"page-account-top-logo"},[e._v("APP扫码登录")])])}],r=(i("96cf"),i("1da1")),o=(i("a481"),i("7f7f"),i("42e3")),s=i("3dda"),c=i.n(s),u=i("d708"),l=i("c276"),d=i("d044"),f=i.n(d),m={mixins:[c.a],data:function(){return{fullWidth:document.documentElement.clientWidth,swiperOption:{pagination:".swiper-pagination",autoplay:!0},modals:!1,autoLogin:!0,imgcode:"",formInline:{username:"",password:"",code:""},ruleInline:{username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]},errorNum:0,jigsaw:null,login_logo:"",swiperList:[],defaultSwiperList:i("433f"),loginType:0,codeKey:"",scanTime:"",rxpired:!1,isMobile:!1,version:"",isScan:!1,timeNum:0}},created:function(){var e=this;Object(o["r"])().then((function(t){e.version=t.data.version,t.data.site_name&&(document.title=t.data.site_name)})),this.isMobile=this.$store.state.media.isMobile;var t=this;top!=window&&(top.location.href=location.href),document.onkeydown=function(e){if("login"===t.$route.name){var i=window.event.keyCode;13===i&&t.handleSubmit("formInline")}},window.addEventListener("resize",this.handleResize)},watch:{fullWidth:function(e){if(!this.timer){this.screenWidth=e,this.timer=!0;var t=this;setTimeout((function(){t.timer=!1}),400)}},$route:function(e){console.log(e),this.captchas()}},mounted:function(){this.$nextTick((function(){})),this.captchas()},methods:{bindScan:function(){this.isScan||(this.isScan=!0,this.getSanCodeKey()),this.loginType=1},creatQrCode:function(){var e="".concat(window.location.protocol,"//").concat(window.location.host,"/pages/users/scan_login/index?key=").concat(this.codeKey);new f.a(this.$refs.qrCodeUrl,{text:e,width:160,height:160,colorDark:"#000000",colorLight:"#ffffff",correctLevel:f.a.CorrectLevel.H})},closeModel:function(){var e=this,t=this.$Message.loading({content:"登录中...",duration:0});Object(o["a"])({account:this.formInline.username,password:this.formInline.password,imgcode:this.formInline.code}).then((function(i){t();var n=e.getExpiresTime(i.data.exp_time);return Object(l["s"])("kefu_uuid",i.data.kefuInfo.uid,n),Object(l["s"])("kefu_token",i.data.token,n),Object(l["s"])("kefu_expires_time",i.data.exp_time,n),Object(l["s"])("kefuInfo",i.data.kefuInfo,n),console.log(i),e.$store.commit("kefu/setInfo",i.data.kefuInfo),e.$store.state.media.isMobile?e.$router.replace({path:e.$route.query.redirect||"/kefu/mobile_list"}):e.$router.replace({path:e.$route.query.redirect||"/kefu/pc_list"})})).catch((function(i){t();var n=void 0===i?{}:i;e.errorNum++,e.captchas(),e.$Message.error(n.msg||"登录失败"),e.jigsaw&&e.jigsaw.reset()}))},getExpiresTime:function(e){var t=Math.round(new Date/1e3),i=e-t;return parseFloat(parseFloat(parseFloat(i/60)/60)/24)},closefail:function(){this.jigsaw&&this.jigsaw.reset(),this.$Message.error("校验错误")},handleResize:function(e){this.fullWidth=document.documentElement.clientWidth},captchas:function(){this.imgcode=u["a"].apiBaseURL+"/captcha_pro?"+Date.parse(new Date)},handleSubmit:function(e){var t=this;this.$refs[e].validate((function(e){e&&t.closeModel()}))},getSanCodeKey:function(){var e=this;Object(o["o"])().then((function(t){e.codeKey=t.data.key,e.creatQrCode(),e.scanTime=setInterval((function(){e.timeNum++,e.timeNum>=60?(e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0):e.getScanStatus()}),1e3)})).catch((function(t){e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0,e.$Message.error(t.msg)}))},getScanStatus:function(){var e=this;Object(o["H"])(this.codeKey).then(function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(i){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(0==i.data.status&&(e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0),i.data.status,3!=i.data.status){t.next=15;break}if(window.clearInterval(e.scanTime),n=e.getExpiresTime(i.data.exp_time),Object(l["s"])("kefu_uuid",i.data.kefuInfo.uid,n),Object(l["s"])("kefu_token",i.data.token,n),Object(l["s"])("kefu_expires_time",i.data.exp_time,n),Object(l["s"])("kefuInfo",i.data.kefuInfo,n),e.$store.commit("kefu/setInfo",i.data.kefuInfo),!e.$store.state.media.isMobile){t.next=14;break}return t.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/kefu/mobile_list"}));case 14:return t.abrupt("return",e.$router.replace({path:e.$route.query.redirect||"/kefu/pc_list"}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.$Modal.error({title:"提示",content:t.msg}),e.timeNum=0,window.clearInterval(e.scanTime),e.rxpired=!0}))},bindRefresh:function(){this.$refs.qrCodeUrl.innerHTML="",this.rxpired=!1,this.getSanCodeKey()}},beforeCreate:function(){},beforeDestroy:function(){this.timeNum=0,this.$refs.qrCodeUrl.innerHTML="",window.clearInterval(this.scanTime),window.removeEventListener("resize",this.handleResize)}},p=m,h=(i("9d4c"),i("34ef"),i("2877")),g=Object(h["a"])(p,n,a,!1,null,"a550a9f2",null);t["default"]=g.exports}}]);