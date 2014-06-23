var _language_arr=["cn","jp","en"];
var sizeArr=[];
var shareText = "We work with computers because they are the medium that is best capable of transmitting some feelings that you have,you want to share with other people.";
var _lan = 2;

function start(){
	startModify(_language_arr[_lan]);
	language_btnInit();
	language_btnEff();
	windowSize();
	window.onresize=windowSize;
	$('#pic').adipoli({
      'startEffect' : 'grayscale',
      'hoverEffect' : 'boxRainGrow',
      'boxCols' : '9',
	  'boxRows':'6',
	  'animSpeed':'100'
    });
    btnEff();
}
function windowSize(){
	newArr=[$(window).width(),$(window).height()];   
	var _width=newArr[0]<514?514:newArr[0];//narumi text width
	var _height=newArr[1]<242?242:newArr[1];//narumi text height	
    var _left=sizeArr[0]<newArr[0]?newArr[0]:sizeArr[0];
	//var _top=newArr[1]<1036?1036:newArr[1];//footer position
    sizeArr=(new imgzoom(1401,486,newArr[0],newArr[1]).getSize());
    sizeArr[0]=sizeArr[0]<514?514:newArr[0];//width always newArr
    sizeArr[1]=sizeArr[1]<242?242:sizeArr[1];//height change by width
    
	document.getElementById("header").style.width=_width+"px";
	document.getElementById("top").style.width=_width+"px";
	document.getElementById("content").style.width=_width+"px";//relative
	document.getElementById("inner_content").style.width=_width+"px";//absolute with bg
	document.getElementById("inner_content").style.top=sizeArr[1]+"px";
    document.getElementById("inner_inner").style.left=(_left-514)/2-210<0?0:(_left-514)/2-210+"px";
	document.getElementById("footer").style.width=_width+"px";	
	document.getElementById("copyright").style.left=(_left-514)/2+"px";
    document.getElementById("banner").style.width=sizeArr[0]<newArr[0]?newArr[0]:sizeArr[0]+"px";
    document.getElementById("banner").style.height=sizeArr[1]+"px";
    document.getElementById("narumi").style.left=(_left-514)/2+"px";//must be limited in content _width  
    document.getElementById("narumi").style.top=(sizeArr[1]-242)/2+"px"; //must be limited in content _height 
}
function btnFadeOut(_id,_i){
	$(_id).eq(_i).find("img").eq(1).stop().animate({"opacity":"0"},500);
}
function btnFadeIn(_id,_i){
	$(_id).eq(_i).find("img").eq(1).stop().animate({"opacity":"1"},500);
}
function btnEff(){
	for(var i=0; i<2; i++){
		(function(i){
			$(".top span").eq(i).mouseover(function(){
				btnFadeOut(".top span",i);		
			});
			$(".top span").eq(i).mouseout(function(){
				btnFadeIn(".top span",i);
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
			$(".sns span").eq(i).mouseover(function() {
				btnFadeOut(".sns span",i);
			});
			$(".sns span").eq(i).mouseout(function() {
				btnFadeIn(".sns span",i);
			});
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
			$("#js-language span").eq(i).click(function() {
				_lan =i;
				startModify(_language_arr[_lan]);
				for(j=0; j<3; j++){
					if(j!=i){
						$("#js-language span").eq(j).css({"display":"none"});
					}
				}
			});
		})(i);
	}
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