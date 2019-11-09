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
  
  function createTile(array) {
      array.forEach(element => {
        let tile = document.createElement("div");
        tile.addEventListener("click",()=>window.location.href = element.src);
        tile.setAttribute("class", "tile-style");
  
        let a = document.createElement("a");
        a.style.width = "100%";
        a.style.height = "100%";
        a.setAttribute("href", element.src);

        let image = document.createElement("img");
        image.setAttribute("class", "tile-image");
        image.setAttribute("src", element.img);
        image.setAttribute("alt", element.alt)


        let icon = document.createElement("img");
        icon.setAttribute("class", "tile-icon");
        icon.setAttribute("src", element.icon);
        icon.setAttribute("alt", element.icon_alt);

        let hoverDiv = document.createElement("div");
        hoverDiv.setAttribute("class", "hover_div");
        hoverDiv.style.width = "100%";
        hoverDiv.style.height = "100%";
        hoverDiv.style.zIndex = "90";

        tile.appendChild(image);
        tile.appendChild(icon);
        tile.appendChild(hoverDiv);

        let display = document.createElement("h3");
        display.setAttribute("class", "tile-header");
        display.textContent = element.display;
        tile.appendChild(display);
        TILE_DIV.appendChild(tile);

        hoverDiv.addEventListener("mouseover", () =>{
          image.classList.toggle("tile-image-rotate");
          tile.classList.toggle("tile-style-hover");
        });
        hoverDiv.addEventListener("mouseleave", () =>{
          image.classList.toggle("tile-image-rotate");
          tile.classList.toggle("tile-style-hover");
        });
      });
      console.log(tile_array);
    }
  
  createTile(tile_array);