let exercises = document.getElementById("exercises");
let mediaFiles = {
    "exampleimg1.jpg":["chest", "shoulders", "legs"],
    "exampleimg2.jpg":["shoulders", "legs"],
    "exampleimg3.jpg":["legs"],
    "exampleimg4.jpg":["back", "arms", "core"]
};

function updateList() {
    let filter = [];
    let newElements = [];
    
    if(document.getElementById("chest").checked == true) {filter.push("chest")};
    if(document.getElementById("shoulders").checked == true) {filter.push("shoulders")};
    if(document.getElementById("legs").checked == true) {filter.push("legs")};
    if(document.getElementById("back").checked == true) {filter.push("back")};
    if(document.getElementById("arms").checked == true) {filter.push("arms")};
    if(document.getElementById("core").checked == true) {filter.push("core")};
    exercises.innerHTML = "";

    for(i in mediaFiles) {
        for(j of filter) {
            if(mediaFiles[i].includes(j)) { 
                source = "../img/" + i;
                if(!(newElements.includes(source))) {
                    newElements.push(source);
                }
            }
        }
    }

    for(i of newElements) {
        let container = document.createElement("div");
        container.className = "container";
        let image = document.createElement("img");
        image.className = "media";
        image.src = i;
        container.appendChild(image);
        exercises.appendChild(container);
    }
}
