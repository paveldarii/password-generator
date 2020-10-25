// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateClipboardBtn = document.querySelector("#clipboard");
var passLength;
var isLowerCase;
var isUpperCase;
var isNumericCase;
var isSpecialCase;
var charTypeList;
var generatedPass;
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateClipboardBtn.addEventListener("click", copyGeneratedPassword);

function copyGeneratedPassword() {
  const textarea = document.createElement("textarea");
  const password = generatedPass;
  if (!password) {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  alert("Password copied to Clipboard");
}

function generatePassword() {
  askUser();
  checkCharType();
  return createPassword();
}

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
  while (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert("Enter a number between 8 and 128!");
    passLength = prompt(
      "Type a number between 8 and 128 that will represent the length of you password!"
    );
  }
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
// I use the same name as the name of the randomChar object elements and I add the into an array, so the array will have just the elements that the user chose, and this
// new created array will be used to create the password that user is expecting
function checkCharType() {
  charTypeList = [];
  if (isUpperCase) {
    charTypeList.push("lower");
  }
  if (isLowerCase) {
    charTypeList.push("upper");
  }
  if (isNumericCase) {
    charTypeList.push("numeric");
  }
  if (isSpecialCase) {
    charTypeList.push("special");
  }
  return charTypeList;
}

function createPassword() {
  var char;
  generatedPass = "";
  for (var i = 0; i < passLength; i++) {
    // the purpose of "if" use here is to have at least one character of the type which user chose, and after this, the program will randomly chose other characters
    if (i === 0 && i < charTypeList.length) {
      char = randomChar[charTypeList[i]]();
    } else if (i === 1 && i < charTypeList.length) {
      char = randomChar[charTypeList[i]]();
    } else if (i === 2 && i < charTypeList.length) {
      char = randomChar[charTypeList[i]]();
    } else if (i === 3 && i < charTypeList.length) {
      char = randomChar[charTypeList[i]]();
    } else {
      char = randomChar[
        charTypeList[Math.floor(Math.random() * charTypeList.length)]
      ]();
    }
    generatedPass += char;
  }
  return generatedPass;
}

// Function generator
var randomChar = {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  numeric: getRandomNumericCase,
  special: getRandomSpecialChar,
};
