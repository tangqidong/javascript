window.onload = function(){
	var index = 0;
	var timer;
	var timer01;
	var title = document.getElementById('notice-tit').getElementsByTagName('li');
	var con = document.getElementById('notice-con').getElementsByTagName('div');
	for(var i = 0,len = title.length; i < len; i ++){
		(function(i){
			title[i].onmouseover = function(){
				clearInterval(timer);
				clearInterval(timer01);
				timer = setTimeout(function(){
					for(var j = 0; j<title.length;j++){
					con[j].style.display = 'none';
					title[j].className = '';
					}
					title[i].className = "select";
					con[i].style.display = 'block';
				},500)
			}
		})(i)
	}

	timer01 = setInterval(function(){
		if(index < 5){
			var n = index;
			for(var j = 0; j<title.length;j++){
				con[j].style.display = 'none';
				title[j].className = '';
			}
			title[n].className = "select";
			con[n].style.display = 'block';
			index ++;
		}else{
			index = 0;
		}
	},500)
	
}