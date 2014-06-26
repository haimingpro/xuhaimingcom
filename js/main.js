var _language_arr=["cn","jp","en"];
var sizeArr=[];
var shareText = "We work with computers because they are the medium that is best capable of transmitting some feelings that you have,you want to share with other people.";
var _lan = 2;

function start(){
	startModify(_language_arr[_lan]);
	language_btnInit();
	language_btnEff();
	windowSize();
	$('#pic').adipoli({
      'startEffect' : 'grayscale',
      'hoverEffect' : 'boxRainGrow',
      'boxCols' : '9',
	  'boxRows':'6',
	  'animSpeed':'100'
    });
    agentBtns();
    btnEff();
    windowInit();
}
function windowSize(){
    $(window).bind('resize',(function() {
    	windowInit();
    	agentBtns();
    }));
}
function agentBtns(){
	if($(window).width()>=900){
    		btnFadeIn(".top span",1);
    		btnFadeOut(".top span",0);
    	}
    	else{
    		btnFadeIn(".top span",0);
    		btnFadeOut(".top span",1);
    	}
}
function windowInit(){
	newArr=[$(window).width(),$(window).height()];  	
	sizeArr=(new imgzoom(1401,486,newArr[0],newArr[1]).getSize());
	var _left=sizeArr[0]<newArr[0]?newArr[0]:sizeArr[0];
	sizeArr[0]=newArr[0]<320?320:newArr[0];
	sizeArr[1]=sizeArr[1]<151?151:sizeArr[1];
	var _width=sizeArr[0]<514?sizeArr[0]:514;
	var _height=sizeArr[1]<242?sizeArr[1]:242;
	var _innerL=(_left-_width)/2-210<0?0:(_left-_width)/2-210;
	$("#header,#top,#content,#inner_content").css({"width":sizeArr[0]+"px"});
	$("#inner_content").css({"top":sizeArr[1]+"px"});
    $("#banner").css({"width":sizeArr[0]<newArr[0]?newArr[0]:sizeArr[0]+"px","height":sizeArr[1]+"px"});
    $("#narumi").css({"width":_width+"px","height":_height+"px","left":(_left-_width)/2+"px","top":(sizeArr[1]-_height)/2+"px"});
    $("#inner_inner").css({"left":_innerL,"width":(sizeArr[0]-_innerL)+"px"});
	$("#copyright").css({"left":(_left-_width)/2+"px"});
}
function btnFadeOut(_id,_i){
	$(_id).eq(_i).find("img").eq(1).stop().animate({"opacity":"0"},500);
}
function btnFadeIn(_id,_i){
	$(_id).eq(_i).find("img").eq(1).stop().animate({"opacity":"1"},500);
}
function mouseOvr(_div,_i){
	$(_div).eq(_i).mouseenter(function(){
		btnFadeOut(_div,_i);		
	});
	$(_div).eq(_i).mouseleave(function(){
		btnFadeIn(_div,_i);
	});
}
function btnEff(){
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
function language_btnInit(){
	$("#js-language span").eq(0).css({"display":"none"});
	$("#js-language span").eq(1).css({"display":"none"});
}
function language_btnEff(){
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
					if (j != _lan) {
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
}
function languageClick(_div,_i){
	$(_div).eq(_i).click(function() {
				_lan =_i;
				startModify(_language_arr[_lan]);
				for(j=0; j<3; j++){
					if(j!=_i){
						if(_div=="js-language span"){
							$(_div).eq(j).css({"display":"none"});
						}
						else{
							$(_div).eq(j).css({"color":"#000"});
							$(_div).eq(_i).css({"color":"#eeeeee"});
						}
					}
				}
			});
}
function language_switch(language){
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
}
function startModify(str){
	var language_class=language_switch(str);
	for(var i=0; i<5; i++){
		$("#js-nav").find("span").eq(i).html(language_class.all.top[i]);
		$("#js-down_menu").find("p").eq(i).find("a").html(language_class.all.top[i]);
	}
	for(var i=0; i<3; i++){
		$("#txt_wrap li").eq(i).html(language_class.home.content[i]);
	}
}