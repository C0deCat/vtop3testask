let confirmPasswordInput = document.getElementById("confirmPassword");
let confirmPasswordErrorMessage = document.getElementById("confirmPasswordErrorMessage");

function confirmPassword() {
  let isValid = passwordInput.value == confirmPasswordInput.value;
  if (isValid && confirmPasswordInput.classList.contains("inputError")) {
      confirmPasswordInput.classList.remove("inputError");
      confirmPasswordErrorMessage.innerHTML = "";
  }
  else if (!isValid && !confirmPasswordInput.classList.contains("inputError")) {
      confirmPasswordInput.classList.add("inputError");
      confirmPasswordErrorMessage.innerHTML = "Введенные пароли должны совпадать!";
  }
  return isValid;
}

confirmPasswordInput.onkeyup = confirmPassword;