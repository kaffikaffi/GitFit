// Slideshow start //
//Assigning images, text, alt and sources in arrays
const images = [
  "../img/exampleimg1.jpg",
  "../img/exampleimg2.jpg",
  "../img/exampleimg3.jpg",
  "../img/exampleimg4.jpg"
];
const alt_tag = [
  "Two women exercising",
  "Dumbell rack",
  "Group of people exercising",
  "Man and woman stretching"
]

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

//time in ms for the automatic slide change
const time = 7000;
let prevImg = 0;
let timeout;

//Changes image to a given index
function changeImg(index) {
  //Make sure that slideshow is circular, not linear
  if(index >= images.length || index < 0) {
    index = images.length - Math.abs(index);
  }
  const slideimg = document.getElementById("slide_img");
  slideimg.src = images[index];
  slideimg.alt = alt_tag[index];
  slideimg.addEventListener("click",()=>window.location.href = source[index]);
  slideimg.onload = function() { document.getElementById("slide_caption").innerHTML = imagetext[index];};
  document.getElementById(dots[prevImg]).style.backgroundColor = "white";
  document.getElementById(dots[index]).style.backgroundColor = "#007163";

  //Sets timeout to switch to next image
  prevImg = index;
  clearTimeout(timeout);
  timeout = setTimeout("changeImg(prevImg+1)", time);
}

//Initial image switch
changeImg(0);
//slideshow end //

//tile rendering start //
const TILE_DIV = document.getElementById("tile-container");

//Array of objects with properties that decides the content on the tile.
let tile_array = [
  tile1 = {
    name: "tips",
    display: "Find the best tips",
    src: "../fitness/fitness.html",
    img: "../img/gradient.png",
    alt: "Decorative background for tile",
    icon: "../img/icons/fitness.png",
    icon_alt: "two hands holding heart"
  },
  tile2 = {
    name: "calcualtors",
    display:"Calculate your goals",
    src: "../calculators/calculators.html",
    img: "../img/gradient.png",
    alt: "Decorative background for tile",
    icon: "../img/icons/calculator.png",
    icon_alt: "Arrow hitting bulls-eye"
  },
  tile3 = {
    name: "library",
    display:"The best exercises",
    src: "../library/library.html",
    img: "../img/gradient.png",
    alt: "Decorative background for tile",
    icon: "../img/icons/library.png",
    icon_alt: "Biceps with heart"
  },
  tile4= {
    name: "supplements",
    display:"What supplements to use",
    src: "../supplements/supplements.html",
    img: "../img/gradient.png",
    alt: "Decorative background for tile",
    icon: "../img/icons/supplements.png",
    icon_alt: "Box and pills"
  },
  tile5 = {
    name: "program",
    display:"Generate program",
    src: "../trainingprogramme/trainingprogramme.html",
    img: "../img/gradient.png",
    alt: "Decorative background for tile",
    icon: "../img/icons/program.png",
    icon_alt: "Mobile phone with heart"
  },
  tile6 = {
    name: "register",
    display:"Register now",
    src: "../register-page/register.html",
    img: "../img/gradient.png",
    alt: "Decorative background for tile",
    icon: "../img/icons/register.png",
    icon_alt: "A PC"
    }
];
//function that renders the tiles based on the properties in the object. 
function createTile(array) {
    array.forEach(element => {
      let tile = document.createElement("div");
      tile.setAttribute("class", "tile-style");
      tile.style.cursor = "pointer";

      let a = document.createElement("a");
      a.style.width = "100%";
      a.style.height = "100%";
      a.setAttribute("href",element.src);
      //image is the background-image
      let image = document.createElement("img");
      image.setAttribute("class", "tile-image");
      image.setAttribute("src", element.img);
      image.setAttribute("alt", element.alt);
      //icon is the visual 
      let icon = document.createElement("img");
      icon.setAttribute("class", "tile-icon");
      icon.setAttribute("src", element.icon);
      icon.setAttribute("alt", element.icon_alt);
      //hover_div is a div on top of the tile to make hovering-actions easier to manage. 
      let hover_div = document.createElement("div");
      hover_div.style.width = "100%";
      hover_div.style.height = "100%";
      hover_div.style.zIndex = "90";
      hover_div.setAttribute("class", "hover_div_style");
      //Display is the text on the tile.
      let display = document.createElement("h3");
      display.setAttribute("class", "tile-header");
      display.textContent = element.display;
      
      tile.appendChild(image);
      tile.appendChild(icon);
      hover_div.appendChild(a);
      tile.appendChild(hover_div);
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
