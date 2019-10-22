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
    li.setAttribute("class", "nav-li");
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
const images = [
  "../img/exampleimg1.jpg",
  "../img/exampleimg2.jpg",
  "../img/exampleimg3.jpg",
  "../img/exampleimg4.jpg"
];

const imagetext = [
  "Velkommen1",
  "Velkommen2",
  "Velkommen3",
  "Velkommen4"
];

const dots = [
  "dot1",
  "dot2",
  "dot3",
  "dot4"
];

const time = 5000;
let prevImg = 0;
let timeouts = []

function changeImg(index) {
  for(i in timeouts) [
    clearTimeout(i)
  ]

  if(index > images.length -1) {
    index = 0;
  }

  document.getElementById("slide_img").src = images[index];
  document.getElementById("slide_caption").innerHTML = imagetext[index];
  document.getElementById(dots[prevImg]).style.backgroundColor = "white";
  document.getElementById(dots[index]).style.backgroundColor = "#007163";

  prevImg = index;
  let timeout = window.setTimeout("changeImg(prevImg + 1)", time);
  timeouts.push(timeout)
}

changeImg(0)
//slideshow end //
