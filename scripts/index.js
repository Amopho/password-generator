function generatePassword() {
  let inputPass = "";
  let availableCharacters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
    "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  for (i = 1; i <= 30; i++) {
    let char = Math.floor(Math.random() * availableCharacters.length + 1);

    inputPass += availableCharacters.charAt(char);
  }

  return inputPass;
}

console.log("Your new password: " + generatePassword());

const copy = () => {
  let text = document.querySelector(".userInput");
  text.select();
  document.execCommand("copy");
};
document.querySelector(".copyButton").addEventListener("click", copy);

// form {

// }
