/*
* @Author: stephen-zm
* @Date:   2018-07-20 13:44:30
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-08-10 09:06:37
*/

'use strict';
window.onload=function(){
	//下划线
    let lia=document.querySelectorAll(".head_nav li");
    let dong=document.querySelector(".dong");
    let arr=["20px","130px","240px","350px"];
    for(let s=0;s<lia.length;s++){
        lia[s].onmouseenter=function(){
     		dong.style.left=arr[s]; 
        }
        lia[s].onmouseleave=function(){
        	dong.style.left="";
        }
    }
	//头部
	let headright=document.getElementsByClassName("headright")[0];
	let box=document.getElementsByClassName("box")[0];
	headright.onmouseenter=function(){
		box.style.display="block";
	}
	headright.onmouseleave=function(){
		box.style.display="none";
	}
	//图片滑动
	let center_img=document.querySelector(".center_img");
	let li=document.querySelectorAll(".dian li");
	let s=['0px','-1424px'];
	let now=0;
	for(let i=0;i<li.length;i++){
		li[0].onmouseenter=function(){
			li[1].classList.remove("omg");
			center_img.style.marginLeft=0;
			li[0].classList.add("omg");
		}
		li[1].onmouseenter=function(){
			li[0].classList.remove("omg");
			center_img.style.marginLeft="-1424px";
			li[1].classList.add("omg");
		}
	}
	function move(){
		now++;
		if(now>li.length-1){
			now=0;
		}
		for(let j=0;j<li.length;j++){
			li[j].classList.remove("omg");
			li[now].classList.add("omg");
	        center_img.style.marginLeft=s[now];
		}   
	}
	let t=setInterval(move,3000);
	//尾部图片动
	setInterval(mov,3000);
	let index=0;
	function mov(){
		index++;
		if(index>$(".fc").length-1){
			index=0;
		}
		$(".fc").css("z-index",1).eq(index).css("z-index",2);
		$(".fang li").removeClass("we").eq(index).addClass("we");
	}
	$(".fang li").click(function(){
		let index=$(this).index();
		$(".fc").css("z-index",1).eq(index).css("z-index",2);
		$(".fang li").removeClass("we").eq(index).addClass("we");
	});
	//上滑
	let bd=document.querySelector(".bd ul");
	let p=setInterval(m,50);
	let x=0;
	function m(){
	 	x--;
	 	bd.style.top=x+"px";
	 	if(x==-360){
	 		bd.style.top=0;
	 		x=0;
	 	}
	}
	//返回
	let back=document.querySelector(".back");
        back.onclick=function(){
            animate(document.body,{scrollTop:0},2000);
            animate(document.documentElement,{scrollTop:0},2000);
        }
}