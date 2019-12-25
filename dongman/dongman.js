/*
* @Author: 十年荣耀一如既往
* @Date:   2019-12-14 18:45:24
* @Last Modified by:   十年荣耀一如既往
* @Last Modified time: 2019-12-25 17:41:12
*/
function getStyle(obj,style) {  
	if(obj.currentStyle) 
	{  
	   	return obj.currentStyle[style];  
	} 
	else 
	{  
    	return getComputedStyle(obj)[style];  
	}
}
var b=document.getElementById("wenzi");
document.body.onload=function() {
	setInterval(function() {
		var n=parseInt(getStyle(b,"right"));
		if(n===430) {
			b.style.right=-850+"px";
		}
		else {
			b.style.right=n+1+"px";
		}
	},15);
}
var timer;
var index=1;
var m=false;
var box=document.getElementById('box');
var lis=document.getElementById('lis').children;
var pictures=document.getElementById('pictures');
var left=document.getElementById('left');
var right=document.getElementById('right');
function next() {
	if(!m){
		m=true;
		index++;
		changecolor();
		animate(pictures,{left:-1200*index},function() {
			if(index===9) {
				pictures.style.left="-1200px";
				index=1;
			}
			m=false;
		});
	}
}
function pre() {
	if(!m){
		index--;
		m=true;
		changecolor();
		animate(pictures,{left:-1200*index},function() {
			if(index===0) {
				pictures.style.left="-9600px";
				index=8;
			}
			m=false;
		});
	}
}
var timer=setInterval(next,2000);
box.onmouseover=function() {
	animate(left,{opacity:50});
	animate(right ,{opacity:50}); 
	clearInterval(timer);
}
box.onmouseout=function() {
	animate(left,{opacity:0});
	animate(right ,{opacity:0}); 
	timer=setInterval(next,2000);
}
right.onclick=next;
left.onclick=pre;
for(var i=0;i<lis.length;i++){
	lis[i].idx=i;
	lis[i].onclick=function(){
		index=this.idx+1;
		changecolor();
		animate(pictures,{left:-1200*index});
	}
}
function changecolor(){
	for(var i=0;i<lis.length;i++){
		lis[i].style.background='#ccc';
	}
	if(index===9){
		lis[0].style.background='#F5F5DC';
	}
	else if(index===0){
		lis[4].style.background='#F5F5DC';
	}
	else{
		lis[index-1].style.background='#F5F5DC';
	}
}
var bbox=document.getElementById('bbox');
var text1=document.getElementById('text1');
var text2=document.getElementById('text2');
text2.innerHTML=text1.innerHTML;
function scrollUp(){
	if(bbox.scrollTop>=text1.offsetHeight){
       bbox.scrollTop=0;
    }
    else{
        bbox.scrollTop++;
    }
}        
var time=50;
var mytimer=setInterval(scrollUp,time);
bbox.onmouseover=function(){
    clearInterval(mytimer);
}
bbox.onmouseout=function(){
    mytimer=setInterval(scrollUp,time);
}
var inps = document.getElementsByTagName("input");
inps[0].onclick = function(){
	for(var i=1;i<=inps.length;i++){
	inps[i].checked = inps[0].checked;
	}
}