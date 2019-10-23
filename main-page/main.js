
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
