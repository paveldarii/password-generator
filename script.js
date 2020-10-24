// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength= prompt("Type a number between 8 and 128 that will represent the length of you password!");
var isLowerCase = confirm("Do you want to have LOWER case characters in you password?");
var isUpperCase = confirm("Do you want to have UPPER case characters in you password?");
var isNumericCase = confirm("Do you want to have NUMERIC characters in you password?");
var isSpecialCase = confirm("Do you want to have SPECIAL characters in you password?");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
