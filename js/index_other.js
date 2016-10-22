/*推荐企业*/
function slideLine(ul, delay, speed, lh) {
	var slideBox = (typeof ul == 'string')?document.getElementById(ul):ul;
	var delay = delay||1000, speed=speed||20, lh = lh||20;
	var tid = null, pause = false;
	var start = function() {
		tid=setInterval(slide, speed);
	}
	var slide = function() {
		if (pause) return;
		slideBox.scrollTop += 2;	
		if (slideBox.scrollTop % lh == 0) {
			clearInterval(tid);
			slideBox.appendChild(slideBox.getElementsByTagName('li')[0]);
			slideBox.scrollTop = 0;
			setTimeout(start, delay);
		}
	}
	slideBox.onmouseover=function(){pause=true;}
	slideBox.onmouseout=function(){pause=false;}
	setTimeout(start, delay);
  }
/*952*50滚动广告*/
function slideLine01(ul, delay, speed, lh) {
	var slideBox01 = (typeof ul == 'string')?document.getElementById(ul):ul;
	var delay = delay||1000, speed=speed||20, lh = lh||20;
	var tid = null, pause = false;
	var start = function() {
		tid=setInterval(slide01, speed);
	}
	var slide01 = function() {
		if (pause) return;
		slideBox01.scrollTop += 2;	
		if (slideBox01.scrollTop % lh == 0) {
			clearInterval(tid);
			slideBox01.appendChild(slideBox01.getElementsByTagName('li')[0]);
			slideBox01.scrollTop = 0;
			setTimeout(start, delay);
		}
	}
	slideBox01.onmouseover=function(){pause=true;}
	slideBox01.onmouseout=function(){pause=false;}
	setTimeout(start, delay);
  }
  
  
/*首页最新商机Tab
		 
		 */
		var aId=1;//当前
		function clickT(obj,sId){
			if(obj.className=="trade_title_normal"){
				obj.className="trade_title_hover";
				document.getElementById("item"+aId).className="trade_title_normal";
				document.getElementById("chag"+aId).style.display="none";
				document.getElementById("chag"+sId).style.display="block";
				aId=sId;
			}
		}
	

	function killErrors() {  
	return true;  
	}  
	window.onerror = killErrors;  
	


