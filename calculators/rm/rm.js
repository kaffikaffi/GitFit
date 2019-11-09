const btnCalc = document.getElementById("btn_calculate");
btnCalc.addEventListener(('click') , () => calculate());

// Function that checks if the input value is higher than 0
function isValid(input) {
    return (input > 0 ? true : false)
}

// Function that calculates the one rep max and writes it in html
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
// If enterkey is presset, the function calculate will begin
document.body.onkeyup = function(e) {       
    if (e.keyCode == 13) {
        calculate();
    }
    };