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

let nrOfDays = 3
let exercises = {
    pushup:["arms","back","chest","stomach"],
    situp:["stomach","back"],
    squat:["legs","back"],
    plank:["arms","back","chest","stomach"]
}
let muscles = ["arms","back","chest","legs","stoamch"]

console.log(assignExercises(nrOfDays, exercises, muscles))