function renderResult(result) {
  document.querySelector("#result-container").textContent = result;
}

function calculate(buttonName) {
  const firstNumber = Number(document.querySelector("#first-number").value);
  const secondNumber = Number(document.querySelector("#second-number").value);

  switch (buttonName) {
    case "sum":
      renderResult(firstNumber + secondNumber);
      break;
    case "subtract":
      renderResult(firstNumber - secondNumber);
      break;
    case "multiply":
      renderResult(firstNumber * secondNumber);
      break;
    case "divide":
      renderResult(firstNumber / secondNumber);
      break;
    case "remainder":
      renderResult(firstNumber % secondNumber);
      break;
    case "clean":
      document.querySelector("#first-number").value = null;
      document.querySelector("#second-number").value = null;
      renderResult("");
      break;
    default:
      break;
  }
}

document.querySelector("#actions").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    calculate(event.target.name);
  }
});
