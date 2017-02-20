window.onload = function(){
	var winW = innerWidth;
	var winH = innerHeight;
	var intro = document.getElementById('intro');
	var part1 = intro.getElementsByClassName('part1')[0];
	part1.style.cssText = 'width:'+winW+'px;height:'+winH+'px';
}
