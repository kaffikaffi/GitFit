let tile_array = [
    tile1 = {
      name: "rm",
      display: "1 Rep Max calculator",
      src: "rm/rm.html",
      img: "img/rm-tile.png"
    },
    tile2 = {
      name: "maxpulse",
      display:"Find your max pulse",
      src: "maxpulse/maxpulse.html",
      img: "img/maxpulse-tile.png"
    },
    tile3 = {
      name: "calorie",
      display:"Find out your daily calorie needs",
      src: "calorie/calorie.html",
      img: "img/calorie-tile.png"
    },
    tile4= {
      name: "bmi",
      display:"Find your BMI",
      src: "bmi/bmi.html",
      img: "img/bmi-tile.png"
    },
    
  ];
  const TILE_DIV = document.getElementById("tile-container");
  
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