const textInput = document.querySelector("#validation-input");
const textLength = Number(textInput.getAttribute("data-length"));
// console.log(inputValue.length);

// const lengthInput = document.querySelector("")
textInput.addEventListener("blur", (event) => {
  const inputValue = event.currentTarget.value;


    if (inputValue.length === textLength) {
       textInput.classList.remove("invalid");
      textInput.classList.add("valid");
  } else {
      textInput.classList.remove("valid");
      textInput.classList.add("invalid");
  }
});
