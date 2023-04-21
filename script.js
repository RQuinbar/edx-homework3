// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  //constants for password
  const symbolPool = "!@#$%^&*()_+";
  const lowercasePool = "abcdefghijklmnopqrstuvwxyz";
  const uppercasePool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersPool = "0123456789";
  
  //valid check vars
  var validLength = false;
  var validInput = false;

  //password chars to use
  var passwordCharSet = "";

  //password or invalid input
  var output = "";  

  //prompt user for password length and store it
  var length = prompt("Enter a number from 8 to 128 for password length.");

  //check if length is between 8 and 128
  if (length >= 8 && length <= 128) {
    validLength= true;
  }

  //check if they want to use lowercase letters and if so add it to chars to use
  var lowercase = confirm("Would you like to use lowercase letters?");
  if (lowercase) {
    passwordCharSet += lowercasePool;
  };

  //check if they want to use uppercase letters and if so add it to chars to use
  var uppercase= confirm("Would you like to use uppercase letters?");
  if (uppercase) {
    passwordCharSet += uppercasePool;
  };

  //check if they want to use symbols and if so add it to chars to use
  var symbols = confirm("Would you like to use symbols?");
  if (symbols) {
    passwordCharSet += symbolPool;
  };

  //check if they want to use numbers and if so add it to chars to use
  var number = confirm("Would you like to use numbers?");
  if (number) {
    passwordCharSet += numbersPool;
  };

  //check if they selected at least one type of character 
  if (lowercase || uppercase || symbols || number) {
    validInput = true
  }

  //check if they used a valid length and have at least one type of character
  if (validLength && validInput) {

    //create password for output from passwordCharSet
    for (let i = 0; i < length; i++) {
      output += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
    }

  //check if length is not valid but at least one char is selected
  } else if (!validLength && validInput) {
    output = "Please enter a number between 8 and 128.";

  //check if length is valid but no types of characters were selected
  } else if (validLength && !validInput) {
    output = "Please choose at least one type of character to use in your password.";

  //check if length was invalid and also if no types of characters were selected
  } else {
    output = "Please enter a number between 8 and 128 and choose at least one type of character to use in your password."
  }

  //return password or tell user their input was invalid
  return output;

}