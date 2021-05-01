const copy = () => {
  let text = document.querySelector(".userInput");
  text.select();
  document.execCommand("copy");
};
document.querySelector(".copyButton").addEventListener("click", copy);
