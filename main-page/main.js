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
    a.setAttribute("class","nav_tags");
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

