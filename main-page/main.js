
// Slideshow start //
const images = [
  "../img/exampleimg1.jpg",
  "../img/exampleimg2.jpg",
  "../img/exampleimg3.jpg",
  "../img/exampleimg4.jpg"
];

const imagetext = [
  "Find new Exercices",
  "Find tips in our Guide",
  "Calculate your Goals",
  "Register an Account"
];

const dots = [
  "dot1",
  "dot2",
  "dot3",
  "dot4"
];

const source = [
  "../library/library.html",
  "../fitness/fitness.html",
  "../calculators/calculators.html",
  "../register-page/register.html",
];

const time = 6969;
let prevImg = 0;
let timeout;


function changeImg(index) {
  if(index >= images.length || index < 0) {
    index = images.length - Math.abs(index);
  }
const slideimg = document.getElementById("slide_img");
  slideimg.src = images[index];
  slideimg.addEventListener("click",()=>window.location.href = source[index]);
  document.getElementById("slide_caption").innerHTML = imagetext[index];
  document.getElementById(dots[prevImg]).style.backgroundColor = "white";
  document.getElementById(dots[index]).style.backgroundColor = "#007163";
  

  prevImg = index;
  clearTimeout(timeout);
  timeout = setTimeout("changeImg(prevImg+1)", time);
}

changeImg(0);
//slideshow end //

//tile rendering start //
// tile rendering // 
const TILE_DIV = document.getElementById("tile-container");

let tile_array = [
  tile1 = {
    name: "tips",
    display: "Find the best tips",
    src: "../fitness/fitness.html",
    img: "../img/gradient.png",
    icon: "../img/icons/fitness.png"
  },
  tile2 = {
    name: "calcualtors",
    display:"Calculate your goals",
    src: "../calculators/calculators.html",
    img: "../img/gradient.png",
    icon: "../img/icons/calculator.png"
  },
  tile3 = {
    name: "library",
    display:"The best exercises",
    src: "../library/library.html",
    img: "../img/gradient.png",
    icon: "../img/icons/library.png"
  },
  tile4= {
    name: "supplements",
    display:"What supplements to use",
    src: "../supplements/supplements.html",
    img: "../img/gradient.png",
    icon: "../img/icons/supplements.png"
  },
  tile5 = {
    name: "program",
    display:"Generate program",
    src: "../trainingprogramme/trainingprogramme.html",
    img: "../img/gradient.png",
    icon: "../img/icons/program.png"
  },
  tile6 = {
    name: "register",
    display:"Register now",
    src: "../register-page/register.html",
    img: "../img/gradient.png",
    icon: "../img/icons/register.png"
  }
];

function createTile(array) {
    array.forEach(element => {
      let tile = document.createElement("div");
      tile.setAttribute("class", "tile-style");
      tile.setAttribute("href", element.src)
      //tile.style.backgroundImage = "url(" + `${element.img}` + ")";
      tile.style.cursor = "pointer";
      tile.addEventListener("click", () => window.location.href = element.src);

      let image = document.createElement("img");
      image.setAttribute("class", "tile-image");
      image.setAttribute("src", element.img);

      let icon = document.createElement("img");
      icon.setAttribute("class", "tile-icon");
      icon.setAttribute("src", element.icon);  

      let hover_div = document.createElement("div");
      hover_div.style.width = "100%";
      hover_div.style.height = "100%";
      hover_div.style.zIndex = "100";
      hover_div.setAttribute("class", "hover_div_style");

      tile.appendChild(image);
      tile.appendChild(icon);
      tile.appendChild(hover_div);

      let display = document.createElement("h3");
      display.setAttribute("class", "tile-header");
      display.textContent = element.display;
      tile.appendChild(display);
      TILE_DIV.appendChild(tile);

      hover_div.addEventListener("mouseover", () =>{
        image.classList.toggle("tile-image-rotate");
        tile.classList.toggle("tile-style-hover");
      });
      hover_div.addEventListener("mouseleave", () =>{
        image.classList.toggle("tile-image-rotate");
        tile.classList.toggle("tile-style-hover");
      });
      
    });
  }


  createTile(tile_array);

  //<div>Icon made by <a href="https://www.flaticon.com/authors/freepik"> Freepik</a> from <a href="https://www.flaticon.com/"> www.flaticon.com</a></div>

/*
function credit() {
  const footer = document.getElementById("footer");
  let div = document.createElement("div");
  let a_author = document.createElement("a");
  let a_source = document.createElement("a");
  
  a_source.setAttribute("href","https://www.flaticon.com/");
  a_source.textContent = " www.flaticon.com";

  a_author.setAttribute("href", "https://www.flaticon.com/authors/freepik");
  a_author.textContent = " Freepik";
  let p1 = document.createElement("p");
  p1.textContent = "Icon made by "

  div.appendChild(p1);
  div.appendChild(a_author);
  let p2 = document.createElement("p");
  p2.textContent = " from"
  div.appendChild(p2);
  div.appendChild(a_source);
  footer.appendChild(div);

}
window.onload = credit;

 */ 


//tile rendering end
