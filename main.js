const display = document.querySelector("#display");
const buttonEle = document.querySelectorAll(".buttons button");

// Add click event listeners to buttons
buttonEle.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.id === "clear") {
      display.innerText = "";
    } else if (item.id === "backspace") {
      display.innerText = display.innerText.slice(0, -1);
    } else if (item.id === "equal") {
      if (display.innerText === "") {
        display.innerText = "Empty!";
        setTimeout(() => (display.innerText = ""), 2000);
      } else {
        try {
          display.innerText = evaluateExpression(display.innerText);
        } catch (error) {
          display.innerText = "Error!";
          setTimeout(() => (display.innerText = ""), 2000);
        }
      }
    } else {
      display.innerText += item.id;
    }
  });
});

// A safe function to evaluate mathematical expressions

// Toggle theme button
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");

themeToggleBtn.addEventListener("click", () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
});
