let tile_array = [
    tile1 = {
      name: "rm",
      display: "1 Rep Max calculator",
      src: "rm/rm.html",
      img: "../img/gradient.png",
      icon: "img/rm.png"
    },
    tile2 = {
      name: "maxpulse",
      display:"Find your max pulse",
      src: "maxpulse/maxpulse.html",
      img: "../img/gradient.png",
      icon: "img/maxpulse.png"
    },
    tile3 = {
      name: "calorie",
      display:"Find out your daily calorie needs",
      src: "calorie/calorie.html",
      img: "../img/gradient.png",
      icon: "img/calorie.png"
    },
    tile4= {
      name: "bmi",
      display:"Find your BMI",
      src: "bmi/bmi.html",
      img: "../img/gradient.png",
      icon: "img/bmi.png"
    },
    
  ];
  const TILE_DIV = document.getElementById("tile-container");
  
  function createTile(array) {
      array.forEach(element => {
        let tile = document.createElement("div");
        tile.addEventListener("click",()=>window.location.href = element.src);
        tile.setAttribute("class", "tile-style");
        tile.setAttribute("href", element.src);
  
        let image = document.createElement("img");
        image.setAttribute("class", "tile-image");
        image.setAttribute("src", element.img);

        let icon = document.createElement("img");
        icon.setAttribute("class", "tile-icon");
        icon.setAttribute("src", element.icon);

        let hoverDiv = document.createElement("div");
        hoverDiv.setAttribute("class", "hover_div");
        hoverDiv.style.width = "100%";
        hoverDiv.style.height = "100%";
        hoverDiv.style.zIndex = "100";

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