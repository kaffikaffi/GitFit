
// Slideshow start //
let i = 0;
const images = [];
let time = 8000;
const imagetext = [];
const dots = [];

images[0] = "../img/exampleimg1.jpg";
images[1] = "../img/exampleimg2.jpg";
images[2] = "../img/exampleimg3.jpg";
images[3] = "../img/exampleimg4.jpg";

imagetext[0] = "Velkommen";
imagetext[1] = "VelkommenVelkommen";
imagetext[2] = "VelkommenVelkommenVelkommen";
imagetext[3] = "VelkommenVelkommenVelkommenVelkommen";

dots[0] = "dot1"
dots[1] = "dot2"
dots[2] = "dot3"
dots[3] = "dot4"


function changeImg() {
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  changeBackgroundColor()

  for (z = 0; z >= 100; z++) {
    let opac = 1;
    document.slide.style.opacity = opac - 0.01;
  }
  

  if(i < images.length -1) {
    i++;
  }
  else {
    i = 0;
  }
  setTimeout("changeImg()", time);

}

window.onload = changeImg;

function changeBackgroundColor() {
  for (y = 0; y >= 0 && y < 4; y++) {
    document.getElementById(dots[y]).style.backgroundColor = "white"
    }
    document.getElementById(dots[i]).style.backgroundColor = "#007163";
}

function nextImage() {

  if (i < images.length-1 && i >= 0) {
    i++;
  }
  else {
    i=0;
  }
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i]; //innerHTML? 
  changeBackgroundColor();
}

function prevImage() {

  if(i > 0 && i <= images.length-1) {
    i--;
  }
  else {
    i=images.length-1
  }
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  changeBackgroundColor();
}

function changeDot1() {
  i = 0;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  changeBackgroundColor();
  
  
}
function changeDot2() {
  i = 1;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  changeBackgroundColor();
}
function changeDot3() {
  i = 2;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  changeBackgroundColor();

}
function changeDot4() {
  i = 3;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  changeBackgroundColor();

}




//slideshow end //
