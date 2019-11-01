
let bmiOutputDef = document.getElementById("bmi_output_def");
let bmi = 0;

const bmiBtn = document.getElementById("submit_bmi");
bmiBtn.addEventListener(("click"), () => calculateBmi());

function calculateBmi () {

    let weight = document.getElementById("weight_input").value;
    let height = document.getElementById("height_input").value;
    bmi = weight / (height/100)**2

    document.getElementById("bmi_output").innerHTML = "Your BMI is: " + bmi;

    if (bmi < 18.4) {
        document.getElementById("bmi_output_def").innerHTML = "That makes you: Underweight";
    }
    else if (bmi < 24.9) {
        document.getElementById("bmi_output_def").innerHTML = "That makes you: Normalweight";
    }
    else if (bmi < 29.9) {
        document.getElementById("bmi_output_def").innerHTML = "That makes you: Overweight";
    }
    else {
        document.getElementById("bmi_output_def").innerHTML = "That makes you: Obese;"
    }
    

    console.log("hei");

}
