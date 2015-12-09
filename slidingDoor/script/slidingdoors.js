window.onload  = function(){
	//定义div对象
	var div = document.getElementById('container');

	//定义照片对象
	var imgs = div.getElementsByTagName('img');

	//定义照片宽度
	var imgWidth = imgs[0].offsetWidth;

	//漏出来的宽度
	var exposeWidth = 200;

	//div的宽度
	div.style.width = imgWidth + exposeWidth*(imgs.length-1) + 'px';

	//设置每个图片的位置
	function initWidth(){
		for( var i = 1, len = imgs.length; i < len; i ++){
			imgs[i].style.left = imgWidth + exposeWidth*(i - 1) + 'px'; 
		}
	}
	initWidth();

	//左移的距离
	var leftWidth = imgWidth - exposeWidth;

	//为每个img添加事件
	for(var i = 0 ,len = imgs.length; i < len ; i ++){
		(function(i){
			imgs[i].onmouseover = function(){
				//初始化位置
				initWidth();
				for(var n = 1; n <= i; n ++){
					imgs[n].style.left = parseInt(imgs[n].style.left) - leftWidth + 'px';
				}
			}
		})(i);
	}
}