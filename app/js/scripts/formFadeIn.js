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