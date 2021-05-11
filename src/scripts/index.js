// Clear the concole on every refresh
console.clear();

// object with appropiate functions according to their features
// const randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol,
// };

//selecting DOM elements
// The Viewbox where the result will be shown
const resultEl = document.getElementById("result");

// // checkbobes for respective options responsible to generate varies type of password
// const uppercaseEl = document.getElementById("uppercase");
// const lowercaseEl = document.getElementById("lowercase");
// const numberEl = document.getElementById("number");
// const symbolEl = document.getElementById("symbol");

// Button to generate the password
const generateBtn = document.getElementById("generate");

// Result viewbox container
const resultContainer = document.querySelector(".result");

// Button to copy the text
const copyBtn = document.getElementById("copy-btn");

// When Generate is clicked Password id generated.
generateBtn.addEventListener("click", () => {
  generatedPassword = true;
  resultEl.innerText = generatePassword();
});

// Function responsible to generate password and then returning it.
//function that generates random 30digits password
function generatePassword() {
  let generatedPassword = "";
  let availableCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (i = 1; i <= 30; i++) {
    let char = Math.floor(Math.random() * availableCharacters.length + 1);

    generatedPassword += availableCharacters.charAt(char);
  }

  return generatedPassword;
}

console.log("Your new password: " + generatePassword());

//copy to clipboard
// const copy = () => {
//   let text = document.querySelector(".userInput");
//   text.select();
//   document.execCommand("copy");
// };
// document.querySelector(".copyButton").addEventListener("click", copy);

copyBtn.addEventListener("click", () => {
  const textarea = document.createElement("textarea");
  const password = resultEl.innerText;
  if (!password || password == "click generate") {
    return;
  }
  textarea.value = password;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
});
