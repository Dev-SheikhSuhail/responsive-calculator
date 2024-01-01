let userInput = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let btnArray = Array.from(buttons);

btnArray.forEach((button) => {
  button.addEventListener("click", (btnClicked) => {
    if (btnClicked.target.innerHTML == "=") {
      userInput.value = eval(userInput.value);
    } else if (btnClicked.target.innerHTML == "AC") {
      userInput.value = "";
    } else if (btnClicked.target.innerHTML == "DEL") {
      userInput.value = userInput.value.substring(
        0,
        userInput.value.length - 1
      ); // Takes out last character from the string.
    } else {
      userInput.value += btnClicked.target.innerHTML;
    }
  });
});
