window.onload = function(){
	var area = document.getElementById('box');
	area.scrollTop = 0;
	liHeight = 20;//每次滚动的高度
	delay = 2000;//开始延迟
	speed = 50;//每隔多久向上滚动一次
	area.innerHTML +=area.innerHTML;
	var time;
	setTimeout(startScroll,delay);
	function startScroll(){
		time = setInterval(scrollTop,speed);
		area.scrollTop++;
	}
	function scrollTop(){
		if(area.scrollTop % liHeight == 0){
			clearInterval(time);
			setTimeout(startScroll,delay);
		}else{
			area.scrollTop++;
			 if(area.scrollTop >= 120){
				 area.scrollTop =0;
				 }
			 }
		}
}