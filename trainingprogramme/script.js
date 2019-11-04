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
    bench_press: {
        name: "Bench press",
        img: "../img/bench_press_img",
        equipment: "bench rack",
        descreption: "90 degree angle on arms, and push up until fully stretched." //all these descreptions couldn't really be much better
    },
    incline_press: {
        name: "Incline dumbell chest press",
        img: "../img/incline_press_img",
        equipment: "bench and dumbells",
        descreption: "bench on 45 degree setting, excecute as bench-press otherwise."
    },
    flies: {
        name: "Cable flies",
        img: "../img/chest_flies_img",
        equipment: "cables",
        descreption: "Cable flies descreption -", // not done
    },
    press: {
        name: "Dumbell overhead shoulder press",
        img: "../img/shoudler_press_img",
        equipment: "dumbells",
        descreption: "Stand with feet in shoulder width, and press dumbells over head"
    },
    barbell_press: {
        name: "Barbell overhead shoulder press",
        img: "../img/shoudler_press_barbell_img",
        equipment: "barbell",
        descreption: "Stand with feet in shoulder width, and press barbell over head"
    },
    dumbell_fly: {
        name: "Standing dumbell fly",
        img: "../img/dumbell_fly_img",
        equipment: "dumbells",
        descreption: "Stand with feet in shoulder width, and raise dumbells"
    },
    push_down: {
        name: "Triceps pulldown",
        img: "../img/pull_down_img",
        equipment: "rope with cables",
        descreption: "90 degree angle on arms, and pull down until fully stretched."
    },
    over_head_extention: {
        name: "Over head triceps extention",
        img: "../img/over_head_extention_img",
        equipment: "rope with cables",
        descreption: "Rope over head, and push rope forward until fully stretched."
    },
    close_grip_bench: {
        name: "Close-grip bench press",
        img: "../img/close_grip_bench_img",
        equipment: "bench rack",
        descreption: "Use a close grip on the barbell, otherwise execute as regular bench-press"
    },
    single_arm_row: {
        name: "Dumbell single arm row",
        img: "../img/single_arm_row_img",
        equipment: "dumbells and bench",
        descreption: "Place dumbell next to a bench, one arm, and one leg on the bench and pull up the dumbell."
    },
    bent_over_row: {
        name: "Bent-over barbell row",
        img: "../img/bent_over_row_img",
        equipment: "barbell",
        descreption: "Bend over 90 degrees and lift up barbell with overhand grip, pull bar to upper abs."
    },
    cable_row: {
        name: "Seated cable row",
        img: "../img/cable_row_img",
        equipment: "cables with bar",
        descreption: "Grab bar with shoulder width, and and sit with a straight back. Pull bar to torso, and slowly return."
    },
    dumbell_curl: {
        name: "Standing dumbell curl",
        img: "../img/dumbell_curl_img",
        equipment: "dumbells",
        descreption: "Raise the dumbells one at a time towards your torso, with a fixed position on the elbow. Slowly return."
    },
    EZ_curl: {
        name: "EZ-bar seated curl",
        img: "../img/ez_curl_img",
        equipment: "EZ-bar and preacher bench",
        descreption: "Grab bar with shoulder width, and and sit with a straight back. Pull bar to torso, and slowly return."
    },
    rope_hammer_curl: {
        name: "standing rope hammer curl",
        img: "../img/rope_hammer_curl_img",
        equipment: "cables with rope",
        descreption: "Set cables on lowest setting, pull rope up til torso, slowly return "
    },
    leg_press: {
        name: "Leg press",
        img: "../img/leg_press_img",
        equipment: "Leg press machine",
        descreption: "Set cables on lowest setting, pull rope up til torso, slowly return "
    },
    barbell_squat:{
        name: "Barbell squat",
        img: "../img/barbell_squat_img",
        equipment: "Barbell and squatrack",
        descreption: "Put barbell on shoulders, with a fixed angle on back slowly come down to 90 degrees behind the knees. Push up again."
    },
    leg_extention:{
        name: "Leg extention",
        img: "../img/leg_extention_img",
        equipment: "leg-extention machine",
        descreption: "Sit upright and extend legs."
    },
    leg_raise:{
        name: "seated clave raise",
        img: "../img/leg_raise_img",
        equipment: "calves machine",
        descreption: "Sit upright and extend calves."
    },
    deadlift:{
        name: "Deadlift, focus on legs",
        img: "../img/leg_deadlift_img",
        equipment: "Barbell",
        descreption: "needs descreption"
    }
};

let muscles = ["chest", "shoulder", "triceps", "back", "biceps", "backside_shoulders", "quads", "calves", "back_legs"]

console.log(assignExercises(nrOfDays, exercises, muscles))