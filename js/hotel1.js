var time1=null,time2=null,time3=null;
var a=0,b=0,c=0; 
function getClass1 (parentID,className) {//局部获取
		var box=document.getElementById(parentID);
		var tags=box.all?box.all:box.getElementsByTagName("*");
		var arr1=[];
		for (var i = 0; i < tags.length; i++) {
			if (tags[i].className==className) {
				arr1.push(tags[i]);
			};
		};
		return arr1;
	}
	var arr1=getClass1("hotel1_first","showimg");
	var arr2=getClass1("hotel1_second","showimg");
	var arr3=getClass1("hotel1_third","showimg");
	var lft1=getClass1("hotel1_first","hotel1_lft")[0];
	var rgt1=getClass1("hotel1_first","hotel1_rgt")[0];
	var lft2=getClass1("hotel1_second","hotel1_lft")[0];
	var rgt2=getClass1("hotel1_second","hotel1_rgt")[0];
	var lft3=getClass1("hotel1_third","hotel1_lft")[0];
	var rgt3=getClass1("hotel1_third","hotel1_rgt")[0];
    function automove1(){
	time1=setInterval(function (){ 		    
         a++;
         if(a>=arr1.length){
         	a=0;
         }
          move1();
	},1000);
 }
 automove1();
 	function move1(){
		 	for(var j=0;j<arr1.length;j++){
		         	arr1[j].style.display="none";
		         } 
		         arr1[a].style.display="block";	       	                         	       	                         
		    }
        lft1.onclick=function (){
          	clearInterval(time1);
          	a--;
          	if(a<0){
          		a=arr1.length-1;
          	}
              move1();
              automove1();
          }
        rgt1.onclick=function (){
          	clearInterval(time1);
          	a++;
          	if(a>=arr1.length){
          		a=0;
          	}
              move1();  
              automove1();
          }
 function automove2(){
	time2=setInterval(function (){ 		    
         b++;
         if(b>=arr2.length){
         	b=0;
         }
          move2();
	},1000);
 }
 automove2();
 	function move2(){
		 	for(var j=0;j<arr2.length;j++){
		         	arr2[j].style.display="none";
		         } 
		         arr2[b].style.display="block";	       	                         	       	                         
		    }
        lft2.onclick=function (){
          	clearInterval(time2);
          	b--;
          	if(b<0){
          		b=arr2.length-1;
          	}
              move2();
              automove2();
          }
        rgt2.onclick=function (){
          	clearInterval(time2);
          	b++;
          	if(b>=arr2.length){
          		b=0;
          	}
              move2();  
              automove2();
          }

function automove3(){
	time3=setInterval(function (){ 		    
         c++;
         if(c>=arr3.length){
         	c=0;
         }
          move3();
	},1000);
 }
 automove3();
 	function move3(){
		 	for(var j=0;j<arr3.length;j++){
		         	arr3[j].style.display="none";
		         } 
		         arr3[c].style.display="block";	       	                         	       	                         
		    }
        lft3.onclick=function (){
          	clearInterval(time3);
          	c--;
          	if(c<0){
          		c=arr3.length-1;
          	}
              move3();
              automove3();
          }
        rgt3.onclick=function (){
          	clearInterval(time3);
          	c++;
          	if(c>=arr3.length){
          		c=0;
          	}
              move3();  
              automove3();
          }