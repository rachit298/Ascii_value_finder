const value = document.querySelector("span");
const keyBoardValue = document.querySelector("kbd");
const inputVal = document.getElementById("inputVal");

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const code = key.charCodeAt(0);
  value.textContent = code;
  keyBoardValue.textContent = key;
  inputVal.value = "";
});
