	var outer=document.getElementById('xq_outer');
	var inner=document.getElementById('xq_inner');
	var lft=document.getElementById('zzuo');
	var rgt=document.getElementById('yyou');
	var num1=document.getElementById('num1');
	var tan=document.getElementById('tantan');
	var sum=document.getElementById('sum');
	var pp=document.getElementById('pppp');
	var dele=document.getElementById('dele');
	var shengyu=document.getElementById('shengyu');
	var imgs=inner.getElementsByTagName('img');
	var time1=null,time2=null,time3=null;
	var a=0; 
    function automove(){
	time1=setInterval(function (){ 		    
         a++;
         num1.innerHTML++;
         if(a>=imgs.length){
         	a=0;
         }
         if( num1.innerHTML>3){
         	num1.innerHTML=1;
         }
          move();
	},2000);
 }
 automove();
 	function move(){
		 	for(var j=0;j<imgs.length;j++){
		         	imgs[j].style.display="none";
		         } 
		         imgs[a].style.display="block";	       
		         clearInterval(time2);
		         var opa=0.5;
		         time2=setInterval(function (){
		                opa+=1/50;          	
		                if(opa>1){
		                	clearInterval(time2)
		           		         }
		               imgs[a].style.opacity=opa;
		           },10)	                         
		    }
        lft.onclick=function (){
          	clearInterval(time1);
          	clearInterval(time2);
          	a--;
          	num1.innerHTML--;
          	if(num1.innerHTML<=0){
          		num1.innerHTML=3;
          	}
          	if(a<0){
          		a=imgs.length-1;
          	}
              move();
              automove();
          }
        rgt.onclick=function (){
          	clearInterval(time1);
          	clearInterval(time2);
          	a++;
          	num1.innerHTML++;
          	if(num1.innerHTML>3){
          		num1.innerHTML=1;
          	}
          	if(a>=imgs.length){
          		a=0;
          	}
              move();  
              automove();
          }
    outer.onmouseover=function (){
	clearInterval(time1);
	clearInterval(time2);
	}
	outer.onmouseout=function (){
		automove();
		move();
	}
	tan.onclick=function (){
		txt.style.display="block";
		sum.style.display="block";
		pp.style.display="block";
	}
	dele.onclick=function (){
		txt.style.display="none";
		sum.style.display="none";
		pp.style.display="none";
		txt.value="";
		shengyu.innerHTML=200;
	}
	txt.onfocus=function (){
		time3=setInterval (function (){
			var len=txt.value.length;
			var sy=200-len;
			if(sy<0){
				shengyu.style.color="red";
			}
			shengyu.innerHTML=sy;
		},10)	
		txt.onblur=function (){
			clearInterval(time3);
		}
	}
	pp.onclick=function (){
		txt.style.display="none";
		sum.style.display="none";
		pp.style.display="none";
		txt.value="";
		shengyu.innerHTML=200;
		alert('评论成功');
	}
