var outer=document.getElementById('hotel2_outer');
var inner=document.getElementById('hotel2_inner');
var lft=document.getElementById('hotel2lft');
var rgt=document.getElementById('hotel2rgt');
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
	var end=(imgs[0].offsetWidth+25)*a;
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
		outer.scrollLeft=(imgs[0].offsetWidth+25)*(a+1);
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
var img1=document.getElementById('shao1');
var img2=document.getElementById('shao2');
var show1=document.getElementById('shao1zi');
var show2=document.getElementById('shao2zi');
var bg1=document.getElementById('shao1back');
var bg2=document.getElementById('shao2back');
img1.onmouseover=function (){
	show1.style.display="block";
	bg1.style.background="#eee";
}
img1.onmouseout=function (){
	show1.style.display="";
	bg1.style.background="";
}
img2.onmouseover=function (){
	show2.style.display="block";
	bg2.style.background="#eee";
}
img2.onmouseout=function (){
	show2.style.display="";
	bg2.style.background="";
}

var pl=document.getElementById('pboss');
var txt=document.getElementById('hotelertit');
var bigboss=document.getElementById('teler_pinglun');
pl.onclick=function (){
	var newImg=document.createElement('img');
	newImg.src='img/teler/17.jpg';
	newImg.className='fabuimg';
	var newP=document.createElement('p');
	newP.className='fas';
	newP.innerHTML='闪烁尾戒'
	var newDiv1=document.createElement('div');
	newDiv1.className='fawenzi';
	newDiv1.innerHTML=txt.value;
	var newDiv2=document.createElement('div');
	newDiv2.className='teler_fabu';
	newDiv2.appendChild(newImg);
	newDiv2.appendChild(newP);
	// newDiv2.innerHTML='newImg'+'newP';
	var newBoss=document.createElement('div');
	newBoss.className='ffbb';
	newBoss.appendChild(newDiv2);
	newBoss.appendChild(newDiv1);
	bigboss.appendChild(newBoss);
	txt.value="";
}
