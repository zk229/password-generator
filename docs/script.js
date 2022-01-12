// Generate a password
var input = {
  length: 0,
  lowercase: "",
  uppercase: "",
  numeric: "",
  special: "",
  valid: false
}
var charSet = [];

function getInput() {
  // Continue prompting until a valid input is received
  while(input.length < 8 || input.length > 128) {
    input.length = window.prompt("How long do you want your password to be? (8-128)");
  }
  while(input.lowercase != "Y" && input.lowercase != "N") {
    input.lowercase = window.prompt("Do you want to include lowercase characters? (Y/N)");
  }
  while(input.uppercase != "Y" && input.uppercase != "N") {
    input.uppercase = window.prompt("Do you want to include uppercase characters? (Y/N)");
  }
  while(input.numeric != "Y" && input.numeric != "N") {
    input.numeric = window.prompt("Do you want to include numeric characters? (Y/N)");
  }
  while(input.special != "Y" && input.special != "N") {
    input.special = window.prompt("Do you want to include special characters? (Y/N)");
  }
  input.valid = true;
  // Make sure the user has selected "Y" at least once - otherwise, restart
  if(input.lowercase == "N" && input.uppercase == "N" && input.numeric == "N" && input.special == "N") {
    window.alert("Error! You didn't include any characters in your set.  Try again.");
    input.valid = false;
    input.lowercase = "";
    input.uppercase = "";
    input.numeric = "";
    input.special = "";
  }
  return;
}

function generateCharSet() {
  charSet = [];
  // Automate generation of valid character set using ASCII values
  if(input.lowercase == "Y") {
    for(var i = 97; i <= 122; i++) {
      charSet.push(String.fromCharCode(i));
    }
  }
  if(input.uppercase == "Y") {
    for(var i = 65; i <= 90; i++) {
      charSet.push(String.fromCharCode(i));
    }
  }
  if(input.numeric == "Y") {
    for(var i = 48; i <= 57; i++) {
      charSet.push(String.fromCharCode(i));
    }
  }
  if(input.special == "Y") {
    var specialChars = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    charSet = charSet.concat(specialChars.split(''));
  }
}

function generatePassword() {
  while(!input.valid) {
    getInput();
  }
  generateCharSet();
  // Generate password
  var finalPassword = "";
  for(var i = 0; i < input.length; i++) {
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
