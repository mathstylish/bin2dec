function binToDec(binary) {
  let decimal = 0;
  let size = binary.length - 1;
  for (let i = 0; i < binary.length; i++) {
    decimal += parseInt(binary[i]) * (2 ** size);
    size--;
  }
  return decimal;
}

const binInput = document.getElementById("bin");
const decOutput = document.getElementById("dec");
const clearButton = document.getElementById("btn-clear");

binInput.addEventListener("input", () => {
  decOutput.value = binToDec(binInput.value);
});

clearButton.addEventListener("click", () => { 
  binInput.value = "";
  decOutput.value = "";
});