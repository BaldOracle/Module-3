// Assignment Code
var generateBtn = document.querySelector("#generate");

//


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Create confirm boxes https://www.w3schools.com/jsref/met_win_confirm.asp//


/* Prompt box to get numbers https://stackoverflow.com/questions/51578629/how-can-i-put-an-input-in-the-alert-box */


function generatePassword() { 
 

  // code for length of password
  var total = prompt("How many Characters?", "Enter A Number 8 - 128");
  if (total < 8) {
    alert("Too few Chacters");
  } else if (total>128) {
    alert("Too many Characters");
  } 

  //code for lowercase console log to confirm the answer not needed in final code.
  var lCase = confirm("Should password have lowercase?")

   //code for upper case 
  var uCase = confirm("Should password for uppercase?")

  //code for numeric
  var nCase = confirm("Should password have numbers?")

  // code for Special characters
  var sCase = confirm("Should password have special characters?")

  // cod to verify there is at least one option selected.  
  if (!lCase && !uCase && !nCase && !sCase) {
    alert("Need to have select at least one character type!");
  }


  //https://stackoverflow.com/questions/71084913/make-an-array-with-every-character-on-keyboard
  let numChar = [];

  for (let i=48; i<58; i++) {
    numChar.push( String.fromCharCode(i) );
  }

  //array for capital leters
  var CapLet = [];

  for (let i=65; i<91; i++) {
    CapLet.push( String.fromCharCode(i) );
  }

  //array for lower case letters.
  let LowLet = [];

  for (let i=97; i<123; i++) {
    LowLet.push( String.fromCharCode(i) );
  }
  
  let symbol = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "]","^","_","`","{","|","}","~", "\""]

  //spread operator create pool of characters for password  https://stackoverflow.com/questions/16232915/how-to-copy-all-items-from-one-array-into-another
  var pool = []

  if (lCase) {
    pool=[...LowLet,...pool]
  }

  if (uCase) {
    pool=[...CapLet,...pool]
  }

  if (nCase) {
    pool=[...numChar,...pool]
  }

  if (sCase) {
    pool = [...symbol,...pool]
  }

  //create passwoed from the pool
  let password = "";

  for (i=0; i<total; i++) {
    password += pool[Math.floor(Math.random() * pool.length)]
  }

  if (total < 8) {
    password = "Not enough Characters.";
  } 

  if (total>128) {
    password = "Too many Character selected.";
  } 

  if (!lCase && !uCase && !nCase && !sCase) {
    password = "Need to have select at least one character type!"
  }

  return(password)
  
}
