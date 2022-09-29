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
    "Nice to meet you " +
    player +
    "! Press the button to start playing with me";
}

//score calculating

const btn = document.querySelector("#btn");
const radioButtons = document.querySelectorAll('input[name="answers1"]');
btn.addEventListener("click", () => {
  let q1Value;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      q1Value = radioButton.value;
      break;
    }
  }
  let q2Value;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      q2Value = radioButton.value;
      break;
    }
  }
  let q10Value;
  for (const radioButton of radioButtons) {
    if (radioButton.checked) {
      q10Value = radioButton.value;
      break;
    }
  }
  let totalScore = Number(q1Value) + Number(q2Value) + Number(q10Value);

  if (isNaN(totalScore)) {
    msg = "0 correct answers out of 10";
  } else {
    msg = totalScore + " correct answers out of 10";
  }
  document.getElementById("output").innerHTML = msg;

  if (isNaN(totalScore)) {
    msg2 = "The Unicorn is sad, you didn't play with him";
  } else if (totalScore <= 4) {
    msg2 =
      "The Unicorn is still waiting where you haven't found him. Please, try again";
  } else if (totalScore >= 5 && total <= 7) {
    msg2 =
      "Well done! But the Unicorn is still hiding. Try to find him one more time.";
  } else {
    msg2 = "Great job! You are the best friend of Unicorns!!!";
  }
  document.getElementById("result-message").innerHTML = msg2;
  document.getElementById("restart").style.display = "block";
});

function uncheck() {
  element.querySelectorAll(input).checked = false;
  // document.querySelectorAll('input[name="answers1"]').checked = false;
}
