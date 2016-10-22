	        function ShowCourseInforDialog(sn) {  
            var page = '<%=basePath%>User/AuditDetail.action?sn='+sn;
            art.dialog.open(page, {
                lock: true, //锁屏
                background: '#D8D8D8', // 背景色
                opacity: 0.87, // 透明度
                top:'15%',
                title: '审核信息',
                width: '900px',
                height: '700px',
                id: Math.random(),
                close: function () {
                
                //刷新页面
                location.reload();
                    var strReturnValue = art.dialog.data('strReturnValue'); // 读取子页面的数据
                    if (strReturnValue !== undefined && strReturnValue != '-1') {
                       
                    }
                    //document.body.removeChild(document.getElementById("bgDialog"));
                }
            }, false);
 
        }
	        
	        function ShowComfDialog(sn){ 
	            
	            if(sn=="")
	               {
	                  art.dialog.alert("参数传递发生异常！");    
	                  return; 
	               }  
	               art.dialog.confirm('确定已打款给该厂商？', function () {
	               $.ajax(
	              {
	               url:"<%=path%>/User/AuditListComf.action",
	   			dataType : "json", //返回的数据类型,text 或者 json数据，建议为json
	   			type : "post", //传参方式，get 或post
	   			data : {sn:sn },
	   			beforeSend : function(XMLHttpRequest) {
	   							$("#divloading").html("<img src='images/loading.gif' style='width:30px;height:30px; ' />");
	   					},
	   			success : function(	data,textStatus) {
	   															// alert('success ，状态值：'+textStatus+' ;返回数据：'+data.msg);
	   															//  $("#divloading").empty();
	   					$("#btnSave").removeAttr("disabled"); // $("#btnLogin").attr("disabled","false");//disabled属性$('#button').removeAttr("disabled"); 移除disabled属性 
	   								if (data.msg == "1") {
	   									 //先清除div内容
	   									$("#dtGridContainer_2_1_8").empty();
	   									 var grid_2_1_8 = $.fn.DtGrid.init(dtGridOption_2_1_8);
	   									 	$(function(){
	   									 		grid_2_1_8.load();
	   									 	});
	   									 	art.dialog.alert("操作成功！");
	   								} else {
	   								  art.dialog.alert(data.msg);
	   								//art.dialog({content : data.msg,		cancelVal : '关闭',cancel : true,	    lock: true	});
	   									}
	   			  },
	   			 complete : function(XMLHttpRequest,textStatus) {
	   					 	$("#divloading").empty();
	   				 },
	   			 error : function(XMLHttpRequest,textStatus,	errorThrown) {
	   					 $("#divloading").empty();					
	   						   art.dialog.alert("请求发生异常!"+ errorThrown,cancelVal);
	   				 }//end error
	   			 }); //end $.ajax
	   			 
	   			    //art.dialog.tips('删除操作成功！id='+id);
	   			}, function () {
	   			  // art.dialog.tips('执行取消操作');
	   			});  
	          
	               
	       }
	       
	       
	        function ShowMultiComfDialog(sns){  
	       
	            if(sns.length<=0)
	               {
	                  art.dialog.alert("没有选中行！");    
	                  return; 
	               }  
	               art.dialog.confirm('确定已打款给选定的厂商？', function () {
	               $.ajax(
	              {
	               url:"<%=path%>/User/AuditListMultiComf.action",
	   			dataType : "json", //返回的数据类型,text 或者 json数据，建议为json
	   			type : "post", //传参方式，get 或post
	   			data : {sn:sns.join(",") 
	   			 },
	   			beforeSend : function(XMLHttpRequest) {
	   							$("#divloading").html("<img src='images/loading.gif' style='width:30px;height:30px; ' />");
	   					},
	   			success : function(	data,textStatus) {
	   															// alert('success ，状态值：'+textStatus+' ;返回数据：'+data.msg);
	   															//  $("#divloading").empty();
	   					$("#btnSave").removeAttr("disabled"); // $("#btnLogin").attr("disabled","false");//disabled属性$('#button').removeAttr("disabled"); 移除disabled属性 
	   							 
	   									 //先清除div内容
	   									$("#dtGridContainer_2_1_8").empty();
	   									 var grid_2_1_8 = $.fn.DtGrid.init(dtGridOption_2_1_8);
	   									 	$(function(){
	   									 		grid_2_1_8.load();
	   									 	});
	   									 	 
	   								 
	   								  art.dialog.alert(data.msg);
	   								//art.dialog({content : data.msg,		cancelVal : '关闭',cancel : true,	    lock: true	});
	   									
	   			  },
	   			 complete : function(XMLHttpRequest,textStatus) {
	   					 	$("#divloading").empty();
	   				 },
	   			 error : function(XMLHttpRequest,textStatus,	errorThrown) {
	   					 $("#divloading").empty();					
	   						   art.dialog.alert("请求发生异常!"+ errorThrown,cancelVal);
	   				 }//end error
	   			 }); //end $.ajax
	   			 
	   			    //art.dialog.tips('删除操作成功！id='+id);
	   			}, function () {
	   			  // art.dialog.tips('执行取消操作');
	   			});  
	          
	               
	       }
	       function ShowDelDialog(sn){
	           //  art.dialog.alert(id);   
	       
	            if(sn=="")
	               {
	                  art.dialog.alert("参数传递发生异常！");    
	                  return; 
	               }  
	               art.dialog.confirm('确定要删除吗？', function () {
	               $.ajax(
	              {
	               url:"<%=path%>/User/AuditListDel.action",
	   			dataType : "json", //返回的数据类型,text 或者 json数据，建议为json
	   			type : "post", //传参方式，get 或post
	   			data : {sn:sn },
	   			beforeSend : function(XMLHttpRequest) {
	   							$("#divloading").html("<img src='images/loading.gif' style='width:30px;height:30px; ' />");
	   					},
	   			success : function(	data,textStatus) {
	   															// alert('success ，状态值：'+textStatus+' ;返回数据：'+data.msg);
	   															//  $("#divloading").empty();
	   					$("#btnSave").removeAttr("disabled"); // $("#btnLogin").attr("disabled","false");//disabled属性$('#button').removeAttr("disabled"); 移除disabled属性 
	   								if (data.msg == "1") {
	   									 //先清除div内容
	   									$("#dtGridContainer_2_1_8").empty();
	   									 var grid_2_1_8 = $.fn.DtGrid.init(dtGridOption_2_1_8);
	   									 	$(function(){
	   									 		grid_2_1_8.load();
	   									 	});
	   									 	art.dialog.alert("删除操作成功！");
	   								} else {
	   								  art.dialog.alert("删除操作失败！");
	   								//art.dialog({content : data.msg,		cancelVal : '关闭',cancel : true,	    lock: true	});
	   									}
	   			  },
	   			 complete : function(XMLHttpRequest,textStatus) {
	   					 	$("#divloading").empty();
	   				 },
	   			 error : function(XMLHttpRequest,textStatus,	errorThrown) {
	   					 $("#divloading").empty();					
	   						   art.dialog.alert("请求发生异常!"+ errorThrown,cancelVal);
	   				 }//end error
	   			 }); //end $.ajax
	   			 
	   			    //art.dialog.tips('删除操作成功！id='+id);
	   			}, function () {
	   			  // art.dialog.tips('执行取消操作');
	   			});  
	          
	               
	       }
	
	       
	       
	       
	       function ShowMultiDelDialog(sn){
	           //  art.dialog.alert(id);   
	           if(sns.length<=0)
	               {
	                  art.dialog.alert("没有选中行！");    
	                  return; 
	               }  
	               art.dialog.confirm('确定要删除选中的记录吗？', function () {
	               $.ajax(
	              {
	               url:"<%=path%>/User/AuditListMultiDel.action",
	   			dataType : "json", //返回的数据类型,text 或者 json数据，建议为json
	   			type : "post", //传参方式，get 或post
	   			data : {sn:sns.join(",") 
	   			 },
	   			beforeSend : function(XMLHttpRequest) {
	   							$("#divloading").html("<img src='images/loading.gif' style='width:30px;height:30px; ' />");
	   					},
	   			success : function(	data,textStatus) {
	   															// alert('success ，状态值：'+textStatus+' ;返回数据：'+data.msg);
	   															//  $("#divloading").empty();
	   					$("#btnSave").removeAttr("disabled"); // $("#btnLogin").attr("disabled","false");//disabled属性$('#button').removeAttr("disabled"); 移除disabled属性 
	   								 
	   									 //先清除div内容
	   									$("#dtGridContainer_2_1_8").empty();
	   									 var grid_2_1_8 = $.fn.DtGrid.init(dtGridOption_2_1_8);
	   									 	$(function(){
	   									 		grid_2_1_8.load();
	   									 	});
	   									 	art.dialog.alert(data.msg);
	   								 
	   			  },
	   			 complete : function(XMLHttpRequest,textStatus) {
	   					 	$("#divloading").empty();
	   				 },
	   			 error : function(XMLHttpRequest,textStatus,	errorThrown) {
	   					 $("#divloading").empty();					
	   						   art.dialog.alert("请求发生异常!"+ errorThrown,cancelVal);
	   				 }//end error
	   			 }); //end $.ajax
	   			 
	   			    //art.dialog.tips('删除操作成功！id='+id);
	   			}, function () {
	   			  // art.dialog.tips('执行取消操作');
	   			});  
	          
	               
	       }
	       