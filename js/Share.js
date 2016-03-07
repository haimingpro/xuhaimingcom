// JavaScript Document
function creaShare(){
	this.sina_url="http://service.weibo.com/share/share.php?url=地址&title=标题&appkey=&pic=图片&searchPic=false&sudaref=";
	this.renren_url="http://widget.renren.com/dialog/share?resourceUrl=地址&srcUrl=地址&title=&description=&pic=图片&message=标题";
	this.douban_url="http://www.douban.com/share/service?href=地址&name=标题&text=&image=图片";
	this.qzone_url="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=地址&desc=标题&pics=图片&summary=&ptlang=2052";
	this.qq_url="http://share.v.t.qq.com/index.php?c=share&a=index&url=地址&title=标题&appkey=&pic=图片";
	this.facebook_url="https://www.facebook.com/sharer/sharer.php?s=100&p[title]=上海の生活情&p[url]=地址&p[images]=图片";
	this.twitter_url="https://twitter.com/intent/tweet?url=地址&text=标题&pic=图片"
	this.google_url="https://plus.google.com/share?url=地址&t=标题&pic=图片";
	this.kaixin_url="http://www.kaixin001.com/~repaste/repaste.php?&rurl=地址&rtitle=标题&rcontent=标题";

	this._divWidth;
	this._qrHeight;
	
}
creaShare.prototype.getShare=function (str,url,title,pic){
	var _share_url=this.Resolve(this.getUrl(str),url,title,pic);
	window.open(_share_url,"_blank",'height=500,width=800,top=100,left=100,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no');
}
creaShare.prototype.getWeixinShare=function (url,width,height,parameter){
	var item=this;
	var _qrWidth=width||200;
	var _qrHeight=this._qrHeight=height||200;
	var _parameter=eval("("+parameter+")")||null;
	var _divWidth=this._divWidth=_parameter?_parameter.width||220:220;
	if(document.getElementById("share_weixin_box")){
		document.body.removeChild(document.getElementById("share_weixin_box"));
	}
	
	var _weixin=new creatHtmlElement("div",document.body,{css:{position:"absolute",left:0,top:"30%",height:"50%",width:"100%",zIndex:9999999999},value:{id:"share_weixin_box"}});
	var _weixin_content=new creatHtmlElement("div",_weixin.context,{css:{width:_divWidth,border:"6px #7f7f7f solid",background:"#fff", margin:"0 auto"}});
	var _weixin_title=new creatHtmlElement("div",_weixin_content.context,{css:{width:_divWidth, height:24, lineHeight:24, background:"#f2f2f2", color:"#666", borderBottom:"1px #e8e8e8 solid"}});
	var _weixin_title_text=new creatHtmlElement("div",_weixin_title.context,{css:{float:"left",paddingLeft:15},value:{innerHTML:"分享到微信"}});
	var _close=new creatHtmlElement("div",_weixin_title.context,{css:{float:"right",fontSize:20, fontWeight:"bold", paddingRight:13,color:"#666",textDecoration:"none",cursor:"pointer"},value:{innerHTML:"x"}});
	var _weixin_img=new creatHtmlElement("div",_weixin_content.context,{css:{textAlign:"center", padding:"25px 0"},value:{id:"share_weixin_qr_img"}});
	_close.onclick(function(){
		document.body.removeChild(_weixin.context);
		_weixin=null;
	});
	jQuery('#share_weixin_qr_img').html("");
	try{
		jQuery('#share_weixin_qr_img').qrcode({
			render: "canvas", //table方式
			width: _qrWidth, //宽度
			height:_qrHeight, //高度
			text: url //任意内容
		});
	}catch (e){
		jQuery('#share_weixin_qr_img').qrcode({
			render: "table", //table方式
			width: _qrWidth, //宽度
			height:_qrHeight, //高度
			text: url //任意内容
		});
	}
}
creaShare.prototype.Resolve=function (str,url,title,pic){
	return str.replace(/地址/g, encodeURIComponent(url)).replace(/标题/g, encodeURIComponent(title)).replace(/图片/g, pic);
}
creaShare.prototype.getUrl=function (str){
	switch(str){
		case "sina":
			return this.sina_url;
		break;
		case "renren":
			return this.renren_url;
		break;
		case "douban":
			return this.douban_url;
		break;
		case "qzone":
			return this.qzone_url;
		break;
		case "qq":
			return this.qq_url;
		break;
		case "facebook":
			return this.facebook_url;
		break;
		case "twitter":
			return this.twitter_url;
		break;
		case "google":
			return this.google_url;
		break;
		case "kaixin":
			return this.kaixin_url;
		break;
	}
}