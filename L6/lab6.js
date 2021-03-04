function myFunction() {
  var text;
  var moMoney = prompt("What do you want to achieve in life?", "Money");
  switch(moMoney) {
    case "House":
      text = "Good. That's more likely to happen soon as you get your bachelor's.";
      break;
    case "Money":
      text = "Work hard for it!";
      break;
    case "Cars":
      text = "Go for a BMW 7 series in two years !!";
      break;
    case "Clothes":
      var surprise = prompt("Seriously?");
    case "Yes":
      text ="Come this Black Friday, you're looking at a couple pairs of Gucci !!"
      break;
    default:
      text = "Start with an upper case letter...";
  }
  document.getElementById("answers").innerHTML = text;
}