
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

//tile rendering start //
// tile rendering // 
const TILE_DIV = document.getElementById("tile-container");

let tile_array = [
  tile1 = {
    name: "tips",
    display: "Find the best tips",
    src: "../tips-page/tips.html",
    img: "../img/tips-tile.png"
  },
  tile2 = {
    name: "calcualtors",
    display:"Calculate your goals",
    src: "../calculator-page/main-calculator.html",
    img: "../img/calculator-tile.png"
  },
  tile3 = {
    name: "library",
    display:"The best exercises",
    src: "../library-page/library.html",
    img: "../img/library-tile.png"
  },
  tile4= {
    name: "supplements",
    display:"What supplements to use",
    src: "../supplement-page/supplement.html",
    img: "../img/supplement-tile.png"
  },
  tile5 = {
    name: "program",
    display:"Generate program",
    src: "../program-page/program.html",
    img: "../img/program-tile.png"
  },
  tile6 = {
    name: "register",
    display:"Register now",
    src: "../register-page/register.html",
    img: "../img/register-tile.png"
  }
];

function createTile(array) {
    array.forEach(element => {
      let tile = document.createElement("div");
      tile.setAttribute("class", "tile-style");
      tile. setAttribute("href", element.src)
      //tile.style.backgroundImage = "url(" + `${element.img}` + ")";

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
