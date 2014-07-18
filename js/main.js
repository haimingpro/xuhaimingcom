var HOME= HOME || {};
var _language_arr=["cn","jp","en"];
var sizeArr=[];
var shareText = "We work with computers because they are the medium that is best capable of transmitting some feelings that you have,you want to share with other people.";
var _lan = 2;

HOME.init = function (){
	new HOME.Respond();
	new HOME.BtnEff();
	new HOME.Lan();
}
HOME.Respond = function(){
	api = {
		init : function(){
			windowSize();
		    windowInit();
		    $('#js-pic').adipoli({
		      'startEffect' : 'grayscale',
		      'hoverEffect' : 'boxRainGrow',
		      'boxCols' : '9',
			  'boxRows':'6',
			  'animSpeed':'100'
		    });
		}
	},
	windowSize = function (){
		$(window).bind('resize',(function() {
    		windowInit();
    		agentBtns();
    	}));
    	$(window).bind( 'orientationchange', function(){
			if(window.orientation){
		    	windowInit();
    			agentBtns();	
		    }	
		});
	},
	windowInit = function (){
		newArr=[$(window).width(),$(window).height()];  	
		sizeArr=(new imgzoom(1401,486,newArr[0],newArr[1]).getSize());
		var _left=sizeArr[0]<newArr[0]?newArr[0]:sizeArr[0];
		sizeArr[0]=newArr[0]<320?320:newArr[0];
		sizeArr[1]=sizeArr[1]<151?151:sizeArr[1];
		var _width=sizeArr[0]<514?sizeArr[0]:514;
		var _height=sizeArr[1]<242?sizeArr[1]:242;
		var _innerL=(_left-_width)/2-210<0?0:(_left-_width)/2-210;
		$("#js-header,#js-top,#js-content,#js-inner_content").css({"width":sizeArr[0]+"px"});
		$("#js-inner_content").css({"top":sizeArr[1]+"px"});
	    $("#js-banner").css({"width":sizeArr[0]<newArr[0]?newArr[0]:sizeArr[0]+"px","height":sizeArr[1]+"px"});
	    $("#js-narumi").css({"width":_width+"px","height":_height+"px","left":(_left-_width)/2+"px","top":(sizeArr[1]-_height)/2+"px"});
		$("#js-copyright").css({"left":(_left-_width)/2+20+"px"});
		if((newArr[0]<761)&&(newArr[0]>380)){
	    	$("#js-inner_inner").css({"left":(newArr[0]-380)/2+8+"px","width":"380px"});
	    }
	    else{
	    	if(newArr[0]<=380){
	    		$("#js-inner_inner").css({"left":(_left-_width)/2+8+"px","width":newArr[0]+"px"});
	    	}
	    	else{
	    		$("#js-inner_inner").css({"left":_innerL+"px","width":(newArr[0]-_innerL)+"px"});
	    		$("#js-txt_wrap").css({"width":(newArr[0]-_innerL)*.5+"px"});
	    	}
	    }
	}
	return api.init();
}
HOME.BtnEff = function(){
	api = {
		init : function(){
			agentBtns();
			btnFadeOut();
			btnFadeIn();
			mouseOvr();
			clickEvents();
		}
	},
	agentBtns = function(){
	if($(window).width()>=900){
    		btnFadeIn(".top span",1);
    		btnFadeOut(".top span",0);
    	}
    	else{
    		btnFadeIn(".top span",0);
    		btnFadeOut(".top span",1);
    	}
	},
	btnFadeOut = function(_id,_i){
		$(_id).eq(_i).find("img").eq(1).stop().animate({"opacity":"0"},500);
	},
	btnFadeIn = function(_id,_i){
		$(_id).eq(_i).find("img").eq(1).stop().animate({"opacity":"1"},500);
	},
	mouseOvr = function(_div,_i){
		$(_div).eq(_i).mouseenter(function(){
			btnFadeOut(_div,_i);		
		});
		$(_div).eq(_i).mouseleave(function(){
			btnFadeIn(_div,_i);
		});
	},
	clickEvents = function(){
		for (var i=0; i<5; i++){
			(function(i){
				$("#js-nav").find("span").eq(i).click(function(){
					switch (i){
						case 0 :
							window.open("http://xuhaiming.com","_self");
						break;
						case 1 :
							window.open("http://stackoverflow.com/users/1402372/meeming","_blank");
						break;
						case 2 :
							window.open("http://weibo.com/haimingpro","_blank");
						break;
						case 3 :
							window.open("http://www.cnblogs.com/haimingpro","_blank");
						break;
						case 4 :
							window.open("http://user.qzone.qq.com/358695188","_blank");
						break;
					}
				});
			})(i);
		}
		$("#js-menu").click(function(){
			if($("#js-down_menu").is(":visible")){
				$("#js-down_menu").slideUp(500);
				$(this).css({"background":"url(images/menu_off.jpg) no-repeat"});
			}else{
				$("#js-down_menu").slideDown(500);
				$(this).css({"background":"url(images/menu_on.jpg) no-repeat"});
			}
		});
		for(var i=0; i<4; i++){
			(function(i){
				mouseOvr(".sns span",i);
				$(".sns span").eq(i).click(function() {
					switch (i){
						case 0 :
							new creaShare().getShare('sina',window.location.href.toString(),shareText,'');
						break;
						case 1 :
							new creaShare().getShare('qzone',window.location.href.toString(),shareText,'');
						break;
						case 2 :
							new creaShare().getShare('kaixin',window.location.href.toString(),shareText,'');
						break;
						case 3 :
							new creaShare().getShare('renren',window.location.href.toString(),shareText,'');
						break;
					}
				});
			})(i);
		}	
	}
	return api.init();
}
HOME.Lan = function(){
	api = {
		init : function(){
			language_btnInit();
			language_btnEff();
			languageClick();
			language_switch();
			startModify(_language_arr[_lan]);
		}
	},
	language_btnInit = function(){
		$("#js-language span").eq(0).css({"display":"none"});
		$("#js-language span").eq(1).css({"display":"none"});
		$("#js-down_lan a").eq(2).css({"color":"#eeeeee"});
	},
	language_btnEff = function(){
		for(var i=0; i<3; i++){
			(function(i){
				$("#js-language").find("span").eq(i).mouseenter(function() {
					$("#js-language").find("span").css({"display":"block","float":"left"});
				});
				$("#js-language").mouseleave(function() {
					$("#js-language").find("span").css({
						"display": "none"
					});
					for (j = 0; j < 3; j++) {
						if (j !== _lan) {
							$("#js-language span").eq(j).css({
								"display": "none"
							});
						}
					}
					$("#js-language").find("span").eq(_lan).css({
						"display": "block"
					});
				});
				languageClick("#js-down_lan a",i);
				languageClick("#js-language span",i);
			})(i);
		}
	},
	languageClick = function(_div,_i){
		$(_div).eq(_i).click(function() {
				_lan =_i;
				startModify(_language_arr[_lan]);
				for(j=0; j<3; j++){
					$("#js-language span").eq(j).css({"display":"none"});
					$("#js-language span").eq(_lan).css({"display":"block"});
					$("#js-down_lan a").eq(j).css({"color":"#000"});
					$("#js-down_lan a").eq(_lan).css({"color":"#eee"});
				}
		});	
	},
	language_switch = function(language){
		switch(language){
		case "cn":
			return Chinese_Language;
		break;
		case "jp":
			return Japanese_Language;
		break;
		case "en":
			return English_Language;
		break;
		}
	},
	startModify = function(str){
		var language_class=language_switch(str);
		for(var i=0; i<5; i++){
			$("#js-nav").find("span").eq(i).html(language_class.all.top[i]);
			$("#js-down_menu").find("p").eq(i).find("a").html(language_class.all.top[i]);
		}
		for(var i=0; i<3; i++){
			$("#js-txt_wrap li").eq(i).html(language_class.home.content[i]);
		}
	}
	return api.init();
}