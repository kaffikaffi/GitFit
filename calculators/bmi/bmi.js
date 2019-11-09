
let bmiOutputDef = document.getElementById("bmi_output_def");
let bmi = 0;

//when clicked on the button, run function called calculateBmi
const bmiBtn = document.getElementById("submit_bmi");
bmiBtn.addEventListener(("click"), () => calculateBmi());

//This function takes the input of height and weight, to calculate the bmi using a formula.
function calculateBmi() {

    let weight = document.getElementById("weight_input").value;
    let height = document.getElementById("height_input").value;
    bmi = weight / (height / 100) ** 2

    //if any input is empty, give message that you have to fill inn all of the inputs.
    if (weight == "" || height == "") {
        document.getElementById("bmi_output").innerHTML = "Please fill all of the inputs";
        document.getElementById("bmi_output_def").innerHTML = "";
    }
    //if all inputs is filled, run this else that runs some if statements, dependent on the bmi.
    else {
        document.getElementById("bmi_output").innerHTML = "Your BMI is: " + parseFloat(bmi).toFixed(2);

        if (bmi < 18.4) {
            document.getElementById("bmi_output_def").innerHTML = "That makes you: Underweight";
        }
        else if (bmi < 24.9) {
            document.getElementById("bmi_output_def").innerHTML = "That makes you: Normalweight";
        }
        else if (bmi < 29.9) {
            document.getElementById("bmi_output_def").innerHTML = "That makes you: Overweight";
        }
        //a bmi over 100 doesn't make any sense.
        else if (bmi > 100) {
            document.getElementById("bmi_output_def").innerHTML = "That can't be right, try again";
        }
        else {
            document.getElementById("bmi_output_def").innerHTML = "That makes you: Obese";
        }
    }
}

document.body.onkeyup = function (e) {
    if (e.keyCode == 13) {
        calculateBmi();
    }
};