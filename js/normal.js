  
  //创建tab菜单
    function tabinit(tabarray,tabid){
        var newarry = tabarray;
        var tabid = tabid;
        var list="";
        var width = (100)/newarry.length;
        for (var i=0;i<newarry.length;i++)
        {
          list +="<li style='width:"+width+"%'>"+newarry[i]+"</li>";
        }
        document.getElementById(tabid).innerHTML = list;
    }
        
    //tab切换
    //babtit:tab菜单按钮id; bat_conbox:tab内容ul的id; event:控制切换的事件，可以是click或者mouseenter等
    function jqtab(tabtit,tab_conbox,event) {
        $(tab_conbox+'>li').hide();
        $(tabtit).find("li").eq(0).addClass("thistab").show(); 
        $(tab_conbox).find("li").eq(0).show();
        
        //绑定事件
        $(tabtit).find("li").bind(event,function(){
            $(this).addClass("thistab").siblings("li").removeClass("thistab"); 
            var activeindex = $(tabtit).find("li").index(this);
            $(tab_conbox).children().eq(activeindex).siblings().hide();
            if($(tab_conbox).children().eq(activeindex).hide()){
                $(tab_conbox).children().eq(activeindex).show();
            }
            return false;
        });
    }
    
    //滚动函数
    //param:滚动到达部位的标签class，不填为滚动到顶部;size:距离顶部的距离，不填为70
    function scrollnum(param,size){        
        if (param != '') {
            if (size!='') {
            	$('html,body').animate({scrollTop:$('.'+param).offset().top-size}, 800);
            } else{
            	$('html,body').animate({scrollTop:$('.'+param).offset().top-70}, 800);
            }            
        } 
        else{
            $('html,body').animate({scrollTop:0}, 800); 
        }
    }
    
     //侧边栏滚动函数
    function scrollgoTop(classparam,height){
        var toTop =  document.body.clientHeight - height;
        $(classparam).css('top',toTop+'px');
        $(window).scroll(function() {
            var scrolltop = $(document).scrollTop() + toTop;
            $(classparam).animate({top:scrolltop+'px'},$(document).scrollTop()/50);
        }); 
    } 
    
    //微信提示分享按钮
    function wxtipsIn(){
        $('.allfade').fadeIn()
        $('.wxtips').fadeIn()
    }
    function hidethis(){
        $('.allfade').fadeOut()
        $('.wxtips').fadeOut()
    }
  
    //input的获取焦点和失去焦点事件
    function focusStyle()
    {
        $(this).css('border','1px solid #ccc');
        $(this).css('background','#f5f5f5')
    }
    function blurStyle()
    {
        $(this).css('border','1px solid #d2d2d2');
        $(this).css('background','#fff')
    }
    
    //弹框 1.popupid显示的弹框ID，2.ifanimate是否需要弹出动画，3.ifcanclick是否可点击阴影处消失
    function showpopbox(popupid,ifanimate,ifcanclick){
        if (ifcanclick) {
            $('#fadeneverdis').css({'filter' : 'alpha(opacity=55)'}).fadeIn();
        } else{
            $('#fade').css({'filter' : 'alpha(opacity=55)'}).fadeIn();
        }
        $('#' + popupid).fadeIn();
        $('#' + popupid).css({
            'margin-top' : "-30%",
            'margin-left' :"-14rem"
            });
        if (ifanimate) {
            $('#' + popupid).addClass('boxanimate');
        }
    }
    
    

