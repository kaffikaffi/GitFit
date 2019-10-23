const btnCalculate = document.getElementById("btn_calculate");
btnCalculate.addEventListener(('click') , () => calculateCalories());
 

function calculateCalories(){
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let weight = parseFloat(document.getElementById("input_weight").value);
    let height = parseFloat(document.getElementById("input_height").value);
    let age = parseFloat(document.getElementById("input_age").value);
    
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
        totalCalories = caloriesMale * activityNumber;    
    }

 
    console.log(totalCalories);
    document.getElementById("output").innerHTML = totalCalories;
   
}