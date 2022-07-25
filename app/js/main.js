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
let formDivs = document.querySelectorAll(".signUpForm div");

function hideFormElements() {
  formDivs.forEach(div => {
    div.classList.add("hidden");
  })
}

function showFormElement(elem) {
  elem.classList.remove("hidden");
  elem.classList.add("fadeInDown");
}

function setupAnimationEvents() {
  for(let i = 0; i < formDivs.length-1; i++) {
    formDivs[i].onclick = function() {
      showFormElement(formDivs[i+1]);
    }
  }
}

window.onload = function() {
  hideFormElements();
  setupAnimationEvents();
  showFormElement(formDivs[0]);
};
$('.close-popup').click( function() {
    $('.overlay').fadeOut();
  });
var yearSelect = document.querySelector('#year');
var monthSelect = document.querySelector('#month');
var daySelect = document.querySelector('#day');

function populateDays(month) {
    // delete the current set of <option> elements out of the
    // day <select>, ready for the next set to be injected
    while(daySelect.firstChild){
      daySelect.removeChild(daySelect.firstChild);
    }
  
    // Create variable to hold new number of days to inject
    var dayNum;
  
    // 31 or 30 days?
    if(month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
      dayNum = 31;
    } else if(month === 'April' || month === 'June' || month === 'September' || month === 'November') {
      dayNum = 30;
    } else {
    // If month is February, calculate whether it is a leap year or not
      var year = yearSelect.value;
      var leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
      dayNum = leap ? 29 : 28;
    }
  
    // inject the right number of new <option> elements into the day <select>
    for(i = 1; i <= dayNum; i++) {
      var option = document.createElement('option');
      option.textContent = i;
      daySelect.appendChild(option);
    }
  
    // if previous day has already been set, set daySelect's value
    // to that day, to avoid the day jumping back to 1 when you
    // change the year
    if(previousDay) {
      daySelect.value = previousDay;
  
      // If the previous day was set to a high number, say 31, and then
      // you chose a month with less total days in it (e.g. February),
      // this part of the code ensures that the highest day available
      // is selected, rather than showing a blank daySelect
      if(daySelect.value === "") {
        daySelect.value = previousDay - 1;
      }
  
      if(daySelect.value === "") {
        daySelect.value = previousDay - 2;
      }
  
      if(daySelect.value === "") {
        daySelect.value = previousDay - 3;
      }
    }
  }
  
  function populateYears() {
    // get this year as a number
    var date = new Date();
    var year = date.getFullYear();
  
    // Make this year, and the 100 years before it available in the year <select>
    for(var i = 0; i <= 100; i++) {
      var option = document.createElement('option');
      option.textContent = year-i;
      yearSelect.appendChild(option);
    }
  }

  // populate the days and years dynamically
  // (the months are always the same, therefore hardcoded)
  populateDays(monthSelect.value);
  populateYears();
// when the month or year <select> values are changed, rerun populateDays()
// in case the change affected the number of available days
yearSelect.onchange = function() {
    populateDays(monthSelect.value);
  }
  
  monthSelect.onchange = function() {
    populateDays(monthSelect.value);
  }
  
  //preserve day selection
  var previousDay;
  
  // update what day has been set to previously
  // see end of populateDays() for usage
  daySelect.onchange = function() {
    previousDay = daySelect.value;
  }

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