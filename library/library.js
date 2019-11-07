const exercises = {
    squat: {
        name: "Squat",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","abdominals"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    leg_press: {
        name: "Leg press",
        muscles: ["calves","quadriceps","hamstrings","gluteus"],
        video: "../img/InstructionalVideo.mp4",
        description: "Set cables on lowest setting, pull rope up til torso, slowly return"
    },
    lunge: {
        name: "Lunge",
        muscles: ["quadriceps","hamstrings","gluteus","hips"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    deadlift:{
        name: "Deadlift",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","trapezius","abdominals","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "needs description"
    },
    leg_extention: {
        name: "Leg extention",
        muscles: ["quadriceps"],
        video: "../img/InstructionalVideo.mp4",
        description: "Sit upright and extend legs."
    },
    leg_curl: {
        name: "Leg curl",
        muscles: ["calves","hamstrings"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    standing_calf_raise: {
        name: "Standing calf raise",
        muscles: ["calves"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    seated_calf_raise:{
        name: "Seated calf raise",
        muscles: ["calves"],
        video: "../img/InstructionalVideo.mp4",
        description: "Sit upright and extend calves."
    },
    hip_adductor: {
        name: "Hip adductor",
        muscles: ["hips"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    bench_press: {
        name: "Bench press",
        muscles: ["pectorals","deltoids","triceps"],
        video: "../img/InstructionalVideo.mp4",
        description: "90 degree angle on arms, and push up until fully stretched."
    },
    chest_fly: {
        name: "Chest fly",
        muscles: ["pectorals","deltoids"],
        video: "../img/InstructionalVideo.mp4",
        description: "Cable flies description -"
    },
    push_up: {
        name: "Push-up",
        muscles: ["abdominals","pectorals","deltoids","triceps"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    pull_down: {
        name: "Pull-down",
        muscles: ["lats","pectorals","deltoids","biceps","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "90 degree angle on arms, and pull down until fully stretched."
    },
    pull_up: {
        name: "Pull-up",
        muscles: ["lats","trapezius","pectorals","deltoids","biceps","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    bent_over_row: {
        name: "Bent-over row",
        muscles: ["lats","trapezius","biceps","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Bend over 90 degrees and lift up barbell with overhand grip, pull bar to upper abs."
    },
    upright_row: {
        name: "Upright row",
        muscles: ["trapezius","deltoids","biceps","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    shoulder_press: {
        name: "Shoulder press",
        muscles: ["trapezius","deltoids","triceps"],
        video: "../img/InstructionalVideo.mp4",
        description: "Stand with feet in shoulder width, and press dumbells over head"
    },
    shoulder_fly: {
        name: "Shoulder fly",
        muscles: ["trapezius","deltoids","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    lateral_raise: {
        name: "Lateral raise",
        muscles: ["trapezius","deltoids"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    shoulder_shrug: {
        name: "Shoulder shrug",
        muscles: ["trapezius","deltoids","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    pushdown: {
        name: "Pushdown",
        muscles: ["triceps"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    triceps_extension: {
        name: "Triceps extension",
        muscles: ["triceps","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Rope over head, and push rope forward until fully stretched."
    },
    biceps_curl: {
        name: "Biceps curl",
        muscles: ["biceps","forearms"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    crunch: {
        name: "Crunch",
        muscles: ["abdominals"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    russian_twist: {
        name: "Russian twist",
        muscles: ["abdominals"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    leg_raise: {
        name: "Leg raise",
        muscles: ["hips","abdominals"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    },
    back_extention: {
        name: "Back extention",
        muscles: ["hamstrings","gluteus","lower_back"],
        video: "../img/InstructionalVideo.mp4",
        description: "Add description here"
    }
};

const muscles = {
    calves:"Calves",
    quadriceps:"Quadriceps",
    hamstrings:"Hamstrings",
    gluteus:"Gluteus",
    hips:"Hips",
    lower_back:"Lower back",
    lats:"Lats",
    trapezius:"Trapezius",
    abdominals:"Abdominals",
    pectorals:"Pectorals",
    deltoids:"Deltoids",
    triceps:"Triceps",
    biceps:"Biceps",
    forearms:"Forearms"
};

let unChecked = []

let exerciseList = document.getElementById("exercises");
for(i in exercises) {
    let newVideo = document.createElement("video");
    newVideo.src = exercises[i]["video"];
    newVideo.setAttribute("loop", "loop")
    newVideo.addEventListener("mouseover", expandVideo)
    newVideo.addEventListener("mouseleave", closeVideo)

    let newTitle = document.createElement("h2");
    newTitle.className = "exerciseTitle";
    newTitle.innerHTML = exercises[i]["name"];
    let newDescription = document.createElement("div");
    newDescription.className = "description";
    newDescription.innerHTML = exercises[i]["description"];
    let newTextContainer = document.createElement("div");
    newTextContainer.className = "textContainer";
    newTextContainer.appendChild(newTitle)
    newTextContainer.appendChild(newDescription)

    let newExercise = document.createElement("div");
    newExercise.id = i;
    newExercise.setAttribute("class","exercise_div");
    newExercise.appendChild(newVideo);
    newExercise.appendChild(newTextContainer);
    exerciseList.appendChild(newExercise);
}

let filter = document.getElementById("filter");
for(i in muscles) {
    let newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.checked = true;
    newCheckbox.id = i;

    let newLabel = document.createElement("label");
    newLabel.append(newCheckbox);
    newLabel.htmlFor = i;
    newLabel.innerHTML += muscles[i];

    filter.appendChild(newLabel);
}

function updateList(e) {
    let id = e.id;
    let checkbox = document.getElementById(id);
    if(checkbox.checked) {
        checkbox.parentElement.style.backgroundColor = "#007163"
        unChecked.splice(unChecked.indexOf(id), 1);
        for(i in exercises) {
            if(exercises[i]["muscles"].includes(id)) {
                document.getElementById(i).style.display = "";
            }
        }
    } else {
        checkbox.parentElement.style.backgroundColor = "rgba(0,113,99,0.5)";
        unChecked.push(id);
        for(i in exercises) {
            let muscles = exercises[i]["muscles"];
            if(muscles.every(x => unChecked.includes(x))) {
                document.getElementById(i).style.display = "none";
            }
        }
    }
}

function expandVideo(e) {
    let target = e.target;
    target.style.width = "200px";
    target.style.height = "200px";
    target.play();
}

function closeVideo(e) {
    let target = e.target;
    target.style.width = "100px";
    target.style.height = "100px";
    target.pause();
}

for(i in muscles) {
    document.getElementById(i).checked = true;
    document.getElementById(i).setAttribute("onchange", "updateList("+i+")");
}