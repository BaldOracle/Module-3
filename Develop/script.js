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
  console.log(total)
  if (total < 8) {
    alert("Too few Chacters");
  } else if (total>128) {
    alert("Too many Characters");
  } 


  //code for lowercase console log to confirm the answer not needed in final code.
  var lCase = confirm("Should password have lowercase?")
   console.log(lCase)
   

   //code for upper case 
  var uCase = confirm("Should password for uppercase?")
    console.log(uCase)

  //code for numeric
  var nCase = confirm("Should password have numbers?")
    console.log(nCase)

  // code for Special characters
  var sCase = confirm("Should password have special characters?")
    console.log(sCase)

  // cod to verify there is at least one option selected.  
  if (!lCase && !uCase && !nCase && !sCase) {
    alert("Need to have select at least one character type!");
    //console.log("Need to have at lease one")
  }



  //random number generator https://www.w3schools.com/js/js_random.asp
  //var number = math.floor(math.random()*10)
  var length = [];
  for (let i = 0; i < total; i++) {
    length[i] = Math.floor(Math.random()*10)
  }
  console.log(length)

  //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  //   let r = (Math.random() + 1).toString(36).substring(7);
  // console.log("random", r);


  //https://stackoverflow.com/questions/71084913/make-an-array-with-every-character-on-keyboard
  // let characters = [];

  // for (let i=32; i<127; i++)
  //   characters.push( String.fromCharCode(i) );

  //   console.log(characters)

  //array for capital leters
  let CapLet = [];

  for (let i=65; i<91; i++) {
    CapLet.push( String.fromCharCode(i) );

    console.log(CapLet)
  }

  //array for lower case letters.
  let LowLet = [];

  for (let i=97; i<123; i++) {
    LowLet.push( String.fromCharCode(i) );

    console.log(LowLet)
  }
  
  let symbol = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[", "]","^","_","`","{","|","}","~", "\""]

  console.log(symbol)

}


// console.log(total)

