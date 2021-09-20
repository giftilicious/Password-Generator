// Assignment Code

// Arrays for the user imputs
let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = lower.toUpperCase();
let numbers = "0123456789";
let special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Defines generate button
let generateBtn = document.querySelector("#generate");


// Writes the password to the #password area in the html
function writePassword() {
  let password = generatePassword(); //must be defined
  let passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}
  
// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Prompts user for password criteria
function userPrompts(){
  let userChoice1 = prompt("How long is your password? (must be at least 8 characters)");
  if (userChoice1 < 8 || userChoice1 > 128){
    alert("Password must be between 8 to 128 characters long. Start again.");
  return
}
  let userChoice2 = confirm("Click OK if you want uppercase letters.");
  let userChoice3 = confirm("Click ok if you want lowercase letters.");
  let userChoice4 = confirm("Click ok if you want special characters.");
  let userChoice5=confirm("Click ok if you want numbers")

// Defines userChoices
  let userChoices={
    length:userChoice1,
    upper:userChoice2,
    lower:userChoice3,
    special:userChoice4,
    numbers:userChoice5
  }
  return userChoices;
}

function generatePassword() {
  let options = userPrompts();
  let finalCharacters="";

if(options.upper==true){
  finalCharacters=finalCharacters.concat(upper)
  console.log(finalCharacters)
}
if(options.lower==true){
  finalCharacters=finalCharacters.concat(lower)
}

if(options.special==true){
  finalCharacters=finalCharacters.concat(special)
}

if(options.numbers==true){
  finalCharacters=finalCharacters.concat(numbers)
}

let finalPassword = "";
  
for (let i = 0; i < options.length; i++) {
  let index = Math.floor(Math.random()* finalCharacters.length);
  finalPassword=finalPassword.concat(finalCharacters[index]);
}
  return finalPassword
}