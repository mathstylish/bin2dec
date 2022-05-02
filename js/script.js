function binToDec(binary) {
  let decimal = 0;
  let size = binary.length - 1;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[i]) * (2 ** size);
    size--;
  }
  return decimal;
}

function validate(input) {
  const valid = /^[0-1]+$/;
  return valid.test(input);
}

const binInput = document.getElementById("bin");
const decOutput = document.getElementById("dec");
const clearButton = document.getElementById("btn-clear");

binInput.addEventListener("input", () => {
  if (validate(binInput.value)) {
    if (decOutput.style.color == "red") {
      decOutput.style.color = "inherit";
    }
    decOutput.value = binToDec(binInput.value);
  } else {
    if (binInput.value == "") {
      decOutput.value = "";
      decOutput.style.color = "inherit";
    } else {
      decOutput.value = "Must be 0 or 1";
      decOutput.style.color = "red";
    }
  }
});

clearButton.addEventListener("click", () => {
  if (decOutput.style.color == "red") {
    decOutput.style.color = "inherit";
  }
  binInput.value = "";
  decOutput.value = "";
});