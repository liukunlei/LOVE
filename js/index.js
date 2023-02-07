// 表白标题 开始
var tit = document.getElementsByTagName("title")[0];
function tips(){
	tit.innerHTML = "曼玲❤小公举";
	setTimeout("tit.innerHTML='烦人精永远❤爱你(✿◡‿◡)'",500);
}
setInterval("tips()",1500);
// 表白标题 结束
// 背景音乐 开始
$(function(){
	$("button").click(function(){
		var a = window.document.getElementById('audios');
		if(a.paused){
			$(this).css("background-position","top");
			a.play();
		}else{
			$(this).css("background-position","bottom");
			a.pause();
		}
	})
})
// 背景音乐 结束
//爱心开始
window.onload = function(){
	var heart = window.document.getElementsByClassName("heart")[0];
	var html = "";
	for(var i=0;i<36;i++){
		html+="<div class='side' style='transform:rotateY("+10*i+"deg) rotateZ(45deg) translateX(60px)'></div>";
	}
	heart.innerHTML = html;
	// for(var i=0;i<36;i++){
	// 	var odiv = document.createElement('div');
	// 	odiv.className = "side";
	// 	odiv.style.transform = "transform:rotateY("+10*i+"deg) rotateZ(45deg) translateX(60px)'></div>";
	// 	heart.appendChild(odiv);
	// }
}


//爱心结束



