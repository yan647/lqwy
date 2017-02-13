// (function () {
//     var input = document.querySelector('input');

//     input.onchange = function () {
//         // 也可以传入图片路径：lrz('../demo.jpg', ...
//         lrz(this.files[0], {
//          width:1200,
//          height:900,
//          before: function() {
//             console.log('压缩开始');
//         },
//         fail: function(err) {
//             console.error(err);
//         },
//         always: function() {
//             console.log('压缩结束');
//         },
//         done: function (results) {
//             // 你需要的数据都在这里，可以以字符串的形式传送base64给服务端转存为图片。
//             console.log(results);


//             // 以下为演示用内容
//             var tip = document.querySelector('#tip'),
//             report = document.querySelector('#report'),
//             footer = document.querySelector('footer');

//             report.innerHTML = footer.innerHTML =  '';
//             tip.innerHTML = '<p>正在生成和上传..</p> <small class="text-muted">演示未优化移动端内存占用，可能会造成几秒内卡顿或闪退，不代表真实表现，请亲测。</small>';
//             demo_report('原始图片', results.origin, results.origin.size);

//             setTimeout(function () {
//                 demo_report('客户端预压的图片', results.base64, results.base64.length * 0.8);

//                 // 发送到后端
//                 var xhr = new XMLHttpRequest();
//                 var data = {
//                     base64: results.base64,
//                     size: results.base64.length // 校验用，防止未完整接收
//                 };

//             }, 100);
//         }
//     });
//     };

//     /**
//      * 演示报告
//      * @param title
//      * @param src
//      * @param size
//      */
//      function demo_report(title, src, size) {
//         var img = new Image(),
//         li = document.createElement('li'),
//         size = (size / 1024).toFixed(2) + 'KB';

//         if(size === 'NaNKB') size = '';

//         img.onload = function () {
//             var content = '<ul>' +
//             '<li>' + title + '（' + img.width + ' X ' + img.height + '）</li>' +
//             '<li class="text-cyan">' + size + '</li>' +
//             '</ul>';

//             li.className = 'item';
//             li.innerHTML = content;
//             li.appendChild(img);
//             document.querySelector('#report').appendChild(li);
//         };

//         img.src = typeof src === 'string' ? src : URL.createObjectURL(src);
//     }

//     // 演示用服务器太慢，做个延缓加载
//     window.onload = function () {
//         input.style.display = 'block';
//     }
// })();


//function SetOver1() {
        //   $("#img1")).rotate({animateTo:360});
        // image.style.transform = 'rotate(360deg)';
        // image.style.cssText = "-webkit-transform: rotate(0deg);-moz-transform: rotate(360deg);transform:rotate(0deg);-o-transform:rotate(360deg);";  
    //}     
      //function SetOut1() {
        //   $("#img1")).rotate({animateTo:0});
        // image.style.transform = 'rotate(360deg)';
        // image.style.cssText = "-webkit-transform: rotate(0deg);-moz-transform: rotate(360deg);transform:rotate(0deg);-o-transform:rotate(360deg);";  
    //}

    $(document).ready(function(){
        //菜单居中
        $(function(){
            var w=$(".navbar-nav").width();
            var bodyw=$("body").width();
            var mw=(bodyw-w)/2;
            if(bodyw>767){
                $(".navbar-nav").css("padding-left",mw+"px");
            }
        })

        if(navigator.userAgent.indexOf("Mobile")>0){
            $("#slider_img1").attr("src","img/banner_index1_.jpg");
            $("#slider_img2").attr("src","img/banner_index2_.jpg");
            $("#slider_img3").attr("src","img/banner_index3_.jpg");
        } else {
            $("#slider_img1").attr("src","img/banner_index1.jpg");
            $("#slider_img2").attr("src","img/banner_index2.jpg");
            $("#slider_img3").attr("src","img/banner_index3.jpg");
        }

        /*$("#img1").rotate({ 
            bind: 
            { 
                mouseover : function() { 
                    $(this).rotate({animateTo:360});
                },
                mouseout : function() { 
                    $(this).rotate({animateTo:0});
                }
            } 
        });
        $("#img2").rotate({ 
            bind: 
            { 
                mouseover : function() { 
                    $(this).rotate({animateTo:360});
                }
                mouseout : function() { 
                    $(this).rotate({animateTo:0});
                }
            }   
        });
        $("#img3").rotate({ 
            bind: 
            { 
                mouseover : function() { 
                    $(this).rotate({animateTo:360});
                },
                mouseout : function() { 
                    $(this).rotate({animateTo:0});
                }
            }  
        });*/   
    });

    //图片轮播
    window.onload=function(){
        flag=0;
        lis=$(".li_img");
        lis[0].style.backgroundColor="#ffffff";

        time=setInterval("turn();",5000);
        setInterval(time,5000);

        // $("#prev").hover(function(){
        //     clearInterval(time);
        // },function(){
        //     setInterval("turn();",6000);
        // });
        // $("#prev").click(function(){
        //     flag=(flag>0)?(--flag):(lis.length-1);
        //     turn(flag);
        // }); 
        // $("#next").hover(function(){
        //     clearInterval(time)
        // },function(){
        //     setInterval("turn();",6000);
        // });
        // $("#next").click(function(){
        //     flag=(flag<lis.length-1)?(++flag):0;
        //     turn(flag);
        // });
        for(var num=0;num<lis.length;num++){
            lis.eq(num).hover(function(){
                turn(this.innerHTML);
                clearInterval(time);
            },function(){
                setInterval("turn();",6000);
            });
        }
    }

    function turn(ele){
        if(ele!=null){
            flag=ele-2;
        }
        if(flag<lis.length-1)
            flag++;
        else flag=0;
        
        for(var i=0;i<lis.length;i++){
            lis[i].style.backgroundColor="transparent";
            $("#slider a").eq(i).find("img").css("display","none");
        }
        lis[flag].style.backgroundColor="#ffffff";
        $("#slider a").eq(flag).find("img").css("display","block");
    }
    

    