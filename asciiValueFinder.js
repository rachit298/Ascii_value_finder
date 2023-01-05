const value = document.querySelector("span");
const keyBoardValue = document.querySelector("kbd");
const inputVal = document.getElementById("inputVal");

document.addEventListener("keydown", function (event) {
  const key = event.key;
  const code = k.length == 1 ? k.charCodeAt(0) : event.keyCode;
  value.textContent = code;
  keyBoardValue.textContent = key;
  inputVal.value = "";
});
