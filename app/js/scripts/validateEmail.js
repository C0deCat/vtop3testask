let emailInput = document.getElementById("email");

function validateEmail() {
  let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = emailInput.value.match(validRegex);
  if (isValid && emailInput.classList.contains("inputError")) {
      emailInput.classList.remove("inputError");
      emailInput.classList.add("checked");
  } 
  else if (!isValid && !emailInput.classList.contains("inputError")) {
      emailInput.classList.add("inputError");
      emailInput.classList.remove("checked");
  }
  return isValid;
}

emailInput.onchange = validateEmail;