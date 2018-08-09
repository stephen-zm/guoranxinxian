/*
* @Author: stephen-zm
* @Date:   2018-08-09 19:04:18
* @Last Modified by:   stephen-zm
* @Last Modified time: 2018-08-09 21:30:08
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
	//jia
	    let sg=document.querySelector(".sg");
	    let sa=document.querySelector(".sa");
	    let sel=document.querySelector("#input");
	sg.onclick = function () {
	    var num1=parseInt(sel.value);
	    num1= num1 + 1;
	    sg.disabled =false;
	    sg.style.cursor = 'auto';
	    sel.value=num1;
	};
	sa.onclick = function () {
	    var num1=parseInt(sel.value);
	    num1= num1 - 1;
	    if(num1 < 1){
	        num1 = 1;
	        this.disabled = true;
	        this.style.cursor ='not-allowed';
	    }
	    sel.value=num1;
	}
	//点击
	let lim=document.querySelectorAll(".n_hd li");
	let xian=document.querySelectorAll(".xian");
	for(let t=0;t<lim.length;t++){
		lim[t].onclick=function(){
			lim[t].style.color="green";
			xian[t].style.display="block";
		}
	}

}