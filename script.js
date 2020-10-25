// Assignment Code
var generateBtn = document.querySelector("#generate");
var passLength;
var isLowerCase = false;
var isUpperCase = false;
var isNumericCase = false;
var isSpecialCase = false;

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  askUser();
  var arrayList = [];
  var char;
  var fullPass = "";
  if (isUpperCase) {
    arrayList.push("lower");
  }
  if (isLowerCase) {
    arrayList.push("upper");
  }
  if (isNumericCase) {
    arrayList.push("numeric");
  }
  if (isSpecialCase) {
    arrayList.push("special");
  }
  for (var i = 0; i < passLength; i++) {
    char = randomChar[
      arrayList[Math.floor(Math.random() * arrayList.length)]
    ]();
    fullPass += char;
  }
  return fullPass;
}

// Function generator
var randomChar = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  numeric: getRandomNumericCase,
  special: getRandomSpecialChar,
};

function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumericCase() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSpecialChar() {
  return String.fromCharCode(Math.floor(Math.random() * 14) + 33);
}

function askUser() {
  passLength = prompt(
    "Type a number between 8 and 128 that will represent the length of you password!"
  );
  isLowerCase = confirm(
    "Do you want to have LOWER case characters in you password?"
  );
  isUpperCase = confirm(
    "Do you want to have UPPER case characters in you password?"
  );
  isNumericCase = confirm(
    "Do you want to have NUMERIC characters in you password?"
  );
  isSpecialCase = confirm(
    "Do you want to have SPECIAL characters in you password?"
  );
}
