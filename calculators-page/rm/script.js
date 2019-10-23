const btnCalc = document.getElementById("btn_calculate");
btnCalc.addEventListener(('click') , () => calculate());

function calculate(){
    let weight = parseFloat(document.getElementById("input_weight").value);
    let reps = parseFloat(document.getElementById("input_reps").value);

    let oneRm = ((weight * reps) * 0.0333) + weight;
    document.getElementById("input_1rm").value = "Your 1 RM is: " + oneRm;
}