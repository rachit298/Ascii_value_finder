const value = document.querySelector("span");
const keyBoardValue = document.querySelector("kbd");

document.addEventListener("keydown", function (event) {
  const k = event.key;
  const code = k.length == 1 ? k.charCodeAt(0) : event.keyCode;
  value.textContent = code;
  keyBoardValue.textContent = k;
});
