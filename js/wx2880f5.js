!function(e){
return/msie 6/i.test(navigator.userAgent)?void(window.location="/cgi-bin/readtemplate?t=err/noie6_tmpl"):(window.console||(window.console={
log:function(){},
error:function(){},
info:function(){}
}),e.wx=e.wx||{},wx.T=function(e,t){
return template.compile(e)(t);
},wx.url=function(e){
if(e.startsWith("javasript:"))return e;
var t=wx.data.param;
return-1!=e.indexOf("?")?e+t:e+"?1=1"+t;
},wx.getUrl=function(e){
var t=(window.location+"&").match(new RegExp("(?:\\?|\\&)"+e+"=(.*?)\\&"));
return t&&t[1]?String(t[1]).html(!0):void 0;
},$.fn.setClass=function(e){
this.attr("class",e);
},function(){
function e(e,t){
-1==t.indexOf("ueditor")&&-1==t.indexOf("media/appmsg_edit")&&jQuery.ajax({
url:"/misc/jslog?1=1"+wx.data.param,
data:{
content:t,
id:e,
level:"error"
},
type:"POST"
});
}
var t={
fakeid:wx.data.uin,
userAgent:window.navigator.userAgent,
url:location.href
};
jQuery("img").error(function(){
e(1,"[fakeid={fakeid}] [img] [url={url}] [useragent={userAgent}] [src={0}]".format(t).format([jQuery(this).src||""]));
}),jQuery("script").error(function(){
e(2,"[fakeid={fakeid}] [script] [url={url}] [useragent={userAgent}] [src={0}]".format(t).format([jQuery(this).src||""]));
}),wx.jslog=function(o,n,a){
a=a||3,o=jQuery.extend(o,t);
var i=[];
n&&jQuery.each(["message","stack","lineNumber"],function(e,t){
i.push(t+":"+(n[t]||""));
}),o.e=i.join(";").replace(/\s/g," ");
var s="[fakeid={fakeid}] [script] [url={url}] [useragent={userAgent}] [src={src}] [exception={e}]".format(o);
e(a,s),console&&console.error&&n&&console.error(n);
};
}(),setTimeout(function(){
seajs.use("biz_web/lib/store.js",function(e){
var t=$("#logout");
t.click(function(){
function t(){
var t=e.get(n);
return new Date-t>864e5;
}
e.remove("hasNotice"),e.remove("templateClassStatus"),e.remove("templateClassStatusTime");
var o="__draft__"+wx.data.uin,n="__draft__time__"+wx.data.uin;
t()&&(e.remove(o),e.remove(n));
});
});
},5e3),wx.resPath="mp.weixin.qq.com"==location.hostname?"https://res.wx.qq.com":"",
wx.injectXss=function(e,t,o){
function n(e){
for(var o=0;o<t.length;o++)if(e==t[o])return!0;
return!1;
}
if(null!=e){
t||(t=[]),o||(o="'\"<script>console.log(%s);</script><!--# &");
for(var a in e){
var i=e[a];
"string"==typeof i?n(a)||(e[a]=o.sprintf(a)+i):"object"==typeof i&&wx.injectXss(e[a]);
}
}
},jQuery(function(){
var e=['<div class="scale_tips" id="zoom_tips" style="display:none;">','<div class="scale_tips_inner">','<i class="icon_scale_tips"></i>','<p class="scale_tips_content"><span id="zoom_msg"></span><a href="javascript:;" id="zoom_prompt">不再提示</a></p>',"</div>","</div>"].join("\n");
jQuery("body").append(e);
var t='<object type="application/x-shockwave-flash" data="{swfpath}" width="10" height="10" id="{id}">{param}</object>',o={
swfpath:wx.path.zoom,
id:"ZoomFlash",
param:""
},n={
movie:o.swfpath,
allowscriptaccess:"always",
wmode:"transparent",
scale:"noScale"
};
jQuery.each(n,function(e,t){
o.param+='<param name="'+e+'" value="'+t+'">';
}),$('<div style="position: absolute; right: 0px; bottom: 0px; visibility: visible;"></div>').html(t.format(o)).appendTo("body"),
seajs.use("biz_web/lib/store.js",function(e){
jQuery(window).on("load resize",function(){
if(!e.get("__zoom_tips__")){
var t=document.getElementById("ZoomFlash").height,o=t,n=1;
try{
o=document.getElementById("ZoomFlash").getFlashStageRect().height,n=~window.navigator.userAgent.toLowerCase().indexOf("msie")&&screen.deviceXDPI&&screen.logicalXDPI?screen.deviceXDPI/screen.logicalXDPI:o/t,
.9>n?(jQuery("#zoom_msg").text("您的浏览器目前处于缩小状态，会导致公众平台网页显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。"),
jQuery("#zoom_tips").show(),jQuery("body").addClass("scaled")):n>1.1?(jQuery("#zoom_msg").text("您的浏览器目前处于放大状态，会导致公众平台网页显示不正常，您可以键盘按“ctrl+数字0”组合键恢复初始状态。"),
jQuery("#zoom_tips").show(),jQuery("body").addClass("scaled")):(jQuery("#zoom_tips").hide(),
jQuery("body").removeClass("scaled"));
}catch(a){}
}
});
}),jQuery(window).on("keyup",function(e){
e.ctrlKey&&(96==e.keyCode||48==e.keyCode)&&(jQuery("#zoom_tips").hide(),jQuery("body").removeClass("scaled"));
}),jQuery("#zoom_prompt").on("click",function(){
seajs.use("biz_web/lib/store.js",function(e){
e.set("__zoom_tips__",!0);
}),jQuery("#zoom_tips").hide(),jQuery("body").removeClass("scaled");
}),"undefined"!=typeof _new_comment_num&&_new_comment_num>0&&(_new_comment_num=_new_comment_num>1e3?"999+":_new_comment_num,
_new_comment_num>0&&!jQuery(".menu_item>a[data-id=10033]").parent().hasClass("selected")&&jQuery(".menu_item>a[data-id=10033]").append('<span class="icon_dot_notices"><span class="icon_dot_notices_left"></span><span class="icon_dot_notices_right"></span>'+_new_comment_num+"</span>"));
}),jQuery("#menuBar").find("dd>a").click(function(){
$(this).find(".new").length>0&&jQuery.ajax({
url:"/misc/navoperation",
data:{
action:"click",
id:$(this).data("id"),
token:wx.data.t
},
type:"post"
});
}),function(){
try{
var e=jQuery(window).height();
750>e&&jQuery(document.body).addClass("screen_small");
}catch(t){}
}(),void seajs.use("common/wx/Log"));
}(window);;$.fn.extend({
center:function(i){
i?(this.css("position","fixed"),this.css("top",($(window).height()-this.height())/2+"px"),
this.css("left",($(window).width()-this.width())/2+"px")):(this.css("position","absolute"),
this.css("top",($(window).height()-this.height())/2+$(window).scrollTop()+"px"),
this.css("left",($(window).width()-this.width())/2+$(window).scrollLeft()+"px"));
}
});;$.fn.disable=function(t){
t=t||"btn_disabled";
var s=this.hasClass("btn_input")?this.find("button"):this;
return s.attr("disabled","disabled"),this.parent().hasClass("btn_input")?this.parent().addClass(t):this.addClass(t),
this;
},$.fn.enable=function(t){
t=t||"btn_disabled";
var s=this.hasClass("btn_input")?this.find("button"):this;
return s.attr("disabled",!1),this.parent().hasClass("btn_input")?this.parent().removeClass(t):this.removeClass(t),
this;
},function(){
var t=function(t,s){
if(t=t||"btn_loading",!s||$.support.leadingWhitespace){
var i=this.hasClass("btn_input")?this.find("button"):this;
i.prepend("<i></i>");
}
return this.disable(t),this;
},s=function(t,s){
if(t=t||"btn_loading",!s||$.support.leadingWhitespace){
var i=this.hasClass("btn_input")?this.find("button"):this;
i.find("i:first-child").remove();
}
return this.enable(t),this;
};
$.fn.btn=function(i,n,a){
return i?s.call(this,n,a):t.call(this,n,a);
};
}();;$.fn.scrollLoading=function(o){
function t(t){
return t.offset().top>$(window).scrollTop()&&t.offset().top+t.height()<$(window).scrollTop()+$(window).height()+o.pre;
}
function c(){
$.each(s,function(c,n){
var s=t($(n.obj));
s&&(n.src&&"img"==n.tag.toLowerCase()&&(n.obj.src=n.src,n.obj.data_src=n.src=""),
$.isFunction(o.callback)?o.callback.apply(n.obj):"");
});
}
var n={
callback:$.noop,
pre:100,
context:window
};
o=$.extend({},n,o||{});
var s=[];
$(this).each(function(){
var o=this.nodeName;
o&&s.push({
obj:this,
src:$(this).data("src"),
tag:o.toLowerCase()
});
}),c(),o.context.unbind("scroll",c),o.context.bind("scroll",c);
},$.fn.fixed=function(){
var o=this,t=o.offset().top;
$(document).on("scroll",function(){
$(window).scrollTop()<t?o.css("position","static"):o.css("position","fixed").css("top",0);
});
};;!function(e){
var l=function(){};
"placeholder"in document.createElement("input")||(l=function(){
var l=e(this),a=l.attr("placeholder");
a&&(l.focus(function(){
this.value===a&&(this.value=""),l.removeClass("placeholder");
}).blur(function(){
""===this.value&&(this.value=a,l.addClass("placeholder"));
}),""===l.val()&&l.addClass("placeholder"),l.val()||l.val(a));
}),e.fn.placeholder=l;
}(jQuery);;$.extend({
log:function(o){
console&&console.log(o);
}
});;$.fn.extend({
serializeObject:function(){
var e=this.serializeArray(),i={};
return $(e).each(function(e,n){
i[n.name]=n.value;
}),i;
}
}),define("common/qq/jquery.plugin/serializeObject.js",[],function(){
"use strict";
});;!function(){
function t(t,n){
for(var r in n)t[r]=n[r];
return t;
}
function n(n,r){
if(r===!0){
var e;
if(Object.isArray(n)){
e=[];
for(var i in n)n.hasOwnProperty(i)&&e.push(Object.isObject(n[i])?Object.clone(n[i],!0):n[i]);
}else{
e={};
for(var i in n)n.hasOwnProperty(i)&&(e[i]=Object.isObject(n[i])?Object.clone(n[i],!0):n[i]);
}
return e;
}
return t({},n);
}
function r(t){
return!(!this||1!=t.nodeType);
}
function e(t){
return Object.prototype.toString.call(t)===m;
}
function i(t){
return Object.prototype.toString.call(t)===b;
}
function o(t){
return Object.prototype.toString.call(t)===h;
}
function c(t){
return Object.prototype.toString.call(t)===g;
}
function u(t){
return Object.prototype.toString.call(t)===l;
}
function a(t){
return Object.prototype.toString.call(t)===y;
}
function s(t){
return"undefined"==typeof t;
}
function p(t,n){
var r=[];
for(var e in t)t.hasOwnProperty(e)&&r.push(n===!0?[encodeURIComponent(e),"=",encodeURIComponent(t[e]),"&"].join(""):[e,"=",t[e],"&"].join(""));
return r.join("").slice(0,-1);
}
function f(t,n){
if("undefined"!=typeof n)for(var r in t)if(t.hasOwnProperty(r)&&n(t[r],r)===!1)break;
}
var h="[object Function]",l="[object Number]",g="[object String]",b="[object Array]",m="[object Object]",y="[object Date]";
t(Object,{
extend:t,
clone:n,
isObject:e,
isElement:r,
isArray:i,
isFunction:o,
isString:c,
isNumber:u,
isDate:a,
isUndefined:s,
param:p,
each:f
});
}(),Object.extend(String.prototype,function(){
function t(t){
return this.replace(/\{(\w+)\}/g,function(n,r){
return void 0!==t[r]?t[r]:n;
});
}
function n(){
return this.replace(/[^\x00-\xff]/g,"**").length;
}
function r(t,n){
return t=t||30,n=Object.isUndefined(n)?"...":n,this.length>t?this.slice(0,t-n.length)+n:String(this);
}
function e(t){
return t===!0?this.replace(/^\s+/,""):t===!1?this.replace(/\s+$/,""):this.replace(/^\s+/,"").replace(/\s+$/,"");
}
function i(t){
var n=["&","&amp;","<","&lt;",">","&gt;"," ","&nbsp;",'"',"&quot;","'","&#39;"];
t===!1&&n.reverse();
for(var r=0,e=this;r<n.length;r+=2)e=e.replace(new RegExp(n[r],"g"),n[1+r]);
return e;
}
function o(t){
return this.indexOf(t)>-1;
}
function c(t){
return 0===this.lastIndexOf(t,0);
}
function u(t){
var n=this.length-t.length;
return n>=0&&this.indexOf(t,n)===n;
}
function a(){
return""==this;
}
function s(){
return this.replace(/<\/?[^>]*\/?>/g,"");
}
function p(){
return/^\s*$/.test(this);
}
function f(){
var t,n,r,e=this,i=arguments.length;
if(1>i)return s;
for(t=0;i>t;)e=e.replace(/%s/,"{#"+t++ +"#}");
for(e.replace("%s",""),t=0;void 0!==(n=arguments[t]);)r=new RegExp("{#"+t+"#}","g"),
e=e.replace(r,n),t++;
return e;
}
function h(){
for(var t,n=this,r=0,e=0;t=n.charAt(r++);)e+=t.charCodeAt().toString(16).length/2;
return e;
}
function l(t,n){
if("function"==typeof this.split){
var r=this.split(n||"&"),e={};
return r.each(function(n){
arr=n.split("="),2==arr.length&&arr[0]&&arr[1]&&(t===!0?e[decodeURIComponent(arr[0])]=decodeURIComponent(arr[1]):e[arr[0]]=arr[1]);
}),e;
}
}
document.createElement("div");
return{
format:t,
sprintf:f,
text:s,
len:n,
truncate:r,
trim:String.prototype.trim||e,
https2http:function(){
return this.replace(/https:\/\/mmbiz\.qlogo\.cn\//g,"http://mmbiz.qpic.cn/");
},
http2https:function(){
return this.replace(/http:\/\/mmbiz\.qpic\.cn\//g,"https://mmbiz.qlogo.cn/");
},
html:i,
has:o,
startsWith:c,
endsWith:u,
param:l,
empty:a,
blank:p,
bytes:h
};
}()),Object.extend(Function.prototype,function(){
function t(t,n){
for(var r=t.length,e=n.length;e--;)t[r+e]=n[e];
return t;
}
function n(n,r){
return n=a.call(n,0),t(n,r);
}
function r(t){
if(arguments.length<2&&Object.isUndefined(arguments[0]))return this;
var r=this,e=a.call(arguments,1);
return function(){
var i=n(e,arguments);
return r.apply(t,i);
};
}
function e(t,n){
var r=this;
return args=a.call(arguments,2),t=1e3*t,window.setTimeout(function(){
return r.apply(n||r,args);
},t);
}
function i(){
var n=t([.01,null],arguments);
return this.delay.apply(this,n);
}
function o(t){
var n=this;
return function(){
return t.apply(this,arguments)===!1?!1:n.apply(this,arguments);
};
}
function c(n){
var r=this;
return function(){
var e=r.apply(this,arguments),i=t([e],arguments);
return n.apply(this,i),e;
};
}
function u(n){
var r=this;
return function(){
var e=t([r.bind(this)],arguments);
return n.apply(this,e);
};
}
var a=Array.prototype.slice;
return{
bind:r,
delay:e,
defer:i,
before:o,
after:c,
wrap:u
};
}()),function(){
function t(t,n){
for(var r=0,e=this.length>>>0;e>r;r++)r in this&&t.call(n,this[r],r,this);
}
function n(){
return this[this.length-1];
}
function r(t){
return t===!0?Object.clone.apply(this,arguments):c.call(this,0);
}
function e(t){
var n=[];
return this.each(function(r,e){
n.push(t(r,e));
}),n;
}
function i(t){
var n=-1;
return this.each(function(r,e){
return t==r?(n=e,!1):void 0;
}),n;
}
var o=Array.prototype,c=o.slice;
Object.extend(o,{
each:Array.prototype.forEach||t,
indexOf:Array.prototype.indexOf||i,
last:n,
clone:r,
map:e
});
}();;define("common/qq/Class.js",[],function(t,n){
"use strict";
n.create=function(t){
var n=function(){
this.construct&&this.construct.apply(this,arguments);
};
return t.apply(n.prototype,arguments),n;
},function(){
function t(t){
for(var n=1,r=arguments.length;r>n;n++)for(var e in arguments[n])Object.prototype.hasOwnProperty.call(arguments[n],e)&&(t[e]=arguments[n][e]);
return t;
}
function r(){
return this.__instance__||(this.__instance__=new this(arguments[0],arguments[1],arguments[2]));
}
function e(t){
var n=i.call(this,t);
return n.prototype.parent=this,n;
}
function i(n){
var i="function"==typeof this?this:function(){},o=function(){
function t(n,e){
n.Super&&t(n.Super,e),n.init&&n.init.apply(e,r);
}
var n=this,r=arguments;
n.Root=i.__base__,n.Super=i.prototype,t(n,n);
};
return t(o.prototype,i.prototype||{},n),o.__base__=i.__base__||o.prototype,o.GetStaticInstance=r,
o.Inherit=o.inherit=e,o;
}
n.declare=i;
}();
});;!function(e){
function t(e){
return e>=49&&90>=e;
}
function n(e){
return(e||"").toLowerCase().split("+").sort().join("").replace(/\s/gi,"");
}
function o(e){
var t=e.type;
return"mousewheel"==t||"DOMMouseScroll"==t;
}
function r(e){
return e.wheelDelta>0||e.detail<0?"mousewheelup":"mousewheeldown";
}
function u(e){
var n=e.keyCode,u=f[n],s=!u&&t(n)&&String.fromCharCode(n).toLowerCase()||o(e)&&r(e),a=e.ctrlKey,c=e.shiftKey,i=e.altKey,p=c&&(l[s]||l[u]),h=[];
return a||i||!p||(u=p,c=s=null),a&&h.push("ctrl"),c&&h.push("shift"),i&&h.push("alt"),
u&&h.push(u),s&&h.push(s),h.join("+");
}
function s(e,t){
return n(u(e))==n(t);
}
var f={
27:"esc",
9:"tab",
32:"space",
13:"enter",
8:"backspace",
145:"scroll",
20:"capslock",
144:"numlock",
19:"pause",
45:"insert",
36:"home",
46:"del",
35:"end",
33:"pageup",
34:"pagedown",
37:"left",
38:"up",
39:"right",
40:"down",
107:"=",
109:"-",
112:"f1",
113:"f2",
114:"f3",
115:"f4",
116:"f5",
117:"f6",
118:"f7",
119:"f8",
120:"f9",
121:"f10",
122:"f11",
123:"f12",
188:"<",
190:">",
191:"/",
192:"`",
219:"[",
220:"\\",
221:"]",
222:"'"
},l={
"`":"~",
1:"!",
2:"@",
3:"#",
4:"$",
5:"%",
6:"^",
7:"&",
8:"*",
9:"(",
0:")",
"-":"_",
"=":"+",
";":":",
"'":'"',
",":"<",
".":">",
"/":"?",
"\\":"|"
};
e.wx=e.wx||{},e.wx.hotkeyStr=u,e.wx.isHotkey=s;
}(window);;define("common/wx/Tips.js",[],function(e,r){
"use strict";
function n(e,r,n){
$(".JS_TIPS").remove(),s=$(template.compile('<div class="JS_TIPS page_tips {type}" id="wxTips_'+(new Date).getTime()+'"><div class="inner">{=msg}</div></div>')({
type:e||"error",
msg:r
})).appendTo("body").fadeIn(),t.delay(n||a.delay,null,s);
}
function t(e){
e.length>0&&e.fadeOut({
complete:function(){
e.remove();
}
});
}
function c(e){
if("string"!=typeof e)return e;
var r="";
return 0==e.length?"":(r=e.replace(/&/g,"&gt;"),r=r.replace(/</g,"&lt;"),r=r.replace(/>/g,"&gt;"),
r=r.replace(/ /g,"&nbsp;"),r=r.replace(/\'/g,"&#39;"),r=r.replace(/\"/g,"&quot;"),
r=r.replace(/\n/g,"<br>"));
}
var s,i=r,a={
errMsg:"系统发生错误，请稍后重试",
sucMsg:"操作成功",
delay:2
};
i.err=function(e,r){
n("error",c(e)||a.errMsg,r);
},i.suc=function(e,r){
n("success",c(e)||a.sucMsg,r);
};
});;define("common/wx/Cgi.js",["common/qq/mask.js","common/wx/dialog.js","common/wx/Tips.js","common/wx/cgiReport.js","common/lib/MockJax.js","common/qq/events.js"],function(o,n){
"use strict";
function e(o,n,e){
var a,t;
e&&"object"==typeof e?(a=e.done,t=e.fail):a=e,"string"==typeof n&&n.length>0&&(n={
url:n
}),n=$.extend(!0,{},c,{
type:o,
data:{
random:Math.random().toString()
}
},n),n.mock&&(n.mock===!0?n.mock={
responseText:{
ret:0,
data:{},
url:n.url,
param:n.data
}
}:!n.mock||n.mock.responseText||n.mock.response||(n.mock={
responseText:n.mock
}),n.mock.url=n.mock.url||n.url,$.mockjax(n.mock)),n.mask&&($.isPlainObject(n.mask)?s.show(n.mask):s.show());
var i=$.ajax(n);
return i.callback=i.done,i.done(function(o){
a&&a(o);
}).fail(function(o,e,s){
t&&t(e),m.error(e,n),r.trigger("xhrError",o,e,s,n);
}).always(function(){
n.mask&&s.hide();
}),i;
}
var s=o("common/qq/mask.js"),a=o("common/wx/dialog.js"),t=o("common/wx/Tips.js"),m=o("common/wx/cgiReport.js");
o("common/lib/MockJax.js");
var r=o("common/qq/events.js")(!0),c={
dataType:"json",
mask:!1,
timeout:45e3,
error:$.noop,
mock:!1,
data:{
token:wx.data.t,
lang:wx.data.lang,
f:"json",
ajax:"1"
}
};
n.get=function(o,n){
return e("get",o,n);
},n.post=function(o,n){
return e("post",o,n);
};
var i={
0:"恭喜你，操作成功！",
"-1":"系统错误，请稍后尝试。",
"-2":"参数错误，请核对参数后重试。",
"-3":"登录态超时，请重新登录。",
"-4":"请求页面的域名没有授权。",
"-5":"请求方式错误，请确认请求方式后重试。",
"-6":"表单名称验证出错，请核对表单名称后重试。",
"-7":"对不起，你没有权限访问目标请求。"
};
n.show=function(o,n){
var e=i[o.base_resp.ret]||"系统繁忙，请稍后尝试！";
return 0==o.base_resp.ret?void(n?a.show({
type:"succ",
msg:"系统提示|"+e
}):t.suc(e)):void(n?a.show("系统错误|"+e):t.err(e));
};
});;define("common/wx/dialog.js",["biz_common/jquery.ui/jquery.ui.draggable.js","tpl/dialog.html.js"],function(t,e){
"use strict";
function i(t){
var e=this;
"string"==typeof t&&(t={
msg:t
}),t=$.extend(!0,{},o,t),e.id=t.id=[s.uiName,"_",++s.uid].join(""),t.icon=s.iconClass[t.type||"warn"];
var i=[];
i=t.msg.split("|"),t.msg=i[0]?i[1]?{
title:i[0],
text:i[1],
msgClass:""
}:{
title:t.msg,
msgClass:"single_line"
}:{
text:i[1],
msgClass:"single_line"
},$.each(t.buttons,function(t,e){
e.type=s.btTypes[e.type||"primary"];
}),e.opt=t,$(template.compile(s.html)(t)).appendTo("body"),e.dom=$("#"+this.id).parent(),
e.dom.css("margin-left",-1*e.dom.outerWidth()/2).css("margin-top",-1*e.dom.outerHeight()/2),
e.dom.fadeIn(),t.draggable&&e.dom.draggable({
handle:".dialog_hd"
}),function(){
$.each($("#"+e.id+" .js_btn"),function(i,o){
t.buttons[i].click&&$(o).click(function(){
return t.buttons[i].click.apply(e),!1;
});
}),$("#"+e.id+" .pop_closed").click(function(){
return t.close&&"function"==typeof t.close?void(t.close()&&e.remove()):void e.remove();
});
}();
}
t("biz_common/jquery.ui/jquery.ui.draggable.js");
var o={
title:"温馨提示",
type:"warn",
msg:"错误信息|对不起，系统繁忙请稍后尝试。",
buttons:[{
text:"确定",
click:function(t){
this.remove(t);
}
}],
width:720,
height:0,
draggable:!0,
mask:!0,
className:""
},s={
uid:0,
uiName:"wxDialog",
iconClass:{
succ:"success",
err:"error",
warn:"warn",
info:"info"
},
btTypes:{
primary:"btn_primary",
normal:"btn_default",
disabled:"btn_disabled"
}
};
s.html=t("tpl/dialog.html.js"),i.prototype={
hide:function(){
this.opt.mask&&this.dom.next().remove(),this.dom.fadeOut();
},
remove:function(){
this.opt.mask&&this.dom.next().remove(),this.dom.remove();
},
resetPos:function(){
var t=this;
t.dom.css("margin-left",-1*t.dom.outerWidth()/2).css("margin-top",-1*t.dom.outerHeight()/2);
}
},e.show=function(t){
return new i(t);
};
});;define("common/wx/popup.js",["common/wx/widgetBridge.js","biz_common/jquery.ui/jquery.ui.draggable.js","tpl/popup.html.js"],function(t){
"use strict";
t("common/wx/widgetBridge.js"),t("biz_common/jquery.ui/jquery.ui.draggable.js");
var i=t("tpl/popup.html.js"),o=template.compile(i),n={
disabled:"btn_disabled",
primary:"btn_primary",
"default":"btn_default"
};
$.widgetBridge("popup",{
$dialogWrp:null,
options:{
title:"温馨提示",
width:726,
height:null,
template:template.compile,
data:{},
buttons:[],
onHide:null,
onShow:null,
onOK:null,
onCancel:null,
mask:!0,
autoShow:!0
},
_create:function(){
var t=this,i=$.extend(!0,{},this.options),e=function(){
t.hide();
};
i.buttons&&!$.isArray(i.buttons)&&(i.buttons=[i.buttons]),!i.buttons.length&&i.onOK&&(i.buttons=[{
text:"确定",
type:"primary",
click:function(){
var t=i.onOK&&i.onOK.call(this);
!t&&e();
}
},{
text:"取消",
click:function(){
var t=i.onCancel&&i.onCancel.call(this);
!t&&e();
}
}]),$.each(i.buttons,function(t,i){
i.type=n[i.type||"default"];
});
var l;
if(this.element.is("script[type=text/html]"))l=this.element.html(),this.options.data&&this.options.template&&(l=this.options.template(l)(this.options.data));else{
var s=$("<div></div>").append(this.element.clone()),l=s.html();
this.options.data&&this.options.template&&(l=this.options.template(l)(this.options.data));
}
if(i.content=l,this.$dialogWrp=$(o(i)).appendTo("body"),this.$dialogWrp.find(".dialog_bd").children(":first").show(),
i.autoShow||this.$dialogWrp.hide(),this.$dialogWrp.find(".pop_closed").click(i.onClose||e),
this.$dialogWrp.find(".js_btn").each(function(o){
var n=i.buttons[o].click,e=n?function(i){
n.call(t,i);
}:function(){};
$(this).click(e);
}),this.resetPosition(),i.autoShow){
var a=t.options.onShow;
"function"==typeof a&&a.call(t);
}
return this.$dialogWrp.draggable({
handle:".dialog_hd"
}),this.get();
},
show:function(){
var t=this,i=t.options.onShow,o=!0;
this.$dialogWrp.fadeIn(function(){
o&&("function"==typeof i&&i.call(t),o=!1);
});
},
resetPosition:function(){
$(this.$dialogWrp.get(0)).css({
"margin-left":-1*this.$dialogWrp.outerWidth()/2,
"margin-top":-1*this.$dialogWrp.outerHeight()/2
});
},
get:function(){
return this.$dialogWrp.filter(".dialog_wrp");
},
hide:function(){
var t=this,i=t.options.onHide||t.options.close,o=!0;
this.$dialogWrp.fadeOut(function(){
o&&("function"==typeof i&&i.call(t),o=!1);
});
},
remove:function(){
this.destroy(),this.$dialogWrp.remove();
}
});
});;"object"!=typeof JSON&&(JSON={}),function(){
"use strict";
function f(t){
return 10>t?"0"+t:t;
}
function quote(t){
return escapable.lastIndex=0,escapable.test(t)?'"'+t.replace(escapable,function(t){
var e=meta[t];
return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})+'"':'"'+t+'"';
}
function str(t,e){
var r,n,o,f,u,p=gap,i=e[t];
switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),
typeof i){
case"string":
return quote(i);

case"number":
return isFinite(i)?String(i):"null";

case"boolean":
case"null":
return String(i);

case"object":
if(!i)return"null";
if(gap+=indent,u=[],"[object Array]"===Object.prototype.toString.apply(i)){
for(f=i.length,r=0;f>r;r+=1)u[r]=str(r,i)||"null";
return o=0===u.length?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+p+"]":"["+u.join(",")+"]",
gap=p,o;
}
if(rep&&"object"==typeof rep)for(f=rep.length,r=0;f>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],
o=str(n,i),o&&u.push(quote(n)+(gap?": ":":")+o));else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),
o&&u.push(quote(n)+(gap?": ":":")+o));
return o=0===u.length?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+p+"}":"{"+u.join(",")+"}",
gap=p,o;
}
}
"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){
return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null;
},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){
return this.valueOf();
});
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
},rep;
JSON.stringify2=function(t,e,r){
var n;
if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);
if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");
return str("",{
"":t
});
},"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){
function walk(t,e){
var r,n,o=t[e];
if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),
void 0!==n?o[r]=n:delete o[r]);
return reviver.call(t,e,o);
}
var j;
if(text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(t){
return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4);
})),/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),
"function"==typeof reviver?walk({
"":j
},""):j;
throw new SyntaxError("JSON.parse");
});
}();;