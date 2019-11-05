let maxpulse = 0;

const maxpulseBtn = document.getElementById("maxpulse_btn");
maxpulseBtn.addEventListener("click", () => maxpulseNormal());

function maxpulseNormal() {
    let age = document.getElementById("age_input").value;
    maxpulse = 206.9 - (0.67*age);
    
    if (age == "") {
        document.getElementById("maxpulse_output").innerHTML = "Please fill in your age";
    }
    else {
    document.getElementById("maxpulse_output").innerHTML = "Your max pulse is: " + maxpulse;
    }
}

let maxpulse2 = 0;

const maxpulseBtn2 = document.getElementById("maxpulse_btn2");
maxpulseBtn2.addEventListener("click", () => maxpulseAthlete());


function maxpulseAthlete() {
    let age2 = document.getElementById("age_input2").value;
    let gender = document.querySelector("input[name=maxpulse_gender]:checked").value;
    maxpulseMen = 202 - (0.55 * age2);
    maxpulseWomen = 216 - (1.09 * age2);

    if (age2 == "") {
        document.getElementById("maxpulse_output2").innerHTML = "Please fill in your age";
    }

    else {
    if (gender === "male") {
        document.getElementById("maxpulse_output2").innerHTML = "Your max pulse is: " + parseFloat(maxpulseMen).toFixed(2);
    }
    else if (gender === "female") {
        document.getElementById("maxpulse_output2").innerHTML = "Your max pulse is: " + parseFloat(maxpulseWomen).toFixed(2);
    }
}

    

}