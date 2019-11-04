let exerciseList = document.getElementById("exercises");

let filterOptions = ["chest", "shoulders", "legs", "back", "arms", "core"];

let categories = [
    ["chest", "shoulders", "legs"],
    ["shoulders", "legs"],
    ["legs"],
    ["back", "arms", "core"]
];

let exerciseIds = [
    "exercise1",
    "exercise2",
    "exercise3",
    "exercise4"
];

function updateList(e) {
    let category = e.target.id;
    if(e.target.checked) {
        for(i of categories) {
            if(i.includes(category)) {
                let index = categories.indexOf(i);
                document.getElementById(exerciseIds[index]).style.display = "inline";
            }
        }
    } else {
        console.log(e.target.checked)
        for(i of categories) {
            if(i.includes(category)) {
                let index = categories.indexOf(i);
                document.getElementById(exerciseIds[index]).style.display = "none";
            }
        }
    }
}

for(i of filterOptions) {
    document.getElementById(i).addEventListener("input", updateList);
}
