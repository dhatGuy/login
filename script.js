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
  let usernameRegex = /^[a-zA-Z][0-9A-Za-z]+$/;
  let firstChar = username.value.charAt(0);

  // if(username.value.match(usernameRegex)){
  //   alert('ok')
  // }
  
  // validate username
  if (username.value == "") {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username is required";
    username.focus();
    return false;
  }
  // validate username
  if (username.value.length < 3) {
    username.style.border = "1px solid red";
    document.getElementById('username_div').style.color = "red";
    name_error.textContent = "Username must be at least 3 characters";
    username.focus();
    return false;
  }
  if (username.value.match(usernameRegex) == null) {
      username.style.border = "1px solid red";
      document.getElementById('username_div').style.color = "red";
      name_error.textContent = "Username must be start with a letter";
      username.focus();
      return false;
    }
    
    // validate password
    if (password.value == "") {
      password.style.border = "1px solid red";
      document.getElementById('password_div').style.color = "red";
      password_error.textContent = "Password is required";
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