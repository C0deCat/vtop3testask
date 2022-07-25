let passwordInput = document.getElementById("password");
let passwordErrorMessage = document.getElementById("passwordErrorMessage");

function validatePassword() {
  let val = passwordInput.value;
  let isValid;

  if (val.match(/[a-z]/g) && val.match(/[A-Z]/g) && val.match(/[0-9]/g)
  && val.length >= 8) {
    isValid = true;
  }
  else {
    isValid = false;
  }

  if (isValid && passwordInput.classList.contains("inputError")) {
    passwordInput.classList.remove("inputError");
    passwordErrorMessage.innerHTML = "";
  }
  else if (!isValid && !passwordInput.classList.contains("inputError")) {
    passwordInput.classList.add("inputError");
    passwordErrorMessage.innerHTML = "Пароль должен содержать от 8 символов, заглавные и строчные буквы";
  }
  
  return isValid;
}

passwordInput.onkeyup = validatePassword;