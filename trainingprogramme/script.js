//Defining object conatinig exercises
const exercises = {
    squat: {
        name: "Squat",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","abdominals"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    leg_press: {
        name: "Leg press",
        muscles: ["calves","quadriceps","hamstrings","gluteus"],
        img: "../img/gradient.png",
        description: "Set cables on lowest setting, pull rope up til torso, slowly return"
    },
    lunge: {
        name: "Lunge",
        muscles: ["quadriceps","hamstrings","gluteus","hips"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    deadlift:{
        name: "Deadlift",
        muscles: ["calves","quadriceps","hamstrings","gluteus","hips","lower_back","trapezius","abdominals","forearms"],
        img: "../img/gradient.png",
        description: "needs description"
    },
    leg_extention: {
        name: "Leg extention",
        muscles: ["quadriceps"],
        img: "../img/gradient.png",
        description: "Sit upright and extend legs."
    },
    leg_curl: {
        name: "Leg curl",
        muscles: ["calves","hamstrings"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    standing_calf_raise: {
        name: "Standing calf raise",
        muscles: ["calves"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    seated_calf_raise:{
        name: "Seated calf raise",
        muscles: ["calves"],
        img: "../img/gradient.png",
        description: "Sit upright and extend calves."
    },
    hip_adductor: {
        name: "Hip adductor",
        muscles: ["hips"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    bench_press: {
        name: "Bench press",
        muscles: ["pectorals","deltoids","triceps"],
        img: "../img/gradient.png",
        description: "90 degree angle on arms, and push up until fully stretched."
    },
    chest_fly: {
        name: "Chest fly",
        muscles: ["pectorals","deltoids"],
        img: "../img/gradient.png",
        description: "Cable flies description -"
    },
    push_up: {
        name: "Push-up",
        muscles: ["abdominals","pectorals","deltoids","triceps"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    pull_down: {
        name: "Pull-down",
        muscles: ["lats","pectorals","deltoids","biceps","forearms"],
        img: "../img/gradient.png",
        description: "90 degree angle on arms, and pull down until fully stretched."
    },
    pull_up: {
        name: "Pull-up",
        muscles: ["lats","trapezius","pectorals","deltoids","biceps","forearms"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    bent_over_row: {
        name: "Bent-over row",
        muscles: ["lats","trapezius","biceps","forearms"],
        img: "../img/gradient.png",
        description: "Bend over 90 degrees and lift up barbell with overhand grip, pull bar to upper abs."
    },
    upright_row: {
        name: "Upright row",
        muscles: ["trapezius","deltoids","biceps","forearms"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    shoulder_press: {
        name: "Shoulder press",
        muscles: ["trapezius","deltoids","triceps"],
        img: "../img/gradient.png",
        description: "Stand with feet in shoulder width, and press dumbells over head"
    },
    shoulder_fly: {
        name: "Shoulder fly",
        muscles: ["trapezius","deltoids","forearms"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    lateral_raise: {
        name: "Lateral raise",
        muscles: ["trapezius","deltoids"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    shoulder_shrug: {
        name: "Shoulder shrug",
        muscles: ["trapezius","deltoids","forearms"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    pushdown: {
        name: "Pushdown",
        muscles: ["triceps"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    triceps_extension: {
        name: "Triceps extension",
        muscles: ["triceps","forearms"],
        img: "../img/gradient.png",
        description: "Rope over head, and push rope forward until fully stretched."
    },
    biceps_curl: {
        name: "Biceps curl",
        muscles: ["biceps","forearms"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    crunch: {
        name: "Crunch",
        muscles: ["abdominals"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    russian_twist: {
        name: "Russian twist",
        muscles: ["abdominals"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    leg_raise: {
        name: "Leg raise",
        muscles: ["hips","abdominals"],
        img: "../img/gradient.png",
        description: "Add description here"
    },
    back_extention: {
        name: "Back extention",
        muscles: ["hamstrings","gluteus","lower_back"],
        img: "../img/gradient.png",
        description: "Add description here"
    }
};

//Defining object containing muscles and prettified names
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

//Assigns exercies given a number of days
function assignExercises() {
    let nrOfDays = document.getElementById("days").value;
    //Makes shure a valid number was pased
    if(nrOfDays < 1) {
        output.innerHTML = "Please enter a value between 1 and 7"
        return;
    } else if(nrOfDays > 7) {
        output.innerHTML = "Training more than seven days a week will create a black hole."
        return;
    }
    //Define and create days and availableMuscles
    let days = {};   
    let availableMuscles = [];
    for(i in muscles) {
        availableMuscles.push(i);
    }

    //If there can be more than 5 muscles on one day, remove muscles until it is not possible
    while(true) {
        if(Math.floor(availableMuscles.length/(nrOfDays)) > 5) {
            availableMuscles.splice(Math.floor(Math.random()*availableMuscles.length), 1); 
        } else {
            break;
        }
    }

    //Adds an array of random muscles to all the days of days object
    for(let i=0; i<nrOfDays; i++) {
        let randomMuscles = [];
        let nrOfMuscles = Math.floor(availableMuscles.length/(nrOfDays-i));
        for(let j=0; j<nrOfMuscles; j++) {
            let randomMuscleIndex = Math.floor(Math.random()*availableMuscles.length);
            randomMuscles.push(availableMuscles[randomMuscleIndex]);
            availableMuscles.splice(randomMuscleIndex, 1);
        }
        days[i+1] = {};
        days[i+1].muscles = randomMuscles;
    }

    //Adds an array of exercises to all days based on what muscles that were assigned
    for(day in days) {
        let randomExercises = [];
        for(muscle of days[day]["muscles"]) {
            for(exercise in exercises) {
                if(exercises[exercise]["muscles"].includes(muscle)) {
                    randomExercises.push(exercise);
                }
            }
        }
        /*This loop removes exercises at random until a duplicate-free list has the desired length
        Some exercises were chosen more than others due to beeing more popular. This ensures that more
        popular exercises are less likely to be removed*/
        while(new Set(randomExercises).size > 10) {
            randomExercises.splice(Math.floor(Math.random()*randomExercises.length), 1);
        }
        days[day].exercises = Array.from(new Set(randomExercises));
    }

    //Printing days object to HTML
    output.innerHTML = "";
    for(day in days) {
        let newTitle = document.createElement("h2");
        newTitle.innerHTML = "Day " + day;

        let newMuscles = document.createElement("ul");
        newMuscles.setAttribute("class","muscle_ul")
        for(muscle of days[day]["muscles"]) {
            let newMuscle = document.createElement("li");
            newMuscle.innerHTML = muscles[muscle];
            newMuscles.appendChild(newMuscle)
        }

        let newExercises = document.createElement("ul");
        for(exercise of days[day]["exercises"]) {
            let newExercise = document.createElement("li");
            newExercise.innerHTML = exercises[exercise]["name"];
            newExercises.appendChild(newExercise)
        }

        let newDay = document.createElement("div");
        newDay.className = "divDay";
        let t1 = document.createElement("h3");
        let t2 = document.createElement("h3")
        t1.innerHTML = "Muscles:";
        t2.innerHTML = "Exercises:";
        newDay.appendChild(newTitle)
        newDay.appendChild(t1)
        newDay.appendChild(newMuscles)
        newDay.appendChild(t2)
        newDay.appendChild(newExercises)
        output.appendChild(newDay)
        output.appendChild(document.createElement("br"))
    }
}

document.body.onkeyup = function(e) {      //It's easier to call the function assignExercises()(and all the other onkeyup-functions on the site) by pressing (and releasing) the enter button than to constantly use the mouse clicker
    if (e.keyCode == 13) {
        assignExercises();
    }
    };

let btnGenerate = document.getElementById("generate");
let output = document.getElementById("output");
btnGenerate.addEventListener("click", assignExercises);
