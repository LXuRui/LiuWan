var outer=document.getElementById('con_top_outer');
var inner=document.getElementById('con_top_inner');
var lft=document.getElementById('lft');
var rgt=document.getElementById('rgt');
var imgs=inner.getElementsByTagName('img');
var time1=null,time2=null;
var a=0;
function automove(){
	clearInterval(time1);
	time1=setInterval(function (){
		a++;
		if(a>imgs.length/2){
			a=1;
			outer.scrollLeft=0;
		}
		move();
	},2000)
}
automove();
function move(){
	var start=outer.scrollLeft;
	var end=(imgs[0].offsetWidth+20)*a;
	var change=end-start;
	var minstep=0;
	var maxstep=30;
	var everystep=change/30;
	clearInterval(time2);
	time2=setInterval(function (){
		minstep++;
		if(minstep>=maxstep){
			clearInterval(time2);
		}
		start=start+everystep;
		outer.scrollLeft=start;
	},30)
}
lft.onclick=function (){
	clearInterval(time1);
	clearInterval(time2);
	a--;
	if(a<0){
		a=3;
		outer.scrollLeft=(imgs[0].offsetWidth+20)*(a+1);
	}
	move();
	automove();
}
rgt.onclick=function (){
	clearInterval(time1);
	clearInterval(time2);
	a++;
	if(a>imgs.length/2){
		outer.scrollLeft=0;
		a=1;
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
