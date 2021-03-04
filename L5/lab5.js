function pop(){
  var name = prompt("What is your name?");
  document.getElementById("msg").innerHTML = "Hello " + name + "! And hello to the rest of the world.";
}
pop();
