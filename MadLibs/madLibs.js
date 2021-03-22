var libButton = document.getElementById('myButton');
        
var myMadLib = function() {
  var madLib = document.getElementById("myInput");
  var noun = document.getElementById("noun").value;
  var adj = document.getElementById("adjective").value;
  var name = document.getElementById("person").value;
  madLib.innerHTML = name+" " +" is " +" "+ adj+" " + "for the most part. And " + name + " feels " + noun + " almost all the time. Sometimes, coding gets " + adj;
};
   
libButton.addEventListener('click', myMadLib);