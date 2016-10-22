define("home/index.js",["common/wx/Cgi.js","common/wx/dialog.js","biz_common/moment.js","biz_common/cookie.js","common/wx/pagebar.js","common/wx/popup.js","common/wx/Tips.js","common/wx/popover.js"],function(e){
"use strict";
var t=template.render,n=e("common/wx/Cgi.js"),i=e("common/wx/dialog.js"),o=e("biz_common/moment.js"),a=e("biz_common/cookie.js"),r=e("common/wx/pagebar.js"),c=(e("common/wx/popup.js"),
e("common/wx/Tips.js")),s=e("common/wx/popover.js"),m=wx.cgiData;
!function(){
var e,o,a=$("#js_div_bank_verify"),r=new Date(1e3*wx.cgiData.bank_deadline),m=r.getMonth()+1+"月"+r.getDate()+"日";
$("#js_div_bank_deadline").html(m);
var f,u=!0;
$("#js_btn_show_bank_verify").length>0&&(f=new s({
dom:"#js_btn_show_bank_verify",
content:t("tpl_bank_verify",{}),
place:"bottom",
margin:"center",
hover:!1
}),f.hide(),e=$("#js_btn_bank_verify_submit"),o=$("#js_input_bank_verify_code"),
$("#js_btn_show_bank_verify").on("click",function(){
u?f.show():f.hide(),u=!u;
}),e.click(function(){
var t=$.trim(o.val());
return""==t?(c.err("请输入验证码"),!1):t.length<6?(c.err("验证码为6位数字"),!1):(e.btn(!1),void n.post({
url:"/acct/bankacctinfo",
data:{
action:"verify",
code:t
},
mask:!1
},function(t){
e.btn(!0);
var n=5;
0==t.base_resp.ret?1==t.success?(c.suc("验证成功，可正常使用公众平台"),f.remove(),a.hide()):c.err("验证码输入错误，你还有"+t.left_times+"次机会填写，3次错误帐号将被冻结",n):91==t.base_resp.ret?c.suc("你已经成功验证过打款的备注码，请勿重复验证",n):72==t.base_resp.ret?c.suc("你已成功验证过打款备注码，请勿重复验证",n):73==t.base_resp.ret?c.err("该帐号已经无法进行此操作",n):63==t.base_resp.ret?c.err("您已经用完3次填写机会，帐号将被冻结",n):62==t.base_resp.ret?c.err("您已经多次重填失败，无法再次提交对公帐号信息，帐号将被冻结",n):61==t.base_resp.ret?c.err("已经过期，无法提交对公帐号信息，帐号将被冻结",n):c.err("系统错误，请重试");
}));
})),1==wx.cgiData.force_remit_verify&&0==wx.cgiData.bank_verify_status&&i.show({
type:"info",
title:"注意",
msg:"注意|帐号需补充对公账户打款身份验证流程。请在%s前完成，否则公众号将被冻结。".sprintf(m),
buttons:[{
text:"去验证",
type:"primary",
click:function(){
location.href=wx.url("/acct/bankacctinfo?action=get");
}
}]
});
}(),function(){
if(1==m.show_verify_warning){
var e=new Date(1e3*m.verify_deadline),t="%s年%s月%s日".sprintf(e.getFullYear(),e.getMonth()+1,e.getDate()),n="认证提醒|由于未验证主体真实性，暂时无法使用公众平台群发功能和高级功能，请尽快申请微信认证。如果在%s之前未申请微信认证，该公众帐号将被注销。".sprintf(t);
1==wx.cgiData.nickname_invade&&(n+="你申请的公众帐号名称需要进一步提交相应资料，你可在认证流程中完成名称修改。");
{
i.show({
type:"info",
title:"提醒",
msg:n,
buttons:[{
text:"去认证",
click:function(){
location.href=wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto");
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
});
}
}
}(),function(){
var e=a.get("annual_review_dialog");
if(1==m.wxverify_annual_review&&!e){
a.set("annual_review_dialog",1,1,{
domain:"mp.weixin.qq.com"
});
var t;
t=1e3*m.wxverify_expired_time>+new Date?"你的微信认证即将到期，请尽快进行年审|你好，你的微信认证将于%s到期，请尽快进行认证年审，否则将失去认证标识和相关接口权限——订阅号将无法使用自定义菜单，服务号的高级接口、多客服接口及微信支付接口将被停用。".sprintf("<span class='mini_tips warn'>"+o.unix(m.wxverify_expired_time).format("YYYY年MM月DD日")+"</span>"):"你的微信认证即将到期，请尽快进行年审|你好，请尽快进行认证年审，否则将失去认证标识和相关接口权限——订阅号将无法使用自定义菜单，服务号的高级接口、多客服接口及微信支付接口将被停用。";
{
i.show({
type:"info",
title:"微信认证提示",
msg:t,
buttons:[{
text:"去认证",
click:function(){
location.href=wx.url("/acct/wxverify?action=step&t=wxverify/index&step=proto");
}
},{
text:"取消",
type:"normal",
click:function(){
this.hide();
}
}]
});
}
}
}(),function(){
var e=a.get("noticeLoginFlag");
seajs.use("biz_web/lib/store.js",function(){
"0"!=e&&e&&n.get({
mask:!1,
url:wx.url("/cgi-bin/sysnotify?f=json&begin=0&count=5")
},function(e){
if(e&&e.base_resp&&0==e.base_resp.ret&&e.Count){
for(var t=[],n=e.List,i=e.Count,o=function(e,t){
var n={
1:"你的群发",
2:"你的开发者申请",
3:"你的头像更改",
4:"你的昵称修改",
5:"你的功能介绍更改",
6:"你的信息登记",
7:"你的信息登记",
8:"你的信息登记",
9:"你的信息登记",
10:"你的信息登记",
11:"你的自定义菜单申请",
12:"你的商户功能权限申请",
14:"微信支付",
15:"微信支付",
16:"微信支付",
18:"微信认证",
19:"微信认证",
22:"商户功能初审",
23:"模板消息申请",
24:"商品购买测试链接",
26:"修改商户功能设置"
},i="";
return 3==t?i="已经通过审核":2==t&&(i="审核不通过"),"undefined"!=typeof n[e]?n[e]+i:"";
},r=0;i>r;++r){
var c=n[r];
t.push({
text:1==c.NotifyMsgType?o(c.CheckType,c.CheckStatus):c.Title,
url:wx.url("/cgi-bin/frame?t=notification/index_frame&selectid="+c.Id),
level:c.Level
});
}
seajs.use("common/wx/noticeBox",function(e){
new e({
container:"#accountArea",
list:t
}),$("#accountArea .jsNoticeClose").click(function(){
a.set("noticeLoginFlag",0,null,{
path:"/"
}),$("#accountArea").unbind("mouseover").removeClass("on").find(".account_message_box").remove();
});
});
}
});
});
}(),function(){
{
var e=wx.cgiData.total_count,t=wx.cgiData.count,n=wx.cgiData.begin;
new r({
container:".pageNavigator",
perPage:t,
first:!1,
last:!1,
isSimple:!0,
initShowPage:n,
totalItemsNum:e,
callback:function(e){
var t=e.currentPage;
if(t!=n)return t--,location.href=wx.url("/cgi-bin/home?t=home/index&start="+(t+1)),
!1;
}
});
}
}();
});