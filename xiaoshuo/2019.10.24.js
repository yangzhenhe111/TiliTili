/*
* @Author: 边晨广
* @Date:   2019-12-24 21:01:03
* @Last Modified by:   边晨广
* @Last Modified time: 2019-12-25 13:04:45
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var isStop =true;
		for(var attr in json){
			var now =0;
			if(attr=='opacity'){
				 now= parseInt(getStyle(obj,attr)*100);
			}else{
				 now= parseInt(getStyle(obj,attr));
			}
			var now =parseInt(getStyle(obj,attr));
				var speed = (json[attr]-now)/8;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				var current =now +speed;
				if(attr=='opacity'){
					obj.style.opacity=current/100;
				}else{
					obj.style[attr]=current+"px"; 
				}				
				if(json[attr]!==current){
					isStop =false;
				}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	},30)
}