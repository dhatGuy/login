// SELECTING ALL TEXT ELEMENTS
var username = document.forms.vform.username;
var password = document.forms.vform.password;
// SELECTING ALL ERROR DISPLAY ELEMENTS
var name_error = document.querySelector('.name_error');
var password_error = document.querySelector('.password_error');
// SETTING ALL EVENT LISTENERS
username.addEventListener('blur', nameVerify, true);
password.addEventListener('blur', passwordVerify, true);
// validation function
function Validate() {
  //regex conditions
  let usernameRegex = /^[a-zA-Z][0-9A-Za-z]+$/;
  let passwordRegex = /[A-Z].*\d|\d.*[A-Z]/;
  // validate username if empty
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username if less than 3 characters
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }
  //validate username if character greater than 30
  if (username.value.length > 30) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is more than 30 characters";
    username.focus();
    return false;
  }
  //validate username if it starts with a letter
  if (username.value.match(usernameRegex) == null) {
      username.style.border = "1px solid red";
      document.getElementById('username_div').style.color = "red";
      name_error.textContent = "Username must be start with a letter with no spaces";
      username.focus();
      return false;
    }
     // validate password if it empty
    if (password.value == "") {
      password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password is required";
      password.focus();
      return false;
    }
    // validate password if characters less than 8
    if (password.value.length < 8) {
      password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password must be more than 8 characters";
      password.focus();
      return false;
    }
    // validate password if it contains an uppercase letter and a digit
    if (password.value.match(passwordRegex) == null) {
      password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password must contain atleast an uppercase and a digit";
      password.focus();
      return false;
    }
  }
  // event handler functions
  function nameVerify() {
    if (username.value != "") {
   username.style.border = "1px solid #5e6e66";
   document.getElementById('username_div').style.color = "#5e6e66";
   name_error.innerHTML = "";
   return true;
  }
}
function passwordVerify() {
  if (password.value != "") {
  	password.style.border = "1px solid #5e6e66";
  	document.getElementById('password_div').style.color = "#5e6e66";
  	password_error.innerHTML = "";
      return true;
  }
}