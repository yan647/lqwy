function isIE678()
{
	
	var isIE = !!window.ActiveXObject;
	var isIE6 = isIE && !window.XMLHttpRequest;
	var isIE8 = isIE && !!document.documentMode;
	var isIE7 = isIE && !isIE6 && !isIE8;
	if (isIE) {
		if (isIE6||isIE7||isIE8) {
			 
			art.dialog({
				title:'联桥网云传感器信息平台友情提示：',
			    content: '<div style="width: 400px; word-break:break-all; word-wrap:break-word ;"><p>您使用的是较低版本浏览器，将导致无法使用后台的部分功能，建议您使用 IE9.0 或其他较新版本浏览器，以便更好的感受本系统的各项特色功能及服务，感谢您对联桥网云传感器信息平台的关心和支持。</p></div>',
			    ok: function () {
			    	 window.location.href = "http://www.gosafenet.com/";
			    },
			    cancelVal: '继续访问',
			    cancel: true //为true等价于function(){}
			});
			
		}  
	}
}
