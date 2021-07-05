const input = document.querySelector("#input");
const calculateBtn = document.querySelector(".calculate");
const resetBtn = document.querySelector(".reset");
const resultDiv = document.querySelector(".result");

calculateBtn.addEventListener("click", () => {
  clearDiv();
  let validate = validateInput();
  let h3 = document.createElement("h3");
  h3.innerText = validate;
  resultDiv.appendChild(h3);
});

function validateInput() {
  let currentYear = new Date().getFullYear();
  let result = (currentYear - input.value);
  let finalResult = Number(result);
  if (input.value === "") {
    resultDiv.classList.add("error");
    return "Input field mustn't be empty!";
  } else if (isNaN(finalResult)) {
    resultDiv.classList.add("error");
    return `Input value not supported!`;
  } else {
    resultDiv.classList.add("success");
    return `You are ${finalResult} years old!`;
  }
}

function clearDiv() {
  resultDiv.innerText = "";
  resultDiv.classList.remove("error");
  resultDiv.classList.remove("success");
}

resetBtn.addEventListener("click", () => {
  input.value = '';
  clearDiv();
});
