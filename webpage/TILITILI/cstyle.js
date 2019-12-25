var onDiv=document.getElementById("cf1");
onDiv.onmouseover=function(){
    startmove(0);


}
onDiv.onmouseout=function(){
    startmove(-100);

}
  var timer ;
  function startmove(target){
   clearInterval(timer);//清除定时器，以免多次触发定时器导致速度越来越快而不是匀速前进
   var onDiv1 = document.getElementById("cf1");
   timer = setInterval(function(){
   var speed = 0;
   if(onDiv1.offsetLeft<target){
    speed = 10;
   }else{
    speed = -10;
   }
   if(onDiv1.offsetLeft==target){
    clearInterval(timer);
   }
   else{
   onDiv1.style.left = onDiv1.offsetLeft+speed+'px';
   }
   },30)
  }


 function load(){
   window.prompt("请输入账号：", );
   window.prompt("请输入密码：", );
   window.alert("登陆成功");
 }
 function geton(){
   window.prompt("请输入账号：", );
   window.prompt("请输入密码：", );
   window.prompt("请确认密码：", );
   window.alert("注册成功");


 }
/*轮播图*/
  var wrap1 = document.querySelector(".wrap1");
  var wrap2 = document.querySelector(".wrap2");
  var wrap3 = document.querySelector(".wrap3");
  var wrap4 = document.querySelector(".wrap4");
  var wrap5 = document.querySelector(".wrap5");
  var next1 = document.getElementsByClassName("arrow_right");
  var prev1 = document.getElementsByClassName("arrow_left");



  // var vw =document.createElement();


  
      /*1*/
        //     next.onclick = function () {
        //     next_pic2();
        // }
        // prev.onclick = function () {
        //     prev_pic2();
        // }
        var index2 ;

        next1[0].onclick = function () {
            next_pic2();
        }
        prev1[0].onclick= function () {
            prev_pic2();
        }

        function next_pic2 () {
            index2++;
            if(index2 > 4){
                index2 = 0;
            }
            
            var newLeft;
            if(wrap2.style.left === "-4244px"){
                newLeft = 0;
            }else{
                newLeft = parseInt(wrap2.style.left)-1061;
            }
            wrap2.style.left = newLeft + "px";
        }
        function prev_pic2 () {
            index2--;
            if(index2< 0){
                index2 = 4;
            }
           
            var newLeft;
            if(wrap2.style.left === "0px"){
                newLeft = -4244;
            }else{
                newLeft = parseInt(wrap2.style.left)+1061;
            }
            wrap2.style.left = newLeft + "px";
        }

        var timer2 = null;
        function autoPlay2 () {
            timer2 = setInterval(function () {
                next_pic2();
            },2000);
        }
        autoPlay2();

        var hid2 = document.querySelector(".hid2");
        hid2.onmouseenter = function () {
            clearInterval(timer2);
        }
        hid2.onmouseleave = function () {
            autoPlay2();    
        }
        /*2*/
        //         next.onclick = function () {
        //     next_pic3();
        // }
        // prev.onclick = function () {
        //     prev_pic3();
        // }
        var index3 ;


        next1[1].onclick = function () {
            next_pic3();
        }
        prev1[1].onclick= function () {
            prev_pic3();
        }
        function next_pic3 () {
            index3++;
            if(index3 > 4){
                index3 = 0;
            }
            
            var newLeft;
            if(wrap3.style.left === "-4244px"){
                newLeft = 0;
            }else{
                newLeft = parseInt(wrap3.style.left)-1061;
            }
            wrap3.style.left = newLeft + "px";
        }
        function prev_pic3 () {
            index3--;
            if(index3< 0){
                index3 = 4;
            }
           
            var newLeft;
            if(wrap3.style.left === "0px"){
                newLeft = -4244;
            }else{
                newLeft = parseInt(wrap3.style.left)+1061;
            }
            wrap3.style.left = newLeft + "px";
        }

        var timer3 = null;
        function autoPlay3 () {
            timer3 = setInterval(function () {
                next_pic3();
            },2000);
        }
        autoPlay3();

        var hid3 = document.querySelector(".hid3");
        hid3.onmouseenter = function () {
            clearInterval(timer3);
        }
        hid3.onmouseleave = function () {
            autoPlay3();    
        }
        /*3*/
        // next.onclick = function () {
        //     next_pic4();
        // }
        // prev.onclick = function () {
        //     prev_pic4();
        // }
        var index4 ;
        next1[2].onclick = function () {
            next_pic4();
        }
        prev1[2].onclick= function () {
            prev_pic4();
        }
        function next_pic4 () {
            index4++;
            if(index4 > 4){
                index4 = 0;
            }
            
            var newLeft;
            if(wrap4.style.left === "-4244px"){
                newLeft = 0;
            }else{
                newLeft = parseInt(wrap4.style.left)-1061;
            }
            wrap4.style.left = newLeft + "px";
        }
        function prev_pic4 () {
            index4--;
            if(index4< 0){
                index4 = 4;
            }
           
            var newLeft;
            if(wrap4.style.left === "0px"){
                newLeft = -4244;
            }else{
                newLeft = parseInt(wrap4.style.left)+1061;
            }
            wrap4.style.left = newLeft + "px";
        }

        var timer4 = null;
        function autoPlay4 () {
            timer4 = setInterval(function () {
                next_pic4();
            },2000);
        }
        autoPlay4();

        var hid4 = document.querySelector(".hid4");
        hid4.onmouseenter = function () {
            clearInterval(timer4);
        }
        hid4.onmouseleave = function () {
            autoPlay4();    
        }
        /*4*/
        //       next.onclick = function () {
        //     next_pic5();
        // }
        // prev.onclick = function () {
        //     prev_pic5();
        // }
        var index5 ;
        next1[3].onclick = function () {
            next_pic5();
        }
        prev1[3].onclick= function () {
            prev_pic5();
        }

        function next_pic5 () {
            index5++;
            if(index5 > 4){
                index5 = 0;
            }
            
            var newLeft;
            if(wrap5.style.left === "-4244px"){
                newLeft = 0;
            }else{
                newLeft = parseInt(wrap5.style.left)-1061;
            }
            wrap5.style.left = newLeft + "px";
        }
        function prev_pic5 () {
            index5--;
            if(index5< 0){
                index5 = 4;
            }
           
            var newLeft;
            if(wrap5.style.left === "0px"){
                newLeft = -4244;
            }else{
                newLeft = parseInt(wrap5.style.left)+1061;
            }
            wrap5.style.left = newLeft + "px";
        }

        var timer5 = null;
        function autoPlay5 () {
            timer5 = setInterval(function () {
                next_pic5();
            },2000);
        }
        autoPlay5();

        var hid5 = document.querySelector(".hid5");
        hid5.onmouseenter = function () {
            clearInterval(timer5);
        }
        hid5.onmouseleave = function () {
            autoPlay5();    
        }