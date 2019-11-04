let nrOfDays = document.getElementById("days");
let btnGenerate = document.getElementById("generate");

function assignExercises(nrOfDays, exercises, muscles) {
    let days = [];
    let returnArray = [];
    for(let i=0; i<nrOfDays; i++) {
        days.push([]);
        returnArray.push([])
    }

    let i = 0;
    while(muscles.length > 0) {
        let randomMuscle = muscles[Math.floor(Math.random()*muscles.length)];
        days[i%nrOfDays].push(randomMuscle);
        muscles.splice(muscles.indexOf(randomMuscle), 1);
        i++;
    }

    for(let day of days) {
        for(let exercise in exercises) {
            for(let muscle of exercises[exercise]) {
                if(day.includes(muscle)) {
                    returnArray[days.indexOf(day)].push(String(exercise));
                }
            }
        }
    }
    return returnArray;
}

let exercises = {
    squat: {
        name: "Squat",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    leg_press: {
        name: "Leg press",
        muscles: ["calves","quadriceps","hamstrings","gluteus"],
        img: "../img/leg_press_img",
        equipment: "Leg press machine",
        descreption: "Set cables on lowest setting, pull rope up til torso, slowly return"
    },
    lunge: {
        name: "Lunge",
        muscles: ["quadriceps","hamstrings","gluteus","hips"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    deadlift:{
        name: "Deadlift",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","trapezius","abdominals","forearms"],
        img: "../img/leg_deadlift_img",
        equipment: "Barbell",
        descreption: "needs descreption"
    },
    leg_extention: {
        name: "Leg extention",
        muscles: ["quadriceps"],
        img: "../img/leg_extention_img",
        equipment: "leg-extention machine",
        descreption: "Sit upright and extend legs."
    },
    leg_curl: {
        name: "Leg curl",
        muscles: ["calves","hamstrings"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    standing_calf_raise: {
        name: "Standing calf raise",
        muscles: ["calves"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    seated_calf_raise:{
        name: "Seated calf raise",
        muscles: ["calves"],
        img: "../img/leg_raise_img",
        equipment: "calves machine",
        descreption: "Sit upright and extend calves."
    },
    hip_adductor: {
        name: "Hip adductor",
        muscles: ["hips"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    bench_press: {
        name: "Bench press",
        muscles: ["pectorals","deltoids","triceps"],
        img: "../img/bench_press_img",
        equipment: "bench rack",
        descreption: "90 degree angle on arms, and push up until fully stretched."
    },
    chest_fly: {
        name: "Chest fly",
        muscles: ["pectorals","deltoids"],
        img: "../img/chest_flies_img",
        equipment: "cables",
        descreption: "Cable flies descreption -"
    },
    push_up: {
        name: "Push-up",
        muscles: ["abdominals","pectorals","deltoids","triceps"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    pull_down: {
        name: "Pull-down",
        muscles: ["lats","pectorals","deltoids","biceps","forearms"],
        img: "../img/pull_down_img",
        equipment: "rope with cables",
        descreption: "90 degree angle on arms, and pull down until fully stretched."
    },
    pull_up: {
        name: "Pull-up",
        muscles: ["lats","trapezius","pectorals","deltoids","biceps","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    bent_over_row: {
        name: "Bent-over row",
        muscles: ["lats","trapezius","biceps","forearms"],
        img: "../img/bent_over_row_img",
        equipment: "barbell",
        descreption: "Bend over 90 degrees and lift up barbell with overhand grip, pull bar to upper abs."
    },
    upright_row: {
        name: "Upright row",
        muscles: ["trapezius","deltoids","biceps","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    shoulder_press: {
        name: "Shoulder press",
        muscles: ["trapezius","deltoids","triceps"],
        img: "../img/shoudler_press_img",
        equipment: "dumbells",
        descreption: "Stand with feet in shoulder width, and press dumbells over head"
    },
    shoulder_fly: {
        name: "Shoulder fly",
        muscles: ["trapezius","deltoids","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    lateral_raise: {
        name: "Lateral raise",
        muscles: ["trapezius","deltoids"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    shoulder_shrug: {
        name: "Shoulder shrug",
        muscles: ["trapezius","deltoids","forearms"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    pushdown: {
        name: "Pushdown",
        muscles: ["triceps"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
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
        description: "do something"
    },
    crunch: {
        name: "Crunch",
        muscles: ["abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    russian_twist: {
        name: "Russian twist",
        muscles: ["abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    leg_raise: {
        name: "Leg raise",
        muscles: ["hips","abdominals"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    },
    back_extention: {
        name: "Back extention",
        muscles: ["hamstrings","gluteus","lower_back"],
        img: "../img/squat",
        equipment: "none",
        description: "do something"
    }
};

let muscles = [
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
]

console.log(assignExercises(nrOfDays, exercises, muscles))