
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

//Array of objects with properties that decides the content on the tile.
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
//function that renders the tiles based on the properties in the object. 
function createTile(array) {
    array.forEach(element => {
      let tile = document.createElement("div");
      tile.setAttribute("class", "tile-style");
      //tile.setAttribute("href", element.src)
      tile.style.cursor = "pointer";
      //tile.addEventListener("click", () => window.location.href = element.src);
      let a = document.createElement("a");
      a.style.width = "100%";
      a.style.height = "100%";
      a.setAttribute("href",element.src);

      let image = document.createElement("img");
      image.setAttribute("class", "tile-image");
      image.setAttribute("src", element.img);

      let icon = document.createElement("img");
      icon.setAttribute("class", "tile-icon");
      icon.setAttribute("src", element.icon);  

      //hover_div is a div on top of the tile to make hovering-actions easier to manage. 
      let hover_div = document.createElement("div");
      hover_div.style.width = "100%";
      hover_div.style.height = "100%";
      hover_div.style.zIndex = "90";
      hover_div.setAttribute("class", "hover_div_style");

      tile.appendChild(image);
      tile.appendChild(icon);
      hover_div.appendChild(a);
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

//tile rendering end
