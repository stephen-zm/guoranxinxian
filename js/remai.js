/*
* @Author: stephen-zm
* @Date:   2018-08-09 14:46:46
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-08-09 14:48:53
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
    //返回
	let back=document.querySelector(".back");
        back.onclick=function(){
            animate(document.body,{scrollTop:0},2000);
            animate(document.documentElement,{scrollTop:0},2000);
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
}