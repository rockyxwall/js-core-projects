let eyeicon = document.getElementById("eye-close");
let input = document.getElementById("input");

eyeicon.onclick = onClick;

function onClick() {
  if (input.type == "password") {
    input.type = "text";
    eyeicon.src = "eye-icons/eye-open.png";
    eyeicon.style.filter =
      "invert(17%) sepia(97%) saturate(7494%) hue-rotate(0deg) brightness(95%) contrast(105%)";
  } else {
    input.type = "password";
    eyeicon.src = "eye-icons/eye-close.png";
    eyeicon.style.filter =
      "invert(34%) sepia(4%) saturate(1%) hue-rotate(180deg) brightness(89%) contrast(89%)";
  }
}
