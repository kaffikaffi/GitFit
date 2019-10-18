const HEADER_ELEMENT = document.getElementById("header");
const FOOTER_ELEMENT = document.getElementById("footer");
const UL_ELEMENT = document.getElementById("nav-ul");
const MAIN_SECTION = document.getElementById("main");
const LOGIN_DIV = document.getElementById("login-container");

//Where should global variables be declared? 

let nav_array = [
  //array can only contain words without spaces
  "Fitness",
  "Trainingprogramme",
  "Supplements",
  "Calculators"
];

function renderHeader(ul,array,header){
  array.forEach(element => {
    let li = document.createElement("li");
    let a = document.createElement("a");
    a.textContent = element;
    a.setAttribute("href", element + ".html") //Fix so that it only uses lower-letters
    li.appendChild(a); //is it even nessecary with a-tags? 
    ul.appendChild(li); // Fix Styling a-tags
  });
  createButton("Log in", "login_btn",LOGIN_DIV);
  createButton("Register", "register_btn", LOGIN_DIV);
}

renderHeader(UL_ELEMENT,nav_array)

function createButton(string,id,place){
  let btn = document.createElement("button");
  btn.setAttribute("type", "button");
  btn.setAttribute("id", id);
  btn.textContent = string;
  place.appendChild(btn);
}

// Slideshow start //
let i = 0;
const images = [];
let time = 4000;
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
  document.getElementById(dots[i]).style.backgroundColor = "red";
  if (i >=1) {
  document.getElementById(dots[i-1]).style.backgroundColor = "white";
  document.getElementById(dots[i-2]).style.backgroundColor = "white";
  document.getElementById(dots[i-3]).style.backgroundColor = "white";
  document.getElementById(dots[i-4]).style.backgroundColor = "white";
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

function nextImage() {

  if (i < images.length-1 && i >= 0) {
    i++;
  }
  else {
    i=0;
  }
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  if (i>=1) {
  document.getElementById(dots[i-1]).style.backgroundColor = "white";
  }

  else if (i != 3) {
    document.getElementById(dots[3]).style.backgroundColor = "white";
  }
  document.getElementById(dots[i]).style.backgroundColor = "red";
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
  if (i>=1) {
    document.getElementById(dots[i+1]).style.backgroundColor = "white";
    }
  
    else if (i != 0) {
      document.getElementById(dots[0]).style.backgroundColor = "white";
    }
    document.getElementById(dots[i]).style.backgroundColor = "red";
}

function changeDot1() {
  i = 0;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];
  
  
}
function changeDot2() {
  i = 1;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];

}
function changeDot3() {
  i = 2;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];

}
function changeDot4() {
  i = 3;
  document.slide.src = images[i];
  document.getElementById("slide_caption").innerHTML = imagetext[i];

}




//slideshow end //