const HEADER_ELEMENT = document.getElementById("header");
const FOOTER_ELEMENT = document.getElementById("footer");
const UL_ELEMENT = document.getElementById("nav-ul");
const MAIN_SECTION = document.getElementById("main");
const LOGIN_DIV = document.getElementById("login-container");
const BURGER_MENU = document.getElementById("hamburger-menu");

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
<<<<<<< HEAD
}
=======
}

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
  document.getElementById("slide_caption").innerHTML = imagetext[i];
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
>>>>>>> 281f987a4d5ee0d47a0ede7659ad0eee4240f49f
