const btnCalculate = document.getElementById("btn_calculate");
btnCalculate.addEventListener(('click') , () => calculateCalories());
 

function isValid(input) {
     return (input > 0 ? true : false)
 }

function calculateCalories(){

    let weight = parseFloat(document.getElementById("input_weight").value);
    let height = parseFloat(document.getElementById("input_height").value);
    let age = parseFloat(document.getElementById("input_age").value);

    if(isValid(weight) && isValid(height) && isValid(age) && document.querySelector('input[type=radio]:checked').checked === true){
     let gender = document.querySelector('input[name="gender"]:checked').value;
    let selectElement = document.getElementById("input_activity");
    let activityLevel = parseFloat(selectElement.options[selectElement.selectedIndex].value);
    console.log(activityLevel);

    let caloriesFemale = (10*weight) + (6.25*height) - (5*age) - 161;
    let caloriesMale = (10*weight) + (6.25*height) - (5*age) + 5;
    let activityNumber = 0;
    let totalCalories = 0;

    if(gender === "female"){
        if(activityLevel === 1){
             activityNumber = 1.12;
        }
        else if(activityLevel === 2){
             activityNumber = 1.27;
        }
        else{
             activityNumber = 1.45;
        }
        totalCalories = caloriesFemale * activityNumber;
    }
    else if(gender === "male"){
        if(activityLevel === 1){
             activityNumber = 1.11;
        }
        else if(activityLevel === 2){
             activityNumber = 1.25;
        }
        else{
             activityNumber = 1.48;
        }
        totalCalories = Math.round(caloriesMale * activityNumber);    
    }


    document.getElementById("loose_05").innerHTML = Math.round(totalCalories-250)
    document.getElementById("loose_1").innerHTML = Math.round(totalCalories-500)
    document.getElementById("maintain").innerHTML = Math.round(totalCalories)
    document.getElementById("gain_05").innerHTML = Math.round(totalCalories+250)
    document.getElementById("gain_1").innerHTML = Math.round(totalCalories+500)
    document.getElementById("message").innerHTML = "";

}
else{
     document.getElementById("message").innerHTML = "You must fill in the remaining information";
     document.getElementById("loose_05").innerHTML = "";
     document.getElementById("loose_1").innerHTML = "";
     document.getElementById("maintain").innerHTML = "";
     document.getElementById("gain_05").innerHTML = "";
     document.getElementById("gain_1").innerHTML = "";




}
}