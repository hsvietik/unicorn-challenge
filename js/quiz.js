//hide main page and show question 1
function nextPage(previous, newPage) {
  document.getElementById(previous).style.display = "none";
  document.getElementById(newPage).style.display = "inline-block";
}
function colourChanges() {
  document.getElementById("container").style.backgroundColor =
    "var(--background-color-blue)";
  document.getElementById("restart").style.backgroundColor =
    "var(--color-blue)";
}
