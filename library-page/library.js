const exercises = {
    squat: {
        name: "Squat",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    leg_press: {
        name: "Leg press",
        muscles: ["calves","quadriceps","hamstrings","gluteus"],
        img: "../img/leg_press_img",
        equipment: "Leg press machine",
        description: "Set cables on lowest setting, pull rope up til torso, slowly return"
    },
    lunge: {
        name: "Lunge",
        muscles: ["quadriceps","hamstrings","gluteus","hips"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    deadlift:{
        name: "Deadlift",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","trapezius","abdominals","forearms"],
        img: "../img/leg_deadlift_img",
        equipment: "Barbell",
        description: "needs description"
    },
    leg_extention: {
        name: "Leg extention",
        muscles: ["quadriceps"],
        img: "../img/leg_extention_img",
        equipment: "leg-extention machine",
        description: "Sit upright and extend legs."
    },
    leg_curl: {
        name: "Leg curl",
        muscles: ["calves","hamstrings"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    standing_calf_raise: {
        name: "Standing calf raise",
        muscles: ["calves"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    seated_calf_raise:{
        name: "Seated calf raise",
        muscles: ["calves"],
        img: "../img/leg_raise_img",
        equipment: "calves machine",
        description: "Sit upright and extend calves."
    },
    hip_adductor: {
        name: "Hip adductor",
        muscles: ["hips"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    bench_press: {
        name: "Bench press",
        muscles: ["pectorals","deltoids","triceps"],
        img: "../img/bench_press_img",
        equipment: "bench rack",
        description: "90 degree angle on arms, and push up until fully stretched."
    },
    chest_fly: {
        name: "Chest fly",
        muscles: ["pectorals","deltoids"],
        img: "../img/chest_flies_img",
        equipment: "cables",
        description: "Cable flies description -"
    },
    push_up: {
        name: "Push-up",
        muscles: ["abdominals","pectorals","deltoids","triceps"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    pull_down: {
        name: "Pull-down",
        muscles: ["lats","pectorals","deltoids","biceps","forearms"],
        img: "../img/pull_down_img",
        equipment: "rope with cables",
        description: "90 degree angle on arms, and pull down until fully stretched."
    },
    pull_up: {
        name: "Pull-up",
        muscles: ["lats","trapezius","pectorals","deltoids","biceps","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    bent_over_row: {
        name: "Bent-over row",
        muscles: ["lats","trapezius","biceps","forearms"],
        img: "../img/bent_over_row_img",
        equipment: "barbell",
        description: "Bend over 90 degrees and lift up barbell with overhand grip, pull bar to upper abs."
    },
    upright_row: {
        name: "Upright row",
        muscles: ["trapezius","deltoids","biceps","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    shoulder_press: {
        name: "Shoulder press",
        muscles: ["trapezius","deltoids","triceps"],
        img: "../img/shoudler_press_img",
        equipment: "dumbells",
        description: "Stand with feet in shoulder width, and press dumbells over head"
    },
    shoulder_fly: {
        name: "Shoulder fly",
        muscles: ["trapezius","deltoids","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    lateral_raise: {
        name: "Lateral raise",
        muscles: ["trapezius","deltoids"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    shoulder_shrug: {
        name: "Shoulder shrug",
        muscles: ["trapezius","deltoids","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    pushdown: {
        name: "Pushdown",
        muscles: ["triceps"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    triceps_extension: {
        name: "Triceps extension",
        muscles: ["triceps","forearms"],
        img: "../img/over_head_extention_img",
        equipment: "rope with cables",
        description: "Rope over head, and push rope forward until fully stretched."
    },
    biceps_curl: {
        name: "Biceps curl",
        muscles: ["biceps","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    crunch: {
        name: "Crunch",
        muscles: ["abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    russian_twist: {
        name: "Russian twist",
        muscles: ["abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    leg_raise: {
        name: "Leg raise",
        muscles: ["hips","abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    },
    back_extention: {
        name: "Back extention",
        muscles: ["hamstrings","gluteus","lower_back"],
        img: "../img/squat",
        equipment: "none",
        description: "Add description here"
    }
};

const muscles = [
    "calves",
    "quadriceps",
    "hamstrings",
    "gluteus",
    "hips",
    "lower_back",
    "lats",
    "trapezius",
    "abdominals",
    "pectorals",
    "deltoids",
    "triceps",
    "biceps",
    "forearms"
];

let exerciseList = document.getElementById("exercises");
for(i in exercises) {
    let newTitle = document.createElement("h2");
    newTitle.class = "exerciseTitle";
    newTitle.innerHTML = exercises[i]["name"];

    let newImage = document.createElement("img");
    //newImage.src = exercises[i]["img"];
    let newImageContainer = document.createElement("div");
    newImageContainer.class = "imageContainer";
    newImageContainer.appendChild(newImage);

    let newDescription = document.createElement("div");
    newDescription.class = "description";
    newDescription.innerHTML = exercises[i]["description"];

    let newExercise = document.createElement("div");
    newExercise.id = i;
    newExercise.class = "exercise";
    newExercise.appendChild(newTitle);
    newExercise.appendChild(newImageContainer);
    newExercise.appendChild(newDescription);
    exerciseList.appendChild(newExercise);
}

let filter = document.getElementById("filter");
for(i of muscles) {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = true;
    newCheckbox.id = i;

    let newLabel = document.createElement("label");
    newLabel.append(newCheckbox);
    newLabel.htmlFor = i;
    newLabel.innerHTML += i;

    filter.appendChild(newLabel);
}

function updateList(e) {
    let id = e.id;
    let checkbox = document.getElementById(id);
    if(checkbox.checked) {
        for(i in exercises) {
            if(exercises[i]["muscles"].includes(id)) {
                document.getElementById(i).style.display = "inline";
            }
        }
    } else {
        for(i in exercises) {
            if(exercises[i]["muscles"].includes(id)) {
                document.getElementById(i).style.display = "none";
            }
        }
    }
}

for(i of muscles) {
    document.getElementById(i).checked = true;
    document.getElementById(i).setAttribute("onchange", "updateList("+i+")");
}