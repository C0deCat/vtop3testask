function validateForm() {
    let firstNameInput = document.querySelector("#firstName");
    let lastNameInput = document.querySelector("#lastName");
    let isValid = firstNameInput.value.length > 0 && lastNameInput.value.length > 0 && validateEmail() && validatePassword() && confirmPassword();
    console.log(isValid);
    return isValid;
  }
  
  document.querySelector(".signUpForm__button").onclick = function() {
    if (!validateForm()) {
      $(".signUpForm__button").effect("shake", {distance: 4});
    }
    else {
      document.querySelectorAll("select").forEach(elem => elem.querySelector("option").selected = "selected");
      document.querySelectorAll("input").forEach(elem => elem.value = "");
      $('.overlay').fadeIn();
    }
  };