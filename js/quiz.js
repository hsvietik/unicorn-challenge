//hide main page and show question 1
function nextPage(previous, newPage) {
  document.getElementById(previous).style.display = "none";
  document.getElementById(newPage).style.display = "inline-block";
}
//Changing colours of background and buttons
function colourChanges(background, buttons) {
  document.getElementById("container").style.backgroundColor = background;
  document.querySelectorAll(".button").style.backgroundColor = buttons;
}
//
// const menuItemsByClass = document.querySelectorAll(".button");
// console.log(menuItemsByClass);
//Using Name of player in questions
function playersName() {
  const player = document.forms["players-name-input"]["name"].value;
  document.getElementById("message").style.display = "block";
  document.getElementById("name-text").innerHTML =
    "Nice to meet you " + player + "!";
}
