const btnCalc = document.getElementById("btn_calculate");
btnCalc.addEventListener(('click') , () => calculate());

function isValid(input) {
    return (input > 0 ? true : false)
}

function calculate(){
    let weight = parseFloat(document.getElementById("input_weight").value);
    let reps = parseFloat(document.getElementById("input_reps").value);

    if(isValid(weight) && isValid(reps)){
        
        let oneRm = Math.round(((weight * reps) * 0.0333) + weight);
        document.getElementById("output_1rm").innerHTML = "Your 1 RM is: " + Math.round(oneRm) + " kg";
    }
    else{
        document.getElementById("output_1rm").innerHTML = "Write in weight and reps";

    }
}