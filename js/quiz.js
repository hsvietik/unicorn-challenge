//hide main page and show question 1
function nextPage(previous, newPage) {
  document.getElementById(previous).style.display = "none";
  document.getElementById(newPage).style.display = "inline-block";
}
//Changing colours of background and buttons
function colourChanges(background, buttons) {
  document.getElementById("container").style.backgroundColor = background;
  document.getElementById("start-button").style.backgroundColor = buttons;
  document.getElementById("start-quiz").style.backgroundColor = buttons;
  document.getElementById("next2").style.backgroundColor = buttons;
  document.getElementById("next3").style.backgroundColor = buttons;
  document.getElementById("next4").style.backgroundColor = buttons;
  document.getElementById("next5").style.backgroundColor = buttons;
  document.getElementById("next6").style.backgroundColor = buttons;
  document.getElementById("next7").style.backgroundColor = buttons;
  document.getElementById("next8").style.backgroundColor = buttons;
  document.getElementById("next9").style.backgroundColor = buttons;
  document.getElementById("next10").style.backgroundColor = buttons;
  document.getElementById("to-results").style.backgroundColor = buttons;
  document.getElementById("btn").style.backgroundColor = buttons;
  document.getElementById("restart").style.backgroundColor = buttons;
}

// const menuItemsByClass = document.querySelectorAll(".button");
// console.log(menuItemsByClass);

//Using Name of player in questions
function playersName() {
  const player = document.forms["players-name-input"]["name"].value;
  document.getElementById("message").style.display = "block";
  document.getElementById("name-text").innerHTML =
    "Nice to meet you " +
    player +
    "! Press the button to start playing with me";
}

//score calculating
//areas defined
const btn = document.querySelector("#btn");
const radioButtons1 = document.querySelectorAll('input[name="answers1"]');
const radioButtons2 = document.querySelectorAll('input[name="answers2"]');
const radioButtons3 = document.querySelectorAll('input[name="answers3"]');
const radioButtons4 = document.querySelectorAll('input[name="answers4"]');
const radioButtons5 = document.querySelectorAll('input[name="answers5"]');
const radioButtons6 = document.querySelectorAll('input[name="answers6"]');
const radioButtons7 = document.querySelectorAll('input[name="answers7"]');
const radioButtons8 = document.querySelectorAll('input[name="answers8"]');
const radioButtons9 = document.querySelectorAll('input[name="answers9"]');
const radioButtons10 = document.querySelectorAll('input[name="answers10"]');
//counting 10 values
btn.addEventListener("click", () => {
  let q1Value;
  for (const radioButton of radioButtons1) {
    if (radioButton.checked) {
      q1Value = radioButton.value;
      break;
    }
  }

  let q2Value;
  for (const radioButton of radioButtons2) {
    if (radioButton.checked) {
      q2Value = radioButton.value;
      break;
    }
  }

  let q3Value;
  for (const radioButton of radioButtons3) {
    if (radioButton.checked) {
      q3Value = radioButton.value;
      break;
    }
  }

  let q4Value;
  for (const radioButton of radioButtons4) {
    if (radioButton.checked) {
      q4Value = radioButton.value;
      break;
    }
  }

  let q5Value;
  for (const radioButton of radioButtons5) {
    if (radioButton.checked) {
      q5Value = radioButton.value;
      break;
    }
  }

  let q6Value;
  for (const radioButton of radioButtons6) {
    if (radioButton.checked) {
      q6Value = radioButton.value;
      break;
    }
  }

  let q7Value;
  for (const radioButton of radioButtons7) {
    if (radioButton.checked) {
      q7Value = radioButton.value;
      break;
    }
  }

  let q8Value;
  for (const radioButton of radioButtons8) {
    if (radioButton.checked) {
      q8Value = radioButton.value;
      break;
    }
  }

  let q9Value;
  for (const radioButton of radioButtons9) {
    if (radioButton.checked) {
      q9Value = radioButton.value;
      break;
    }
  }

  let q10Value;
  for (const radioButton of radioButtons10) {
    if (radioButton.checked) {
      q10Value = radioButton.value;
      break;
    }
  }
  //check missed answeres

  if (isNaN(q1Value)) {
    q1Value = 0;
  }
  if (isNaN(q2Value)) {
    q2Value = 0;
  }
  if (isNaN(q3Value)) {
    q3Value = 0;
  }
  if (isNaN(q4Value)) {
    q4Value = 0;
  }
  if (isNaN(q5Value)) {
    q5Value = 0;
  }
  if (isNaN(q6Value)) {
    q6Value = 0;
  }
  if (isNaN(q7Value)) {
    q7Value = 0;
  }
  if (isNaN(q8Value)) {
    q8Value = 0;
  }
  if (isNaN(q9Value)) {
    q9Value = 0;
  }
  if (isNaN(q10Value)) {
    q10Value = 0;
  }
  //total score counting
  let totalScore =
    Number(q1Value) +
    Number(q2Value) +
    Number(q3Value) +
    Number(q4Value) +
    Number(q5Value) +
    Number(q6Value) +
    Number(q7Value) +
    Number(q8Value) +
    Number(q9Value) +
    Number(q10Value);

  //messages
  document.getElementById("output").innerHTML =
    totalScore + " correct answers out of 10";

  if (totalScore <= 4) {
    msg =
      "The Unicorn is still waiting where you haven't found him. Please, try again";
  } else if (totalScore >= 5 && totalScore <= 7) {
    msg =
      "Well done! But the Unicorn is still hiding. Try to find him one more time.";
  } else {
    msg = "Great job! You are the best friend of Unicorns!!!";
  }
  document.getElementById("result-message").innerHTML = msg;
  document.getElementById("restart").style.display = "block";
});
//uncheck function for restart
function uncheck() {
  var elements = document.getElementsByTagName("input");

  for (var i = 0; i < elements.length; i++) {
    if (elements[i].type == "radio") {
      elements[i].checked = false;
    }
  }
}
