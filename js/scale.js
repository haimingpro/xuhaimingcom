// CLASS 
function imgzoom(srcWidth,srcHeight,maxWidth,maxHeight){
	 this.srcWidth=srcWidth;//获得原始宽度
     this.srcHeight=srcHeight;//获得原始高度
     this.maxWidth=maxWidth;//获得限定宽度
     this.maxHeight=maxHeight;//获得限定高度
	 this.newWidth;
	 this.newHeight;
}

imgzoom.prototype.getHeightSize=function(){
	this.newHeight=this.maxHeight;
	this.newWidth=(this.srcWidth*this.maxHeight)/this.srcHeight;
	return [this.newWidth,this.newHeight];
}
imgzoom.prototype.getSize=function (){
	
	this.newWidth=this.maxWidth;
	this.newHeight=(this.srcHeight*this.maxWidth)/this.srcWidth;
	
	if(this.newHeight<this.maxHeight){
		this.newHeight=this.maxHeight;
		this.newWidth=(this.srcWidth*this.maxHeight)/this.srcHeight;
	}
	var srcNum=this.srcWidth/this.srcHeight;
	var maxNum=this.maxWidth/this.maxHeight;
	if(srcNum>=maxNum){
		//比较高宽比例，确定以宽或者是高为基准进行计算。
		if(this.srcWidth>this.maxWidth){//以宽为基准开始计算，
			//当宽度大于限定宽度，开始缩放
			this.newWidth=this.maxWidth;
			this.newHeight=(this.srcHeight*this.maxWidth)/this.srcWidth
		}else{
									//当宽度小于限定宽度，直接返回原始数值。
			this.newWidth=this.srcWidth;
			this.newHeight=this.srcHeight;
		}
	}else{
		if(this.srcHeight>this.maxHeight){//以高为基准，进行计算
									//当高度大于限定高度，开始缩放。
			this.newHeight=this.maxHeight;
			this.newWidth=(this.srcWidth*this.maxHeight)/this.srcHeight
		}else{
									//当高度小于限定高度，直接返回原始数值。
			this.newWidth=this.srcWidth;
			this.newHeight=this.srcHeight;
		}
	}
	return [this.newWidth,this.newHeight]
}