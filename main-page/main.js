
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
    img: "../img/tips-tile.jpg"
  },
  tile2 = {
    name: "calcualtors",
    display:"Calculate your goals",
    src: "../calculators/calculators.html",
    img: "../img/calculator-tile.jpg"
  },
  tile3 = {
    name: "library",
    display:"The best exercises",
    src: "../library-page/library-page.html",
    img: "../img/library-tile.jpg"
  },
  tile4= {
    name: "supplements",
    display:"What supplements to use",
    src: "../supplements/supplements.html",
    img: "../img/supplement-tile.jpg"
  },
  tile5 = {
    name: "program",
    display:"Generate program",
    src: "../program-page/program.html",
    img: "../img/program-tile.jpg"
  },
  tile6 = {
    name: "register",
    display:"Register now",
    src: "../register-page/register.html",
    img: "../img/register-tile.jpg"
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
      
      tile.appendChild(image);
      let display = document.createElement("h3");
      display.setAttribute("class", "tile-header");
      display.textContent = element.display;
      tile.appendChild(display);
      TILE_DIV.appendChild(tile);
    });
    console.log(tile_array);
  }

createTile(tile_array);

//tile rendering end
