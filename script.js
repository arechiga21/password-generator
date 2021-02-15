// Assignment code here
var numberCharacters = [
  "0123456789"
];
var upperCaseCharacters = [
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];
var lowerCaseCharacters = [
  "abcdefghijklmnopqrstuvwxyz"
];
var specialCharacters = [
  "!@#$%^&*()_--[]{},.<>\\"
];

function generatePassword() {
  var passwordCharacters = "";

  var hasNumbers = window.confirm("Would you like to include numbers? If yes click OK.");
  if (hasNumbers) {
    passwordCharacters += numberCharacters;
  };

  var hasUpperCase = window.confirm("Would you like to include upper case letters? If yes click OK.");
  if (hasUpperCase) {
    passwordCharacters += upperCaseCharacters;
  };

  var hasLowerCase = window.confirm("Would you like to include lower case letters? If yes click OK.");
  if (hasLowerCase) {
    passwordCharacters += lowerCaseCharacters;
    
  };

  var hasSpecial = window.confirm("Would you like to include special characters? If yes click OK.");
  if (hasSpecial) {
    passwordCharacters += specialCharacters;
  };

  var length = window.prompt("How many characters would you like your password to have from 8-128 characters?");

if (length < 8) {
  window.alert("Your password length must be a minimum of 8 characters");

  return;
};

if (length > 128) {
  window.alert("Your password length must be a maximum of 128 characters");
  
  return;
};

if (isNaN(length) === true) {
  window.alert("Please provide length as a number")

  return;
};

if (hasSpecial == false && hasNumbers == false && hasUpperCase == false && hasLowerCase == false) {
  window.alert("Please choose at least one the options")

  return;
};

var password = "";
for (let i = 0; i < length; i++) {
  password += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)]
};
return password;
};



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
