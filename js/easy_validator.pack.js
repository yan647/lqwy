 

var submitStr = false;
$(function () {
    $("#btnSubmit").click(function () {
        submitStr = true;//是提交按钮，则需要询问是否确认提交
    });
});
function tijiao(isSubmit) {
    if (isSubmit) {
        if (confirm("确定要提交吗?")) {
            submitStr = false;//单击一次提交按钮之后需要把提交状态还原到初始，即没有提交
            return true;
        }
        else {
            submitStr = false; //单击一次提交按钮之后需要把提交状态还原到初始，即没有提交
            return false;
        }
    }
    else {
        submitStr = false; //单击一次提交按钮之后需要把提交状态还原到初始，即没有提交
        return false;
    }
}

function getRootPath() {
    var strFullPath = window.document.location.href;
    var strPath = window.document.location.pathname;
    var pos = strFullPath.indexOf(strPath);
    var prePath = strFullPath.substring(0, pos);
    var postPath = strPath.substring(0, strPath.substr(1).indexOf('/') + 1);
    return (prePath + postPath);
}

var clientStr = false;
$(function () {
    var xOffset = -20; // x distance from mouse
    var yOffset = 20; // y distance from mouse  
    //    var errorMsg = "";

    //input action
    $("[reg],[url]:not([reg]),[tip]").hover(
		function (e) {
		    if ($(this).attr('tip') != undefined) {
		        var top = (e.pageY + yOffset);
		        var left = (e.pageX + xOffset);
		        $('body').append('<p id="vtip" style="color:#FF0000"><img id="vtipArrow" src="../../image/vtip_arrow.png"/>' + $(this).attr('tip') + '</p>');
		        $('p#vtip').css("top", top + "px").css("left", left + "px");
		        try {
		            $('p#vtip').bgiframe();
		        } catch (e) {

		        }
		    }
		},
		function () {
		    if ($(this).attr('tip') != undefined) {
		        $("p#vtip").remove();
		    }
		}
	).mousemove(
		function (e) {
		    if ($(this).attr('tip') != undefined) {
		        var top = (e.pageY + yOffset);
		        var left = (e.pageX + xOffset);
		        $("p#vtip").css("top", top + "px").css("left", left + "px");
		    }
		}
	).blur(function () {
	    if ($(this).attr("url") != undefined) {
	        ajax_validate($(this));
	    } else if ($(this).attr("reg") != undefined) {
	        validate($(this));
	    }
	});

    $("form").submit(function () {
        var errorMsg = "";
        var isSubmit = true;
        $(this).find("[reg],[url]:not([reg])").each(function () {
            if ($(this).attr("reg") == undefined) {
                if (!ajax_validate($(this))) {
                    isSubmit = false;
                    var strName = $(this).attr('name');
                    if (strName.indexOf("ddl") >= 0 || strName.indexOf("txt") >= 0)
                        strName = strName.substring(3);
                    errorMsg += strName + ":" + $(this).attr('tip') + "\n";
                }
            } else {
                if (!validate($(this))) {
                    isSubmit = false;
                    var strName = $(this).attr('name');
                    if (strName.indexOf("ddl") >= 0 || strName.indexOf("txt") >= 0)
                        strName = strName.substring(3);
                    errorMsg += strName + ":" + $(this).attr('tip') + "\n";
                }
            }
        });
        if (typeof (isExtendsValidate) != "undefined") {
            if (isSubmit && isExtendsValidate) {
                return extendsValidate();
            }
        }

        if (!isSubmit) {
            if (clientStr) //不需要验证
                isSubmit = (!isSubmit); //把验证不通过改成通过
            else //需要验证
                alert(errorMsg); //弹出验证的错误信息
        }
        else if (submitStr) { //验证通过，且是提交按钮
            if (!(tijiao(isSubmit))) { //询问是否提交，return ture是提交,return false是不提交
                isSubmit = (!isSubmit); //不提交,则把验证通过改成不通过，使得页面不刷新不跳转
            }
        }
        return isSubmit;
    });


});

function clientfuc() {
//    alert("errorMsg");
    clientStr = true;//不需要验证，给出状态
}

function validate(obj) {
    var reg = new RegExp(obj.attr("reg"));
    var objValue = obj.attr("value");

    if (!reg.test(objValue)) {
        change_error_style(obj, "add");
        change_tip(obj, null, "remove");
        return false;
    } else {
        if (obj.attr("url") == undefined) {
            change_error_style(obj, "remove");
            change_tip(obj, null, "remove");
            return true;
        } else {
            return ajax_validate(obj);
        }
    }
}

function ajax_validate(obj) {

    var url_str = obj.attr("url");
    if (url_str.indexOf("?") != -1) {
        url_str = url_str + "&" + obj.attr("name") + "=" + obj.attr("value");
    } else {
        url_str = url_str + "?" + obj.attr("name") + "=" + obj.attr("value");
    }
    var feed_back = $.ajax({ url: url_str, cache: false, async: false }).responseText;
    feed_back = feed_back.replace(/(^\s*)|(\s*$)/g, "");
    if (feed_back == 'success') {
        change_error_style(obj, "remove");
        change_tip(obj, null, "remove");
        return true;
    } else {
        change_error_style(obj, "add");
        change_tip(obj, feed_back, "add");
        return false;
    }
}

function change_tip(obj, msg, action_type) {

    if (obj.attr("tip") == undefined) {//初始化判断TIP是否为空
        obj.attr("is_tip_null", "yes");
    }
    if (action_type == "add") {
        if (obj.attr("is_tip_null") == "yes") {
            obj.attr("tip", msg);
        } else {
            if (msg != null) {
                if (obj.attr("tip_bak") == undefined) {
                    obj.attr("tip_bak", obj.attr("tip"));
                }
                obj.attr("tip", msg);
            }
        }
    } else {
        if (obj.attr("is_tip_null") == "yes") {
            obj.removeAttr("tip");
            obj.removeAttr("tip_bak");
        } else {
            obj.attr("tip", obj.attr("tip_bak"));
            obj.removeAttr("tip_bak");
        }
    }
}

function change_error_style(obj, action_type) {
    if (action_type == "add") {
        obj.addClass("input_validation-failed");
    } else {
        obj.removeClass("input_validation-failed");
    }
}

$.fn.validate_callback = function (msg, action_type, options) {
    this.each(function () {
        if (action_type == "failed") {
            change_error_style($(this), "add");
            change_tip($(this), msg, "add");
        } else {
            change_error_style($(this), "remove");
            change_tip($(this), null, "remove");
        }
    });
};
