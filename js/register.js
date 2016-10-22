$(document).ready(function(){
   $("#btnLogin").click(function(){
      var username=$("#company_name").val();
       if(username=="")
      {            
  
       art.dialog.alert2("请输入用户名!");
      art.dialog({
    left: '50%',
    top: '10%',
    content: '我改变坐标了'
});
         //art.dialog({   content: '请输入用户名!',     cancelVal: '关闭',     cancel: true  ,			    lock: true  });
         return;
      } 
     var pwd=$("#pwd").val();
       if(pwd=="")
      {              art.dialog.alert("请输入密码!");
        //art.dialog({    content: '请输入密码!',     cancelVal: '关闭',     cancel: true  ,			    lock: true   });
        return;
      } 
     var verifycode=$("#verifycode").val();
      if(verifycode=="")
      {         art.dialog.alert("请输入确证码!");     
          //art.dialog({  content: '请输入确证码!',    cancelVal: '关闭',    cancel: true   ,			    lock: true   });
          return;
      }
        $.ajax(
           {
            url:"<%=path%>/User/Login.action",
			dataType : "json", //返回的数据类型,text 或者 json数据，建议为json
			type : "post", //传参方式，get 或post
			data : {
					username : username, //传过去的参数，格式为 变量名：变量值
					pwd : pwd,
					verifycode : verifycode
			},
			beforeSend : function(XMLHttpRequest) {
															//alert('beforeSend 远程调用开始...');
							$("#btnLogin").attr("disabled",	"true");//添加disabled属性 
							$("#divloading").html("<img src='images/loading.gif' style='width:30px;height:30px; ' />");
					},
			success : function(	data,textStatus) {
															// alert('success ，状态值：'+textStatus+' ;返回数据：'+data.msg);
															//  $("#divloading").empty();
					$("#btnLogin").removeAttr("disabled"); // $("#btnLogin").attr("disabled","false");//disabled属性$('#button').removeAttr("disabled"); 移除disabled属性 
								if (data.msg == "1") {
									window.location.href = "admin/Default.html";
								} else {
								  art.dialog.alert(data.msg);
								}
			  },
			 complete : function(XMLHttpRequest,textStatus) {
															// alert('complete 远程调用完成，状态值：'+textStatus);
					 	$("#divloading").empty();
						 $("#btnLogin").removeAttr("disabled");
				 },
			 error : function(XMLHttpRequest,textStatus,	errorThrown) {
					 $("#divloading").empty();
						 $("#btnLogin").removeAttr("disabled");
						   art.dialog.alert("登录请求发生异常!"+ errorThrown,cancelVal);
					//	 art.dialog({	content : '登录请求发生异常!'+ errorThrown,cancelVal : '关闭',	cancel : true,	 lock: true				});
															//  alert('error...状态值:'+textStatus+" ;异常信息:："+errorThrown);

				 }//end error
			 }); //end $.ajax

		 });
 	});