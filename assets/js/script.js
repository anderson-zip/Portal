var slideItem = 0;
window.onload = function() {
	setInterval(passarSlide, 5000);

	var slidewidth = document.getElementById("slideshow").offsetWidth;
	var objs = document.getElementsByClassName("slide");
	for(var i=0;i<objs.length;i++) {
		objs[i].style.width = slidewidth+"px";
	}
}
function passarSlide() {
	var slidewidth = document.getElementById("slideshow").offsetWidth;

	if(slideItem >= 3) {
		slideItem = 0;
	} else {
		slideItem++;
	}

	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	if(slideItem=='0'){
		document.getElementById("ball").style.backgroundColor="black";
		document.getElementById("ball2").style.backgroundColor="#CCC";
		document.getElementById("ball3").style.backgroundColor="#CCC";
		document.getElementById("ball4").style.backgroundColor="#CCC";
	}if(slideItem=='1'){
		document.getElementById("ball").style.backgroundColor="#CCC";
		document.getElementById("ball2").style.backgroundColor="black";
		document.getElementById("ball3").style.backgroundColor="#CCC";
		document.getElementById("ball4").style.backgroundColor="#CCC";
	}if(slideItem=='2'){
		document.getElementById("ball").style.backgroundColor="#CCC";
		document.getElementById("ball2").style.backgroundColor="#CCC";
		document.getElementById("ball3").style.backgroundColor="black";
		document.getElementById("ball4").style.backgroundColor="#CCC";
	}if(slideItem=='3'){
		document.getElementById("ball").style.backgroundColor="#CCC";
		document.getElementById("ball2").style.backgroundColor="#CCC";
		document.getElementById("ball3").style.backgroundColor="#CCC";
		document.getElementById("ball4").style.backgroundColor="black";
	}
}
function mudarSlide(pos) {
	slideItem = pos;
	var slidewidth = document.getElementById("slideshow").offsetWidth;
	document.getElementsByClassName("slideshowarea")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
	if(slideItem=='0'){
		document.getElementById("ball").style.backgroundColor="black";
		document.getElementById("ball2").style.backgroundColor="#CCC";
		document.getElementById("ball3").style.backgroundColor="#CCC";
		document.getElementById("ball4").style.backgroundColor="#CCC";
	}if(slideItem=='1'){
		document.getElementById("ball").style.backgroundColor="#CCC";
		document.getElementById("ball2").style.backgroundColor="black";
		document.getElementById("ball3").style.backgroundColor="#CCC";
		document.getElementById("ball4").style.backgroundColor="#CCC";
	}if(slideItem=='2'){
		document.getElementById("ball").style.backgroundColor="#CCC";
		document.getElementById("ball2").style.backgroundColor="#CCC";
		document.getElementById("ball3").style.backgroundColor="black";
		document.getElementById("ball4").style.backgroundColor="#CCC";
	}if(slideItem=='3'){
		document.getElementById("ball").style.backgroundColor="#CCC";
		document.getElementById("ball2").style.backgroundColor="#CCC";
		document.getElementById("ball3").style.backgroundColor="#CCC";
		document.getElementById("ball4").style.backgroundColor="black";
	}
}

function toggleMenu() {

	var menu = document.getElementById("menu");

	if (menu.style.display == 'none' || menu.style.display == '') {
		menu.style.display = "block";
	} else {
		menu.style.display = "none";
	}

}
