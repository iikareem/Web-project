var i = 0;
var images = [];
var time = 1500;

// Image List
images[0] = "photo/1.jpg";
images[1] = "photo/2.jpg";
images[2] = "photo/3.jpg";
images[3] = "photo/4.jpg";
images[4] = "photo/5.jpg";
images[5] = "photo/6.jpg";


function changeImg(){
	document.slideshow.src = images[i];

	if(i < images.length - 1){

	  i++;
	} else {

		i = 0;
	}


	setTimeout("changeImg()", time);
}


window.onload=changeImg();
