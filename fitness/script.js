let tipsArray = [
    "Fitness",
    "Trainingprogramme",
    "Supplements",
    "Calculators"
  ];
  
  const contentDiv = document.getElementById("content");
for(let i = 0; i< tipsArray.length; i++){
    let div = document.createElement("DIV");
    let p = document.createElement("P");
    let H3 = document.createElement("h3");
    contentDiv.appendChild(div);
    div.appendChild(H3);
    div.appendChild(p);
    div.setAttribute("class",".tipsDiv");
    H3.textContent = "Tips nr. " + (i+1);
    p.textContent = tipsArray[i]
  };
  