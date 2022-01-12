// Generate a password
var length = 0;
var lowercase = "";
var uppercase = "";
var numeric = "";
var special = "";

function getInput() {
  // Continue prompting until a valid input is received
  while(length < 8 || length > 128) {
    length = window.prompt("How long do you want your password to be? (8-128)");
  }
  while(lowercase != "Y" && lowercase != "N") {
    lowercase = window.prompt("Do you want to include lowercase characters? (Y/N)");
  }
  while(uppercase != "Y" && uppercase != "N") {
    uppercase = window.prompt("Do you want to include uppercase characters? (Y/N)");
  }
  while(numeric != "Y" && numeric != "N") {
    numeric = window.prompt("Do you want to include numeric characters? (Y/N)");
  }
  while(special != "Y" && special != "N") {
    special = window.prompt("Do you want to include special characters? (Y/N)");
  }
  // Make sure the user has selected "Y" at least once - otherwise, restart
  if(lowercase == "N" && uppercase == "N" && numeric == "N" && special == "N") {
    window.alert("Error! You didn't include any characters in your set.  Try again.");
    getInput();
  }
}

function generateCharSet() {
  charSet = [];
  // Automate generation of valid character set using ASCII values
  if(lowercase == "Y") {
    for(var i = 97; i <= 122; i++) {
      charSet.push(String.fromCharCode(i));
    }
  }
  if(uppercase == "Y") {
    for(var i = 65; i <= 90; i++) {
      charSet.push(String.fromCharCode(i));
    }
  }
  if(numeric == "Y") {
    for(var i = 48; i <= 57; i++) {
      charSet.push(String.fromCharCode(i));
    }
  }
  if(special == "Y") {
    for(var i = 33; i <= 47; i++) {
      charSet.push(String.fromCharCode(i));
    }
    for(var i = 58; i <= 64; i++) {
      charSet.push(String.fromCharCode(i));
    }
    for(var i = 91; i <= 96; i++) {
      charSet.push(String.fromCharCode(i));
    }
    charSet.push("{");
    charSet.push("|");
    charSet.push("}");
    charSet.push("~");
  }
}

function generatePassword() {
  getInput();
  generateCharSet();
  // Generate password
  var finalPassword = "";
  for(var i = 0; i < length; i++) {
    var randValue = Math.floor(Math.random() * charSet.length);
    finalPassword += charSet[randValue];
  }
  return finalPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
