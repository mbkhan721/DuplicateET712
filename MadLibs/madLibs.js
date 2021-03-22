var myButton = document.getElementById('myButton');
        
var myMadLib = function() {
  var madLib = document.getElementById("myInput");
  var noun = document.getElementById("noun").value;
  var adj = document.getElementById("adjective").value;
  var name = document.getElementById("person").value;
  var course = document.getElementById("course").value;
  var mood = document.getElementById("mood").value;
  var grade = document.getElementById("grade").value;
  var moreLess = document.getElementById("moreLess").value;
  var myNumber = document.getElementById("number").value;
  madLib.innerHTML = "My name is " + name + ". I feel  " + adj+" " + "for the most part. And " + name + " feels " + noun + " almost all the time. Sometimes, coding gets " + adj + ". My course name is " + course + ". I feel " + mood + " about " + course + " . My goal is to get a(n) " + grade + " in this class, anything " + moreLess + " would be very dissapointing. This class feels like " + myNumber + " hours long. But when " + name + " get stuck in a problem, it does feel " + adj + " because as they say 'Coding is Yoga'. And when the issue is solved in " + myNumber + " hours, it feels " + mood + ". It does gets " + adj + " when there is a lot of homework, but " + noun + " is what this " + course + " is about.";
};
   
myButton.addEventListener('click', myMadLib);