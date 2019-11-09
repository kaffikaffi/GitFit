let maxpulse = 0;

const maxpulseBtn = document.getElementById("maxpulse_btn");
maxpulseBtn.addEventListener("click", () => maxpulseNormal());

//Function takes inputs of age and gender, to calculate the maxpulse using a set formula.
function maxpulseNormal() {
    let age = document.getElementById("age_input").value;
    let gender = document.querySelector("input[name=maxpulse_gender]:checked").value;
    maxpulse = 206.9 - (0.67 * age);

    //if the age is empty, ask for the user to fill inn.
    if (age == "") {
        document.getElementById("maxpulse_output").innerHTML = "Please fill in your age";
    }
    else {
        if (gender === "male") {
            document.getElementById("maxpulse_output").innerHTML = "Your max pulse is: " + parseFloat(maxpulse).toFixed(2);
        }
        else if (gender === "female") {
            document.getElementById("maxpulse_output").innerHTML = "Your max pulse is: " + parseFloat(maxpulse + 2.45).toFixed(2);
        }
    }
}

//This is pretty much a copy of the first one, but with another formula.
let maxpulse2 = 0;

const maxpulseBtn2 = document.getElementById("maxpulse_btn2");
maxpulseBtn2.addEventListener("click", () => maxpulseAthlete());

function maxpulseAthlete() {
    let age2 = document.getElementById("age_input2").value;
    let gender2 = document.querySelector("input[name=maxpulse_gender2]:checked").value;
    maxpulseMen = 202 - (0.55 * age2);
    maxpulseWomen = 216 - (1.09 * age2);

    if (age2 == "") {
        document.getElementById("maxpulse_output2").innerHTML = "Please fill in your age";
    }

    else {
        if (gender2 === "male") {
            document.getElementById("maxpulse_output2").innerHTML = "Your max pulse is: " + parseFloat(maxpulseMen).toFixed(2);
        }
        else if (gender2 === "female") {
            document.getElementById("maxpulse_output2").innerHTML = "Your max pulse is: " + parseFloat(maxpulseWomen).toFixed(2);
        }
    }



}
