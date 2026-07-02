const form = document.querySelector(".form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const error0 = document.getElementById("error0");
const error1 = document.getElementById("error1");
const error2 = document.getElementById("error2");
var fieldset = document.querySelector("fieldset");

form.addEventListener("submit", (e) => {
    e.preventDefault()
  
  let valid = true;
 
   if (!checkName()) {
    valid = false;
  }
  if (!checkMessage()) {
    valid = false;
  }
  if (!checkEmail()) {
    valid = false;
  }
  if (valid) {
    form.classList.add("success");
    form.value="✓"
  }
});
name.addEventListener("input", checkName);

 function checkName() {
  if (name.value == "") {
    fieldset.classList.add("ok");
    error0.innerText = "Veuillez renseigner ce champ";
    error0.classList.add("error");
    return false;
  } else {
    error0.innerText = "";
    error0.classList.remove("error");
    return true;
  }
};

message.addEventListener("input", checkMessage);

function checkMessage() {
  if (message.value == "") {
    fieldset.classList.add("ok");
    error2.innerText = "Veuillez renseigner ce champ";
    error2.classList.add("error");
    return false;
  } else {
    error2.innerText = "";
    error2.classList.remove("error");
    return true;
  }
};

email.addEventListener("input", checkEmail);

function checkEmail() {
  const pattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,3}$/i;

  if (email.value == "") {
    fieldset.classList.add("ok");
    error1.innerText = "Veuillez renseigner ce champ";
    error1.classList.add("error");
    return false;
  } else if (!pattern.test(email.value)) {
    fieldset.classList.add("ok");
    error1.innerText = "Email invalide";
    error1.classList.add("error");
    return false;
  } else {
    error1.innerText = "";
    error1.classList.remove("error");
    return true;
  }
}
