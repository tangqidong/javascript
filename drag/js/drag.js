function getEleByClassName (className,parents) {
	var ele = [];
	var oParents = parents?document.getElementById(parents):document;
	var  elements= oParents.getElementsByTagName('*');
	for(var i = 0, len = elements.length;i < len; i ++){
		if(elements[i].className == className){
			ele.push(elements[i]);
		}
	}
	return ele;
}
window.onload = drag;

function drag(){
	//获取区域
	var area = getEleByClassName('login_logo_webqq','loginPanel')[0];
	area.onmousedown=obtain;
}

function obtain(){
	var oDrag = document.getElementById('loginPanel');
	disX = event.clientX-oDrag.offsetLeft;
	disY = event.clientY-oDrag.offsetTop;
	document.onmousemove = function(event){
		event = event || window.event;
		oDrag.style.left = event.clientX - disX+ 'px';
		oDrag.style.top = event.clientY - disY + 'px';
	}
	document.onmouseup = function(){
		document.onmousemove = null;
		document.onmouseup = null;
	}
}