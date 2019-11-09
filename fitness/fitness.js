let tipsArray = [
    "The fast track to a better diet is found by using your weekends wisely. Use the extra time you have on Saturday and Sunday to meal prep, making large batches of healthy meals that you can portion up to cover at least a couple of midweek lunches and dinners, avoiding the dietary perils of takeaways and meal deals.",
    "Variety is – cliché alert! – the spice of life, and many sports and activities support each other in ways you won’t realise until you try it. For example, strength training for your legs and core will make you a better runner, while those addicted to dumbbells will find Pilates works muscles they’d never even considered.",
    "If you invest in a fitness tracker, don’t just sit back and assume that following the preset targets will lead you to glory. Adjust the steps, active minutes and calorie targets regularly to build on your progress, or make them more realistic if you never get close and have started to ignore them. If you don’t engage with your fitness tech, you’ll quickly discard it.",
    "A workout buddy is hugely helpful for keeping motivated, but it's important to find someone who will inspire—not discourage. So make a list of all your exercise-loving friends, then see who fits this criteria, says Andrew Kastor, an ASICS running coach: Can your pal meet to exercise on a regular basis? Is she supportive (not disparaging) of your goals? And last, will your bud be able to keep up with you or even push your limits in key workouts? If you've got someone that fits all three, make that phone call."
  ];
  
  const contentDiv = document.getElementById("content_tips");
for(let i = 0; i< tipsArray.length; i++){
    let div = document.createElement("DIV");
    let p = document.createElement("P");
    let H3 = document.createElement("h3");
    H3.setAttribute("class", "header");
    p.setAttribute("class", "paragraph")
    contentDiv.appendChild(div);
    div.appendChild(H3);
    div.appendChild(p);
    div.setAttribute("class","tipsDiv");
    H3.textContent = "Tips nr. " + (i+1);
    p.textContent = tipsArray[i]
  };
  