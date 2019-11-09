//Array of objects that decides the properties of the content on the tile.
let tile_array = [
    tile1 = {
      name: "rm",
      display: "1 Rep Max calculator",
      src: "rm/rm.html",
      img: "../img/gradient.png",
      alt: "Decorative background for tile",
      icon: "img/rm.png",
      icon_alt: "A graph"
    },
    tile2 = {
      name: "maxpulse",
      display:"Find your max pulse",
      src: "maxpulse/maxpulse.html",
      img: "../img/gradient.png",
      alt: "Decorative background for tile",
      icon: "img/maxpulse.png",
      icon_alt: "A calculator"
    },
    tile3 = {
      name: "calorie",
      display:"Find out your daily calorie needs",
      src: "calorie/calorie.html",
      img: "../img/gradient.png",
      alt: "Decorative background for tile",
      icon: "img/calorie.png",
      icon_alt: "An apple inside an eye"
    },
    tile4= {
      name: "bmi",
      display:"Find your BMI",
      src: "bmi/bmi.html",
      img: "../img/gradient.png",
      alt: "Decorative background for tile",
      icon: "img/bmi.png",
      icon_alt: "A list and a pen"
    },
    
  ];
  const TILE_DIV = document.getElementById("tile-container");
  
  //using the objects, we use this function to render the tiles based on the properties given in the object.
  function createTile(array) {
      array.forEach(element => {
        let tile = document.createElement("div");
        tile.addEventListener("click",()=>window.location.href = element.src);
        tile.setAttribute("class", "tile-style");
  
        let a = document.createElement("a");
        a.style.width = "100%";
        a.style.height = "100%";
        a.setAttribute("href", element.src);

        //background-image of the tile
        let image = document.createElement("img");
        image.setAttribute("class", "tile-image");
        image.setAttribute("src", element.img);
        image.setAttribute("alt", element.alt)

        //the icon on top of the image
        let icon = document.createElement("img");
        icon.setAttribute("class", "tile-icon");
        icon.setAttribute("src", element.icon);
        icon.setAttribute("alt", element.icon_alt);

        //To make hovering over all the elements in the tile easier, we made this div.
        let hoverDiv = document.createElement("div");
        hoverDiv.setAttribute("class", "hover_div");
        hoverDiv.style.width = "100%";
        hoverDiv.style.height = "100%";
        //z-index over all the other elements in the tile to make the hover div on top.
        hoverDiv.style.zIndex = "90";

        //append the elements to the tile
        tile.appendChild(image);
        tile.appendChild(icon);
        tile.appendChild(hoverDiv);

        //Display is the text on the tile.
        let display = document.createElement("h3");
        display.setAttribute("class", "tile-header");
        display.textContent = element.display;
        tile.appendChild(display);
        TILE_DIV.appendChild(tile);

        //when mouse over the div, toggle the css 
        hoverDiv.addEventListener("mouseover", () =>{
          image.classList.toggle("tile-image-rotate");
          tile.classList.toggle("tile-style-hover");
        });
        //when mouse leave the div, toggle it off
        hoverDiv.addEventListener("mouseleave", () =>{
          image.classList.toggle("tile-image-rotate");
          tile.classList.toggle("tile-style-hover");
        });
      });
      console.log(tile_array);
    }
  
  createTile(tile_array);